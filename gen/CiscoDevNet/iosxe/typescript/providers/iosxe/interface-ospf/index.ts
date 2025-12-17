// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Route cost of this interface
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#cost InterfaceOspf#cost}
  */
  readonly cost?: number;
  /**
  * Interval after which a neighbor is declared dead
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#dead_interval InterfaceOspf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#delete_mode InterfaceOspf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#device InterfaceOspf#device}
  */
  readonly device?: string;
  /**
  * Time between HELLO packets
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#hello_interval InterfaceOspf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Message digest authentication password (key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#message_digest_keys InterfaceOspf#message_digest_keys}
  */
  readonly messageDigestKeys?: InterfaceOspfMessageDigestKeys[] | cdktf.IResolvable;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#mtu_ignore InterfaceOspf#mtu_ignore}
  */
  readonly mtuIgnore?: boolean | cdktf.IResolvable;
  /**
  * Set the OSPF multi-area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#multi_area_ids InterfaceOspf#multi_area_ids}
  */
  readonly multiAreaIds?: InterfaceOspfMultiAreaIds[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#name InterfaceOspf#name}
  */
  readonly name: string;
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#network_type_broadcast InterfaceOspf#network_type_broadcast}
  */
  readonly networkTypeBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#network_type_non_broadcast InterfaceOspf#network_type_non_broadcast}
  */
  readonly networkTypeNonBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#network_type_point_to_multipoint InterfaceOspf#network_type_point_to_multipoint}
  */
  readonly networkTypePointToMultipoint?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#network_type_point_to_point InterfaceOspf#network_type_point_to_point}
  */
  readonly networkTypePointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Router priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#priority InterfaceOspf#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#process_ids InterfaceOspf#process_ids}
  */
  readonly processIds?: InterfaceOspfProcessIds[] | cdktf.IResolvable;
  /**
  * IP hops
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#ttl_security_hops InterfaceOspf#ttl_security_hops}
  */
  readonly ttlSecurityHops?: number;
  /**
  * Interface type
  *   - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`, `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Loopback`, `Vlan`, `Port-channel`, `Port-channel-subinterface/Port-channel`, `Tunnel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#type InterfaceOspf#type}
  */
  readonly type: string;
}
export interface InterfaceOspfMessageDigestKeys {
  /**
  * Key ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#id InterfaceOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The OSPF password (key) (only the first 16 characters are used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#md5_auth_key InterfaceOspf#md5_auth_key}
  */
  readonly md5AuthKey?: string;
  /**
  * Encryption type (0 for not yet encrypted, 7 for proprietary)
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#md5_auth_type InterfaceOspf#md5_auth_type}
  */
  readonly md5AuthType?: number;
}

export function interfaceOspfMessageDigestKeysToTerraform(struct?: InterfaceOspfMessageDigestKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    md5_auth_key: cdktf.stringToTerraform(struct!.md5AuthKey),
    md5_auth_type: cdktf.numberToTerraform(struct!.md5AuthType),
  }
}


