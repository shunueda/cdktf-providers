// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UztnaLeasepoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#annotations UztnaLeasepool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#description UztnaLeasepool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#disable UztnaLeasepool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#id UztnaLeasepool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#labels UztnaLeasepool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#name UztnaLeasepool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#namespace UztnaLeasepool#namespace}
  */
  readonly namespace: string;
  /**
  * ip_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#ip_version UztnaLeasepool#ip_version}
  */
  readonly ipVersion: UztnaLeasepoolIpVersion;
}
export interface UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#addr UztnaLeasepool#addr}
  */
  readonly addr?: string;
}

export function uztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressToTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressOutputReference | UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function uztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressToHclTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressOutputReference | UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#addr UztnaLeasepool#addr}
  */
  readonly addr?: string;
}

export function uztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressToTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressOutputReference | UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function uztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressToHclTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressOutputReference | UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface UztnaLeasepoolIpVersionIpv4VipVip4Range {
  /**
  * end_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#end_address UztnaLeasepool#end_address}
  */
  readonly endAddress?: UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddress;
  /**
  * start_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#start_address UztnaLeasepool#start_address}
  */
  readonly startAddress?: UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddress;
}

export function uztnaLeasepoolIpVersionIpv4VipVip4RangeToTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipVip4Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: uztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressToTerraform(struct!.endAddress),
    start_address: uztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressToTerraform(struct!.startAddress),
  }
}


export function uztnaLeasepoolIpVersionIpv4VipVip4RangeToHclTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipVip4Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: uztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressToHclTerraform(struct!.endAddress),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressList",
    },
    start_address: {
      value: uztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressToHclTerraform(struct!.startAddress),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaLeasepoolIpVersionIpv4VipVip4RangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaLeasepoolIpVersionIpv4VipVip4Range | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress?.internalValue;
    }
    if (this._startAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaLeasepoolIpVersionIpv4VipVip4Range | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress.internalValue = undefined;
      this._startAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress.internalValue = value.endAddress;
      this._startAddress.internalValue = value.startAddress;
    }
  }

  // end_address - computed: false, optional: true, required: false
  private _endAddress = new UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddressOutputReference(this, "end_address");
  public get endAddress() {
    return this._endAddress;
  }
  public putEndAddress(value: UztnaLeasepoolIpVersionIpv4VipVip4RangeEndAddress) {
    this._endAddress.internalValue = value;
  }
  public resetEndAddress() {
    this._endAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress.internalValue;
  }

  // start_address - computed: false, optional: true, required: false
  private _startAddress = new UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddressOutputReference(this, "start_address");
  public get startAddress() {
    return this._startAddress;
  }
  public putStartAddress(value: UztnaLeasepoolIpVersionIpv4VipVip4RangeStartAddress) {
    this._startAddress.internalValue = value;
  }
  public resetStartAddress() {
    this._startAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress.internalValue;
  }
}

export class UztnaLeasepoolIpVersionIpv4VipVip4RangeList extends cdktf.ComplexList {
  public internalValue? : UztnaLeasepoolIpVersionIpv4VipVip4Range[] | cdktf.IResolvable

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
  public get(index: number): UztnaLeasepoolIpVersionIpv4VipVip4RangeOutputReference {
    return new UztnaLeasepoolIpVersionIpv4VipVip4RangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaLeasepoolIpVersionIpv4Vip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#prefix UztnaLeasepool#prefix}
  */
  readonly prefix?: string[];
  /**
  * vip4_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#vip4_range UztnaLeasepool#vip4_range}
  */
  readonly vip4Range?: UztnaLeasepoolIpVersionIpv4VipVip4Range[] | cdktf.IResolvable;
}

export function uztnaLeasepoolIpVersionIpv4VipToTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipOutputReference | UztnaLeasepoolIpVersionIpv4Vip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
    vip4_range: cdktf.listMapper(uztnaLeasepoolIpVersionIpv4VipVip4RangeToTerraform, true)(struct!.vip4Range),
  }
}


