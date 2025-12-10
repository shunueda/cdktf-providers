// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceSensorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#delete_mode DeviceSensor#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#device DeviceSensor#device}
  */
  readonly device?: string;
  /**
  * Protocol Filter List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_lists_cdp DeviceSensor#filter_lists_cdp}
  */
  readonly filterListsCdp?: DeviceSensorFilterListsCdp[] | cdktf.IResolvable;
  /**
  * Protocol Filter List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_lists_dhcp DeviceSensor#filter_lists_dhcp}
  */
  readonly filterListsDhcp?: DeviceSensorFilterListsDhcp[] | cdktf.IResolvable;
  /**
  * Protocol Filter List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_lists_lldp DeviceSensor#filter_lists_lldp}
  */
  readonly filterListsLldp?: DeviceSensorFilterListsLldp[] | cdktf.IResolvable;
  /**
  * Protocol Filter Spec list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_spec_cdp_excludes DeviceSensor#filter_spec_cdp_excludes}
  */
  readonly filterSpecCdpExcludes?: DeviceSensorFilterSpecCdpExcludes[] | cdktf.IResolvable;
  /**
  * Protocol Filter Spec list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_spec_cdp_includes DeviceSensor#filter_spec_cdp_includes}
  */
  readonly filterSpecCdpIncludes?: DeviceSensorFilterSpecCdpIncludes[] | cdktf.IResolvable;
  /**
  * Protocol Filter Spec list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_spec_dhcp_excludes DeviceSensor#filter_spec_dhcp_excludes}
  */
  readonly filterSpecDhcpExcludes?: DeviceSensorFilterSpecDhcpExcludes[] | cdktf.IResolvable;
  /**
  * Protocol Filter Spec list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_spec_dhcp_includes DeviceSensor#filter_spec_dhcp_includes}
  */
  readonly filterSpecDhcpIncludes?: DeviceSensorFilterSpecDhcpIncludes[] | cdktf.IResolvable;
  /**
  * Protocol Filter Spec list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_spec_lldp_excludes DeviceSensor#filter_spec_lldp_excludes}
  */
  readonly filterSpecLldpExcludes?: DeviceSensorFilterSpecLldpExcludes[] | cdktf.IResolvable;
  /**
  * Protocol Filter Spec list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#filter_spec_lldp_includes DeviceSensor#filter_spec_lldp_includes}
  */
  readonly filterSpecLldpIncludes?: DeviceSensorFilterSpecLldpIncludes[] | cdktf.IResolvable;
  /**
  * Trigger identity update when TLVs are added/modified/removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#notify_all_changes DeviceSensor#notify_all_changes}
  */
  readonly notifyAllChanges?: boolean | cdktf.IResolvable;
}
export interface DeviceSensorFilterListsCdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
  /**
  * Address Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_address_type DeviceSensor#tlv_name_address_type}
  */
  readonly tlvNameAddressType?: boolean | cdktf.IResolvable;
  /**
  * Capabilities Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_capabilities_type DeviceSensor#tlv_name_capabilities_type}
  */
  readonly tlvNameCapabilitiesType?: boolean | cdktf.IResolvable;
  /**
  * Device Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_device_name DeviceSensor#tlv_name_device_name}
  */
  readonly tlvNameDeviceName?: boolean | cdktf.IResolvable;
  /**
  * Platform Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_platform_type DeviceSensor#tlv_name_platform_type}
  */
  readonly tlvNamePlatformType?: boolean | cdktf.IResolvable;
  /**
  * Port Id type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_port_id_type DeviceSensor#tlv_name_port_id_type}
  */
  readonly tlvNamePortIdType?: boolean | cdktf.IResolvable;
}

export function deviceSensorFilterListsCdpToTerraform(struct?: DeviceSensorFilterListsCdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tlv_name_address_type: cdktf.booleanToTerraform(struct!.tlvNameAddressType),
    tlv_name_capabilities_type: cdktf.booleanToTerraform(struct!.tlvNameCapabilitiesType),
    tlv_name_device_name: cdktf.booleanToTerraform(struct!.tlvNameDeviceName),
    tlv_name_platform_type: cdktf.booleanToTerraform(struct!.tlvNamePlatformType),
    tlv_name_port_id_type: cdktf.booleanToTerraform(struct!.tlvNamePortIdType),
  }
}