export function interfaceOspfMessageDigestKeysToHclTerraform(struct?: InterfaceOspfMessageDigestKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.md5AuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5_auth_type: {
      value: cdktf.numberToHclTerraform(struct!.md5AuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceOspfMessageDigestKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceOspfMessageDigestKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._md5AuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5AuthKey = this._md5AuthKey;
    }
    if (this._md5AuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5AuthType = this._md5AuthType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceOspfMessageDigestKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._md5AuthKey = undefined;
      this._md5AuthType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._md5AuthKey = value.md5AuthKey;
      this._md5AuthType = value.md5AuthType;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // md5_auth_key - computed: false, optional: true, required: false
  private _md5AuthKey?: string; 
  public get md5AuthKey() {
    return this.getStringAttribute('md5_auth_key');
  }
  public set md5AuthKey(value: string) {
    this._md5AuthKey = value;
  }
  public resetMd5AuthKey() {
    this._md5AuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthKeyInput() {
    return this._md5AuthKey;
  }

  // md5_auth_type - computed: false, optional: true, required: false
  private _md5AuthType?: number; 
  public get md5AuthType() {
    return this.getNumberAttribute('md5_auth_type');
  }
  public set md5AuthType(value: number) {
    this._md5AuthType = value;
  }
  public resetMd5AuthType() {
    this._md5AuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthTypeInput() {
    return this._md5AuthType;
  }
}

export class InterfaceOspfMessageDigestKeysList extends cdktf.ComplexList {
  public internalValue? : InterfaceOspfMessageDigestKeys[] | cdktf.IResolvable

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
  public get(index: number): InterfaceOspfMessageDigestKeysOutputReference {
    return new InterfaceOspfMessageDigestKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceOspfMultiAreaIds {
  /**
  * OSPF multi-area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#area_id InterfaceOspf#area_id}
  */
  readonly areaId: string;
}

export function interfaceOspfMultiAreaIdsToTerraform(struct?: InterfaceOspfMultiAreaIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id: cdktf.stringToTerraform(struct!.areaId),
  }
}


export function interfaceOspfMultiAreaIdsToHclTerraform(struct?: InterfaceOspfMultiAreaIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id: {
      value: cdktf.stringToHclTerraform(struct!.areaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceOspfMultiAreaIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceOspfMultiAreaIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaId = this._areaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceOspfMultiAreaIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaId = value.areaId;
    }
  }

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }
}

export class InterfaceOspfMultiAreaIdsList extends cdktf.ComplexList {
  public internalValue? : InterfaceOspfMultiAreaIds[] | cdktf.IResolvable

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
  public get(index: number): InterfaceOspfMultiAreaIdsOutputReference {
    return new InterfaceOspfMultiAreaIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceOspfProcessIdsAreas {
  /**
  * Set the OSPF area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#area_id InterfaceOspf#area_id}
  */
  readonly areaId: string;
}

export function interfaceOspfProcessIdsAreasToTerraform(struct?: InterfaceOspfProcessIdsAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id: cdktf.stringToTerraform(struct!.areaId),
  }
}


export function interfaceOspfProcessIdsAreasToHclTerraform(struct?: InterfaceOspfProcessIdsAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id: {
      value: cdktf.stringToHclTerraform(struct!.areaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceOspfProcessIdsAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceOspfProcessIdsAreas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaId = this._areaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceOspfProcessIdsAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaId = value.areaId;
    }
  }

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }
}

export class InterfaceOspfProcessIdsAreasList extends cdktf.ComplexList {
  public internalValue? : InterfaceOspfProcessIdsAreas[] | cdktf.IResolvable

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
  public get(index: number): InterfaceOspfProcessIdsAreasOutputReference {
    return new InterfaceOspfProcessIdsAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceOspfProcessIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#areas InterfaceOspf#areas}
  */
  readonly areas?: InterfaceOspfProcessIdsAreas[] | cdktf.IResolvable;
  /**
  * Process ID
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#id InterfaceOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function interfaceOspfProcessIdsToTerraform(struct?: InterfaceOspfProcessIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    areas: cdktf.listMapper(interfaceOspfProcessIdsAreasToTerraform, false)(struct!.areas),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function interfaceOspfProcessIdsToHclTerraform(struct?: InterfaceOspfProcessIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    areas: {
      value: cdktf.listMapperHcl(interfaceOspfProcessIdsAreasToHclTerraform, false)(struct!.areas),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceOspfProcessIdsAreasList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceOspfProcessIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceOspfProcessIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areas = this._areas?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceOspfProcessIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areas.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areas.internalValue = value.areas;
      this._id = value.id;
    }
  }

  // areas - computed: false, optional: true, required: false
  private _areas = new InterfaceOspfProcessIdsAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: InterfaceOspfProcessIdsAreas[] | cdktf.IResolvable) {
    this._areas.internalValue = value;
  }
  public resetAreas() {
    this._areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areasInput() {
    return this._areas.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class InterfaceOspfProcessIdsList extends cdktf.ComplexList {
  public internalValue? : InterfaceOspfProcessIds[] | cdktf.IResolvable

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
  public get(index: number): InterfaceOspfProcessIdsOutputReference {
    return new InterfaceOspfProcessIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf iosxe_interface_ospf}
*/
export class InterfaceOspf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceOspf to import
  * @param importFromId The id of the existing InterfaceOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/interface_ospf iosxe_interface_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceOspfConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceOspfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_ospf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cost = config.cost;
    this._deadInterval = config.deadInterval;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._helloInterval = config.helloInterval;
    this._messageDigestKeys.internalValue = config.messageDigestKeys;
    this._mtuIgnore = config.mtuIgnore;
    this._multiAreaIds.internalValue = config.multiAreaIds;
    this._name = config.name;
    this._networkTypeBroadcast = config.networkTypeBroadcast;
    this._networkTypeNonBroadcast = config.networkTypeNonBroadcast;
    this._networkTypePointToMultipoint = config.networkTypePointToMultipoint;
    this._networkTypePointToPoint = config.networkTypePointToPoint;
    this._priority = config.priority;
    this._processIds.internalValue = config.processIds;
    this._ttlSecurityHops = config.ttlSecurityHops;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

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

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_digest_keys - computed: false, optional: true, required: false
  private _messageDigestKeys = new InterfaceOspfMessageDigestKeysList(this, "message_digest_keys", false);
  public get messageDigestKeys() {
    return this._messageDigestKeys;
  }
  public putMessageDigestKeys(value: InterfaceOspfMessageDigestKeys[] | cdktf.IResolvable) {
    this._messageDigestKeys.internalValue = value;
  }
  public resetMessageDigestKeys() {
    this._messageDigestKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeysInput() {
    return this._messageDigestKeys.internalValue;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: boolean | cdktf.IResolvable; 
  public get mtuIgnore() {
    return this.getBooleanAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: boolean | cdktf.IResolvable) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // multi_area_ids - computed: false, optional: true, required: false
  private _multiAreaIds = new InterfaceOspfMultiAreaIdsList(this, "multi_area_ids", false);
  public get multiAreaIds() {
    return this._multiAreaIds;
  }
  public putMultiAreaIds(value: InterfaceOspfMultiAreaIds[] | cdktf.IResolvable) {
    this._multiAreaIds.internalValue = value;
  }
  public resetMultiAreaIds() {
    this._multiAreaIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAreaIdsInput() {
    return this._multiAreaIds.internalValue;
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

  // network_type_broadcast - computed: false, optional: true, required: false
  private _networkTypeBroadcast?: boolean | cdktf.IResolvable; 
  public get networkTypeBroadcast() {
    return this.getBooleanAttribute('network_type_broadcast');
  }
  public set networkTypeBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkTypeBroadcast = value;
  }
  public resetNetworkTypeBroadcast() {
    this._networkTypeBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeBroadcastInput() {
    return this._networkTypeBroadcast;
  }

  // network_type_non_broadcast - computed: false, optional: true, required: false
  private _networkTypeNonBroadcast?: boolean | cdktf.IResolvable; 
  public get networkTypeNonBroadcast() {
    return this.getBooleanAttribute('network_type_non_broadcast');
  }
  public set networkTypeNonBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkTypeNonBroadcast = value;
  }
  public resetNetworkTypeNonBroadcast() {
    this._networkTypeNonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeNonBroadcastInput() {
    return this._networkTypeNonBroadcast;
  }

  // network_type_point_to_multipoint - computed: false, optional: true, required: false
  private _networkTypePointToMultipoint?: boolean | cdktf.IResolvable; 
  public get networkTypePointToMultipoint() {
    return this.getBooleanAttribute('network_type_point_to_multipoint');
  }
  public set networkTypePointToMultipoint(value: boolean | cdktf.IResolvable) {
    this._networkTypePointToMultipoint = value;
  }
  public resetNetworkTypePointToMultipoint() {
    this._networkTypePointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypePointToMultipointInput() {
    return this._networkTypePointToMultipoint;
  }

  // network_type_point_to_point - computed: false, optional: true, required: false
  private _networkTypePointToPoint?: boolean | cdktf.IResolvable; 
  public get networkTypePointToPoint() {
    return this.getBooleanAttribute('network_type_point_to_point');
  }
  public set networkTypePointToPoint(value: boolean | cdktf.IResolvable) {
    this._networkTypePointToPoint = value;
  }
  public resetNetworkTypePointToPoint() {
    this._networkTypePointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypePointToPointInput() {
    return this._networkTypePointToPoint;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // process_ids - computed: false, optional: true, required: false
  private _processIds = new InterfaceOspfProcessIdsList(this, "process_ids", false);
  public get processIds() {
    return this._processIds;
  }
  public putProcessIds(value: InterfaceOspfProcessIds[] | cdktf.IResolvable) {
    this._processIds.internalValue = value;
  }
  public resetProcessIds() {
    this._processIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdsInput() {
    return this._processIds.internalValue;
  }

  // ttl_security_hops - computed: false, optional: true, required: false
  private _ttlSecurityHops?: number; 
  public get ttlSecurityHops() {
    return this.getNumberAttribute('ttl_security_hops');
  }
  public set ttlSecurityHops(value: number) {
    this._ttlSecurityHops = value;
  }
  public resetTtlSecurityHops() {
    this._ttlSecurityHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecurityHopsInput() {
    return this._ttlSecurityHops;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cost: cdktf.numberToTerraform(this._cost),
      dead_interval: cdktf.numberToTerraform(this._deadInterval),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      message_digest_keys: cdktf.listMapper(interfaceOspfMessageDigestKeysToTerraform, false)(this._messageDigestKeys.internalValue),
      mtu_ignore: cdktf.booleanToTerraform(this._mtuIgnore),
      multi_area_ids: cdktf.listMapper(interfaceOspfMultiAreaIdsToTerraform, false)(this._multiAreaIds.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_type_broadcast: cdktf.booleanToTerraform(this._networkTypeBroadcast),
      network_type_non_broadcast: cdktf.booleanToTerraform(this._networkTypeNonBroadcast),
      network_type_point_to_multipoint: cdktf.booleanToTerraform(this._networkTypePointToMultipoint),
      network_type_point_to_point: cdktf.booleanToTerraform(this._networkTypePointToPoint),
      priority: cdktf.numberToTerraform(this._priority),
      process_ids: cdktf.listMapper(interfaceOspfProcessIdsToTerraform, false)(this._processIds.internalValue),
      ttl_security_hops: cdktf.numberToTerraform(this._ttlSecurityHops),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_interval: {
        value: cdktf.numberToHclTerraform(this._deadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_digest_keys: {
        value: cdktf.listMapperHcl(interfaceOspfMessageDigestKeysToHclTerraform, false)(this._messageDigestKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceOspfMessageDigestKeysList",
      },
      mtu_ignore: {
        value: cdktf.booleanToHclTerraform(this._mtuIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_area_ids: {
        value: cdktf.listMapperHcl(interfaceOspfMultiAreaIdsToHclTerraform, false)(this._multiAreaIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceOspfMultiAreaIdsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkTypeBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type_non_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkTypeNonBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type_point_to_multipoint: {
        value: cdktf.booleanToHclTerraform(this._networkTypePointToMultipoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type_point_to_point: {
        value: cdktf.booleanToHclTerraform(this._networkTypePointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_ids: {
        value: cdktf.listMapperHcl(interfaceOspfProcessIdsToHclTerraform, false)(this._processIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceOspfProcessIdsList",
      },
      ttl_security_hops: {
        value: cdktf.numberToHclTerraform(this._ttlSecurityHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