export function uztnaLeasepoolIpVersionIpv4VipToHclTerraform(struct?: UztnaLeasepoolIpVersionIpv4VipOutputReference | UztnaLeasepoolIpVersionIpv4Vip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vip4_range: {
      value: cdktf.listMapperHcl(uztnaLeasepoolIpVersionIpv4VipVip4RangeToHclTerraform, true)(struct!.vip4Range),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaLeasepoolIpVersionIpv4VipVip4RangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaLeasepoolIpVersionIpv4VipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaLeasepoolIpVersionIpv4Vip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._vip4Range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip4Range = this._vip4Range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaLeasepoolIpVersionIpv4Vip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._vip4Range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._vip4Range.internalValue = value.vip4Range;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // vip4_range - computed: false, optional: true, required: false
  private _vip4Range = new UztnaLeasepoolIpVersionIpv4VipVip4RangeList(this, "vip4_range", false);
  public get vip4Range() {
    return this._vip4Range;
  }
  public putVip4Range(value: UztnaLeasepoolIpVersionIpv4VipVip4Range[] | cdktf.IResolvable) {
    this._vip4Range.internalValue = value;
  }
  public resetVip4Range() {
    this._vip4Range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vip4RangeInput() {
    return this._vip4Range.internalValue;
  }
}
export interface UztnaLeasepoolIpVersion {
  /**
  * ipv4_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#ipv4_vip UztnaLeasepool#ipv4_vip}
  */
  readonly ipv4Vip?: UztnaLeasepoolIpVersionIpv4Vip;
}

export function uztnaLeasepoolIpVersionToTerraform(struct?: UztnaLeasepoolIpVersionOutputReference | UztnaLeasepoolIpVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_vip: uztnaLeasepoolIpVersionIpv4VipToTerraform(struct!.ipv4Vip),
  }
}


export function uztnaLeasepoolIpVersionToHclTerraform(struct?: UztnaLeasepoolIpVersionOutputReference | UztnaLeasepoolIpVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_vip: {
      value: uztnaLeasepoolIpVersionIpv4VipToHclTerraform(struct!.ipv4Vip),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaLeasepoolIpVersionIpv4VipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaLeasepoolIpVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaLeasepoolIpVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Vip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Vip = this._ipv4Vip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaLeasepoolIpVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Vip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Vip.internalValue = value.ipv4Vip;
    }
  }

  // ipv4_vip - computed: false, optional: true, required: false
  private _ipv4Vip = new UztnaLeasepoolIpVersionIpv4VipOutputReference(this, "ipv4_vip");
  public get ipv4Vip() {
    return this._ipv4Vip;
  }
  public putIpv4Vip(value: UztnaLeasepoolIpVersionIpv4Vip) {
    this._ipv4Vip.internalValue = value;
  }
  public resetIpv4Vip() {
    this._ipv4Vip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VipInput() {
    return this._ipv4Vip.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool volterra_uztna_leasepool}
*/
export class UztnaLeasepool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_uztna_leasepool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UztnaLeasepool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UztnaLeasepool to import
  * @param importFromId The id of the existing UztnaLeasepool that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UztnaLeasepool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_uztna_leasepool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_leasepool volterra_uztna_leasepool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UztnaLeasepoolConfig
  */
  public constructor(scope: Construct, id: string, config: UztnaLeasepoolConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_uztna_leasepool',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._ipVersion.internalValue = config.ipVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion = new UztnaLeasepoolIpVersionOutputReference(this, "ip_version");
  public get ipVersion() {
    return this._ipVersion;
  }
  public putIpVersion(value: UztnaLeasepoolIpVersion) {
    this._ipVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ip_version: uztnaLeasepoolIpVersionToTerraform(this._ipVersion.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: uztnaLeasepoolIpVersionToHclTerraform(this._ipVersion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaLeasepoolIpVersionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
