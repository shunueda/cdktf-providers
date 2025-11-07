// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeGroupIscsiClientV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The site where the Volume Group attach operation should be processed. This is an optional field. This field may only be set if Metro DR has been configured for this Volume Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#attachment_site VolumeGroupIscsiClientV2#attachment_site}
  */
  readonly attachmentSite?: string;
  /**
  * iSCSI initiator client secret in case of CHAP authentication. This field should not be provided in case the authentication type is not set to CHAP..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#client_secret VolumeGroupIscsiClientV2#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The authentication type enabled for the Volume Group. This is an optional field. If omitted, authentication is not configured for the Volume Group. If this is set to CHAP, the target/client secret must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#enabled_authentications VolumeGroupIscsiClientV2#enabled_authentications}
  */
  readonly enabledAuthentications?: string;
  /**
  * A globally unique identifier of an instance that is suitable for external consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#ext_id VolumeGroupIscsiClientV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#id VolumeGroupIscsiClientV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * iSCSI initiator name. During the attach operation, exactly one of iscsiInitiatorName and iscsiInitiatorNetworkID must be specified. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#iscsi_initiator_name VolumeGroupIscsiClientV2#iscsi_initiator_name}
  */
  readonly iscsiInitiatorName?: string;
  /**
  * Number of virtual targets generated for the iSCSI target. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#num_virtual_targets VolumeGroupIscsiClientV2#num_virtual_targets}
  */
  readonly numVirtualTargets?: number;
  /**
  * The external identifier of the Volume Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#vg_ext_id VolumeGroupIscsiClientV2#vg_ext_id}
  */
  readonly vgExtId: string;
  /**
  * iscsi_initiator_network_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#iscsi_initiator_network_id VolumeGroupIscsiClientV2#iscsi_initiator_network_id}
  */
  readonly iscsiInitiatorNetworkId?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkId[] | cdktf.IResolvable;
}
export interface VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn {
  /**
  * A fully qualified domain name that specifies its exact location in the tree hierarchy of the Domain Name System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#value VolumeGroupIscsiClientV2#value}
  */
  readonly value?: string;
}

