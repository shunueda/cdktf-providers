// https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkDeviceLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#id NetworkDeviceLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Device link name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#name NetworkDeviceLink#name}
  */
  readonly name: string;
  /**
  * project_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#project_id NetworkDeviceLink#project_id}
  */
  readonly projectId?: string;
  /**
  * (Optional) Whether the connection should be created through Fabric's primary or secondary port. Supported values: `PRIMARY` (Default), `SECONDARY`, `HYBRID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#redundancy_type NetworkDeviceLink#redundancy_type}
  */
  readonly redundancyType?: string;
  /**
  * Device link subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#subnet NetworkDeviceLink#subnet}
  */
  readonly subnet?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#device NetworkDeviceLink#device}
  */
  readonly device: NetworkDeviceLinkDevice[] | cdktf.IResolvable;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#link NetworkDeviceLink#link}
  */
  readonly link?: NetworkDeviceLinkLink[] | cdktf.IResolvable;
  /**
  * metro_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#metro_link NetworkDeviceLink#metro_link}
  */
  readonly metroLink?: NetworkDeviceLinkMetroLink[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#timeouts NetworkDeviceLink#timeouts}
  */
  readonly timeouts?: NetworkDeviceLinkTimeouts;
}
export interface NetworkDeviceLinkDevice {
  /**
  * Device ASN number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#asn NetworkDeviceLink#asn}
  */
  readonly asn?: number;
  /**
  * Device identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#id NetworkDeviceLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Device network interface identifier to use for device link connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#interface_id NetworkDeviceLink#interface_id}
  */
  readonly interfaceId?: number;
}

export function networkDeviceLinkDeviceToTerraform(struct?: NetworkDeviceLinkDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    id: cdktf.stringToTerraform(struct!.id),
    interface_id: cdktf.numberToTerraform(struct!.interfaceId),
  }
}


