// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/device_sensor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeDeviceSensorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/device_sensor#device DataIosxeDeviceSensor#device}
  */
  readonly device?: string;
}
export interface DataIosxeDeviceSensorFilterListsCdp {
}

export function dataIosxeDeviceSensorFilterListsCdpToTerraform(struct?: DataIosxeDeviceSensorFilterListsCdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterListsCdpToHclTerraform(struct?: DataIosxeDeviceSensorFilterListsCdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterListsCdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterListsCdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterListsCdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tlv_name_address_type - computed: true, optional: false, required: false
  public get tlvNameAddressType() {
    return this.getBooleanAttribute('tlv_name_address_type');
  }

  // tlv_name_capabilities_type - computed: true, optional: false, required: false
  public get tlvNameCapabilitiesType() {
    return this.getBooleanAttribute('tlv_name_capabilities_type');
  }

  // tlv_name_device_name - computed: true, optional: false, required: false
  public get tlvNameDeviceName() {
    return this.getBooleanAttribute('tlv_name_device_name');
  }

  // tlv_name_platform_type - computed: true, optional: false, required: false
  public get tlvNamePlatformType() {
    return this.getBooleanAttribute('tlv_name_platform_type');
  }

  // tlv_name_port_id_type - computed: true, optional: false, required: false
  public get tlvNamePortIdType() {
    return this.getBooleanAttribute('tlv_name_port_id_type');
  }
}

export class DataIosxeDeviceSensorFilterListsCdpList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterListsCdpOutputReference {
    return new DataIosxeDeviceSensorFilterListsCdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterListsDhcp {
}

export function dataIosxeDeviceSensorFilterListsDhcpToTerraform(struct?: DataIosxeDeviceSensorFilterListsDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterListsDhcpToHclTerraform(struct?: DataIosxeDeviceSensorFilterListsDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterListsDhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterListsDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterListsDhcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // option_name_class_identifier - computed: true, optional: false, required: false
  public get optionNameClassIdentifier() {
    return this.getBooleanAttribute('option_name_class_identifier');
  }

  // option_name_client_fqdn - computed: true, optional: false, required: false
  public get optionNameClientFqdn() {
    return this.getBooleanAttribute('option_name_client_fqdn');
  }

  // option_name_client_identifier - computed: true, optional: false, required: false
  public get optionNameClientIdentifier() {
    return this.getBooleanAttribute('option_name_client_identifier');
  }

  // option_name_default_ip_ttl - computed: true, optional: false, required: false
  public get optionNameDefaultIpTtl() {
    return this.getBooleanAttribute('option_name_default_ip_ttl');
  }

  // option_name_host_name - computed: true, optional: false, required: false
  public get optionNameHostName() {
    return this.getBooleanAttribute('option_name_host_name');
  }

  // option_name_parameter_request_list - computed: true, optional: false, required: false
  public get optionNameParameterRequestList() {
    return this.getBooleanAttribute('option_name_parameter_request_list');
  }

  // option_name_requested_address - computed: true, optional: false, required: false
  public get optionNameRequestedAddress() {
    return this.getBooleanAttribute('option_name_requested_address');
  }
}

export class DataIosxeDeviceSensorFilterListsDhcpList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterListsDhcpOutputReference {
    return new DataIosxeDeviceSensorFilterListsDhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterListsLldp {
}

export function dataIosxeDeviceSensorFilterListsLldpToTerraform(struct?: DataIosxeDeviceSensorFilterListsLldp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterListsLldpToHclTerraform(struct?: DataIosxeDeviceSensorFilterListsLldp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterListsLldpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterListsLldp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterListsLldp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tlv_name_port_description - computed: true, optional: false, required: false
  public get tlvNamePortDescription() {
    return this.getBooleanAttribute('tlv_name_port_description');
  }

  // tlv_name_port_id - computed: true, optional: false, required: false
  public get tlvNamePortId() {
    return this.getBooleanAttribute('tlv_name_port_id');
  }

  // tlv_name_system_capabilities - computed: true, optional: false, required: false
  public get tlvNameSystemCapabilities() {
    return this.getBooleanAttribute('tlv_name_system_capabilities');
  }

  // tlv_name_system_description - computed: true, optional: false, required: false
  public get tlvNameSystemDescription() {
    return this.getBooleanAttribute('tlv_name_system_description');
  }

  // tlv_name_system_name - computed: true, optional: false, required: false
  public get tlvNameSystemName() {
    return this.getBooleanAttribute('tlv_name_system_name');
  }
}

export class DataIosxeDeviceSensorFilterListsLldpList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterListsLldpOutputReference {
    return new DataIosxeDeviceSensorFilterListsLldpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterSpecCdpExcludes {
}

export function dataIosxeDeviceSensorFilterSpecCdpExcludesToTerraform(struct?: DataIosxeDeviceSensorFilterSpecCdpExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterSpecCdpExcludesToHclTerraform(struct?: DataIosxeDeviceSensorFilterSpecCdpExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterSpecCdpExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterSpecCdpExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterSpecCdpExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeDeviceSensorFilterSpecCdpExcludesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterSpecCdpExcludesOutputReference {
    return new DataIosxeDeviceSensorFilterSpecCdpExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterSpecCdpIncludes {
}

export function dataIosxeDeviceSensorFilterSpecCdpIncludesToTerraform(struct?: DataIosxeDeviceSensorFilterSpecCdpIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterSpecCdpIncludesToHclTerraform(struct?: DataIosxeDeviceSensorFilterSpecCdpIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterSpecCdpIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterSpecCdpIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterSpecCdpIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeDeviceSensorFilterSpecCdpIncludesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterSpecCdpIncludesOutputReference {
    return new DataIosxeDeviceSensorFilterSpecCdpIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterSpecDhcpExcludes {
}

export function dataIosxeDeviceSensorFilterSpecDhcpExcludesToTerraform(struct?: DataIosxeDeviceSensorFilterSpecDhcpExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterSpecDhcpExcludesToHclTerraform(struct?: DataIosxeDeviceSensorFilterSpecDhcpExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterSpecDhcpExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterSpecDhcpExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterSpecDhcpExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeDeviceSensorFilterSpecDhcpExcludesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterSpecDhcpExcludesOutputReference {
    return new DataIosxeDeviceSensorFilterSpecDhcpExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterSpecDhcpIncludes {
}

export function dataIosxeDeviceSensorFilterSpecDhcpIncludesToTerraform(struct?: DataIosxeDeviceSensorFilterSpecDhcpIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterSpecDhcpIncludesToHclTerraform(struct?: DataIosxeDeviceSensorFilterSpecDhcpIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterSpecDhcpIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterSpecDhcpIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterSpecDhcpIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeDeviceSensorFilterSpecDhcpIncludesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterSpecDhcpIncludesOutputReference {
    return new DataIosxeDeviceSensorFilterSpecDhcpIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterSpecLldpExcludes {
}

export function dataIosxeDeviceSensorFilterSpecLldpExcludesToTerraform(struct?: DataIosxeDeviceSensorFilterSpecLldpExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterSpecLldpExcludesToHclTerraform(struct?: DataIosxeDeviceSensorFilterSpecLldpExcludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterSpecLldpExcludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterSpecLldpExcludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterSpecLldpExcludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeDeviceSensorFilterSpecLldpExcludesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterSpecLldpExcludesOutputReference {
    return new DataIosxeDeviceSensorFilterSpecLldpExcludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDeviceSensorFilterSpecLldpIncludes {
}

export function dataIosxeDeviceSensorFilterSpecLldpIncludesToTerraform(struct?: DataIosxeDeviceSensorFilterSpecLldpIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDeviceSensorFilterSpecLldpIncludesToHclTerraform(struct?: DataIosxeDeviceSensorFilterSpecLldpIncludes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDeviceSensorFilterSpecLldpIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDeviceSensorFilterSpecLldpIncludes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDeviceSensorFilterSpecLldpIncludes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeDeviceSensorFilterSpecLldpIncludesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDeviceSensorFilterSpecLldpIncludesOutputReference {
    return new DataIosxeDeviceSensorFilterSpecLldpIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/device_sensor iosxe_device_sensor}
*/
export class DataIosxeDeviceSensor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_device_sensor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeDeviceSensor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeDeviceSensor to import
  * @param importFromId The id of the existing DataIosxeDeviceSensor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/device_sensor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeDeviceSensor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_device_sensor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/device_sensor iosxe_device_sensor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeDeviceSensorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeDeviceSensorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_device_sensor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter_lists_cdp - computed: true, optional: false, required: false
  private _filterListsCdp = new DataIosxeDeviceSensorFilterListsCdpList(this, "filter_lists_cdp", false);
  public get filterListsCdp() {
    return this._filterListsCdp;
  }

  // filter_lists_dhcp - computed: true, optional: false, required: false
  private _filterListsDhcp = new DataIosxeDeviceSensorFilterListsDhcpList(this, "filter_lists_dhcp", false);
  public get filterListsDhcp() {
    return this._filterListsDhcp;
  }

  // filter_lists_lldp - computed: true, optional: false, required: false
  private _filterListsLldp = new DataIosxeDeviceSensorFilterListsLldpList(this, "filter_lists_lldp", false);
  public get filterListsLldp() {
    return this._filterListsLldp;
  }

  // filter_spec_cdp_excludes - computed: true, optional: false, required: false
  private _filterSpecCdpExcludes = new DataIosxeDeviceSensorFilterSpecCdpExcludesList(this, "filter_spec_cdp_excludes", false);
  public get filterSpecCdpExcludes() {
    return this._filterSpecCdpExcludes;
  }

  // filter_spec_cdp_includes - computed: true, optional: false, required: false
  private _filterSpecCdpIncludes = new DataIosxeDeviceSensorFilterSpecCdpIncludesList(this, "filter_spec_cdp_includes", false);
  public get filterSpecCdpIncludes() {
    return this._filterSpecCdpIncludes;
  }

  // filter_spec_dhcp_excludes - computed: true, optional: false, required: false
  private _filterSpecDhcpExcludes = new DataIosxeDeviceSensorFilterSpecDhcpExcludesList(this, "filter_spec_dhcp_excludes", false);
  public get filterSpecDhcpExcludes() {
    return this._filterSpecDhcpExcludes;
  }

  // filter_spec_dhcp_includes - computed: true, optional: false, required: false
  private _filterSpecDhcpIncludes = new DataIosxeDeviceSensorFilterSpecDhcpIncludesList(this, "filter_spec_dhcp_includes", false);
  public get filterSpecDhcpIncludes() {
    return this._filterSpecDhcpIncludes;
  }

  // filter_spec_lldp_excludes - computed: true, optional: false, required: false
  private _filterSpecLldpExcludes = new DataIosxeDeviceSensorFilterSpecLldpExcludesList(this, "filter_spec_lldp_excludes", false);
  public get filterSpecLldpExcludes() {
    return this._filterSpecLldpExcludes;
  }

  // filter_spec_lldp_includes - computed: true, optional: false, required: false
  private _filterSpecLldpIncludes = new DataIosxeDeviceSensorFilterSpecLldpIncludesList(this, "filter_spec_lldp_includes", false);
  public get filterSpecLldpIncludes() {
    return this._filterSpecLldpIncludes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notify_all_changes - computed: true, optional: false, required: false
  public get notifyAllChanges() {
    return this.getBooleanAttribute('notify_all_changes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