export function deviceSensorFilterListsCdpToHclTerraform(struct?: DeviceSensorFilterListsCdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tlv_name_address_type: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNameAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_capabilities_type: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNameCapabilitiesType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_device_name: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNameDeviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_platform_type: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNamePlatformType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_port_id_type: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNamePortIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterListsCdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterListsCdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tlvNameAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNameAddressType = this._tlvNameAddressType;
    }
    if (this._tlvNameCapabilitiesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNameCapabilitiesType = this._tlvNameCapabilitiesType;
    }
    if (this._tlvNameDeviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNameDeviceName = this._tlvNameDeviceName;
    }
    if (this._tlvNamePlatformType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNamePlatformType = this._tlvNamePlatformType;
    }
    if (this._tlvNamePortIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNamePortIdType = this._tlvNamePortIdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterListsCdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tlvNameAddressType = undefined;
      this._tlvNameCapabilitiesType = undefined;
      this._tlvNameDeviceName = undefined;
      this._tlvNamePlatformType = undefined;
      this._tlvNamePortIdType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tlvNameAddressType = value.tlvNameAddressType;
      this._tlvNameCapabilitiesType = value.tlvNameCapabilitiesType;
      this._tlvNameDeviceName = value.tlvNameDeviceName;
      this._tlvNamePlatformType = value.tlvNamePlatformType;
      this._tlvNamePortIdType = value.tlvNamePortIdType;
    }
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

  // tlv_name_address_type - computed: false, optional: true, required: false
  private _tlvNameAddressType?: boolean | cdktf.IResolvable; 
  public get tlvNameAddressType() {
    return this.getBooleanAttribute('tlv_name_address_type');
  }
  public set tlvNameAddressType(value: boolean | cdktf.IResolvable) {
    this._tlvNameAddressType = value;
  }
  public resetTlvNameAddressType() {
    this._tlvNameAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNameAddressTypeInput() {
    return this._tlvNameAddressType;
  }

  // tlv_name_capabilities_type - computed: false, optional: true, required: false
  private _tlvNameCapabilitiesType?: boolean | cdktf.IResolvable; 
  public get tlvNameCapabilitiesType() {
    return this.getBooleanAttribute('tlv_name_capabilities_type');
  }
  public set tlvNameCapabilitiesType(value: boolean | cdktf.IResolvable) {
    this._tlvNameCapabilitiesType = value;
  }
  public resetTlvNameCapabilitiesType() {
    this._tlvNameCapabilitiesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNameCapabilitiesTypeInput() {
    return this._tlvNameCapabilitiesType;
  }

  // tlv_name_device_name - computed: false, optional: true, required: false
  private _tlvNameDeviceName?: boolean | cdktf.IResolvable; 
  public get tlvNameDeviceName() {
    return this.getBooleanAttribute('tlv_name_device_name');
  }
  public set tlvNameDeviceName(value: boolean | cdktf.IResolvable) {
    this._tlvNameDeviceName = value;
  }
  public resetTlvNameDeviceName() {
    this._tlvNameDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNameDeviceNameInput() {
    return this._tlvNameDeviceName;
  }

  // tlv_name_platform_type - computed: false, optional: true, required: false
  private _tlvNamePlatformType?: boolean | cdktf.IResolvable; 
  public get tlvNamePlatformType() {
    return this.getBooleanAttribute('tlv_name_platform_type');
  }
  public set tlvNamePlatformType(value: boolean | cdktf.IResolvable) {
    this._tlvNamePlatformType = value;
  }
  public resetTlvNamePlatformType() {
    this._tlvNamePlatformType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNamePlatformTypeInput() {
    return this._tlvNamePlatformType;
  }

  // tlv_name_port_id_type - computed: false, optional: true, required: false
  private _tlvNamePortIdType?: boolean | cdktf.IResolvable; 
  public get tlvNamePortIdType() {
    return this.getBooleanAttribute('tlv_name_port_id_type');
  }
  public set tlvNamePortIdType(value: boolean | cdktf.IResolvable) {
    this._tlvNamePortIdType = value;
  }
  public resetTlvNamePortIdType() {
    this._tlvNamePortIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNamePortIdTypeInput() {
    return this._tlvNamePortIdType;
  }
}

export class DeviceSensorFilterListsCdpList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterListsCdp[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterListsCdpOutputReference {
    return new DeviceSensorFilterListsCdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterListsDhcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
  /**
  * Class Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#option_name_class_identifier DeviceSensor#option_name_class_identifier}
  */
  readonly optionNameClassIdentifier?: boolean | cdktf.IResolvable;
  /**
  * Client FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#option_name_client_fqdn DeviceSensor#option_name_client_fqdn}
  */
  readonly optionNameClientFqdn?: boolean | cdktf.IResolvable;
  /**
  * Client Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#option_name_client_identifier DeviceSensor#option_name_client_identifier}
  */
  readonly optionNameClientIdentifier?: boolean | cdktf.IResolvable;
  /**
  * Default IP Time To Live
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#option_name_default_ip_ttl DeviceSensor#option_name_default_ip_ttl}
  */
  readonly optionNameDefaultIpTtl?: boolean | cdktf.IResolvable;
  /**
  * Host Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#option_name_host_name DeviceSensor#option_name_host_name}
  */
  readonly optionNameHostName?: boolean | cdktf.IResolvable;
  /**
  * Parameter List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#option_name_parameter_request_list DeviceSensor#option_name_parameter_request_list}
  */
  readonly optionNameParameterRequestList?: boolean | cdktf.IResolvable;
  /**
  * Address Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#option_name_requested_address DeviceSensor#option_name_requested_address}
  */
  readonly optionNameRequestedAddress?: boolean | cdktf.IResolvable;
}

export function deviceSensorFilterListsDhcpToTerraform(struct?: DeviceSensorFilterListsDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    option_name_class_identifier: cdktf.booleanToTerraform(struct!.optionNameClassIdentifier),
    option_name_client_fqdn: cdktf.booleanToTerraform(struct!.optionNameClientFqdn),
    option_name_client_identifier: cdktf.booleanToTerraform(struct!.optionNameClientIdentifier),
    option_name_default_ip_ttl: cdktf.booleanToTerraform(struct!.optionNameDefaultIpTtl),
    option_name_host_name: cdktf.booleanToTerraform(struct!.optionNameHostName),
    option_name_parameter_request_list: cdktf.booleanToTerraform(struct!.optionNameParameterRequestList),
    option_name_requested_address: cdktf.booleanToTerraform(struct!.optionNameRequestedAddress),
  }
}


export function deviceSensorFilterListsDhcpToHclTerraform(struct?: DeviceSensorFilterListsDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_name_class_identifier: {
      value: cdktf.booleanToHclTerraform(struct!.optionNameClassIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_name_client_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.optionNameClientFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_name_client_identifier: {
      value: cdktf.booleanToHclTerraform(struct!.optionNameClientIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_name_default_ip_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.optionNameDefaultIpTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_name_host_name: {
      value: cdktf.booleanToHclTerraform(struct!.optionNameHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_name_parameter_request_list: {
      value: cdktf.booleanToHclTerraform(struct!.optionNameParameterRequestList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_name_requested_address: {
      value: cdktf.booleanToHclTerraform(struct!.optionNameRequestedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterListsDhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterListsDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optionNameClassIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionNameClassIdentifier = this._optionNameClassIdentifier;
    }
    if (this._optionNameClientFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionNameClientFqdn = this._optionNameClientFqdn;
    }
    if (this._optionNameClientIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionNameClientIdentifier = this._optionNameClientIdentifier;
    }
    if (this._optionNameDefaultIpTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionNameDefaultIpTtl = this._optionNameDefaultIpTtl;
    }
    if (this._optionNameHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionNameHostName = this._optionNameHostName;
    }
    if (this._optionNameParameterRequestList !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionNameParameterRequestList = this._optionNameParameterRequestList;
    }
    if (this._optionNameRequestedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionNameRequestedAddress = this._optionNameRequestedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterListsDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._optionNameClassIdentifier = undefined;
      this._optionNameClientFqdn = undefined;
      this._optionNameClientIdentifier = undefined;
      this._optionNameDefaultIpTtl = undefined;
      this._optionNameHostName = undefined;
      this._optionNameParameterRequestList = undefined;
      this._optionNameRequestedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._optionNameClassIdentifier = value.optionNameClassIdentifier;
      this._optionNameClientFqdn = value.optionNameClientFqdn;
      this._optionNameClientIdentifier = value.optionNameClientIdentifier;
      this._optionNameDefaultIpTtl = value.optionNameDefaultIpTtl;
      this._optionNameHostName = value.optionNameHostName;
      this._optionNameParameterRequestList = value.optionNameParameterRequestList;
      this._optionNameRequestedAddress = value.optionNameRequestedAddress;
    }
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

  // option_name_class_identifier - computed: false, optional: true, required: false
  private _optionNameClassIdentifier?: boolean | cdktf.IResolvable; 
  public get optionNameClassIdentifier() {
    return this.getBooleanAttribute('option_name_class_identifier');
  }
  public set optionNameClassIdentifier(value: boolean | cdktf.IResolvable) {
    this._optionNameClassIdentifier = value;
  }
  public resetOptionNameClassIdentifier() {
    this._optionNameClassIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameClassIdentifierInput() {
    return this._optionNameClassIdentifier;
  }

  // option_name_client_fqdn - computed: false, optional: true, required: false
  private _optionNameClientFqdn?: boolean | cdktf.IResolvable; 
  public get optionNameClientFqdn() {
    return this.getBooleanAttribute('option_name_client_fqdn');
  }
  public set optionNameClientFqdn(value: boolean | cdktf.IResolvable) {
    this._optionNameClientFqdn = value;
  }
  public resetOptionNameClientFqdn() {
    this._optionNameClientFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameClientFqdnInput() {
    return this._optionNameClientFqdn;
  }

  // option_name_client_identifier - computed: false, optional: true, required: false
  private _optionNameClientIdentifier?: boolean | cdktf.IResolvable; 
  public get optionNameClientIdentifier() {
    return this.getBooleanAttribute('option_name_client_identifier');
  }
  public set optionNameClientIdentifier(value: boolean | cdktf.IResolvable) {
    this._optionNameClientIdentifier = value;
  }
  public resetOptionNameClientIdentifier() {
    this._optionNameClientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameClientIdentifierInput() {
    return this._optionNameClientIdentifier;
  }

  // option_name_default_ip_ttl - computed: false, optional: true, required: false
  private _optionNameDefaultIpTtl?: boolean | cdktf.IResolvable; 
  public get optionNameDefaultIpTtl() {
    return this.getBooleanAttribute('option_name_default_ip_ttl');
  }
  public set optionNameDefaultIpTtl(value: boolean | cdktf.IResolvable) {
    this._optionNameDefaultIpTtl = value;
  }
  public resetOptionNameDefaultIpTtl() {
    this._optionNameDefaultIpTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameDefaultIpTtlInput() {
    return this._optionNameDefaultIpTtl;
  }

  // option_name_host_name - computed: false, optional: true, required: false
  private _optionNameHostName?: boolean | cdktf.IResolvable; 
  public get optionNameHostName() {
    return this.getBooleanAttribute('option_name_host_name');
  }
  public set optionNameHostName(value: boolean | cdktf.IResolvable) {
    this._optionNameHostName = value;
  }
  public resetOptionNameHostName() {
    this._optionNameHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameHostNameInput() {
    return this._optionNameHostName;
  }

  // option_name_parameter_request_list - computed: false, optional: true, required: false
  private _optionNameParameterRequestList?: boolean | cdktf.IResolvable; 
  public get optionNameParameterRequestList() {
    return this.getBooleanAttribute('option_name_parameter_request_list');
  }
  public set optionNameParameterRequestList(value: boolean | cdktf.IResolvable) {
    this._optionNameParameterRequestList = value;
  }
  public resetOptionNameParameterRequestList() {
    this._optionNameParameterRequestList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameParameterRequestListInput() {
    return this._optionNameParameterRequestList;
  }

  // option_name_requested_address - computed: false, optional: true, required: false
  private _optionNameRequestedAddress?: boolean | cdktf.IResolvable; 
  public get optionNameRequestedAddress() {
    return this.getBooleanAttribute('option_name_requested_address');
  }
  public set optionNameRequestedAddress(value: boolean | cdktf.IResolvable) {
    this._optionNameRequestedAddress = value;
  }
  public resetOptionNameRequestedAddress() {
    this._optionNameRequestedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameRequestedAddressInput() {
    return this._optionNameRequestedAddress;
  }
}

export class DeviceSensorFilterListsDhcpList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterListsDhcp[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterListsDhcpOutputReference {
    return new DeviceSensorFilterListsDhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterListsLldp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
  /**
  * Port Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_port_description DeviceSensor#tlv_name_port_description}
  */
  readonly tlvNamePortDescription?: boolean | cdktf.IResolvable;
  /**
  * Port Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_port_id DeviceSensor#tlv_name_port_id}
  */
  readonly tlvNamePortId?: boolean | cdktf.IResolvable;
  /**
  * System Capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_system_capabilities DeviceSensor#tlv_name_system_capabilities}
  */
  readonly tlvNameSystemCapabilities?: boolean | cdktf.IResolvable;
  /**
  * System Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_system_description DeviceSensor#tlv_name_system_description}
  */
  readonly tlvNameSystemDescription?: boolean | cdktf.IResolvable;
  /**
  * System Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#tlv_name_system_name DeviceSensor#tlv_name_system_name}
  */
  readonly tlvNameSystemName?: boolean | cdktf.IResolvable;
}

export function deviceSensorFilterListsLldpToTerraform(struct?: DeviceSensorFilterListsLldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tlv_name_port_description: cdktf.booleanToTerraform(struct!.tlvNamePortDescription),
    tlv_name_port_id: cdktf.booleanToTerraform(struct!.tlvNamePortId),
    tlv_name_system_capabilities: cdktf.booleanToTerraform(struct!.tlvNameSystemCapabilities),
    tlv_name_system_description: cdktf.booleanToTerraform(struct!.tlvNameSystemDescription),
    tlv_name_system_name: cdktf.booleanToTerraform(struct!.tlvNameSystemName),
  }
}


export function deviceSensorFilterListsLldpToHclTerraform(struct?: DeviceSensorFilterListsLldp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tlv_name_port_description: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNamePortDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_port_id: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNamePortId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_system_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNameSystemCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_system_description: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNameSystemDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tlv_name_system_name: {
      value: cdktf.booleanToHclTerraform(struct!.tlvNameSystemName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterListsLldpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterListsLldp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tlvNamePortDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNamePortDescription = this._tlvNamePortDescription;
    }
    if (this._tlvNamePortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNamePortId = this._tlvNamePortId;
    }
    if (this._tlvNameSystemCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNameSystemCapabilities = this._tlvNameSystemCapabilities;
    }
    if (this._tlvNameSystemDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNameSystemDescription = this._tlvNameSystemDescription;
    }
    if (this._tlvNameSystemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvNameSystemName = this._tlvNameSystemName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterListsLldp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tlvNamePortDescription = undefined;
      this._tlvNamePortId = undefined;
      this._tlvNameSystemCapabilities = undefined;
      this._tlvNameSystemDescription = undefined;
      this._tlvNameSystemName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tlvNamePortDescription = value.tlvNamePortDescription;
      this._tlvNamePortId = value.tlvNamePortId;
      this._tlvNameSystemCapabilities = value.tlvNameSystemCapabilities;
      this._tlvNameSystemDescription = value.tlvNameSystemDescription;
      this._tlvNameSystemName = value.tlvNameSystemName;
    }
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

  // tlv_name_port_description - computed: false, optional: true, required: false
  private _tlvNamePortDescription?: boolean | cdktf.IResolvable; 
  public get tlvNamePortDescription() {
    return this.getBooleanAttribute('tlv_name_port_description');
  }
  public set tlvNamePortDescription(value: boolean | cdktf.IResolvable) {
    this._tlvNamePortDescription = value;
  }
  public resetTlvNamePortDescription() {
    this._tlvNamePortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNamePortDescriptionInput() {
    return this._tlvNamePortDescription;
  }

  // tlv_name_port_id - computed: false, optional: true, required: false
  private _tlvNamePortId?: boolean | cdktf.IResolvable; 
  public get tlvNamePortId() {
    return this.getBooleanAttribute('tlv_name_port_id');
  }
  public set tlvNamePortId(value: boolean | cdktf.IResolvable) {
    this._tlvNamePortId = value;
  }
  public resetTlvNamePortId() {
    this._tlvNamePortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNamePortIdInput() {
    return this._tlvNamePortId;
  }

  // tlv_name_system_capabilities - computed: false, optional: true, required: false
  private _tlvNameSystemCapabilities?: boolean | cdktf.IResolvable; 
  public get tlvNameSystemCapabilities() {
    return this.getBooleanAttribute('tlv_name_system_capabilities');
  }
  public set tlvNameSystemCapabilities(value: boolean | cdktf.IResolvable) {
    this._tlvNameSystemCapabilities = value;
  }
  public resetTlvNameSystemCapabilities() {
    this._tlvNameSystemCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNameSystemCapabilitiesInput() {
    return this._tlvNameSystemCapabilities;
  }

  // tlv_name_system_description - computed: false, optional: true, required: false
  private _tlvNameSystemDescription?: boolean | cdktf.IResolvable; 
  public get tlvNameSystemDescription() {
    return this.getBooleanAttribute('tlv_name_system_description');
  }
  public set tlvNameSystemDescription(value: boolean | cdktf.IResolvable) {
    this._tlvNameSystemDescription = value;
  }
  public resetTlvNameSystemDescription() {
    this._tlvNameSystemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNameSystemDescriptionInput() {
    return this._tlvNameSystemDescription;
  }

  // tlv_name_system_name - computed: false, optional: true, required: false
  private _tlvNameSystemName?: boolean | cdktf.IResolvable; 
  public get tlvNameSystemName() {
    return this.getBooleanAttribute('tlv_name_system_name');
  }
  public set tlvNameSystemName(value: boolean | cdktf.IResolvable) {
    this._tlvNameSystemName = value;
  }
  public resetTlvNameSystemName() {
    this._tlvNameSystemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvNameSystemNameInput() {
    return this._tlvNameSystemName;
  }
}

export class DeviceSensorFilterListsLldpList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterListsLldp[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterListsLldpOutputReference {
    return new DeviceSensorFilterListsLldpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterSpecCdpExcludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
}

export function deviceSensorFilterSpecCdpExcludesToTerraform(struct?: DeviceSensorFilterSpecCdpExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceSensorFilterSpecCdpExcludesToHclTerraform(struct?: DeviceSensorFilterSpecCdpExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterSpecCdpExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterSpecCdpExcludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterSpecCdpExcludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DeviceSensorFilterSpecCdpExcludesList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterSpecCdpExcludes[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterSpecCdpExcludesOutputReference {
    return new DeviceSensorFilterSpecCdpExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterSpecCdpIncludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
}

export function deviceSensorFilterSpecCdpIncludesToTerraform(struct?: DeviceSensorFilterSpecCdpIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceSensorFilterSpecCdpIncludesToHclTerraform(struct?: DeviceSensorFilterSpecCdpIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterSpecCdpIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterSpecCdpIncludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterSpecCdpIncludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DeviceSensorFilterSpecCdpIncludesList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterSpecCdpIncludes[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterSpecCdpIncludesOutputReference {
    return new DeviceSensorFilterSpecCdpIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterSpecDhcpExcludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
}

export function deviceSensorFilterSpecDhcpExcludesToTerraform(struct?: DeviceSensorFilterSpecDhcpExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceSensorFilterSpecDhcpExcludesToHclTerraform(struct?: DeviceSensorFilterSpecDhcpExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterSpecDhcpExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterSpecDhcpExcludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterSpecDhcpExcludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DeviceSensorFilterSpecDhcpExcludesList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterSpecDhcpExcludes[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterSpecDhcpExcludesOutputReference {
    return new DeviceSensorFilterSpecDhcpExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterSpecDhcpIncludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
}

export function deviceSensorFilterSpecDhcpIncludesToTerraform(struct?: DeviceSensorFilterSpecDhcpIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceSensorFilterSpecDhcpIncludesToHclTerraform(struct?: DeviceSensorFilterSpecDhcpIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterSpecDhcpIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterSpecDhcpIncludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterSpecDhcpIncludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DeviceSensorFilterSpecDhcpIncludesList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterSpecDhcpIncludes[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterSpecDhcpIncludesOutputReference {
    return new DeviceSensorFilterSpecDhcpIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterSpecLldpExcludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
}

export function deviceSensorFilterSpecLldpExcludesToTerraform(struct?: DeviceSensorFilterSpecLldpExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceSensorFilterSpecLldpExcludesToHclTerraform(struct?: DeviceSensorFilterSpecLldpExcludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterSpecLldpExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterSpecLldpExcludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterSpecLldpExcludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DeviceSensorFilterSpecLldpExcludesList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterSpecLldpExcludes[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterSpecLldpExcludesOutputReference {
    return new DeviceSensorFilterSpecLldpExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceSensorFilterSpecLldpIncludes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#name DeviceSensor#name}
  */
  readonly name: string;
}

export function deviceSensorFilterSpecLldpIncludesToTerraform(struct?: DeviceSensorFilterSpecLldpIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceSensorFilterSpecLldpIncludesToHclTerraform(struct?: DeviceSensorFilterSpecLldpIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceSensorFilterSpecLldpIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceSensorFilterSpecLldpIncludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceSensorFilterSpecLldpIncludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DeviceSensorFilterSpecLldpIncludesList extends cdktf.ComplexList {
  public internalValue? : DeviceSensorFilterSpecLldpIncludes[] | cdktf.IResolvable

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
  public get(index: number): DeviceSensorFilterSpecLldpIncludesOutputReference {
    return new DeviceSensorFilterSpecLldpIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor iosxe_device_sensor}
*/
export class DeviceSensor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_device_sensor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceSensor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceSensor to import
  * @param importFromId The id of the existing DeviceSensor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceSensor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_device_sensor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/device_sensor iosxe_device_sensor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceSensorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeviceSensorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_device_sensor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._filterListsCdp.internalValue = config.filterListsCdp;
    this._filterListsDhcp.internalValue = config.filterListsDhcp;
    this._filterListsLldp.internalValue = config.filterListsLldp;
    this._filterSpecCdpExcludes.internalValue = config.filterSpecCdpExcludes;
    this._filterSpecCdpIncludes.internalValue = config.filterSpecCdpIncludes;
    this._filterSpecDhcpExcludes.internalValue = config.filterSpecDhcpExcludes;
    this._filterSpecDhcpIncludes.internalValue = config.filterSpecDhcpIncludes;
    this._filterSpecLldpExcludes.internalValue = config.filterSpecLldpExcludes;
    this._filterSpecLldpIncludes.internalValue = config.filterSpecLldpIncludes;
    this._notifyAllChanges = config.notifyAllChanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // filter_lists_cdp - computed: false, optional: true, required: false
  private _filterListsCdp = new DeviceSensorFilterListsCdpList(this, "filter_lists_cdp", false);
  public get filterListsCdp() {
    return this._filterListsCdp;
  }
  public putFilterListsCdp(value: DeviceSensorFilterListsCdp[] | cdktf.IResolvable) {
    this._filterListsCdp.internalValue = value;
  }
  public resetFilterListsCdp() {
    this._filterListsCdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListsCdpInput() {
    return this._filterListsCdp.internalValue;
  }

  // filter_lists_dhcp - computed: false, optional: true, required: false
  private _filterListsDhcp = new DeviceSensorFilterListsDhcpList(this, "filter_lists_dhcp", false);
  public get filterListsDhcp() {
    return this._filterListsDhcp;
  }
  public putFilterListsDhcp(value: DeviceSensorFilterListsDhcp[] | cdktf.IResolvable) {
    this._filterListsDhcp.internalValue = value;
  }
  public resetFilterListsDhcp() {
    this._filterListsDhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListsDhcpInput() {
    return this._filterListsDhcp.internalValue;
  }

  // filter_lists_lldp - computed: false, optional: true, required: false
  private _filterListsLldp = new DeviceSensorFilterListsLldpList(this, "filter_lists_lldp", false);
  public get filterListsLldp() {
    return this._filterListsLldp;
  }
  public putFilterListsLldp(value: DeviceSensorFilterListsLldp[] | cdktf.IResolvable) {
    this._filterListsLldp.internalValue = value;
  }
  public resetFilterListsLldp() {
    this._filterListsLldp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListsLldpInput() {
    return this._filterListsLldp.internalValue;
  }

  // filter_spec_cdp_excludes - computed: false, optional: true, required: false
  private _filterSpecCdpExcludes = new DeviceSensorFilterSpecCdpExcludesList(this, "filter_spec_cdp_excludes", false);
  public get filterSpecCdpExcludes() {
    return this._filterSpecCdpExcludes;
  }
  public putFilterSpecCdpExcludes(value: DeviceSensorFilterSpecCdpExcludes[] | cdktf.IResolvable) {
    this._filterSpecCdpExcludes.internalValue = value;
  }
  public resetFilterSpecCdpExcludes() {
    this._filterSpecCdpExcludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSpecCdpExcludesInput() {
    return this._filterSpecCdpExcludes.internalValue;
  }

  // filter_spec_cdp_includes - computed: false, optional: true, required: false
  private _filterSpecCdpIncludes = new DeviceSensorFilterSpecCdpIncludesList(this, "filter_spec_cdp_includes", false);
  public get filterSpecCdpIncludes() {
    return this._filterSpecCdpIncludes;
  }
  public putFilterSpecCdpIncludes(value: DeviceSensorFilterSpecCdpIncludes[] | cdktf.IResolvable) {
    this._filterSpecCdpIncludes.internalValue = value;
  }
  public resetFilterSpecCdpIncludes() {
    this._filterSpecCdpIncludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSpecCdpIncludesInput() {
    return this._filterSpecCdpIncludes.internalValue;
  }

  // filter_spec_dhcp_excludes - computed: false, optional: true, required: false
  private _filterSpecDhcpExcludes = new DeviceSensorFilterSpecDhcpExcludesList(this, "filter_spec_dhcp_excludes", false);
  public get filterSpecDhcpExcludes() {
    return this._filterSpecDhcpExcludes;
  }
  public putFilterSpecDhcpExcludes(value: DeviceSensorFilterSpecDhcpExcludes[] | cdktf.IResolvable) {
    this._filterSpecDhcpExcludes.internalValue = value;
  }
  public resetFilterSpecDhcpExcludes() {
    this._filterSpecDhcpExcludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSpecDhcpExcludesInput() {
    return this._filterSpecDhcpExcludes.internalValue;
  }

  // filter_spec_dhcp_includes - computed: false, optional: true, required: false
  private _filterSpecDhcpIncludes = new DeviceSensorFilterSpecDhcpIncludesList(this, "filter_spec_dhcp_includes", false);
  public get filterSpecDhcpIncludes() {
    return this._filterSpecDhcpIncludes;
  }
  public putFilterSpecDhcpIncludes(value: DeviceSensorFilterSpecDhcpIncludes[] | cdktf.IResolvable) {
    this._filterSpecDhcpIncludes.internalValue = value;
  }
  public resetFilterSpecDhcpIncludes() {
    this._filterSpecDhcpIncludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSpecDhcpIncludesInput() {
    return this._filterSpecDhcpIncludes.internalValue;
  }

  // filter_spec_lldp_excludes - computed: false, optional: true, required: false
  private _filterSpecLldpExcludes = new DeviceSensorFilterSpecLldpExcludesList(this, "filter_spec_lldp_excludes", false);
  public get filterSpecLldpExcludes() {
    return this._filterSpecLldpExcludes;
  }
  public putFilterSpecLldpExcludes(value: DeviceSensorFilterSpecLldpExcludes[] | cdktf.IResolvable) {
    this._filterSpecLldpExcludes.internalValue = value;
  }
  public resetFilterSpecLldpExcludes() {
    this._filterSpecLldpExcludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSpecLldpExcludesInput() {
    return this._filterSpecLldpExcludes.internalValue;
  }

  // filter_spec_lldp_includes - computed: false, optional: true, required: false
  private _filterSpecLldpIncludes = new DeviceSensorFilterSpecLldpIncludesList(this, "filter_spec_lldp_includes", false);
  public get filterSpecLldpIncludes() {
    return this._filterSpecLldpIncludes;
  }
  public putFilterSpecLldpIncludes(value: DeviceSensorFilterSpecLldpIncludes[] | cdktf.IResolvable) {
    this._filterSpecLldpIncludes.internalValue = value;
  }
  public resetFilterSpecLldpIncludes() {
    this._filterSpecLldpIncludes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSpecLldpIncludesInput() {
    return this._filterSpecLldpIncludes.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notify_all_changes - computed: false, optional: true, required: false
  private _notifyAllChanges?: boolean | cdktf.IResolvable; 
  public get notifyAllChanges() {
    return this.getBooleanAttribute('notify_all_changes');
  }
  public set notifyAllChanges(value: boolean | cdktf.IResolvable) {
    this._notifyAllChanges = value;
  }
  public resetNotifyAllChanges() {
    this._notifyAllChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAllChangesInput() {
    return this._notifyAllChanges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      filter_lists_cdp: cdktf.listMapper(deviceSensorFilterListsCdpToTerraform, false)(this._filterListsCdp.internalValue),
      filter_lists_dhcp: cdktf.listMapper(deviceSensorFilterListsDhcpToTerraform, false)(this._filterListsDhcp.internalValue),
      filter_lists_lldp: cdktf.listMapper(deviceSensorFilterListsLldpToTerraform, false)(this._filterListsLldp.internalValue),
      filter_spec_cdp_excludes: cdktf.listMapper(deviceSensorFilterSpecCdpExcludesToTerraform, false)(this._filterSpecCdpExcludes.internalValue),
      filter_spec_cdp_includes: cdktf.listMapper(deviceSensorFilterSpecCdpIncludesToTerraform, false)(this._filterSpecCdpIncludes.internalValue),
      filter_spec_dhcp_excludes: cdktf.listMapper(deviceSensorFilterSpecDhcpExcludesToTerraform, false)(this._filterSpecDhcpExcludes.internalValue),
      filter_spec_dhcp_includes: cdktf.listMapper(deviceSensorFilterSpecDhcpIncludesToTerraform, false)(this._filterSpecDhcpIncludes.internalValue),
      filter_spec_lldp_excludes: cdktf.listMapper(deviceSensorFilterSpecLldpExcludesToTerraform, false)(this._filterSpecLldpExcludes.internalValue),
      filter_spec_lldp_includes: cdktf.listMapper(deviceSensorFilterSpecLldpIncludesToTerraform, false)(this._filterSpecLldpIncludes.internalValue),
      notify_all_changes: cdktf.booleanToTerraform(this._notifyAllChanges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_lists_cdp: {
        value: cdktf.listMapperHcl(deviceSensorFilterListsCdpToHclTerraform, false)(this._filterListsCdp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterListsCdpList",
      },
      filter_lists_dhcp: {
        value: cdktf.listMapperHcl(deviceSensorFilterListsDhcpToHclTerraform, false)(this._filterListsDhcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterListsDhcpList",
      },
      filter_lists_lldp: {
        value: cdktf.listMapperHcl(deviceSensorFilterListsLldpToHclTerraform, false)(this._filterListsLldp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterListsLldpList",
      },
      filter_spec_cdp_excludes: {
        value: cdktf.listMapperHcl(deviceSensorFilterSpecCdpExcludesToHclTerraform, false)(this._filterSpecCdpExcludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterSpecCdpExcludesList",
      },
      filter_spec_cdp_includes: {
        value: cdktf.listMapperHcl(deviceSensorFilterSpecCdpIncludesToHclTerraform, false)(this._filterSpecCdpIncludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterSpecCdpIncludesList",
      },
      filter_spec_dhcp_excludes: {
        value: cdktf.listMapperHcl(deviceSensorFilterSpecDhcpExcludesToHclTerraform, false)(this._filterSpecDhcpExcludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterSpecDhcpExcludesList",
      },
      filter_spec_dhcp_includes: {
        value: cdktf.listMapperHcl(deviceSensorFilterSpecDhcpIncludesToHclTerraform, false)(this._filterSpecDhcpIncludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterSpecDhcpIncludesList",
      },
      filter_spec_lldp_excludes: {
        value: cdktf.listMapperHcl(deviceSensorFilterSpecLldpExcludesToHclTerraform, false)(this._filterSpecLldpExcludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterSpecLldpExcludesList",
      },
      filter_spec_lldp_includes: {
        value: cdktf.listMapperHcl(deviceSensorFilterSpecLldpIncludesToHclTerraform, false)(this._filterSpecLldpIncludes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceSensorFilterSpecLldpIncludesList",
      },
      notify_all_changes: {
        value: cdktf.booleanToHclTerraform(this._notifyAllChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