export function networkDeviceLinkDeviceToHclTerraform(struct?: NetworkDeviceLinkDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_id: {
      value: cdktf.numberToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceLinkDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceLinkDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceLinkDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._id = undefined;
      this._interfaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._id = value.id;
      this._interfaceId = value.interfaceId;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
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

  // interface_id - computed: false, optional: true, required: false
  private _interfaceId?: number; 
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }
  public set interfaceId(value: number) {
    this._interfaceId = value;
  }
  public resetInterfaceId() {
    this._interfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class NetworkDeviceLinkDeviceList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceLinkDevice[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceLinkDeviceOutputReference {
    return new NetworkDeviceLinkDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceLinkLink {
  /**
  * Billing account number to be used for connection charges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#account_number NetworkDeviceLink#account_number}
  */
  readonly accountNumber: string;
  /**
  * Connection destination metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#dst_metro_code NetworkDeviceLink#dst_metro_code}
  */
  readonly dstMetroCode: string;
  /**
  * Connection destination zone code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#dst_zone_code NetworkDeviceLink#dst_zone_code}
  */
  readonly dstZoneCode?: string;
  /**
  * Connection source metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#src_metro_code NetworkDeviceLink#src_metro_code}
  */
  readonly srcMetroCode: string;
  /**
  * Connection source zone code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#src_zone_code NetworkDeviceLink#src_zone_code}
  */
  readonly srcZoneCode?: string;
  /**
  * Connection throughput
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#throughput NetworkDeviceLink#throughput}
  */
  readonly throughput: string;
  /**
  * Connection throughput unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#throughput_unit NetworkDeviceLink#throughput_unit}
  */
  readonly throughputUnit: string;
}

export function networkDeviceLinkLinkToTerraform(struct?: NetworkDeviceLinkLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.stringToTerraform(struct!.accountNumber),
    dst_metro_code: cdktf.stringToTerraform(struct!.dstMetroCode),
    dst_zone_code: cdktf.stringToTerraform(struct!.dstZoneCode),
    src_metro_code: cdktf.stringToTerraform(struct!.srcMetroCode),
    src_zone_code: cdktf.stringToTerraform(struct!.srcZoneCode),
    throughput: cdktf.stringToTerraform(struct!.throughput),
    throughput_unit: cdktf.stringToTerraform(struct!.throughputUnit),
  }
}


export function networkDeviceLinkLinkToHclTerraform(struct?: NetworkDeviceLinkLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.stringToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_metro_code: {
      value: cdktf.stringToHclTerraform(struct!.dstMetroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_zone_code: {
      value: cdktf.stringToHclTerraform(struct!.dstZoneCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_metro_code: {
      value: cdktf.stringToHclTerraform(struct!.srcMetroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_zone_code: {
      value: cdktf.stringToHclTerraform(struct!.srcZoneCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.stringToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput_unit: {
      value: cdktf.stringToHclTerraform(struct!.throughputUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceLinkLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceLinkLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    if (this._dstMetroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMetroCode = this._dstMetroCode;
    }
    if (this._dstZoneCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstZoneCode = this._dstZoneCode;
    }
    if (this._srcMetroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMetroCode = this._srcMetroCode;
    }
    if (this._srcZoneCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneCode = this._srcZoneCode;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._throughputUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputUnit = this._throughputUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceLinkLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountNumber = undefined;
      this._dstMetroCode = undefined;
      this._dstZoneCode = undefined;
      this._srcMetroCode = undefined;
      this._srcZoneCode = undefined;
      this._throughput = undefined;
      this._throughputUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountNumber = value.accountNumber;
      this._dstMetroCode = value.dstMetroCode;
      this._dstZoneCode = value.dstZoneCode;
      this._srcMetroCode = value.srcMetroCode;
      this._srcZoneCode = value.srcZoneCode;
      this._throughput = value.throughput;
      this._throughputUnit = value.throughputUnit;
    }
  }

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // dst_metro_code - computed: false, optional: false, required: true
  private _dstMetroCode?: string; 
  public get dstMetroCode() {
    return this.getStringAttribute('dst_metro_code');
  }
  public set dstMetroCode(value: string) {
    this._dstMetroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMetroCodeInput() {
    return this._dstMetroCode;
  }

  // dst_zone_code - computed: false, optional: true, required: false
  private _dstZoneCode?: string; 
  public get dstZoneCode() {
    return this.getStringAttribute('dst_zone_code');
  }
  public set dstZoneCode(value: string) {
    this._dstZoneCode = value;
  }
  public resetDstZoneCode() {
    this._dstZoneCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstZoneCodeInput() {
    return this._dstZoneCode;
  }

  // src_metro_code - computed: false, optional: false, required: true
  private _srcMetroCode?: string; 
  public get srcMetroCode() {
    return this.getStringAttribute('src_metro_code');
  }
  public set srcMetroCode(value: string) {
    this._srcMetroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMetroCodeInput() {
    return this._srcMetroCode;
  }

  // src_zone_code - computed: false, optional: true, required: false
  private _srcZoneCode?: string; 
  public get srcZoneCode() {
    return this.getStringAttribute('src_zone_code');
  }
  public set srcZoneCode(value: string) {
    this._srcZoneCode = value;
  }
  public resetSrcZoneCode() {
    this._srcZoneCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneCodeInput() {
    return this._srcZoneCode;
  }

  // throughput - computed: false, optional: false, required: true
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // throughput_unit - computed: false, optional: false, required: true
  private _throughputUnit?: string; 
  public get throughputUnit() {
    return this.getStringAttribute('throughput_unit');
  }
  public set throughputUnit(value: string) {
    this._throughputUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputUnitInput() {
    return this._throughputUnit;
  }
}

export class NetworkDeviceLinkLinkList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceLinkLink[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceLinkLinkOutputReference {
    return new NetworkDeviceLinkLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceLinkMetroLink {
  /**
  * Billing account number to be used for connection charges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#account_number NetworkDeviceLink#account_number}
  */
  readonly accountNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#metro_code NetworkDeviceLink#metro_code}
  */
  readonly metroCode: string;
  /**
  * Connection throughput
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#throughput NetworkDeviceLink#throughput}
  */
  readonly throughput: string;
  /**
  * Connection throughput unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#throughput_unit NetworkDeviceLink#throughput_unit}
  */
  readonly throughputUnit: string;
}

export function networkDeviceLinkMetroLinkToTerraform(struct?: NetworkDeviceLinkMetroLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.stringToTerraform(struct!.accountNumber),
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
    throughput: cdktf.stringToTerraform(struct!.throughput),
    throughput_unit: cdktf.stringToTerraform(struct!.throughputUnit),
  }
}


export function networkDeviceLinkMetroLinkToHclTerraform(struct?: NetworkDeviceLinkMetroLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.stringToHclTerraform(struct!.accountNumber),
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
    throughput: {
      value: cdktf.stringToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput_unit: {
      value: cdktf.stringToHclTerraform(struct!.throughputUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceLinkMetroLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceLinkMetroLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._throughputUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputUnit = this._throughputUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceLinkMetroLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountNumber = undefined;
      this._metroCode = undefined;
      this._throughput = undefined;
      this._throughputUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountNumber = value.accountNumber;
      this._metroCode = value.metroCode;
      this._throughput = value.throughput;
      this._throughputUnit = value.throughputUnit;
    }
  }

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // metro_code - computed: false, optional: false, required: true
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // throughput - computed: false, optional: false, required: true
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // throughput_unit - computed: false, optional: false, required: true
  private _throughputUnit?: string; 
  public get throughputUnit() {
    return this.getStringAttribute('throughput_unit');
  }
  public set throughputUnit(value: string) {
    this._throughputUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputUnitInput() {
    return this._throughputUnit;
  }
}

export class NetworkDeviceLinkMetroLinkList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceLinkMetroLink[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceLinkMetroLinkOutputReference {
    return new NetworkDeviceLinkMetroLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceLinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#create NetworkDeviceLink#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#delete NetworkDeviceLink#delete}
  */
  readonly delete?: string;
}

export function networkDeviceLinkTimeoutsToTerraform(struct?: NetworkDeviceLinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkDeviceLinkTimeoutsToHclTerraform(struct?: NetworkDeviceLinkTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceLinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkDeviceLinkTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceLinkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link equinix_network_device_link}
*/
export class NetworkDeviceLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_device_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkDeviceLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkDeviceLink to import
  * @param importFromId The id of the existing NetworkDeviceLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkDeviceLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_device_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/network_device_link equinix_network_device_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkDeviceLinkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkDeviceLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_device_link',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.0',
        providerVersionConstraint: '4.11.0'
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
    this._projectId = config.projectId;
    this._redundancyType = config.redundancyType;
    this._subnet = config.subnet;
    this._device.internalValue = config.device;
    this._link.internalValue = config.link;
    this._metroLink.internalValue = config.metroLink;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // redundancy_type - computed: false, optional: true, required: false
  private _redundancyType?: string; 
  public get redundancyType() {
    return this.getStringAttribute('redundancy_type');
  }
  public set redundancyType(value: string) {
    this._redundancyType = value;
  }
  public resetRedundancyType() {
    this._redundancyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyTypeInput() {
    return this._redundancyType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // device - computed: false, optional: false, required: true
  private _device = new NetworkDeviceLinkDeviceList(this, "device", true);
  public get device() {
    return this._device;
  }
  public putDevice(value: NetworkDeviceLinkDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // link - computed: false, optional: true, required: false
  private _link = new NetworkDeviceLinkLinkList(this, "link", true);
  public get link() {
    return this._link;
  }
  public putLink(value: NetworkDeviceLinkLink[] | cdktf.IResolvable) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // metro_link - computed: false, optional: true, required: false
  private _metroLink = new NetworkDeviceLinkMetroLinkList(this, "metro_link", true);
  public get metroLink() {
    return this._metroLink;
  }
  public putMetroLink(value: NetworkDeviceLinkMetroLink[] | cdktf.IResolvable) {
    this._metroLink.internalValue = value;
  }
  public resetMetroLink() {
    this._metroLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroLinkInput() {
    return this._metroLink.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkDeviceLinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkDeviceLinkTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      redundancy_type: cdktf.stringToTerraform(this._redundancyType),
      subnet: cdktf.stringToTerraform(this._subnet),
      device: cdktf.listMapper(networkDeviceLinkDeviceToTerraform, true)(this._device.internalValue),
      link: cdktf.listMapper(networkDeviceLinkLinkToTerraform, true)(this._link.internalValue),
      metro_link: cdktf.listMapper(networkDeviceLinkMetroLinkToTerraform, true)(this._metroLink.internalValue),
      timeouts: networkDeviceLinkTimeoutsToTerraform(this._timeouts.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundancy_type: {
        value: cdktf.stringToHclTerraform(this._redundancyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.listMapperHcl(networkDeviceLinkDeviceToHclTerraform, true)(this._device.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkDeviceLinkDeviceList",
      },
      link: {
        value: cdktf.listMapperHcl(networkDeviceLinkLinkToHclTerraform, true)(this._link.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkDeviceLinkLinkList",
      },
      metro_link: {
        value: cdktf.listMapperHcl(networkDeviceLinkMetroLinkToHclTerraform, true)(this._metroLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkDeviceLinkMetroLinkList",
      },
      timeouts: {
        value: networkDeviceLinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkDeviceLinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
