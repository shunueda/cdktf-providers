// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDnsServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#filters DataBloxoneDnsServers#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#tag_filters DataBloxoneDnsServers#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDnsServersResultsCustomRootNs {
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#address DataBloxoneDnsServers#address}
  */
  readonly address: string;
  /**
  * FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#fqdn DataBloxoneDnsServers#fqdn}
  */
  readonly fqdn: string;
}

export function dataBloxoneDnsServersResultsCustomRootNsToTerraform(struct?: DataBloxoneDnsServersResultsCustomRootNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dataBloxoneDnsServersResultsCustomRootNsToHclTerraform(struct?: DataBloxoneDnsServersResultsCustomRootNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsCustomRootNs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsCustomRootNs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._fqdn = value.fqdn;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DataBloxoneDnsServersResultsCustomRootNsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsCustomRootNs[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsCustomRootNsOutputReference {
    return new DataBloxoneDnsServersResultsCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsDnssecRootKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#algorithm DataBloxoneDnsServers#algorithm}
  */
  readonly algorithm: number;
  /**
  * DNSSEC key data. Non-empty, valid base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#public_key DataBloxoneDnsServers#public_key}
  */
  readonly publicKey: string;
  /**
  * Optional. Secure Entry Point flag.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#sep DataBloxoneDnsServers#sep}
  */
  readonly sep?: boolean | cdktf.IResolvable;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#zone DataBloxoneDnsServers#zone}
  */
  readonly zone: string;
}

export function dataBloxoneDnsServersResultsDnssecRootKeysToTerraform(struct?: DataBloxoneDnsServersResultsDnssecRootKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.numberToTerraform(struct!.algorithm),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    sep: cdktf.booleanToTerraform(struct!.sep),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataBloxoneDnsServersResultsDnssecRootKeysToHclTerraform(struct?: DataBloxoneDnsServersResultsDnssecRootKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.numberToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sep: {
      value: cdktf.booleanToHclTerraform(struct!.sep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsDnssecRootKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsDnssecRootKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._sep !== undefined) {
      hasAnyValues = true;
      internalValueResult.sep = this._sep;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsDnssecRootKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._publicKey = undefined;
      this._sep = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._publicKey = value.publicKey;
      this._sep = value.sep;
      this._zone = value.zone;
    }
  }

  // algorithm - computed: true, optional: false, required: true
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // protocol_zone - computed: true, optional: false, required: false
  public get protocolZone() {
    return this.getStringAttribute('protocol_zone');
  }

  // public_key - computed: true, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // sep - computed: true, optional: true, required: false
  private _sep?: boolean | cdktf.IResolvable; 
  public get sep() {
    return this.getBooleanAttribute('sep');
  }
  public set sep(value: boolean | cdktf.IResolvable) {
    this._sep = value;
  }
  public resetSep() {
    this._sep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sepInput() {
    return this._sep;
  }

  // zone - computed: true, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataBloxoneDnsServersResultsDnssecRootKeysList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsDnssecRootKeys[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsDnssecRootKeysOutputReference {
    return new DataBloxoneDnsServersResultsDnssecRootKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsDnssecTrustAnchors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#algorithm DataBloxoneDnsServers#algorithm}
  */
  readonly algorithm: number;
  /**
  * DNSSEC key data. Non-empty, valid base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#public_key DataBloxoneDnsServers#public_key}
  */
  readonly publicKey: string;
  /**
  * Optional. Secure Entry Point flag.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#sep DataBloxoneDnsServers#sep}
  */
  readonly sep?: boolean | cdktf.IResolvable;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#zone DataBloxoneDnsServers#zone}
  */
  readonly zone: string;
}

export function dataBloxoneDnsServersResultsDnssecTrustAnchorsToTerraform(struct?: DataBloxoneDnsServersResultsDnssecTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.numberToTerraform(struct!.algorithm),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    sep: cdktf.booleanToTerraform(struct!.sep),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataBloxoneDnsServersResultsDnssecTrustAnchorsToHclTerraform(struct?: DataBloxoneDnsServersResultsDnssecTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.numberToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sep: {
      value: cdktf.booleanToHclTerraform(struct!.sep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsDnssecTrustAnchors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._sep !== undefined) {
      hasAnyValues = true;
      internalValueResult.sep = this._sep;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsDnssecTrustAnchors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._publicKey = undefined;
      this._sep = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._publicKey = value.publicKey;
      this._sep = value.sep;
      this._zone = value.zone;
    }
  }

  // algorithm - computed: true, optional: false, required: true
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // protocol_zone - computed: true, optional: false, required: false
  public get protocolZone() {
    return this.getStringAttribute('protocol_zone');
  }

  // public_key - computed: true, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // sep - computed: true, optional: true, required: false
  private _sep?: boolean | cdktf.IResolvable; 
  public get sep() {
    return this.getBooleanAttribute('sep');
  }
  public set sep(value: boolean | cdktf.IResolvable) {
    this._sep = value;
  }
  public resetSep() {
    this._sep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sepInput() {
    return this._sep;
  }

  // zone - computed: true, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataBloxoneDnsServersResultsDnssecTrustAnchorsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsDnssecTrustAnchors[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsDnssecTrustAnchorsOutputReference {
    return new DataBloxoneDnsServersResultsDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsEcsZones {
  /**
  * Access control for zone. Allowed values:
  *  * _allow_
  *  * _deny_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#access DataBloxoneDnsServers#access}
  */
  readonly access: string;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#fqdn DataBloxoneDnsServers#fqdn}
  */
  readonly fqdn: string;
}

export function dataBloxoneDnsServersResultsEcsZonesToTerraform(struct?: DataBloxoneDnsServersResultsEcsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dataBloxoneDnsServersResultsEcsZonesToHclTerraform(struct?: DataBloxoneDnsServersResultsEcsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsEcsZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsEcsZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._fqdn = value.fqdn;
    }
  }

  // access - computed: true, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DataBloxoneDnsServersResultsEcsZonesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsEcsZones[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsEcsZonesOutputReference {
    return new DataBloxoneDnsServersResultsEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsFilterAaaaAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#key DataBloxoneDnsServers#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsServersResultsFilterAaaaAclTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsFilterAaaaAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsServersResultsFilterAaaaAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsFilterAaaaAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsFilterAaaaAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsFilterAaaaAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsFilterAaaaAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsFilterAaaaAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#access DataBloxoneDnsServers#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#acl DataBloxoneDnsServers#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#address DataBloxoneDnsServers#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#element DataBloxoneDnsServers#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#tsig_key DataBloxoneDnsServers#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsServersResultsFilterAaaaAclTsigKey;
}

export function dataBloxoneDnsServersResultsFilterAaaaAclToTerraform(struct?: DataBloxoneDnsServersResultsFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsServersResultsFilterAaaaAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsServersResultsFilterAaaaAclToHclTerraform(struct?: DataBloxoneDnsServersResultsFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dataBloxoneDnsServersResultsFilterAaaaAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsFilterAaaaAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsFilterAaaaAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsFilterAaaaAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsFilterAaaaAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsFilterAaaaAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsServersResultsFilterAaaaAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DataBloxoneDnsServersResultsFilterAaaaAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsFilterAaaaAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsFilterAaaaAclOutputReference {
    return new DataBloxoneDnsServersResultsFilterAaaaAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsForwarders {
  /**
  * Server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#address DataBloxoneDnsServers#address}
  */
  readonly address: string;
  /**
  * Server FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#fqdn DataBloxoneDnsServers#fqdn}
  */
  readonly fqdn: string;
}

export function dataBloxoneDnsServersResultsForwardersToTerraform(struct?: DataBloxoneDnsServersResultsForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dataBloxoneDnsServersResultsForwardersToHclTerraform(struct?: DataBloxoneDnsServersResultsForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsForwarders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsForwarders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._fqdn = value.fqdn;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DataBloxoneDnsServersResultsForwardersList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsForwarders[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsForwardersOutputReference {
    return new DataBloxoneDnsServersResultsForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined) {
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_root_ns - computed: true, optional: false, required: false
  private _customRootNs = new DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }

  // custom_root_ns_enabled - computed: true, optional: false, required: false
  public get customRootNsEnabled() {
    return this.getBooleanAttribute('custom_root_ns_enabled');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }

  // protocol_zone - computed: true, optional: false, required: false
  public get protocolZone() {
    return this.getStringAttribute('protocol_zone');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // sep - computed: true, optional: false, required: false
  public get sep() {
    return this.getBooleanAttribute('sep');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnssec_enable_validation - computed: true, optional: false, required: false
  public get dnssecEnableValidation() {
    return this.getBooleanAttribute('dnssec_enable_validation');
  }

  // dnssec_enabled - computed: true, optional: false, required: false
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }

  // dnssec_trust_anchors - computed: true, optional: false, required: false
  private _dnssecTrustAnchors = new DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }

  // dnssec_validate_expiry - computed: true, optional: false, required: false
  public get dnssecValidateExpiry() {
    return this.getBooleanAttribute('dnssec_validate_expiry');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZones {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZonesToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZonesToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZonesOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ecs_enabled - computed: true, optional: false, required: false
  public get ecsEnabled() {
    return this.getBooleanAttribute('ecs_enabled');
  }

  // ecs_forwarding - computed: true, optional: false, required: false
  public get ecsForwarding() {
    return this.getBooleanAttribute('ecs_forwarding');
  }

  // ecs_prefix_v4 - computed: true, optional: false, required: false
  public get ecsPrefixV4() {
    return this.getNumberAttribute('ecs_prefix_v4');
  }

  // ecs_prefix_v6 - computed: true, optional: false, required: false
  public get ecsPrefixV6() {
    return this.getNumberAttribute('ecs_prefix_v6');
  }

  // ecs_zones - computed: true, optional: false, required: false
  private _ecsZones = new DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKey {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4 {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4ToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4ToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwarders {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwardersToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwardersToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwarders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwarders | undefined) {
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwardersList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwardersOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forwarders - computed: true, optional: false, required: false
  private _forwarders = new DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }

  // forwarders_only - computed: true, optional: false, required: false
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }

  // use_root_forwarders_for_local_resolution_with_b1td - computed: true, optional: false, required: false
  public get useRootForwardersForLocalResolutionWithB1Td() {
    return this.getBooleanAttribute('use_root_forwarders_for_local_resolution_with_b1td');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabledToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabledToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValueOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesLameTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesLameTtlToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesLameTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesLameTtlToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesLameTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesLameTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesLameTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesLameTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponseToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponseToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnlyToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtlToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtlToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtlToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtlToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesMinimalResponsesToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesMinimalResponsesToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesNotify {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesNotifyToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesNotifyToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesNotifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesNotify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesNotify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKey {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesQueryAclToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesQueryAclToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesQueryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesQueryAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesQueryPort {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesQueryPortToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesQueryPortToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesQueryPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesQueryPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesQueryPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesQueryPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKey {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabledToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabledToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesRecursiveClientsToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesRecursiveClientsToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeoutToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeoutToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimitToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimitToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimitToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimitToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesSortListValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesSortListValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSortListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesSortListValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSortListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesSortListValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesSortListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesSortListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // prioritized_networks - computed: true, optional: false, required: false
  public get prioritizedNetworks() {
    return this.getListAttribute('prioritized_networks');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesSortListValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesSortListValueOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesSortListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesSortListStructToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesSortListStructToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesSortListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesSortListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKey {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesTransferAclToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesTransferAclToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesTransferAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesTransferAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKey {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValue {
}

export function dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueOutputReference {
    return new DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#action DataBloxoneDnsServers#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzonesToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DataBloxoneDnsServersResultsInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#add_edns_option_in_outgoing_query DataBloxoneDnsServers#add_edns_option_in_outgoing_query}
  */
  readonly addEdnsOptionInOutgoingQuery?: DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#custom_root_ns_block DataBloxoneDnsServers#custom_root_ns_block}
  */
  readonly customRootNsBlock?: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#dnssec_validation_block DataBloxoneDnsServers#dnssec_validation_block}
  */
  readonly dnssecValidationBlock?: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#ecs_block DataBloxoneDnsServers#ecs_block}
  */
  readonly ecsBlock?: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#filter_aaaa_acl DataBloxoneDnsServers#filter_aaaa_acl}
  */
  readonly filterAaaaAcl?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#filter_aaaa_on_v4 DataBloxoneDnsServers#filter_aaaa_on_v4}
  */
  readonly filterAaaaOnV4?: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#forwarders_block DataBloxoneDnsServers#forwarders_block}
  */
  readonly forwardersBlock?: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#gss_tsig_enabled DataBloxoneDnsServers#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#kerberos_keys DataBloxoneDnsServers#kerberos_keys}
  */
  readonly kerberosKeys?: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#lame_ttl DataBloxoneDnsServers#lame_ttl}
  */
  readonly lameTtl?: DataBloxoneDnsServersResultsInheritanceSourcesLameTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#log_query_response DataBloxoneDnsServers#log_query_response}
  */
  readonly logQueryResponse?: DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#match_recursive_only DataBloxoneDnsServers#match_recursive_only}
  */
  readonly matchRecursiveOnly?: DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#max_cache_ttl DataBloxoneDnsServers#max_cache_ttl}
  */
  readonly maxCacheTtl?: DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#max_negative_ttl DataBloxoneDnsServers#max_negative_ttl}
  */
  readonly maxNegativeTtl?: DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#minimal_responses DataBloxoneDnsServers#minimal_responses}
  */
  readonly minimalResponses?: DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#notify DataBloxoneDnsServers#notify}
  */
  readonly notify?: DataBloxoneDnsServersResultsInheritanceSourcesNotify;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#query_acl DataBloxoneDnsServers#query_acl}
  */
  readonly queryAcl?: DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#query_port DataBloxoneDnsServers#query_port}
  */
  readonly queryPort?: DataBloxoneDnsServersResultsInheritanceSourcesQueryPort;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#recursion_acl DataBloxoneDnsServers#recursion_acl}
  */
  readonly recursionAcl?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#recursion_enabled DataBloxoneDnsServers#recursion_enabled}
  */
  readonly recursionEnabled?: DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#recursive_clients DataBloxoneDnsServers#recursive_clients}
  */
  readonly recursiveClients?: DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#resolver_query_timeout DataBloxoneDnsServers#resolver_query_timeout}
  */
  readonly resolverQueryTimeout?: DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#secondary_axfr_query_limit DataBloxoneDnsServers#secondary_axfr_query_limit}
  */
  readonly secondaryAxfrQueryLimit?: DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#secondary_soa_query_limit DataBloxoneDnsServers#secondary_soa_query_limit}
  */
  readonly secondarySoaQueryLimit?: DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#sort_list DataBloxoneDnsServers#sort_list}
  */
  readonly sortList?: DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#synthesize_address_records_from_https DataBloxoneDnsServers#synthesize_address_records_from_https}
  */
  readonly synthesizeAddressRecordsFromHttps?: DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#transfer_acl DataBloxoneDnsServers#transfer_acl}
  */
  readonly transferAcl?: DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#update_acl DataBloxoneDnsServers#update_acl}
  */
  readonly updateAcl?: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#use_forwarders_for_subzones DataBloxoneDnsServers#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones;
}

export function dataBloxoneDnsServersResultsInheritanceSourcesToTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_edns_option_in_outgoing_query: dataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToTerraform(struct!.addEdnsOptionInOutgoingQuery),
    custom_root_ns_block: dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockToTerraform(struct!.customRootNsBlock),
    dnssec_validation_block: dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockToTerraform(struct!.dnssecValidationBlock),
    ecs_block: dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockToTerraform(struct!.ecsBlock),
    filter_aaaa_acl: dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclToTerraform(struct!.filterAaaaAcl),
    filter_aaaa_on_v4: dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4ToTerraform(struct!.filterAaaaOnV4),
    forwarders_block: dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockToTerraform(struct!.forwardersBlock),
    gss_tsig_enabled: dataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabledToTerraform(struct!.gssTsigEnabled),
    kerberos_keys: dataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysToTerraform(struct!.kerberosKeys),
    lame_ttl: dataBloxoneDnsServersResultsInheritanceSourcesLameTtlToTerraform(struct!.lameTtl),
    log_query_response: dataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponseToTerraform(struct!.logQueryResponse),
    match_recursive_only: dataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnlyToTerraform(struct!.matchRecursiveOnly),
    max_cache_ttl: dataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtlToTerraform(struct!.maxCacheTtl),
    max_negative_ttl: dataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtlToTerraform(struct!.maxNegativeTtl),
    minimal_responses: dataBloxoneDnsServersResultsInheritanceSourcesMinimalResponsesToTerraform(struct!.minimalResponses),
    notify: dataBloxoneDnsServersResultsInheritanceSourcesNotifyToTerraform(struct!.notify),
    query_acl: dataBloxoneDnsServersResultsInheritanceSourcesQueryAclToTerraform(struct!.queryAcl),
    query_port: dataBloxoneDnsServersResultsInheritanceSourcesQueryPortToTerraform(struct!.queryPort),
    recursion_acl: dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclToTerraform(struct!.recursionAcl),
    recursion_enabled: dataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabledToTerraform(struct!.recursionEnabled),
    recursive_clients: dataBloxoneDnsServersResultsInheritanceSourcesRecursiveClientsToTerraform(struct!.recursiveClients),
    resolver_query_timeout: dataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeoutToTerraform(struct!.resolverQueryTimeout),
    secondary_axfr_query_limit: dataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimitToTerraform(struct!.secondaryAxfrQueryLimit),
    secondary_soa_query_limit: dataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimitToTerraform(struct!.secondarySoaQueryLimit),
    sort_list: dataBloxoneDnsServersResultsInheritanceSourcesSortListStructToTerraform(struct!.sortList),
    synthesize_address_records_from_https: dataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToTerraform(struct!.synthesizeAddressRecordsFromHttps),
    transfer_acl: dataBloxoneDnsServersResultsInheritanceSourcesTransferAclToTerraform(struct!.transferAcl),
    update_acl: dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclToTerraform(struct!.updateAcl),
    use_forwarders_for_subzones: dataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzonesToTerraform(struct!.useForwardersForSubzones),
  }
}


export function dataBloxoneDnsServersResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneDnsServersResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_edns_option_in_outgoing_query: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToHclTerraform(struct!.addEdnsOptionInOutgoingQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery",
    },
    custom_root_ns_block: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockToHclTerraform(struct!.customRootNsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock",
    },
    dnssec_validation_block: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockToHclTerraform(struct!.dnssecValidationBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock",
    },
    ecs_block: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesEcsBlockToHclTerraform(struct!.ecsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock",
    },
    filter_aaaa_acl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclToHclTerraform(struct!.filterAaaaAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl",
    },
    filter_aaaa_on_v4: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4ToHclTerraform(struct!.filterAaaaOnV4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4",
    },
    forwarders_block: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockToHclTerraform(struct!.forwardersBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock",
    },
    gss_tsig_enabled: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabledToHclTerraform(struct!.gssTsigEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled",
    },
    kerberos_keys: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysToHclTerraform(struct!.kerberosKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys",
    },
    lame_ttl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesLameTtlToHclTerraform(struct!.lameTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesLameTtl",
    },
    log_query_response: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponseToHclTerraform(struct!.logQueryResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse",
    },
    match_recursive_only: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct!.matchRecursiveOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly",
    },
    max_cache_ttl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtlToHclTerraform(struct!.maxCacheTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl",
    },
    max_negative_ttl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtlToHclTerraform(struct!.maxNegativeTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl",
    },
    minimal_responses: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesMinimalResponsesToHclTerraform(struct!.minimalResponses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses",
    },
    notify: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesNotifyToHclTerraform(struct!.notify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesNotify",
    },
    query_acl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesQueryAclToHclTerraform(struct!.queryAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl",
    },
    query_port: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesQueryPortToHclTerraform(struct!.queryPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesQueryPort",
    },
    recursion_acl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesRecursionAclToHclTerraform(struct!.recursionAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl",
    },
    recursion_enabled: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabledToHclTerraform(struct!.recursionEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled",
    },
    recursive_clients: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesRecursiveClientsToHclTerraform(struct!.recursiveClients),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients",
    },
    resolver_query_timeout: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeoutToHclTerraform(struct!.resolverQueryTimeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout",
    },
    secondary_axfr_query_limit: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimitToHclTerraform(struct!.secondaryAxfrQueryLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit",
    },
    secondary_soa_query_limit: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimitToHclTerraform(struct!.secondarySoaQueryLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit",
    },
    sort_list: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesSortListStructToHclTerraform(struct!.sortList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct",
    },
    synthesize_address_records_from_https: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToHclTerraform(struct!.synthesizeAddressRecordsFromHttps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps",
    },
    transfer_acl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesTransferAclToHclTerraform(struct!.transferAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl",
    },
    update_acl: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesUpdateAclToHclTerraform(struct!.updateAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl",
    },
    use_forwarders_for_subzones: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addEdnsOptionInOutgoingQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addEdnsOptionInOutgoingQuery = this._addEdnsOptionInOutgoingQuery?.internalValue;
    }
    if (this._customRootNsBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRootNsBlock = this._customRootNsBlock?.internalValue;
    }
    if (this._dnssecValidationBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecValidationBlock = this._dnssecValidationBlock?.internalValue;
    }
    if (this._ecsBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsBlock = this._ecsBlock?.internalValue;
    }
    if (this._filterAaaaAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaaAcl = this._filterAaaaAcl?.internalValue;
    }
    if (this._filterAaaaOnV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaaOnV4 = this._filterAaaaOnV4?.internalValue;
    }
    if (this._forwardersBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersBlock = this._forwardersBlock?.internalValue;
    }
    if (this._gssTsigEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled?.internalValue;
    }
    if (this._kerberosKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeys = this._kerberosKeys?.internalValue;
    }
    if (this._lameTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lameTtl = this._lameTtl?.internalValue;
    }
    if (this._logQueryResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryResponse = this._logQueryResponse?.internalValue;
    }
    if (this._matchRecursiveOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRecursiveOnly = this._matchRecursiveOnly?.internalValue;
    }
    if (this._maxCacheTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheTtl = this._maxCacheTtl?.internalValue;
    }
    if (this._maxNegativeTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNegativeTtl = this._maxNegativeTtl?.internalValue;
    }
    if (this._minimalResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalResponses = this._minimalResponses?.internalValue;
    }
    if (this._notify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify?.internalValue;
    }
    if (this._queryAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAcl = this._queryAcl?.internalValue;
    }
    if (this._queryPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPort = this._queryPort?.internalValue;
    }
    if (this._recursionAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionAcl = this._recursionAcl?.internalValue;
    }
    if (this._recursionEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionEnabled = this._recursionEnabled?.internalValue;
    }
    if (this._recursiveClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveClients = this._recursiveClients?.internalValue;
    }
    if (this._resolverQueryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverQueryTimeout = this._resolverQueryTimeout?.internalValue;
    }
    if (this._secondaryAxfrQueryLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAxfrQueryLimit = this._secondaryAxfrQueryLimit?.internalValue;
    }
    if (this._secondarySoaQueryLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySoaQueryLimit = this._secondarySoaQueryLimit?.internalValue;
    }
    if (this._sortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortList = this._sortList?.internalValue;
    }
    if (this._synthesizeAddressRecordsFromHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeAddressRecordsFromHttps = this._synthesizeAddressRecordsFromHttps?.internalValue;
    }
    if (this._transferAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferAcl = this._transferAcl?.internalValue;
    }
    if (this._updateAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAcl = this._updateAcl?.internalValue;
    }
    if (this._useForwardersForSubzones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useForwardersForSubzones = this._useForwardersForSubzones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addEdnsOptionInOutgoingQuery.internalValue = undefined;
      this._customRootNsBlock.internalValue = undefined;
      this._dnssecValidationBlock.internalValue = undefined;
      this._ecsBlock.internalValue = undefined;
      this._filterAaaaAcl.internalValue = undefined;
      this._filterAaaaOnV4.internalValue = undefined;
      this._forwardersBlock.internalValue = undefined;
      this._gssTsigEnabled.internalValue = undefined;
      this._kerberosKeys.internalValue = undefined;
      this._lameTtl.internalValue = undefined;
      this._logQueryResponse.internalValue = undefined;
      this._matchRecursiveOnly.internalValue = undefined;
      this._maxCacheTtl.internalValue = undefined;
      this._maxNegativeTtl.internalValue = undefined;
      this._minimalResponses.internalValue = undefined;
      this._notify.internalValue = undefined;
      this._queryAcl.internalValue = undefined;
      this._queryPort.internalValue = undefined;
      this._recursionAcl.internalValue = undefined;
      this._recursionEnabled.internalValue = undefined;
      this._recursiveClients.internalValue = undefined;
      this._resolverQueryTimeout.internalValue = undefined;
      this._secondaryAxfrQueryLimit.internalValue = undefined;
      this._secondarySoaQueryLimit.internalValue = undefined;
      this._sortList.internalValue = undefined;
      this._synthesizeAddressRecordsFromHttps.internalValue = undefined;
      this._transferAcl.internalValue = undefined;
      this._updateAcl.internalValue = undefined;
      this._useForwardersForSubzones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addEdnsOptionInOutgoingQuery.internalValue = value.addEdnsOptionInOutgoingQuery;
      this._customRootNsBlock.internalValue = value.customRootNsBlock;
      this._dnssecValidationBlock.internalValue = value.dnssecValidationBlock;
      this._ecsBlock.internalValue = value.ecsBlock;
      this._filterAaaaAcl.internalValue = value.filterAaaaAcl;
      this._filterAaaaOnV4.internalValue = value.filterAaaaOnV4;
      this._forwardersBlock.internalValue = value.forwardersBlock;
      this._gssTsigEnabled.internalValue = value.gssTsigEnabled;
      this._kerberosKeys.internalValue = value.kerberosKeys;
      this._lameTtl.internalValue = value.lameTtl;
      this._logQueryResponse.internalValue = value.logQueryResponse;
      this._matchRecursiveOnly.internalValue = value.matchRecursiveOnly;
      this._maxCacheTtl.internalValue = value.maxCacheTtl;
      this._maxNegativeTtl.internalValue = value.maxNegativeTtl;
      this._minimalResponses.internalValue = value.minimalResponses;
      this._notify.internalValue = value.notify;
      this._queryAcl.internalValue = value.queryAcl;
      this._queryPort.internalValue = value.queryPort;
      this._recursionAcl.internalValue = value.recursionAcl;
      this._recursionEnabled.internalValue = value.recursionEnabled;
      this._recursiveClients.internalValue = value.recursiveClients;
      this._resolverQueryTimeout.internalValue = value.resolverQueryTimeout;
      this._secondaryAxfrQueryLimit.internalValue = value.secondaryAxfrQueryLimit;
      this._secondarySoaQueryLimit.internalValue = value.secondarySoaQueryLimit;
      this._sortList.internalValue = value.sortList;
      this._synthesizeAddressRecordsFromHttps.internalValue = value.synthesizeAddressRecordsFromHttps;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones.internalValue = value.useForwardersForSubzones;
    }
  }

  // add_edns_option_in_outgoing_query - computed: true, optional: true, required: false
  private _addEdnsOptionInOutgoingQuery = new DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryOutputReference(this, "add_edns_option_in_outgoing_query");
  public get addEdnsOptionInOutgoingQuery() {
    return this._addEdnsOptionInOutgoingQuery;
  }
  public putAddEdnsOptionInOutgoingQuery(value: DataBloxoneDnsServersResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery) {
    this._addEdnsOptionInOutgoingQuery.internalValue = value;
  }
  public resetAddEdnsOptionInOutgoingQuery() {
    this._addEdnsOptionInOutgoingQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addEdnsOptionInOutgoingQueryInput() {
    return this._addEdnsOptionInOutgoingQuery.internalValue;
  }

  // custom_root_ns_block - computed: true, optional: true, required: false
  private _customRootNsBlock = new DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlockOutputReference(this, "custom_root_ns_block");
  public get customRootNsBlock() {
    return this._customRootNsBlock;
  }
  public putCustomRootNsBlock(value: DataBloxoneDnsServersResultsInheritanceSourcesCustomRootNsBlock) {
    this._customRootNsBlock.internalValue = value;
  }
  public resetCustomRootNsBlock() {
    this._customRootNsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsBlockInput() {
    return this._customRootNsBlock.internalValue;
  }

  // dnssec_validation_block - computed: true, optional: true, required: false
  private _dnssecValidationBlock = new DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlockOutputReference(this, "dnssec_validation_block");
  public get dnssecValidationBlock() {
    return this._dnssecValidationBlock;
  }
  public putDnssecValidationBlock(value: DataBloxoneDnsServersResultsInheritanceSourcesDnssecValidationBlock) {
    this._dnssecValidationBlock.internalValue = value;
  }
  public resetDnssecValidationBlock() {
    this._dnssecValidationBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidationBlockInput() {
    return this._dnssecValidationBlock.internalValue;
  }

  // ecs_block - computed: true, optional: true, required: false
  private _ecsBlock = new DataBloxoneDnsServersResultsInheritanceSourcesEcsBlockOutputReference(this, "ecs_block");
  public get ecsBlock() {
    return this._ecsBlock;
  }
  public putEcsBlock(value: DataBloxoneDnsServersResultsInheritanceSourcesEcsBlock) {
    this._ecsBlock.internalValue = value;
  }
  public resetEcsBlock() {
    this._ecsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsBlockInput() {
    return this._ecsBlock.internalValue;
  }

  // filter_aaaa_acl - computed: true, optional: true, required: false
  private _filterAaaaAcl = new DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAclOutputReference(this, "filter_aaaa_acl");
  public get filterAaaaAcl() {
    return this._filterAaaaAcl;
  }
  public putFilterAaaaAcl(value: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaAcl) {
    this._filterAaaaAcl.internalValue = value;
  }
  public resetFilterAaaaAcl() {
    this._filterAaaaAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaAclInput() {
    return this._filterAaaaAcl.internalValue;
  }

  // filter_aaaa_on_v4 - computed: true, optional: true, required: false
  private _filterAaaaOnV4 = new DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4OutputReference(this, "filter_aaaa_on_v4");
  public get filterAaaaOnV4() {
    return this._filterAaaaOnV4;
  }
  public putFilterAaaaOnV4(value: DataBloxoneDnsServersResultsInheritanceSourcesFilterAaaaOnV4) {
    this._filterAaaaOnV4.internalValue = value;
  }
  public resetFilterAaaaOnV4() {
    this._filterAaaaOnV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaOnV4Input() {
    return this._filterAaaaOnV4.internalValue;
  }

  // forwarders_block - computed: true, optional: true, required: false
  private _forwardersBlock = new DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlockOutputReference(this, "forwarders_block");
  public get forwardersBlock() {
    return this._forwardersBlock;
  }
  public putForwardersBlock(value: DataBloxoneDnsServersResultsInheritanceSourcesForwardersBlock) {
    this._forwardersBlock.internalValue = value;
  }
  public resetForwardersBlock() {
    this._forwardersBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersBlockInput() {
    return this._forwardersBlock.internalValue;
  }

  // gss_tsig_enabled - computed: true, optional: true, required: false
  private _gssTsigEnabled = new DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabledOutputReference(this, "gss_tsig_enabled");
  public get gssTsigEnabled() {
    return this._gssTsigEnabled;
  }
  public putGssTsigEnabled(value: DataBloxoneDnsServersResultsInheritanceSourcesGssTsigEnabled) {
    this._gssTsigEnabled.internalValue = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled.internalValue;
  }

  // kerberos_keys - computed: true, optional: true, required: false
  private _kerberosKeys = new DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeysOutputReference(this, "kerberos_keys");
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DataBloxoneDnsServersResultsInheritanceSourcesKerberosKeys) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
  }

  // lame_ttl - computed: true, optional: true, required: false
  private _lameTtl = new DataBloxoneDnsServersResultsInheritanceSourcesLameTtlOutputReference(this, "lame_ttl");
  public get lameTtl() {
    return this._lameTtl;
  }
  public putLameTtl(value: DataBloxoneDnsServersResultsInheritanceSourcesLameTtl) {
    this._lameTtl.internalValue = value;
  }
  public resetLameTtl() {
    this._lameTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lameTtlInput() {
    return this._lameTtl.internalValue;
  }

  // log_query_response - computed: true, optional: true, required: false
  private _logQueryResponse = new DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponseOutputReference(this, "log_query_response");
  public get logQueryResponse() {
    return this._logQueryResponse;
  }
  public putLogQueryResponse(value: DataBloxoneDnsServersResultsInheritanceSourcesLogQueryResponse) {
    this._logQueryResponse.internalValue = value;
  }
  public resetLogQueryResponse() {
    this._logQueryResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryResponseInput() {
    return this._logQueryResponse.internalValue;
  }

  // match_recursive_only - computed: true, optional: true, required: false
  private _matchRecursiveOnly = new DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnlyOutputReference(this, "match_recursive_only");
  public get matchRecursiveOnly() {
    return this._matchRecursiveOnly;
  }
  public putMatchRecursiveOnly(value: DataBloxoneDnsServersResultsInheritanceSourcesMatchRecursiveOnly) {
    this._matchRecursiveOnly.internalValue = value;
  }
  public resetMatchRecursiveOnly() {
    this._matchRecursiveOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRecursiveOnlyInput() {
    return this._matchRecursiveOnly.internalValue;
  }

  // max_cache_ttl - computed: true, optional: true, required: false
  private _maxCacheTtl = new DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtlOutputReference(this, "max_cache_ttl");
  public get maxCacheTtl() {
    return this._maxCacheTtl;
  }
  public putMaxCacheTtl(value: DataBloxoneDnsServersResultsInheritanceSourcesMaxCacheTtl) {
    this._maxCacheTtl.internalValue = value;
  }
  public resetMaxCacheTtl() {
    this._maxCacheTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheTtlInput() {
    return this._maxCacheTtl.internalValue;
  }

  // max_negative_ttl - computed: true, optional: true, required: false
  private _maxNegativeTtl = new DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtlOutputReference(this, "max_negative_ttl");
  public get maxNegativeTtl() {
    return this._maxNegativeTtl;
  }
  public putMaxNegativeTtl(value: DataBloxoneDnsServersResultsInheritanceSourcesMaxNegativeTtl) {
    this._maxNegativeTtl.internalValue = value;
  }
  public resetMaxNegativeTtl() {
    this._maxNegativeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeTtlInput() {
    return this._maxNegativeTtl.internalValue;
  }

  // minimal_responses - computed: true, optional: true, required: false
  private _minimalResponses = new DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponsesOutputReference(this, "minimal_responses");
  public get minimalResponses() {
    return this._minimalResponses;
  }
  public putMinimalResponses(value: DataBloxoneDnsServersResultsInheritanceSourcesMinimalResponses) {
    this._minimalResponses.internalValue = value;
  }
  public resetMinimalResponses() {
    this._minimalResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalResponsesInput() {
    return this._minimalResponses.internalValue;
  }

  // notify - computed: true, optional: true, required: false
  private _notify = new DataBloxoneDnsServersResultsInheritanceSourcesNotifyOutputReference(this, "notify");
  public get notify() {
    return this._notify;
  }
  public putNotify(value: DataBloxoneDnsServersResultsInheritanceSourcesNotify) {
    this._notify.internalValue = value;
  }
  public resetNotify() {
    this._notify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify.internalValue;
  }

  // query_acl - computed: true, optional: true, required: false
  private _queryAcl = new DataBloxoneDnsServersResultsInheritanceSourcesQueryAclOutputReference(this, "query_acl");
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DataBloxoneDnsServersResultsInheritanceSourcesQueryAcl) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // query_port - computed: true, optional: true, required: false
  private _queryPort = new DataBloxoneDnsServersResultsInheritanceSourcesQueryPortOutputReference(this, "query_port");
  public get queryPort() {
    return this._queryPort;
  }
  public putQueryPort(value: DataBloxoneDnsServersResultsInheritanceSourcesQueryPort) {
    this._queryPort.internalValue = value;
  }
  public resetQueryPort() {
    this._queryPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPortInput() {
    return this._queryPort.internalValue;
  }

  // recursion_acl - computed: true, optional: true, required: false
  private _recursionAcl = new DataBloxoneDnsServersResultsInheritanceSourcesRecursionAclOutputReference(this, "recursion_acl");
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursionAcl) {
    this._recursionAcl.internalValue = value;
  }
  public resetRecursionAcl() {
    this._recursionAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionAclInput() {
    return this._recursionAcl.internalValue;
  }

  // recursion_enabled - computed: true, optional: true, required: false
  private _recursionEnabled = new DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabledOutputReference(this, "recursion_enabled");
  public get recursionEnabled() {
    return this._recursionEnabled;
  }
  public putRecursionEnabled(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursionEnabled) {
    this._recursionEnabled.internalValue = value;
  }
  public resetRecursionEnabled() {
    this._recursionEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionEnabledInput() {
    return this._recursionEnabled.internalValue;
  }

  // recursive_clients - computed: true, optional: true, required: false
  private _recursiveClients = new DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClientsOutputReference(this, "recursive_clients");
  public get recursiveClients() {
    return this._recursiveClients;
  }
  public putRecursiveClients(value: DataBloxoneDnsServersResultsInheritanceSourcesRecursiveClients) {
    this._recursiveClients.internalValue = value;
  }
  public resetRecursiveClients() {
    this._recursiveClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveClientsInput() {
    return this._recursiveClients.internalValue;
  }

  // resolver_query_timeout - computed: true, optional: true, required: false
  private _resolverQueryTimeout = new DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeoutOutputReference(this, "resolver_query_timeout");
  public get resolverQueryTimeout() {
    return this._resolverQueryTimeout;
  }
  public putResolverQueryTimeout(value: DataBloxoneDnsServersResultsInheritanceSourcesResolverQueryTimeout) {
    this._resolverQueryTimeout.internalValue = value;
  }
  public resetResolverQueryTimeout() {
    this._resolverQueryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryTimeoutInput() {
    return this._resolverQueryTimeout.internalValue;
  }

  // secondary_axfr_query_limit - computed: true, optional: true, required: false
  private _secondaryAxfrQueryLimit = new DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimitOutputReference(this, "secondary_axfr_query_limit");
  public get secondaryAxfrQueryLimit() {
    return this._secondaryAxfrQueryLimit;
  }
  public putSecondaryAxfrQueryLimit(value: DataBloxoneDnsServersResultsInheritanceSourcesSecondaryAxfrQueryLimit) {
    this._secondaryAxfrQueryLimit.internalValue = value;
  }
  public resetSecondaryAxfrQueryLimit() {
    this._secondaryAxfrQueryLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAxfrQueryLimitInput() {
    return this._secondaryAxfrQueryLimit.internalValue;
  }

  // secondary_soa_query_limit - computed: true, optional: true, required: false
  private _secondarySoaQueryLimit = new DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimitOutputReference(this, "secondary_soa_query_limit");
  public get secondarySoaQueryLimit() {
    return this._secondarySoaQueryLimit;
  }
  public putSecondarySoaQueryLimit(value: DataBloxoneDnsServersResultsInheritanceSourcesSecondarySoaQueryLimit) {
    this._secondarySoaQueryLimit.internalValue = value;
  }
  public resetSecondarySoaQueryLimit() {
    this._secondarySoaQueryLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySoaQueryLimitInput() {
    return this._secondarySoaQueryLimit.internalValue;
  }

  // sort_list - computed: true, optional: true, required: false
  private _sortList = new DataBloxoneDnsServersResultsInheritanceSourcesSortListStructOutputReference(this, "sort_list");
  public get sortList() {
    return this._sortList;
  }
  public putSortList(value: DataBloxoneDnsServersResultsInheritanceSourcesSortListStruct) {
    this._sortList.internalValue = value;
  }
  public resetSortList() {
    this._sortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortListInput() {
    return this._sortList.internalValue;
  }

  // synthesize_address_records_from_https - computed: true, optional: true, required: false
  private _synthesizeAddressRecordsFromHttps = new DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsOutputReference(this, "synthesize_address_records_from_https");
  public get synthesizeAddressRecordsFromHttps() {
    return this._synthesizeAddressRecordsFromHttps;
  }
  public putSynthesizeAddressRecordsFromHttps(value: DataBloxoneDnsServersResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps) {
    this._synthesizeAddressRecordsFromHttps.internalValue = value;
  }
  public resetSynthesizeAddressRecordsFromHttps() {
    this._synthesizeAddressRecordsFromHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeAddressRecordsFromHttpsInput() {
    return this._synthesizeAddressRecordsFromHttps.internalValue;
  }

  // transfer_acl - computed: true, optional: true, required: false
  private _transferAcl = new DataBloxoneDnsServersResultsInheritanceSourcesTransferAclOutputReference(this, "transfer_acl");
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DataBloxoneDnsServersResultsInheritanceSourcesTransferAcl) {
    this._transferAcl.internalValue = value;
  }
  public resetTransferAcl() {
    this._transferAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAclInput() {
    return this._transferAcl.internalValue;
  }

  // update_acl - computed: true, optional: true, required: false
  private _updateAcl = new DataBloxoneDnsServersResultsInheritanceSourcesUpdateAclOutputReference(this, "update_acl");
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DataBloxoneDnsServersResultsInheritanceSourcesUpdateAcl) {
    this._updateAcl.internalValue = value;
  }
  public resetUpdateAcl() {
    this._updateAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAclInput() {
    return this._updateAcl.internalValue;
  }

  // use_forwarders_for_subzones - computed: true, optional: true, required: false
  private _useForwardersForSubzones = new DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzonesOutputReference(this, "use_forwarders_for_subzones");
  public get useForwardersForSubzones() {
    return this._useForwardersForSubzones;
  }
  public putUseForwardersForSubzones(value: DataBloxoneDnsServersResultsInheritanceSourcesUseForwardersForSubzones) {
    this._useForwardersForSubzones.internalValue = value;
  }
  public resetUseForwardersForSubzones() {
    this._useForwardersForSubzones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardersForSubzonesInput() {
    return this._useForwardersForSubzones.internalValue;
  }
}
export interface DataBloxoneDnsServersResultsKerberosKeys {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#key DataBloxoneDnsServers#key}
  */
  readonly key: string;
}

export function dataBloxoneDnsServersResultsKerberosKeysToTerraform(struct?: DataBloxoneDnsServersResultsKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsServersResultsKerberosKeysToHclTerraform(struct?: DataBloxoneDnsServersResultsKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsKerberosKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsKerberosKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsKerberosKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataBloxoneDnsServersResultsKerberosKeysList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsKerberosKeys[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsKerberosKeysOutputReference {
    return new DataBloxoneDnsServersResultsKerberosKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsQueryAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#key DataBloxoneDnsServers#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsServersResultsQueryAclTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsQueryAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsServersResultsQueryAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsQueryAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsQueryAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsQueryAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsQueryAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsQueryAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#access DataBloxoneDnsServers#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#acl DataBloxoneDnsServers#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#address DataBloxoneDnsServers#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#element DataBloxoneDnsServers#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#tsig_key DataBloxoneDnsServers#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsServersResultsQueryAclTsigKey;
}

export function dataBloxoneDnsServersResultsQueryAclToTerraform(struct?: DataBloxoneDnsServersResultsQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsServersResultsQueryAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsServersResultsQueryAclToHclTerraform(struct?: DataBloxoneDnsServersResultsQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dataBloxoneDnsServersResultsQueryAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsQueryAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsQueryAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsQueryAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsQueryAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsServersResultsQueryAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DataBloxoneDnsServersResultsQueryAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsQueryAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsQueryAclOutputReference {
    return new DataBloxoneDnsServersResultsQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsRecursionAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#key DataBloxoneDnsServers#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsServersResultsRecursionAclTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsRecursionAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsServersResultsRecursionAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsRecursionAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsRecursionAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsRecursionAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsRecursionAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsRecursionAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#access DataBloxoneDnsServers#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#acl DataBloxoneDnsServers#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#address DataBloxoneDnsServers#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#element DataBloxoneDnsServers#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#tsig_key DataBloxoneDnsServers#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsServersResultsRecursionAclTsigKey;
}

export function dataBloxoneDnsServersResultsRecursionAclToTerraform(struct?: DataBloxoneDnsServersResultsRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsServersResultsRecursionAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsServersResultsRecursionAclToHclTerraform(struct?: DataBloxoneDnsServersResultsRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dataBloxoneDnsServersResultsRecursionAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsRecursionAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsRecursionAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsRecursionAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsRecursionAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsRecursionAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsServersResultsRecursionAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DataBloxoneDnsServersResultsRecursionAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsRecursionAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsRecursionAclOutputReference {
    return new DataBloxoneDnsServersResultsRecursionAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsSortListStruct {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#acl DataBloxoneDnsServers#acl}
  */
  readonly acl?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#element DataBloxoneDnsServers#element}
  */
  readonly element: string;
  /**
  * Optional. The prioritized networks. If empty, the value of _source_ or networks from _acl_ is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#prioritized_networks DataBloxoneDnsServers#prioritized_networks}
  */
  readonly prioritizedNetworks?: string[];
  /**
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#source DataBloxoneDnsServers#source}
  */
  readonly source?: string;
}

export function dataBloxoneDnsServersResultsSortListStructToTerraform(struct?: DataBloxoneDnsServersResultsSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    element: cdktf.stringToTerraform(struct!.element),
    prioritized_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prioritizedNetworks),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataBloxoneDnsServersResultsSortListStructToHclTerraform(struct?: DataBloxoneDnsServersResultsSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prioritized_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prioritizedNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsSortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsSortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._prioritizedNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioritizedNetworks = this._prioritizedNetworks;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsSortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._element = undefined;
      this._prioritizedNetworks = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._element = value.element;
      this._prioritizedNetworks = value.prioritizedNetworks;
      this._source = value.source;
    }
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // element - computed: true, optional: false, required: true
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // prioritized_networks - computed: true, optional: true, required: false
  private _prioritizedNetworks?: string[]; 
  public get prioritizedNetworks() {
    return this.getListAttribute('prioritized_networks');
  }
  public set prioritizedNetworks(value: string[]) {
    this._prioritizedNetworks = value;
  }
  public resetPrioritizedNetworks() {
    this._prioritizedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritizedNetworksInput() {
    return this._prioritizedNetworks;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataBloxoneDnsServersResultsSortListStructList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsSortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsSortListStructOutputReference {
    return new DataBloxoneDnsServersResultsSortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsTransferAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#key DataBloxoneDnsServers#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsServersResultsTransferAclTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsTransferAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsServersResultsTransferAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsTransferAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsTransferAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsTransferAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsTransferAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsTransferAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#access DataBloxoneDnsServers#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#acl DataBloxoneDnsServers#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#address DataBloxoneDnsServers#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#element DataBloxoneDnsServers#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#tsig_key DataBloxoneDnsServers#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsServersResultsTransferAclTsigKey;
}

export function dataBloxoneDnsServersResultsTransferAclToTerraform(struct?: DataBloxoneDnsServersResultsTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsServersResultsTransferAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsServersResultsTransferAclToHclTerraform(struct?: DataBloxoneDnsServersResultsTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dataBloxoneDnsServersResultsTransferAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsTransferAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsTransferAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsTransferAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsTransferAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsServersResultsTransferAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DataBloxoneDnsServersResultsTransferAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsTransferAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsTransferAclOutputReference {
    return new DataBloxoneDnsServersResultsTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsUpdateAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#key DataBloxoneDnsServers#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsServersResultsUpdateAclTsigKeyToTerraform(struct?: DataBloxoneDnsServersResultsUpdateAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsServersResultsUpdateAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsServersResultsUpdateAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsUpdateAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsServersResultsUpdateAclTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsUpdateAclTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataBloxoneDnsServersResultsUpdateAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#access DataBloxoneDnsServers#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#acl DataBloxoneDnsServers#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#address DataBloxoneDnsServers#address}
  */
  readonly address?: string;
  /**
  * Type of element.
  * 
  *   Allowed values:
  *   * _any_
  *   * _ip_
  *   * _acl_
  *   * _tsig_key_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#element DataBloxoneDnsServers#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#tsig_key DataBloxoneDnsServers#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsServersResultsUpdateAclTsigKey;
}

export function dataBloxoneDnsServersResultsUpdateAclToTerraform(struct?: DataBloxoneDnsServersResultsUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsServersResultsUpdateAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsServersResultsUpdateAclToHclTerraform(struct?: DataBloxoneDnsServersResultsUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element: {
      value: cdktf.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: dataBloxoneDnsServersResultsUpdateAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsUpdateAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsUpdateAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsUpdateAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._acl = undefined;
      this._address = undefined;
      this._element = undefined;
      this._tsigKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._acl = value.acl;
      this._address = value.address;
      this._element = value.element;
      this._tsigKey.internalValue = value.tsigKey;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // element - computed: true, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDnsServersResultsUpdateAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsServersResultsUpdateAclTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }
}

export class DataBloxoneDnsServersResultsUpdateAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResultsUpdateAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsUpdateAclOutputReference {
    return new DataBloxoneDnsServersResultsUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResultsViews {
}

export function dataBloxoneDnsServersResultsViewsToTerraform(struct?: DataBloxoneDnsServersResultsViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsServersResultsViewsToHclTerraform(struct?: DataBloxoneDnsServersResultsViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsServersResultsViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResultsViews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResultsViews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }
}

export class DataBloxoneDnsServersResultsViewsList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsServersResultsViewsOutputReference {
    return new DataBloxoneDnsServersResultsViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsServersResults {
  /**
  * _add_edns_option_in_outgoing_query_ adds client IP, MAC address and view name into outgoing recursive query. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#add_edns_option_in_outgoing_query DataBloxoneDnsServers#add_edns_option_in_outgoing_query}
  */
  readonly addEdnsOptionInOutgoingQuery?: boolean | cdktf.IResolvable;
  /**
  * Optional. Controls manual/automatic views ordering.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#auto_sort_views DataBloxoneDnsServers#auto_sort_views}
  */
  readonly autoSortViews?: boolean | cdktf.IResolvable;
  /**
  * Optional. Comment for configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#comment DataBloxoneDnsServers#comment}
  */
  readonly comment?: string;
  /**
  * Optional. List of custom root nameservers. The order does not matter.  Error if empty while _custom_root_ns_enabled_ is _true_. Error if there are duplicate items in the list.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#custom_root_ns DataBloxoneDnsServers#custom_root_ns}
  */
  readonly customRootNs?: DataBloxoneDnsServersResultsCustomRootNs[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to use custom root nameservers instead of the default ones.  The _custom_root_ns_ is validated when enabled.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#custom_root_ns_enabled DataBloxoneDnsServers#custom_root_ns_enabled}
  */
  readonly customRootNsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to perform DNSSEC validation. Ignored if _dnssec_enabled_ is _false_.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#dnssec_enable_validation DataBloxoneDnsServers#dnssec_enable_validation}
  */
  readonly dnssecEnableValidation?: boolean | cdktf.IResolvable;
  /**
  * Optional. Master toggle for all DNSSEC processing. Other _dnssec_*_ configuration is unused if this is disabled.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#dnssec_enabled DataBloxoneDnsServers#dnssec_enabled}
  */
  readonly dnssecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. DNSSEC trust anchors.  Error if there are list items with duplicate (_zone_, _sep_, _algorithm_) combinations.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#dnssec_trust_anchors DataBloxoneDnsServers#dnssec_trust_anchors}
  */
  readonly dnssecTrustAnchors?: DataBloxoneDnsServersResultsDnssecTrustAnchors[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to reject expired DNSSEC keys. Ignored if either _dnssec_enabled_ or _dnssec_enable_validation_ is _false_.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#dnssec_validate_expiry DataBloxoneDnsServers#dnssec_validate_expiry}
  */
  readonly dnssecValidateExpiry?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to enable EDNS client subnet for recursive queries. Other _ecs_*_ fields are ignored if this field is not enabled.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#ecs_enabled DataBloxoneDnsServers#ecs_enabled}
  */
  readonly ecsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to enable ECS options in outbound queries. This functionality has additional overhead so it is disabled by default.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#ecs_forwarding DataBloxoneDnsServers#ecs_forwarding}
  */
  readonly ecsForwarding?: boolean | cdktf.IResolvable;
  /**
  * Optional. Maximum scope length for v4 ECS.  Unsigned integer, min 1 max 24  Defaults to 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#ecs_prefix_v4 DataBloxoneDnsServers#ecs_prefix_v4}
  */
  readonly ecsPrefixV4?: number;
  /**
  * Optional. Maximum scope length for v6 ECS.  Unsigned integer, min 1 max 56  Defaults to 56.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#ecs_prefix_v6 DataBloxoneDnsServers#ecs_prefix_v6}
  */
  readonly ecsPrefixV6?: number;
  /**
  * Optional. List of zones where ECS queries may be sent.  Error if empty while _ecs_enabled_ is _true_. Error if there are duplicate FQDNs in the list.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#ecs_zones DataBloxoneDnsServers#ecs_zones}
  */
  readonly ecsZones?: DataBloxoneDnsServersResultsEcsZones[] | cdktf.IResolvable;
  /**
  * Optional. Specifies a list of client addresses for which AAAA filtering is to be applied.  Defaults to _empty_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#filter_aaaa_acl DataBloxoneDnsServers#filter_aaaa_acl}
  */
  readonly filterAaaaAcl?: DataBloxoneDnsServersResultsFilterAaaaAcl[] | cdktf.IResolvable;
  /**
  * _filter_aaaa_on_v4_ allows named to omit some IPv6 addresses when responding to IPv4 clients.  Allowed values: * _yes_, * _no_, * _break_dnssec_.  Defaults to _no_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#filter_aaaa_on_v4 DataBloxoneDnsServers#filter_aaaa_on_v4}
  */
  readonly filterAaaaOnV4?: string;
  /**
  * Optional. List of forwarders.  Error if empty while _forwarders_only_ or _use_root_forwarders_for_local_resolution_with_b1td_ is _true_. Error if there are items in the list with duplicate addresses.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#forwarders DataBloxoneDnsServers#forwarders}
  */
  readonly forwarders?: DataBloxoneDnsServersResultsForwarders[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to only forward.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#forwarders_only DataBloxoneDnsServers#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#gss_tsig_enabled DataBloxoneDnsServers#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#inheritance_sources DataBloxoneDnsServers#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneDnsServersResultsInheritanceSources;
  /**
  * _kerberos_keys_ contains a list of keys for GSS-TSIG signed dynamic updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#kerberos_keys DataBloxoneDnsServers#kerberos_keys}
  */
  readonly kerberosKeys?: DataBloxoneDnsServersResultsKerberosKeys[] | cdktf.IResolvable;
  /**
  * Optional. Unused in the current on-prem DNS server implementation.  Unsigned integer, min 0 max 3600 (1h).  Defaults to 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#lame_ttl DataBloxoneDnsServers#lame_ttl}
  */
  readonly lameTtl?: number;
  /**
  * Optional. Control DNS query/response logging functionality.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#log_query_response DataBloxoneDnsServers#log_query_response}
  */
  readonly logQueryResponse?: boolean | cdktf.IResolvable;
  /**
  * Optional. If _true_ only recursive queries from matching clients access the view.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#match_recursive_only DataBloxoneDnsServers#match_recursive_only}
  */
  readonly matchRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional. Seconds to cache positive responses.  Unsigned integer, min 1 max 604800 (7d).  Defaults to 604800 (7d).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#max_cache_ttl DataBloxoneDnsServers#max_cache_ttl}
  */
  readonly maxCacheTtl?: number;
  /**
  * Optional. Seconds to cache negative responses.  Unsigned integer, min 1 max 604800 (7d).  Defaults to 10800 (3h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#max_negative_ttl DataBloxoneDnsServers#max_negative_ttl}
  */
  readonly maxNegativeTtl?: number;
  /**
  * Optional. When enabled, the DNS server will only add records to the authority and additional data sections when they are required.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#minimal_responses DataBloxoneDnsServers#minimal_responses}
  */
  readonly minimalResponses?: boolean | cdktf.IResolvable;
  /**
  * Name of configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#name DataBloxoneDnsServers#name}
  */
  readonly name: string;
  /**
  * _notify_ all external secondary DNS servers.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#notify DataBloxoneDnsServers#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * Optional. Clients must match this ACL to make authoritative queries. Also used for recursive queries if that ACL is unset.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#query_acl DataBloxoneDnsServers#query_acl}
  */
  readonly queryAcl?: DataBloxoneDnsServersResultsQueryAcl[] | cdktf.IResolvable;
  /**
  * Optional. Source port for outbound DNS queries. When set to 0 the port is unspecified and the implementation may randomize it using any available ports.  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#query_port DataBloxoneDnsServers#query_port}
  */
  readonly queryPort?: number;
  /**
  * Optional. Clients must match this ACL to make recursive queries. If this ACL is empty, then the _query_acl_ field will be used instead.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#recursion_acl DataBloxoneDnsServers#recursion_acl}
  */
  readonly recursionAcl?: DataBloxoneDnsServersResultsRecursionAcl[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to allow recursive DNS queries.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#recursion_enabled DataBloxoneDnsServers#recursion_enabled}
  */
  readonly recursionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. Defines the number of simultaneous recursive lookups the server will perform on behalf of its clients.  Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#recursive_clients DataBloxoneDnsServers#recursive_clients}
  */
  readonly recursiveClients?: number;
  /**
  * Optional. Seconds before a recursive query times out.  Unsigned integer, min 10 max 30.  Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#resolver_query_timeout DataBloxoneDnsServers#resolver_query_timeout}
  */
  readonly resolverQueryTimeout?: number;
  /**
  * Optional. Maximum concurrent inbound AXFRs. When set to 0 a host-dependent default will be used.  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#secondary_axfr_query_limit DataBloxoneDnsServers#secondary_axfr_query_limit}
  */
  readonly secondaryAxfrQueryLimit?: number;
  /**
  * Optional. Maximum concurrent outbound SOA queries. When set to 0 a host-dependent default will be used.  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#secondary_soa_query_limit DataBloxoneDnsServers#secondary_soa_query_limit}
  */
  readonly secondarySoaQueryLimit?: number;
  /**
  * Optional. Specifies a sorted network list for A/AAAA records in DNS query response.  Defaults to _empty_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#sort_list DataBloxoneDnsServers#sort_list}
  */
  readonly sortList?: DataBloxoneDnsServersResultsSortListStruct[] | cdktf.IResolvable;
  /**
  * _synthesize_address_records_from_https_ enables/disables creation of A/AAAA records from HTTPS RR Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#synthesize_address_records_from_https DataBloxoneDnsServers#synthesize_address_records_from_https}
  */
  readonly synthesizeAddressRecordsFromHttps?: boolean | cdktf.IResolvable;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#tags DataBloxoneDnsServers#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Optional. Clients must match this ACL to receive zone transfers.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#transfer_acl DataBloxoneDnsServers#transfer_acl}
  */
  readonly transferAcl?: DataBloxoneDnsServersResultsTransferAcl[] | cdktf.IResolvable;
  /**
  * Optional. Specifies which hosts are allowed to issue Dynamic DNS updates for authoritative zones of _primary_type_ _cloud_.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#update_acl DataBloxoneDnsServers#update_acl}
  */
  readonly updateAcl?: DataBloxoneDnsServersResultsUpdateAcl[] | cdktf.IResolvable;
  /**
  * Optional. Use default forwarders to resolve queries for subzones.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#use_forwarders_for_subzones DataBloxoneDnsServers#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: boolean | cdktf.IResolvable;
  /**
  * _use_root_forwarders_for_local_resolution_with_b1td_ allows DNS recursive queries sent to root forwarders for local resolution when deployed alongside BloxOne Thread Defense. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#use_root_forwarders_for_local_resolution_with_b1td DataBloxoneDnsServers#use_root_forwarders_for_local_resolution_with_b1td}
  */
  readonly useRootForwardersForLocalResolutionWithB1Td?: boolean | cdktf.IResolvable;
}

export function dataBloxoneDnsServersResultsToTerraform(struct?: DataBloxoneDnsServersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_edns_option_in_outgoing_query: cdktf.booleanToTerraform(struct!.addEdnsOptionInOutgoingQuery),
    auto_sort_views: cdktf.booleanToTerraform(struct!.autoSortViews),
    comment: cdktf.stringToTerraform(struct!.comment),
    custom_root_ns: cdktf.listMapper(dataBloxoneDnsServersResultsCustomRootNsToTerraform, false)(struct!.customRootNs),
    custom_root_ns_enabled: cdktf.booleanToTerraform(struct!.customRootNsEnabled),
    dnssec_enable_validation: cdktf.booleanToTerraform(struct!.dnssecEnableValidation),
    dnssec_enabled: cdktf.booleanToTerraform(struct!.dnssecEnabled),
    dnssec_trust_anchors: cdktf.listMapper(dataBloxoneDnsServersResultsDnssecTrustAnchorsToTerraform, false)(struct!.dnssecTrustAnchors),
    dnssec_validate_expiry: cdktf.booleanToTerraform(struct!.dnssecValidateExpiry),
    ecs_enabled: cdktf.booleanToTerraform(struct!.ecsEnabled),
    ecs_forwarding: cdktf.booleanToTerraform(struct!.ecsForwarding),
    ecs_prefix_v4: cdktf.numberToTerraform(struct!.ecsPrefixV4),
    ecs_prefix_v6: cdktf.numberToTerraform(struct!.ecsPrefixV6),
    ecs_zones: cdktf.listMapper(dataBloxoneDnsServersResultsEcsZonesToTerraform, false)(struct!.ecsZones),
    filter_aaaa_acl: cdktf.listMapper(dataBloxoneDnsServersResultsFilterAaaaAclToTerraform, false)(struct!.filterAaaaAcl),
    filter_aaaa_on_v4: cdktf.stringToTerraform(struct!.filterAaaaOnV4),
    forwarders: cdktf.listMapper(dataBloxoneDnsServersResultsForwardersToTerraform, false)(struct!.forwarders),
    forwarders_only: cdktf.booleanToTerraform(struct!.forwardersOnly),
    gss_tsig_enabled: cdktf.booleanToTerraform(struct!.gssTsigEnabled),
    inheritance_sources: dataBloxoneDnsServersResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    kerberos_keys: cdktf.listMapper(dataBloxoneDnsServersResultsKerberosKeysToTerraform, false)(struct!.kerberosKeys),
    lame_ttl: cdktf.numberToTerraform(struct!.lameTtl),
    log_query_response: cdktf.booleanToTerraform(struct!.logQueryResponse),
    match_recursive_only: cdktf.booleanToTerraform(struct!.matchRecursiveOnly),
    max_cache_ttl: cdktf.numberToTerraform(struct!.maxCacheTtl),
    max_negative_ttl: cdktf.numberToTerraform(struct!.maxNegativeTtl),
    minimal_responses: cdktf.booleanToTerraform(struct!.minimalResponses),
    name: cdktf.stringToTerraform(struct!.name),
    notify: cdktf.booleanToTerraform(struct!.notify),
    query_acl: cdktf.listMapper(dataBloxoneDnsServersResultsQueryAclToTerraform, false)(struct!.queryAcl),
    query_port: cdktf.numberToTerraform(struct!.queryPort),
    recursion_acl: cdktf.listMapper(dataBloxoneDnsServersResultsRecursionAclToTerraform, false)(struct!.recursionAcl),
    recursion_enabled: cdktf.booleanToTerraform(struct!.recursionEnabled),
    recursive_clients: cdktf.numberToTerraform(struct!.recursiveClients),
    resolver_query_timeout: cdktf.numberToTerraform(struct!.resolverQueryTimeout),
    secondary_axfr_query_limit: cdktf.numberToTerraform(struct!.secondaryAxfrQueryLimit),
    secondary_soa_query_limit: cdktf.numberToTerraform(struct!.secondarySoaQueryLimit),
    sort_list: cdktf.listMapper(dataBloxoneDnsServersResultsSortListStructToTerraform, false)(struct!.sortList),
    synthesize_address_records_from_https: cdktf.booleanToTerraform(struct!.synthesizeAddressRecordsFromHttps),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transfer_acl: cdktf.listMapper(dataBloxoneDnsServersResultsTransferAclToTerraform, false)(struct!.transferAcl),
    update_acl: cdktf.listMapper(dataBloxoneDnsServersResultsUpdateAclToTerraform, false)(struct!.updateAcl),
    use_forwarders_for_subzones: cdktf.booleanToTerraform(struct!.useForwardersForSubzones),
    use_root_forwarders_for_local_resolution_with_b1td: cdktf.booleanToTerraform(struct!.useRootForwardersForLocalResolutionWithB1Td),
  }
}


export function dataBloxoneDnsServersResultsToHclTerraform(struct?: DataBloxoneDnsServersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_edns_option_in_outgoing_query: {
      value: cdktf.booleanToHclTerraform(struct!.addEdnsOptionInOutgoingQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_sort_views: {
      value: cdktf.booleanToHclTerraform(struct!.autoSortViews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_root_ns: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsCustomRootNsToHclTerraform, false)(struct!.customRootNs),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsCustomRootNsList",
    },
    custom_root_ns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customRootNsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dnssec_enable_validation: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecEnableValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dnssec_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dnssec_trust_anchors: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsDnssecTrustAnchorsToHclTerraform, false)(struct!.dnssecTrustAnchors),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsDnssecTrustAnchorsList",
    },
    dnssec_validate_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecValidateExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ecsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecs_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.ecsForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecs_prefix_v4: {
      value: cdktf.numberToHclTerraform(struct!.ecsPrefixV4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ecs_prefix_v6: {
      value: cdktf.numberToHclTerraform(struct!.ecsPrefixV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ecs_zones: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsEcsZonesToHclTerraform, false)(struct!.ecsZones),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsEcsZonesList",
    },
    filter_aaaa_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsFilterAaaaAclToHclTerraform, false)(struct!.filterAaaaAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsFilterAaaaAclList",
    },
    filter_aaaa_on_v4: {
      value: cdktf.stringToHclTerraform(struct!.filterAaaaOnV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarders: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsForwardersToHclTerraform, false)(struct!.forwarders),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsForwardersList",
    },
    forwarders_only: {
      value: cdktf.booleanToHclTerraform(struct!.forwardersOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gss_tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gssTsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inheritance_sources: {
      value: dataBloxoneDnsServersResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsServersResultsInheritanceSources",
    },
    kerberos_keys: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsKerberosKeysToHclTerraform, false)(struct!.kerberosKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsKerberosKeysList",
    },
    lame_ttl: {
      value: cdktf.numberToHclTerraform(struct!.lameTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_query_response: {
      value: cdktf.booleanToHclTerraform(struct!.logQueryResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_recursive_only: {
      value: cdktf.booleanToHclTerraform(struct!.matchRecursiveOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_negative_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxNegativeTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimal_responses: {
      value: cdktf.booleanToHclTerraform(struct!.minimalResponses),
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
    notify: {
      value: cdktf.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsQueryAclToHclTerraform, false)(struct!.queryAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsQueryAclList",
    },
    query_port: {
      value: cdktf.numberToHclTerraform(struct!.queryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recursion_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsRecursionAclToHclTerraform, false)(struct!.recursionAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsRecursionAclList",
    },
    recursion_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.recursionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_clients: {
      value: cdktf.numberToHclTerraform(struct!.recursiveClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolver_query_timeout: {
      value: cdktf.numberToHclTerraform(struct!.resolverQueryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_axfr_query_limit: {
      value: cdktf.numberToHclTerraform(struct!.secondaryAxfrQueryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_soa_query_limit: {
      value: cdktf.numberToHclTerraform(struct!.secondarySoaQueryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_list: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsSortListStructToHclTerraform, false)(struct!.sortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsSortListStructList",
    },
    synthesize_address_records_from_https: {
      value: cdktf.booleanToHclTerraform(struct!.synthesizeAddressRecordsFromHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transfer_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsTransferAclToHclTerraform, false)(struct!.transferAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsTransferAclList",
    },
    update_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsServersResultsUpdateAclToHclTerraform, false)(struct!.updateAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsServersResultsUpdateAclList",
    },
    use_forwarders_for_subzones: {
      value: cdktf.booleanToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_root_forwarders_for_local_resolution_with_b1td: {
      value: cdktf.booleanToHclTerraform(struct!.useRootForwardersForLocalResolutionWithB1Td),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsServersResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsServersResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addEdnsOptionInOutgoingQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.addEdnsOptionInOutgoingQuery = this._addEdnsOptionInOutgoingQuery;
    }
    if (this._autoSortViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSortViews = this._autoSortViews;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._customRootNs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRootNs = this._customRootNs?.internalValue;
    }
    if (this._customRootNsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRootNsEnabled = this._customRootNsEnabled;
    }
    if (this._dnssecEnableValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecEnableValidation = this._dnssecEnableValidation;
    }
    if (this._dnssecEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecEnabled = this._dnssecEnabled;
    }
    if (this._dnssecTrustAnchors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecTrustAnchors = this._dnssecTrustAnchors?.internalValue;
    }
    if (this._dnssecValidateExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecValidateExpiry = this._dnssecValidateExpiry;
    }
    if (this._ecsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsEnabled = this._ecsEnabled;
    }
    if (this._ecsForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsForwarding = this._ecsForwarding;
    }
    if (this._ecsPrefixV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsPrefixV4 = this._ecsPrefixV4;
    }
    if (this._ecsPrefixV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsPrefixV6 = this._ecsPrefixV6;
    }
    if (this._ecsZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsZones = this._ecsZones?.internalValue;
    }
    if (this._filterAaaaAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaaAcl = this._filterAaaaAcl?.internalValue;
    }
    if (this._filterAaaaOnV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAaaaOnV4 = this._filterAaaaOnV4;
    }
    if (this._forwarders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwarders = this._forwarders?.internalValue;
    }
    if (this._forwardersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersOnly = this._forwardersOnly;
    }
    if (this._gssTsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled;
    }
    if (this._inheritanceSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritanceSources = this._inheritanceSources?.internalValue;
    }
    if (this._kerberosKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeys = this._kerberosKeys?.internalValue;
    }
    if (this._lameTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.lameTtl = this._lameTtl;
    }
    if (this._logQueryResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryResponse = this._logQueryResponse;
    }
    if (this._matchRecursiveOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRecursiveOnly = this._matchRecursiveOnly;
    }
    if (this._maxCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheTtl = this._maxCacheTtl;
    }
    if (this._maxNegativeTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNegativeTtl = this._maxNegativeTtl;
    }
    if (this._minimalResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalResponses = this._minimalResponses;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    if (this._queryAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAcl = this._queryAcl?.internalValue;
    }
    if (this._queryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPort = this._queryPort;
    }
    if (this._recursionAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionAcl = this._recursionAcl?.internalValue;
    }
    if (this._recursionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionEnabled = this._recursionEnabled;
    }
    if (this._recursiveClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveClients = this._recursiveClients;
    }
    if (this._resolverQueryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverQueryTimeout = this._resolverQueryTimeout;
    }
    if (this._secondaryAxfrQueryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAxfrQueryLimit = this._secondaryAxfrQueryLimit;
    }
    if (this._secondarySoaQueryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySoaQueryLimit = this._secondarySoaQueryLimit;
    }
    if (this._sortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortList = this._sortList?.internalValue;
    }
    if (this._synthesizeAddressRecordsFromHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeAddressRecordsFromHttps = this._synthesizeAddressRecordsFromHttps;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._transferAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferAcl = this._transferAcl?.internalValue;
    }
    if (this._updateAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAcl = this._updateAcl?.internalValue;
    }
    if (this._useForwardersForSubzones !== undefined) {
      hasAnyValues = true;
      internalValueResult.useForwardersForSubzones = this._useForwardersForSubzones;
    }
    if (this._useRootForwardersForLocalResolutionWithB1Td !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRootForwardersForLocalResolutionWithB1Td = this._useRootForwardersForLocalResolutionWithB1Td;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsServersResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addEdnsOptionInOutgoingQuery = undefined;
      this._autoSortViews = undefined;
      this._comment = undefined;
      this._customRootNs.internalValue = undefined;
      this._customRootNsEnabled = undefined;
      this._dnssecEnableValidation = undefined;
      this._dnssecEnabled = undefined;
      this._dnssecTrustAnchors.internalValue = undefined;
      this._dnssecValidateExpiry = undefined;
      this._ecsEnabled = undefined;
      this._ecsForwarding = undefined;
      this._ecsPrefixV4 = undefined;
      this._ecsPrefixV6 = undefined;
      this._ecsZones.internalValue = undefined;
      this._filterAaaaAcl.internalValue = undefined;
      this._filterAaaaOnV4 = undefined;
      this._forwarders.internalValue = undefined;
      this._forwardersOnly = undefined;
      this._gssTsigEnabled = undefined;
      this._inheritanceSources.internalValue = undefined;
      this._kerberosKeys.internalValue = undefined;
      this._lameTtl = undefined;
      this._logQueryResponse = undefined;
      this._matchRecursiveOnly = undefined;
      this._maxCacheTtl = undefined;
      this._maxNegativeTtl = undefined;
      this._minimalResponses = undefined;
      this._name = undefined;
      this._notify = undefined;
      this._queryAcl.internalValue = undefined;
      this._queryPort = undefined;
      this._recursionAcl.internalValue = undefined;
      this._recursionEnabled = undefined;
      this._recursiveClients = undefined;
      this._resolverQueryTimeout = undefined;
      this._secondaryAxfrQueryLimit = undefined;
      this._secondarySoaQueryLimit = undefined;
      this._sortList.internalValue = undefined;
      this._synthesizeAddressRecordsFromHttps = undefined;
      this._tags = undefined;
      this._transferAcl.internalValue = undefined;
      this._updateAcl.internalValue = undefined;
      this._useForwardersForSubzones = undefined;
      this._useRootForwardersForLocalResolutionWithB1Td = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addEdnsOptionInOutgoingQuery = value.addEdnsOptionInOutgoingQuery;
      this._autoSortViews = value.autoSortViews;
      this._comment = value.comment;
      this._customRootNs.internalValue = value.customRootNs;
      this._customRootNsEnabled = value.customRootNsEnabled;
      this._dnssecEnableValidation = value.dnssecEnableValidation;
      this._dnssecEnabled = value.dnssecEnabled;
      this._dnssecTrustAnchors.internalValue = value.dnssecTrustAnchors;
      this._dnssecValidateExpiry = value.dnssecValidateExpiry;
      this._ecsEnabled = value.ecsEnabled;
      this._ecsForwarding = value.ecsForwarding;
      this._ecsPrefixV4 = value.ecsPrefixV4;
      this._ecsPrefixV6 = value.ecsPrefixV6;
      this._ecsZones.internalValue = value.ecsZones;
      this._filterAaaaAcl.internalValue = value.filterAaaaAcl;
      this._filterAaaaOnV4 = value.filterAaaaOnV4;
      this._forwarders.internalValue = value.forwarders;
      this._forwardersOnly = value.forwardersOnly;
      this._gssTsigEnabled = value.gssTsigEnabled;
      this._inheritanceSources.internalValue = value.inheritanceSources;
      this._kerberosKeys.internalValue = value.kerberosKeys;
      this._lameTtl = value.lameTtl;
      this._logQueryResponse = value.logQueryResponse;
      this._matchRecursiveOnly = value.matchRecursiveOnly;
      this._maxCacheTtl = value.maxCacheTtl;
      this._maxNegativeTtl = value.maxNegativeTtl;
      this._minimalResponses = value.minimalResponses;
      this._name = value.name;
      this._notify = value.notify;
      this._queryAcl.internalValue = value.queryAcl;
      this._queryPort = value.queryPort;
      this._recursionAcl.internalValue = value.recursionAcl;
      this._recursionEnabled = value.recursionEnabled;
      this._recursiveClients = value.recursiveClients;
      this._resolverQueryTimeout = value.resolverQueryTimeout;
      this._secondaryAxfrQueryLimit = value.secondaryAxfrQueryLimit;
      this._secondarySoaQueryLimit = value.secondarySoaQueryLimit;
      this._sortList.internalValue = value.sortList;
      this._synthesizeAddressRecordsFromHttps = value.synthesizeAddressRecordsFromHttps;
      this._tags = value.tags;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones = value.useForwardersForSubzones;
      this._useRootForwardersForLocalResolutionWithB1Td = value.useRootForwardersForLocalResolutionWithB1Td;
    }
  }

  // add_edns_option_in_outgoing_query - computed: true, optional: true, required: false
  private _addEdnsOptionInOutgoingQuery?: boolean | cdktf.IResolvable; 
  public get addEdnsOptionInOutgoingQuery() {
    return this.getBooleanAttribute('add_edns_option_in_outgoing_query');
  }
  public set addEdnsOptionInOutgoingQuery(value: boolean | cdktf.IResolvable) {
    this._addEdnsOptionInOutgoingQuery = value;
  }
  public resetAddEdnsOptionInOutgoingQuery() {
    this._addEdnsOptionInOutgoingQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addEdnsOptionInOutgoingQueryInput() {
    return this._addEdnsOptionInOutgoingQuery;
  }

  // auto_sort_views - computed: true, optional: true, required: false
  private _autoSortViews?: boolean | cdktf.IResolvable; 
  public get autoSortViews() {
    return this.getBooleanAttribute('auto_sort_views');
  }
  public set autoSortViews(value: boolean | cdktf.IResolvable) {
    this._autoSortViews = value;
  }
  public resetAutoSortViews() {
    this._autoSortViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSortViewsInput() {
    return this._autoSortViews;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_root_ns - computed: true, optional: true, required: false
  private _customRootNs = new DataBloxoneDnsServersResultsCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }
  public putCustomRootNs(value: DataBloxoneDnsServersResultsCustomRootNs[] | cdktf.IResolvable) {
    this._customRootNs.internalValue = value;
  }
  public resetCustomRootNs() {
    this._customRootNs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsInput() {
    return this._customRootNs.internalValue;
  }

  // custom_root_ns_enabled - computed: true, optional: true, required: false
  private _customRootNsEnabled?: boolean | cdktf.IResolvable; 
  public get customRootNsEnabled() {
    return this.getBooleanAttribute('custom_root_ns_enabled');
  }
  public set customRootNsEnabled(value: boolean | cdktf.IResolvable) {
    this._customRootNsEnabled = value;
  }
  public resetCustomRootNsEnabled() {
    this._customRootNsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootNsEnabledInput() {
    return this._customRootNsEnabled;
  }

  // dnssec_enable_validation - computed: true, optional: true, required: false
  private _dnssecEnableValidation?: boolean | cdktf.IResolvable; 
  public get dnssecEnableValidation() {
    return this.getBooleanAttribute('dnssec_enable_validation');
  }
  public set dnssecEnableValidation(value: boolean | cdktf.IResolvable) {
    this._dnssecEnableValidation = value;
  }
  public resetDnssecEnableValidation() {
    this._dnssecEnableValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecEnableValidationInput() {
    return this._dnssecEnableValidation;
  }

  // dnssec_enabled - computed: true, optional: true, required: false
  private _dnssecEnabled?: boolean | cdktf.IResolvable; 
  public get dnssecEnabled() {
    return this.getBooleanAttribute('dnssec_enabled');
  }
  public set dnssecEnabled(value: boolean | cdktf.IResolvable) {
    this._dnssecEnabled = value;
  }
  public resetDnssecEnabled() {
    this._dnssecEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecEnabledInput() {
    return this._dnssecEnabled;
  }

  // dnssec_root_keys - computed: true, optional: false, required: false
  private _dnssecRootKeys = new DataBloxoneDnsServersResultsDnssecRootKeysList(this, "dnssec_root_keys", false);
  public get dnssecRootKeys() {
    return this._dnssecRootKeys;
  }

  // dnssec_trust_anchors - computed: true, optional: true, required: false
  private _dnssecTrustAnchors = new DataBloxoneDnsServersResultsDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }
  public putDnssecTrustAnchors(value: DataBloxoneDnsServersResultsDnssecTrustAnchors[] | cdktf.IResolvable) {
    this._dnssecTrustAnchors.internalValue = value;
  }
  public resetDnssecTrustAnchors() {
    this._dnssecTrustAnchors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTrustAnchorsInput() {
    return this._dnssecTrustAnchors.internalValue;
  }

  // dnssec_validate_expiry - computed: true, optional: true, required: false
  private _dnssecValidateExpiry?: boolean | cdktf.IResolvable; 
  public get dnssecValidateExpiry() {
    return this.getBooleanAttribute('dnssec_validate_expiry');
  }
  public set dnssecValidateExpiry(value: boolean | cdktf.IResolvable) {
    this._dnssecValidateExpiry = value;
  }
  public resetDnssecValidateExpiry() {
    this._dnssecValidateExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidateExpiryInput() {
    return this._dnssecValidateExpiry;
  }

  // ecs_enabled - computed: true, optional: true, required: false
  private _ecsEnabled?: boolean | cdktf.IResolvable; 
  public get ecsEnabled() {
    return this.getBooleanAttribute('ecs_enabled');
  }
  public set ecsEnabled(value: boolean | cdktf.IResolvable) {
    this._ecsEnabled = value;
  }
  public resetEcsEnabled() {
    this._ecsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsEnabledInput() {
    return this._ecsEnabled;
  }

  // ecs_forwarding - computed: true, optional: true, required: false
  private _ecsForwarding?: boolean | cdktf.IResolvable; 
  public get ecsForwarding() {
    return this.getBooleanAttribute('ecs_forwarding');
  }
  public set ecsForwarding(value: boolean | cdktf.IResolvable) {
    this._ecsForwarding = value;
  }
  public resetEcsForwarding() {
    this._ecsForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsForwardingInput() {
    return this._ecsForwarding;
  }

  // ecs_prefix_v4 - computed: true, optional: true, required: false
  private _ecsPrefixV4?: number; 
  public get ecsPrefixV4() {
    return this.getNumberAttribute('ecs_prefix_v4');
  }
  public set ecsPrefixV4(value: number) {
    this._ecsPrefixV4 = value;
  }
  public resetEcsPrefixV4() {
    this._ecsPrefixV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPrefixV4Input() {
    return this._ecsPrefixV4;
  }

  // ecs_prefix_v6 - computed: true, optional: true, required: false
  private _ecsPrefixV6?: number; 
  public get ecsPrefixV6() {
    return this.getNumberAttribute('ecs_prefix_v6');
  }
  public set ecsPrefixV6(value: number) {
    this._ecsPrefixV6 = value;
  }
  public resetEcsPrefixV6() {
    this._ecsPrefixV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsPrefixV6Input() {
    return this._ecsPrefixV6;
  }

  // ecs_zones - computed: true, optional: true, required: false
  private _ecsZones = new DataBloxoneDnsServersResultsEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
  public putEcsZones(value: DataBloxoneDnsServersResultsEcsZones[] | cdktf.IResolvable) {
    this._ecsZones.internalValue = value;
  }
  public resetEcsZones() {
    this._ecsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsZonesInput() {
    return this._ecsZones.internalValue;
  }

  // filter_aaaa_acl - computed: true, optional: true, required: false
  private _filterAaaaAcl = new DataBloxoneDnsServersResultsFilterAaaaAclList(this, "filter_aaaa_acl", false);
  public get filterAaaaAcl() {
    return this._filterAaaaAcl;
  }
  public putFilterAaaaAcl(value: DataBloxoneDnsServersResultsFilterAaaaAcl[] | cdktf.IResolvable) {
    this._filterAaaaAcl.internalValue = value;
  }
  public resetFilterAaaaAcl() {
    this._filterAaaaAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaAclInput() {
    return this._filterAaaaAcl.internalValue;
  }

  // filter_aaaa_on_v4 - computed: true, optional: true, required: false
  private _filterAaaaOnV4?: string; 
  public get filterAaaaOnV4() {
    return this.getStringAttribute('filter_aaaa_on_v4');
  }
  public set filterAaaaOnV4(value: string) {
    this._filterAaaaOnV4 = value;
  }
  public resetFilterAaaaOnV4() {
    this._filterAaaaOnV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAaaaOnV4Input() {
    return this._filterAaaaOnV4;
  }

  // forwarders - computed: true, optional: true, required: false
  private _forwarders = new DataBloxoneDnsServersResultsForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }
  public putForwarders(value: DataBloxoneDnsServersResultsForwarders[] | cdktf.IResolvable) {
    this._forwarders.internalValue = value;
  }
  public resetForwarders() {
    this._forwarders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders.internalValue;
  }

  // forwarders_only - computed: true, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
  }

  // gss_tsig_enabled - computed: true, optional: true, required: false
  private _gssTsigEnabled?: boolean | cdktf.IResolvable; 
  public get gssTsigEnabled() {
    return this.getBooleanAttribute('gss_tsig_enabled');
  }
  public set gssTsigEnabled(value: boolean | cdktf.IResolvable) {
    this._gssTsigEnabled = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DataBloxoneDnsServersResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneDnsServersResultsInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // kerberos_keys - computed: true, optional: true, required: false
  private _kerberosKeys = new DataBloxoneDnsServersResultsKerberosKeysList(this, "kerberos_keys", false);
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DataBloxoneDnsServersResultsKerberosKeys[] | cdktf.IResolvable) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
  }

  // lame_ttl - computed: true, optional: true, required: false
  private _lameTtl?: number; 
  public get lameTtl() {
    return this.getNumberAttribute('lame_ttl');
  }
  public set lameTtl(value: number) {
    this._lameTtl = value;
  }
  public resetLameTtl() {
    this._lameTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lameTtlInput() {
    return this._lameTtl;
  }

  // log_query_response - computed: true, optional: true, required: false
  private _logQueryResponse?: boolean | cdktf.IResolvable; 
  public get logQueryResponse() {
    return this.getBooleanAttribute('log_query_response');
  }
  public set logQueryResponse(value: boolean | cdktf.IResolvable) {
    this._logQueryResponse = value;
  }
  public resetLogQueryResponse() {
    this._logQueryResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryResponseInput() {
    return this._logQueryResponse;
  }

  // match_recursive_only - computed: true, optional: true, required: false
  private _matchRecursiveOnly?: boolean | cdktf.IResolvable; 
  public get matchRecursiveOnly() {
    return this.getBooleanAttribute('match_recursive_only');
  }
  public set matchRecursiveOnly(value: boolean | cdktf.IResolvable) {
    this._matchRecursiveOnly = value;
  }
  public resetMatchRecursiveOnly() {
    this._matchRecursiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRecursiveOnlyInput() {
    return this._matchRecursiveOnly;
  }

  // max_cache_ttl - computed: true, optional: true, required: false
  private _maxCacheTtl?: number; 
  public get maxCacheTtl() {
    return this.getNumberAttribute('max_cache_ttl');
  }
  public set maxCacheTtl(value: number) {
    this._maxCacheTtl = value;
  }
  public resetMaxCacheTtl() {
    this._maxCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheTtlInput() {
    return this._maxCacheTtl;
  }

  // max_negative_ttl - computed: true, optional: true, required: false
  private _maxNegativeTtl?: number; 
  public get maxNegativeTtl() {
    return this.getNumberAttribute('max_negative_ttl');
  }
  public set maxNegativeTtl(value: number) {
    this._maxNegativeTtl = value;
  }
  public resetMaxNegativeTtl() {
    this._maxNegativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeTtlInput() {
    return this._maxNegativeTtl;
  }

  // minimal_responses - computed: true, optional: true, required: false
  private _minimalResponses?: boolean | cdktf.IResolvable; 
  public get minimalResponses() {
    return this.getBooleanAttribute('minimal_responses');
  }
  public set minimalResponses(value: boolean | cdktf.IResolvable) {
    this._minimalResponses = value;
  }
  public resetMinimalResponses() {
    this._minimalResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalResponsesInput() {
    return this._minimalResponses;
  }

  // name - computed: true, optional: false, required: true
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

  // notify - computed: true, optional: true, required: false
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // query_acl - computed: true, optional: true, required: false
  private _queryAcl = new DataBloxoneDnsServersResultsQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DataBloxoneDnsServersResultsQueryAcl[] | cdktf.IResolvable) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // query_port - computed: true, optional: true, required: false
  private _queryPort?: number; 
  public get queryPort() {
    return this.getNumberAttribute('query_port');
  }
  public set queryPort(value: number) {
    this._queryPort = value;
  }
  public resetQueryPort() {
    this._queryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPortInput() {
    return this._queryPort;
  }

  // recursion_acl - computed: true, optional: true, required: false
  private _recursionAcl = new DataBloxoneDnsServersResultsRecursionAclList(this, "recursion_acl", false);
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DataBloxoneDnsServersResultsRecursionAcl[] | cdktf.IResolvable) {
    this._recursionAcl.internalValue = value;
  }
  public resetRecursionAcl() {
    this._recursionAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionAclInput() {
    return this._recursionAcl.internalValue;
  }

  // recursion_enabled - computed: true, optional: true, required: false
  private _recursionEnabled?: boolean | cdktf.IResolvable; 
  public get recursionEnabled() {
    return this.getBooleanAttribute('recursion_enabled');
  }
  public set recursionEnabled(value: boolean | cdktf.IResolvable) {
    this._recursionEnabled = value;
  }
  public resetRecursionEnabled() {
    this._recursionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionEnabledInput() {
    return this._recursionEnabled;
  }

  // recursive_clients - computed: true, optional: true, required: false
  private _recursiveClients?: number; 
  public get recursiveClients() {
    return this.getNumberAttribute('recursive_clients');
  }
  public set recursiveClients(value: number) {
    this._recursiveClients = value;
  }
  public resetRecursiveClients() {
    this._recursiveClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveClientsInput() {
    return this._recursiveClients;
  }

  // resolver_query_timeout - computed: true, optional: true, required: false
  private _resolverQueryTimeout?: number; 
  public get resolverQueryTimeout() {
    return this.getNumberAttribute('resolver_query_timeout');
  }
  public set resolverQueryTimeout(value: number) {
    this._resolverQueryTimeout = value;
  }
  public resetResolverQueryTimeout() {
    this._resolverQueryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryTimeoutInput() {
    return this._resolverQueryTimeout;
  }

  // secondary_axfr_query_limit - computed: true, optional: true, required: false
  private _secondaryAxfrQueryLimit?: number; 
  public get secondaryAxfrQueryLimit() {
    return this.getNumberAttribute('secondary_axfr_query_limit');
  }
  public set secondaryAxfrQueryLimit(value: number) {
    this._secondaryAxfrQueryLimit = value;
  }
  public resetSecondaryAxfrQueryLimit() {
    this._secondaryAxfrQueryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAxfrQueryLimitInput() {
    return this._secondaryAxfrQueryLimit;
  }

  // secondary_soa_query_limit - computed: true, optional: true, required: false
  private _secondarySoaQueryLimit?: number; 
  public get secondarySoaQueryLimit() {
    return this.getNumberAttribute('secondary_soa_query_limit');
  }
  public set secondarySoaQueryLimit(value: number) {
    this._secondarySoaQueryLimit = value;
  }
  public resetSecondarySoaQueryLimit() {
    this._secondarySoaQueryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySoaQueryLimitInput() {
    return this._secondarySoaQueryLimit;
  }

  // sort_list - computed: true, optional: true, required: false
  private _sortList = new DataBloxoneDnsServersResultsSortListStructList(this, "sort_list", false);
  public get sortList() {
    return this._sortList;
  }
  public putSortList(value: DataBloxoneDnsServersResultsSortListStruct[] | cdktf.IResolvable) {
    this._sortList.internalValue = value;
  }
  public resetSortList() {
    this._sortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortListInput() {
    return this._sortList.internalValue;
  }

  // synthesize_address_records_from_https - computed: true, optional: true, required: false
  private _synthesizeAddressRecordsFromHttps?: boolean | cdktf.IResolvable; 
  public get synthesizeAddressRecordsFromHttps() {
    return this.getBooleanAttribute('synthesize_address_records_from_https');
  }
  public set synthesizeAddressRecordsFromHttps(value: boolean | cdktf.IResolvable) {
    this._synthesizeAddressRecordsFromHttps = value;
  }
  public resetSynthesizeAddressRecordsFromHttps() {
    this._synthesizeAddressRecordsFromHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeAddressRecordsFromHttpsInput() {
    return this._synthesizeAddressRecordsFromHttps;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // transfer_acl - computed: true, optional: true, required: false
  private _transferAcl = new DataBloxoneDnsServersResultsTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DataBloxoneDnsServersResultsTransferAcl[] | cdktf.IResolvable) {
    this._transferAcl.internalValue = value;
  }
  public resetTransferAcl() {
    this._transferAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAclInput() {
    return this._transferAcl.internalValue;
  }

  // update_acl - computed: true, optional: true, required: false
  private _updateAcl = new DataBloxoneDnsServersResultsUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DataBloxoneDnsServersResultsUpdateAcl[] | cdktf.IResolvable) {
    this._updateAcl.internalValue = value;
  }
  public resetUpdateAcl() {
    this._updateAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAclInput() {
    return this._updateAcl.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // use_forwarders_for_subzones - computed: true, optional: true, required: false
  private _useForwardersForSubzones?: boolean | cdktf.IResolvable; 
  public get useForwardersForSubzones() {
    return this.getBooleanAttribute('use_forwarders_for_subzones');
  }
  public set useForwardersForSubzones(value: boolean | cdktf.IResolvable) {
    this._useForwardersForSubzones = value;
  }
  public resetUseForwardersForSubzones() {
    this._useForwardersForSubzones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardersForSubzonesInput() {
    return this._useForwardersForSubzones;
  }

  // use_root_forwarders_for_local_resolution_with_b1td - computed: true, optional: true, required: false
  private _useRootForwardersForLocalResolutionWithB1Td?: boolean | cdktf.IResolvable; 
  public get useRootForwardersForLocalResolutionWithB1Td() {
    return this.getBooleanAttribute('use_root_forwarders_for_local_resolution_with_b1td');
  }
  public set useRootForwardersForLocalResolutionWithB1Td(value: boolean | cdktf.IResolvable) {
    this._useRootForwardersForLocalResolutionWithB1Td = value;
  }
  public resetUseRootForwardersForLocalResolutionWithB1Td() {
    this._useRootForwardersForLocalResolutionWithB1Td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRootForwardersForLocalResolutionWithB1TdInput() {
    return this._useRootForwardersForLocalResolutionWithB1Td;
  }

  // views - computed: true, optional: false, required: false
  private _views = new DataBloxoneDnsServersResultsViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
}

export class DataBloxoneDnsServersResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsServersResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsServersResultsOutputReference {
    return new DataBloxoneDnsServersResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers bloxone_dns_servers}
*/
export class DataBloxoneDnsServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDnsServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDnsServers to import
  * @param importFromId The id of the existing DataBloxoneDnsServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDnsServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_servers bloxone_dns_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDnsServersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDnsServersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_servers',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneDnsServersResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