export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnToTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnToHclTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnOutputReference {
    return new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4 {
  /**
  * The prefix length of the network to which this host IPv4 address belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#prefix_length VolumeGroupIscsiClientV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * An unique address that identifies a device on the internet or a local network in IPv4 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#value VolumeGroupIscsiClientV2#value}
  */
  readonly value?: string;
}

export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4ToTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4ToHclTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4List extends cdktf.ComplexList {
  public internalValue? : VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4OutputReference {
    return new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6 {
  /**
  * The prefix length of the network to which this host IPv6 address belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#prefix_length VolumeGroupIscsiClientV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * An unique address that identifies a device on the internet or a local network in IPv6 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#value VolumeGroupIscsiClientV2#value}
  */
  readonly value?: string;
}

export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6ToTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6ToHclTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6List extends cdktf.ComplexList {
  public internalValue? : VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6OutputReference {
    return new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeGroupIscsiClientV2IscsiInitiatorNetworkId {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#fqdn VolumeGroupIscsiClientV2#fqdn}
  */
  readonly fqdn?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#ipv4 VolumeGroupIscsiClientV2#ipv4}
  */
  readonly ipv4?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#ipv6 VolumeGroupIscsiClientV2#ipv6}
  */
  readonly ipv6?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6[] | cdktf.IResolvable;
}

export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdToTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function volumeGroupIscsiClientV2IscsiInitiatorNetworkIdToHclTerraform(struct?: VolumeGroupIscsiClientV2IscsiInitiatorNetworkId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeGroupIscsiClientV2IscsiInitiatorNetworkId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdList extends cdktf.ComplexList {
  public internalValue? : VolumeGroupIscsiClientV2IscsiInitiatorNetworkId[] | cdktf.IResolvable

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
  public get(index: number): VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdOutputReference {
    return new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2 nutanix_volume_group_iscsi_client_v2}
*/
export class VolumeGroupIscsiClientV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_volume_group_iscsi_client_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeGroupIscsiClientV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeGroupIscsiClientV2 to import
  * @param importFromId The id of the existing VolumeGroupIscsiClientV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeGroupIscsiClientV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_volume_group_iscsi_client_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/volume_group_iscsi_client_v2 nutanix_volume_group_iscsi_client_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeGroupIscsiClientV2Config
  */
  public constructor(scope: Construct, id: string, config: VolumeGroupIscsiClientV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_volume_group_iscsi_client_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachmentSite = config.attachmentSite;
    this._clientSecret = config.clientSecret;
    this._enabledAuthentications = config.enabledAuthentications;
    this._extId = config.extId;
    this._id = config.id;
    this._iscsiInitiatorName = config.iscsiInitiatorName;
    this._numVirtualTargets = config.numVirtualTargets;
    this._vgExtId = config.vgExtId;
    this._iscsiInitiatorNetworkId.internalValue = config.iscsiInitiatorNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_site - computed: false, optional: true, required: false
  private _attachmentSite?: string; 
  public get attachmentSite() {
    return this.getStringAttribute('attachment_site');
  }
  public set attachmentSite(value: string) {
    this._attachmentSite = value;
  }
  public resetAttachmentSite() {
    this._attachmentSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentSiteInput() {
    return this._attachmentSite;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // enabled_authentications - computed: false, optional: true, required: false
  private _enabledAuthentications?: string; 
  public get enabledAuthentications() {
    return this.getStringAttribute('enabled_authentications');
  }
  public set enabledAuthentications(value: string) {
    this._enabledAuthentications = value;
  }
  public resetEnabledAuthentications() {
    this._enabledAuthentications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAuthenticationsInput() {
    return this._enabledAuthentications;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // iscsi_initiator_name - computed: false, optional: true, required: false
  private _iscsiInitiatorName?: string; 
  public get iscsiInitiatorName() {
    return this.getStringAttribute('iscsi_initiator_name');
  }
  public set iscsiInitiatorName(value: string) {
    this._iscsiInitiatorName = value;
  }
  public resetIscsiInitiatorName() {
    this._iscsiInitiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInitiatorNameInput() {
    return this._iscsiInitiatorName;
  }

  // num_virtual_targets - computed: false, optional: true, required: false
  private _numVirtualTargets?: number; 
  public get numVirtualTargets() {
    return this.getNumberAttribute('num_virtual_targets');
  }
  public set numVirtualTargets(value: number) {
    this._numVirtualTargets = value;
  }
  public resetNumVirtualTargets() {
    this._numVirtualTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVirtualTargetsInput() {
    return this._numVirtualTargets;
  }

  // vg_ext_id - computed: false, optional: false, required: true
  private _vgExtId?: string; 
  public get vgExtId() {
    return this.getStringAttribute('vg_ext_id');
  }
  public set vgExtId(value: string) {
    this._vgExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vgExtIdInput() {
    return this._vgExtId;
  }

  // iscsi_initiator_network_id - computed: false, optional: true, required: false
  private _iscsiInitiatorNetworkId = new VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdList(this, "iscsi_initiator_network_id", false);
  public get iscsiInitiatorNetworkId() {
    return this._iscsiInitiatorNetworkId;
  }
  public putIscsiInitiatorNetworkId(value: VolumeGroupIscsiClientV2IscsiInitiatorNetworkId[] | cdktf.IResolvable) {
    this._iscsiInitiatorNetworkId.internalValue = value;
  }
  public resetIscsiInitiatorNetworkId() {
    this._iscsiInitiatorNetworkId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInitiatorNetworkIdInput() {
    return this._iscsiInitiatorNetworkId.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_site: cdktf.stringToTerraform(this._attachmentSite),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      enabled_authentications: cdktf.stringToTerraform(this._enabledAuthentications),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      iscsi_initiator_name: cdktf.stringToTerraform(this._iscsiInitiatorName),
      num_virtual_targets: cdktf.numberToTerraform(this._numVirtualTargets),
      vg_ext_id: cdktf.stringToTerraform(this._vgExtId),
      iscsi_initiator_network_id: cdktf.listMapper(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdToTerraform, true)(this._iscsiInitiatorNetworkId.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_site: {
        value: cdktf.stringToHclTerraform(this._attachmentSite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_authentications: {
        value: cdktf.stringToHclTerraform(this._enabledAuthentications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      iscsi_initiator_name: {
        value: cdktf.stringToHclTerraform(this._iscsiInitiatorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_virtual_targets: {
        value: cdktf.numberToHclTerraform(this._numVirtualTargets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vg_ext_id: {
        value: cdktf.stringToHclTerraform(this._vgExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iscsi_initiator_network_id: {
        value: cdktf.listMapperHcl(volumeGroupIscsiClientV2IscsiInitiatorNetworkIdToHclTerraform, true)(this._iscsiInitiatorNetworkId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeGroupIscsiClientV2IscsiInitiatorNetworkIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
