// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDnsViewsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#filters DataBloxoneDnsViews#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tag_filters DataBloxoneDnsViews#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDnsViewsResultsCustomRootNs {
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
  */
  readonly address: string;
  /**
  * FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#fqdn DataBloxoneDnsViews#fqdn}
  */
  readonly fqdn: string;
}

export function dataBloxoneDnsViewsResultsCustomRootNsToTerraform(struct?: DataBloxoneDnsViewsResultsCustomRootNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dataBloxoneDnsViewsResultsCustomRootNsToHclTerraform(struct?: DataBloxoneDnsViewsResultsCustomRootNs | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsCustomRootNs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsCustomRootNs | cdktf.IResolvable | undefined) {
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

export class DataBloxoneDnsViewsResultsCustomRootNsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsCustomRootNs[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsCustomRootNsOutputReference {
    return new DataBloxoneDnsViewsResultsCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsDnssecRootKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#algorithm DataBloxoneDnsViews#algorithm}
  */
  readonly algorithm: number;
  /**
  * DNSSEC key data. Non-empty, valid base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#public_key DataBloxoneDnsViews#public_key}
  */
  readonly publicKey: string;
  /**
  * Optional. Secure Entry Point flag.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#sep DataBloxoneDnsViews#sep}
  */
  readonly sep?: boolean | cdktf.IResolvable;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#zone DataBloxoneDnsViews#zone}
  */
  readonly zone: string;
}

export function dataBloxoneDnsViewsResultsDnssecRootKeysToTerraform(struct?: DataBloxoneDnsViewsResultsDnssecRootKeys): any {
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


export function dataBloxoneDnsViewsResultsDnssecRootKeysToHclTerraform(struct?: DataBloxoneDnsViewsResultsDnssecRootKeys): any {
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

export class DataBloxoneDnsViewsResultsDnssecRootKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsDnssecRootKeys | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsDnssecRootKeys | undefined) {
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

export class DataBloxoneDnsViewsResultsDnssecRootKeysList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsDnssecRootKeys[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsDnssecRootKeysOutputReference {
    return new DataBloxoneDnsViewsResultsDnssecRootKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsDnssecTrustAnchors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#algorithm DataBloxoneDnsViews#algorithm}
  */
  readonly algorithm: number;
  /**
  * DNSSEC key data. Non-empty, valid base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#public_key DataBloxoneDnsViews#public_key}
  */
  readonly publicKey: string;
  /**
  * Optional. Secure Entry Point flag.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#sep DataBloxoneDnsViews#sep}
  */
  readonly sep?: boolean | cdktf.IResolvable;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#zone DataBloxoneDnsViews#zone}
  */
  readonly zone: string;
}

export function dataBloxoneDnsViewsResultsDnssecTrustAnchorsToTerraform(struct?: DataBloxoneDnsViewsResultsDnssecTrustAnchors | cdktf.IResolvable): any {
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


export function dataBloxoneDnsViewsResultsDnssecTrustAnchorsToHclTerraform(struct?: DataBloxoneDnsViewsResultsDnssecTrustAnchors | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsDnssecTrustAnchors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsDnssecTrustAnchors | cdktf.IResolvable | undefined) {
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

export class DataBloxoneDnsViewsResultsDnssecTrustAnchorsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsDnssecTrustAnchors[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsDnssecTrustAnchorsOutputReference {
    return new DataBloxoneDnsViewsResultsDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsDtcConfig {
  /**
  * Optional. Default TTL for synthesized DTC records (value in seconds).  Defaults to 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#default_ttl DataBloxoneDnsViews#default_ttl}
  */
  readonly defaultTtl?: number;
}

export function dataBloxoneDnsViewsResultsDtcConfigToTerraform(struct?: DataBloxoneDnsViewsResultsDtcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
  }
}


export function dataBloxoneDnsViewsResultsDtcConfigToHclTerraform(struct?: DataBloxoneDnsViewsResultsDtcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsDtcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsDtcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsDtcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTtl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTtl = value.defaultTtl;
    }
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }
}
export interface DataBloxoneDnsViewsResultsEcsZones {
  /**
  * Access control for zone. Allowed values:
  *  * _allow_
  *  * _deny_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access: string;
  /**
  * Zone FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#fqdn DataBloxoneDnsViews#fqdn}
  */
  readonly fqdn: string;
}

export function dataBloxoneDnsViewsResultsEcsZonesToTerraform(struct?: DataBloxoneDnsViewsResultsEcsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dataBloxoneDnsViewsResultsEcsZonesToHclTerraform(struct?: DataBloxoneDnsViewsResultsEcsZones | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsEcsZones | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsEcsZones | cdktf.IResolvable | undefined) {
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

export class DataBloxoneDnsViewsResultsEcsZonesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsEcsZones[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsEcsZonesOutputReference {
    return new DataBloxoneDnsViewsResultsEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#key DataBloxoneDnsViews#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsViewsResultsFilterAaaaAclTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsViewsResultsFilterAaaaAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsFilterAaaaAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsFilterAaaaAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tsig_key DataBloxoneDnsViews#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey;
}

export function dataBloxoneDnsViewsResultsFilterAaaaAclToTerraform(struct?: DataBloxoneDnsViewsResultsFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsViewsResultsFilterAaaaAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsViewsResultsFilterAaaaAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsFilterAaaaAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsViewsResultsFilterAaaaAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsFilterAaaaAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsFilterAaaaAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsFilterAaaaAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsFilterAaaaAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsViewsResultsFilterAaaaAclTsigKey) {
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

export class DataBloxoneDnsViewsResultsFilterAaaaAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsFilterAaaaAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsFilterAaaaAclOutputReference {
    return new DataBloxoneDnsViewsResultsFilterAaaaAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsForwarders {
  /**
  * Server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
  */
  readonly address: string;
  /**
  * Server FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#fqdn DataBloxoneDnsViews#fqdn}
  */
  readonly fqdn: string;
}

export function dataBloxoneDnsViewsResultsForwardersToTerraform(struct?: DataBloxoneDnsViewsResultsForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dataBloxoneDnsViewsResultsForwardersToHclTerraform(struct?: DataBloxoneDnsViewsResultsForwarders | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsForwarders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsForwarders | cdktf.IResolvable | undefined) {
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

export class DataBloxoneDnsViewsResultsForwardersList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsForwarders[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsForwardersOutputReference {
    return new DataBloxoneDnsViewsResultsForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNs | undefined) {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_root_ns - computed: true, optional: false, required: false
  private _customRootNs = new DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }

  // custom_root_ns_enabled - computed: true, optional: false, required: false
  public get customRootNsEnabled() {
    return this.getBooleanAttribute('custom_root_ns_enabled');
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchors | undefined) {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValue | undefined) {
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
  private _dnssecTrustAnchors = new DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }

  // dnssec_validate_expiry - computed: true, optional: false, required: false
  public get dnssecValidateExpiry() {
    return this.getBooleanAttribute('dnssec_validate_expiry');
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtlToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtlToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#default_ttl DataBloxoneDnsViews#default_ttl}
  */
  readonly defaultTtl?: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtlToTerraform(struct!.defaultTtl),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTtl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTtl.internalValue = value.defaultTtl;
    }
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl = new DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigDefaultTtl) {
    this._defaultTtl.internalValue = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl.internalValue;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZones {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZonesToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZonesToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZones | undefined) {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZonesOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValue | undefined) {
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
  private _ecsZones = new DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSizeToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSizeToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKey {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4 {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4ToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4ToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4 | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwarders {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwardersToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwardersToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwarders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwarders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwarders | undefined) {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwardersList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwardersOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forwarders - computed: true, optional: false, required: false
  private _forwarders = new DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueForwardersList(this, "forwarders", false);
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabledToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabledToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesLameTtlToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesLameTtlToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesLameTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnlyToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtlToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtlToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtlToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtlToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSizeToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSizeToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponsesToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponsesToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesNotify {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesNotifyToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesNotifyToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesNotify | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesNotifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesNotify | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesNotify | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKey {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKey {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabledToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabledToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesSortListValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesSortListValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesSortListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesSortListValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesSortListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesSortListValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesSortListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesSortListValue | undefined) {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesSortListValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesSortListValueOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesSortListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesSortListStructToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesSortListStructToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesSortListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesSortListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKey {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKey {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueOutputReference {
    return new DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzonesToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpireToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValue {
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValueToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValueToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mname - computed: true, optional: false, required: false
  public get mname() {
    return this.getStringAttribute('mname');
  }

  // protocol_mname - computed: true, optional: false, required: false
  public get protocolMname() {
    return this.getStringAttribute('protocol_mname');
  }

  // use_default_mname - computed: true, optional: false, required: false
  public get useDefaultMname() {
    return this.getBooleanAttribute('use_default_mname');
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefreshToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetryToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#action DataBloxoneDnsViews#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRnameToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#default_ttl DataBloxoneDnsViews#default_ttl}
  */
  readonly defaultTtl?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#expire DataBloxoneDnsViews#expire}
  */
  readonly expire?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#mname_block DataBloxoneDnsViews#mname_block}
  */
  readonly mnameBlock?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#negative_ttl DataBloxoneDnsViews#negative_ttl}
  */
  readonly negativeTtl?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#protocol_rname DataBloxoneDnsViews#protocol_rname}
  */
  readonly protocolRname?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#refresh DataBloxoneDnsViews#refresh}
  */
  readonly refresh?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#retry DataBloxoneDnsViews#retry}
  */
  readonly retry?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#rname DataBloxoneDnsViews#rname}
  */
  readonly rname?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct!.defaultTtl),
    expire: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpireToTerraform(struct!.expire),
    mname_block: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct!.mnameBlock),
    negative_ttl: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct!.negativeTtl),
    protocol_rname: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct!.protocolRname),
    refresh: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefreshToTerraform(struct!.refresh),
    retry: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetryToTerraform(struct!.retry),
    rname: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRnameToTerraform(struct!.rname),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl",
    },
    expire: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct!.expire),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire",
    },
    mname_block: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct!.mnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock",
    },
    negative_ttl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct!.negativeTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl",
    },
    protocol_rname: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct!.protocolRname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname",
    },
    refresh: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct!.refresh),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh",
    },
    retry: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry",
    },
    rname: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct!.rname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl?.internalValue;
    }
    if (this._expire?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire?.internalValue;
    }
    if (this._mnameBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mnameBlock = this._mnameBlock?.internalValue;
    }
    if (this._negativeTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTtl = this._negativeTtl?.internalValue;
    }
    if (this._protocolRname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolRname = this._protocolRname?.internalValue;
    }
    if (this._refresh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._rname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rname = this._rname?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTtl.internalValue = undefined;
      this._expire.internalValue = undefined;
      this._mnameBlock.internalValue = undefined;
      this._negativeTtl.internalValue = undefined;
      this._protocolRname.internalValue = undefined;
      this._refresh.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._rname.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTtl.internalValue = value.defaultTtl;
      this._expire.internalValue = value.expire;
      this._mnameBlock.internalValue = value.mnameBlock;
      this._negativeTtl.internalValue = value.negativeTtl;
      this._protocolRname.internalValue = value.protocolRname;
      this._refresh.internalValue = value.refresh;
      this._retry.internalValue = value.retry;
      this._rname.internalValue = value.rname;
    }
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityDefaultTtl) {
    this._defaultTtl.internalValue = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl.internalValue;
  }

  // expire - computed: true, optional: true, required: false
  private _expire = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpireOutputReference(this, "expire");
  public get expire() {
    return this._expire;
  }
  public putExpire(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityExpire) {
    this._expire.internalValue = value;
  }
  public resetExpire() {
    this._expire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire.internalValue;
  }

  // mname_block - computed: true, optional: true, required: false
  private _mnameBlock = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlockOutputReference(this, "mname_block");
  public get mnameBlock() {
    return this._mnameBlock;
  }
  public putMnameBlock(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityMnameBlock) {
    this._mnameBlock.internalValue = value;
  }
  public resetMnameBlock() {
    this._mnameBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnameBlockInput() {
    return this._mnameBlock.internalValue;
  }

  // negative_ttl - computed: true, optional: true, required: false
  private _negativeTtl = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtlOutputReference(this, "negative_ttl");
  public get negativeTtl() {
    return this._negativeTtl;
  }
  public putNegativeTtl(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityNegativeTtl) {
    this._negativeTtl.internalValue = value;
  }
  public resetNegativeTtl() {
    this._negativeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTtlInput() {
    return this._negativeTtl.internalValue;
  }

  // protocol_rname - computed: true, optional: true, required: false
  private _protocolRname = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRnameOutputReference(this, "protocol_rname");
  public get protocolRname() {
    return this._protocolRname;
  }
  public putProtocolRname(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityProtocolRname) {
    this._protocolRname.internalValue = value;
  }
  public resetProtocolRname() {
    this._protocolRname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolRnameInput() {
    return this._protocolRname.internalValue;
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefreshOutputReference(this, "refresh");
  public get refresh() {
    return this._refresh;
  }
  public putRefresh(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRefresh) {
    this._refresh.internalValue = value;
  }
  public resetRefresh() {
    this._refresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh.internalValue;
  }

  // retry - computed: true, optional: true, required: false
  private _retry = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // rname - computed: true, optional: true, required: false
  private _rname = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRnameOutputReference(this, "rname");
  public get rname() {
    return this._rname;
  }
  public putRname(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityRname) {
    this._rname.internalValue = value;
  }
  public resetRname() {
    this._rname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnameInput() {
    return this._rname.internalValue;
  }
}
export interface DataBloxoneDnsViewsResultsInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#add_edns_option_in_outgoing_query DataBloxoneDnsViews#add_edns_option_in_outgoing_query}
  */
  readonly addEdnsOptionInOutgoingQuery?: DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#custom_root_ns_block DataBloxoneDnsViews#custom_root_ns_block}
  */
  readonly customRootNsBlock?: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#dnssec_validation_block DataBloxoneDnsViews#dnssec_validation_block}
  */
  readonly dnssecValidationBlock?: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#dtc_config DataBloxoneDnsViews#dtc_config}
  */
  readonly dtcConfig?: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#ecs_block DataBloxoneDnsViews#ecs_block}
  */
  readonly ecsBlock?: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#edns_udp_size DataBloxoneDnsViews#edns_udp_size}
  */
  readonly ednsUdpSize?: DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#filter_aaaa_acl DataBloxoneDnsViews#filter_aaaa_acl}
  */
  readonly filterAaaaAcl?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#filter_aaaa_on_v4 DataBloxoneDnsViews#filter_aaaa_on_v4}
  */
  readonly filterAaaaOnV4?: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#forwarders_block DataBloxoneDnsViews#forwarders_block}
  */
  readonly forwardersBlock?: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#gss_tsig_enabled DataBloxoneDnsViews#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#lame_ttl DataBloxoneDnsViews#lame_ttl}
  */
  readonly lameTtl?: DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#match_recursive_only DataBloxoneDnsViews#match_recursive_only}
  */
  readonly matchRecursiveOnly?: DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#max_cache_ttl DataBloxoneDnsViews#max_cache_ttl}
  */
  readonly maxCacheTtl?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#max_negative_ttl DataBloxoneDnsViews#max_negative_ttl}
  */
  readonly maxNegativeTtl?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#max_udp_size DataBloxoneDnsViews#max_udp_size}
  */
  readonly maxUdpSize?: DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#minimal_responses DataBloxoneDnsViews#minimal_responses}
  */
  readonly minimalResponses?: DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#notify DataBloxoneDnsViews#notify}
  */
  readonly notify?: DataBloxoneDnsViewsResultsInheritanceSourcesNotify;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#query_acl DataBloxoneDnsViews#query_acl}
  */
  readonly queryAcl?: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#recursion_acl DataBloxoneDnsViews#recursion_acl}
  */
  readonly recursionAcl?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#recursion_enabled DataBloxoneDnsViews#recursion_enabled}
  */
  readonly recursionEnabled?: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#sort_list DataBloxoneDnsViews#sort_list}
  */
  readonly sortList?: DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#synthesize_address_records_from_https DataBloxoneDnsViews#synthesize_address_records_from_https}
  */
  readonly synthesizeAddressRecordsFromHttps?: DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#transfer_acl DataBloxoneDnsViews#transfer_acl}
  */
  readonly transferAcl?: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#update_acl DataBloxoneDnsViews#update_acl}
  */
  readonly updateAcl?: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#use_forwarders_for_subzones DataBloxoneDnsViews#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#zone_authority DataBloxoneDnsViews#zone_authority}
  */
  readonly zoneAuthority?: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority;
}

export function dataBloxoneDnsViewsResultsInheritanceSourcesToTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_edns_option_in_outgoing_query: dataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToTerraform(struct!.addEdnsOptionInOutgoingQuery),
    custom_root_ns_block: dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockToTerraform(struct!.customRootNsBlock),
    dnssec_validation_block: dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockToTerraform(struct!.dnssecValidationBlock),
    dtc_config: dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigToTerraform(struct!.dtcConfig),
    ecs_block: dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockToTerraform(struct!.ecsBlock),
    edns_udp_size: dataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSizeToTerraform(struct!.ednsUdpSize),
    filter_aaaa_acl: dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclToTerraform(struct!.filterAaaaAcl),
    filter_aaaa_on_v4: dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4ToTerraform(struct!.filterAaaaOnV4),
    forwarders_block: dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockToTerraform(struct!.forwardersBlock),
    gss_tsig_enabled: dataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabledToTerraform(struct!.gssTsigEnabled),
    lame_ttl: dataBloxoneDnsViewsResultsInheritanceSourcesLameTtlToTerraform(struct!.lameTtl),
    match_recursive_only: dataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnlyToTerraform(struct!.matchRecursiveOnly),
    max_cache_ttl: dataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtlToTerraform(struct!.maxCacheTtl),
    max_negative_ttl: dataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtlToTerraform(struct!.maxNegativeTtl),
    max_udp_size: dataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSizeToTerraform(struct!.maxUdpSize),
    minimal_responses: dataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponsesToTerraform(struct!.minimalResponses),
    notify: dataBloxoneDnsViewsResultsInheritanceSourcesNotifyToTerraform(struct!.notify),
    query_acl: dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclToTerraform(struct!.queryAcl),
    recursion_acl: dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclToTerraform(struct!.recursionAcl),
    recursion_enabled: dataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabledToTerraform(struct!.recursionEnabled),
    sort_list: dataBloxoneDnsViewsResultsInheritanceSourcesSortListStructToTerraform(struct!.sortList),
    synthesize_address_records_from_https: dataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToTerraform(struct!.synthesizeAddressRecordsFromHttps),
    transfer_acl: dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclToTerraform(struct!.transferAcl),
    update_acl: dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclToTerraform(struct!.updateAcl),
    use_forwarders_for_subzones: dataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzonesToTerraform(struct!.useForwardersForSubzones),
    zone_authority: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityToTerraform(struct!.zoneAuthority),
  }
}


export function dataBloxoneDnsViewsResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneDnsViewsResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_edns_option_in_outgoing_query: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryToHclTerraform(struct!.addEdnsOptionInOutgoingQuery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery",
    },
    custom_root_ns_block: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockToHclTerraform(struct!.customRootNsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock",
    },
    dnssec_validation_block: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockToHclTerraform(struct!.dnssecValidationBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock",
    },
    dtc_config: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigToHclTerraform(struct!.dtcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig",
    },
    ecs_block: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockToHclTerraform(struct!.ecsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock",
    },
    edns_udp_size: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSizeToHclTerraform(struct!.ednsUdpSize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize",
    },
    filter_aaaa_acl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclToHclTerraform(struct!.filterAaaaAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl",
    },
    filter_aaaa_on_v4: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4ToHclTerraform(struct!.filterAaaaOnV4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4",
    },
    forwarders_block: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockToHclTerraform(struct!.forwardersBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock",
    },
    gss_tsig_enabled: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabledToHclTerraform(struct!.gssTsigEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled",
    },
    lame_ttl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesLameTtlToHclTerraform(struct!.lameTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl",
    },
    match_recursive_only: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnlyToHclTerraform(struct!.matchRecursiveOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly",
    },
    max_cache_ttl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtlToHclTerraform(struct!.maxCacheTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl",
    },
    max_negative_ttl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtlToHclTerraform(struct!.maxNegativeTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl",
    },
    max_udp_size: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSizeToHclTerraform(struct!.maxUdpSize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize",
    },
    minimal_responses: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponsesToHclTerraform(struct!.minimalResponses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses",
    },
    notify: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesNotifyToHclTerraform(struct!.notify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesNotify",
    },
    query_acl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesQueryAclToHclTerraform(struct!.queryAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl",
    },
    recursion_acl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclToHclTerraform(struct!.recursionAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl",
    },
    recursion_enabled: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabledToHclTerraform(struct!.recursionEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled",
    },
    sort_list: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesSortListStructToHclTerraform(struct!.sortList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct",
    },
    synthesize_address_records_from_https: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsToHclTerraform(struct!.synthesizeAddressRecordsFromHttps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps",
    },
    transfer_acl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesTransferAclToHclTerraform(struct!.transferAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl",
    },
    update_acl: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclToHclTerraform(struct!.updateAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl",
    },
    use_forwarders_for_subzones: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones",
    },
    zone_authority: {
      value: dataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityToHclTerraform(struct!.zoneAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsInheritanceSources | cdktf.IResolvable | undefined {
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
    if (this._dtcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtcConfig = this._dtcConfig?.internalValue;
    }
    if (this._ecsBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsBlock = this._ecsBlock?.internalValue;
    }
    if (this._ednsUdpSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsUdpSize = this._ednsUdpSize?.internalValue;
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
    if (this._lameTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lameTtl = this._lameTtl?.internalValue;
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
    if (this._maxUdpSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUdpSize = this._maxUdpSize?.internalValue;
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
    if (this._recursionAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionAcl = this._recursionAcl?.internalValue;
    }
    if (this._recursionEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionEnabled = this._recursionEnabled?.internalValue;
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
    if (this._zoneAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAuthority = this._zoneAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addEdnsOptionInOutgoingQuery.internalValue = undefined;
      this._customRootNsBlock.internalValue = undefined;
      this._dnssecValidationBlock.internalValue = undefined;
      this._dtcConfig.internalValue = undefined;
      this._ecsBlock.internalValue = undefined;
      this._ednsUdpSize.internalValue = undefined;
      this._filterAaaaAcl.internalValue = undefined;
      this._filterAaaaOnV4.internalValue = undefined;
      this._forwardersBlock.internalValue = undefined;
      this._gssTsigEnabled.internalValue = undefined;
      this._lameTtl.internalValue = undefined;
      this._matchRecursiveOnly.internalValue = undefined;
      this._maxCacheTtl.internalValue = undefined;
      this._maxNegativeTtl.internalValue = undefined;
      this._maxUdpSize.internalValue = undefined;
      this._minimalResponses.internalValue = undefined;
      this._notify.internalValue = undefined;
      this._queryAcl.internalValue = undefined;
      this._recursionAcl.internalValue = undefined;
      this._recursionEnabled.internalValue = undefined;
      this._sortList.internalValue = undefined;
      this._synthesizeAddressRecordsFromHttps.internalValue = undefined;
      this._transferAcl.internalValue = undefined;
      this._updateAcl.internalValue = undefined;
      this._useForwardersForSubzones.internalValue = undefined;
      this._zoneAuthority.internalValue = undefined;
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
      this._dtcConfig.internalValue = value.dtcConfig;
      this._ecsBlock.internalValue = value.ecsBlock;
      this._ednsUdpSize.internalValue = value.ednsUdpSize;
      this._filterAaaaAcl.internalValue = value.filterAaaaAcl;
      this._filterAaaaOnV4.internalValue = value.filterAaaaOnV4;
      this._forwardersBlock.internalValue = value.forwardersBlock;
      this._gssTsigEnabled.internalValue = value.gssTsigEnabled;
      this._lameTtl.internalValue = value.lameTtl;
      this._matchRecursiveOnly.internalValue = value.matchRecursiveOnly;
      this._maxCacheTtl.internalValue = value.maxCacheTtl;
      this._maxNegativeTtl.internalValue = value.maxNegativeTtl;
      this._maxUdpSize.internalValue = value.maxUdpSize;
      this._minimalResponses.internalValue = value.minimalResponses;
      this._notify.internalValue = value.notify;
      this._queryAcl.internalValue = value.queryAcl;
      this._recursionAcl.internalValue = value.recursionAcl;
      this._recursionEnabled.internalValue = value.recursionEnabled;
      this._sortList.internalValue = value.sortList;
      this._synthesizeAddressRecordsFromHttps.internalValue = value.synthesizeAddressRecordsFromHttps;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones.internalValue = value.useForwardersForSubzones;
      this._zoneAuthority.internalValue = value.zoneAuthority;
    }
  }

  // add_edns_option_in_outgoing_query - computed: true, optional: true, required: false
  private _addEdnsOptionInOutgoingQuery = new DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQueryOutputReference(this, "add_edns_option_in_outgoing_query");
  public get addEdnsOptionInOutgoingQuery() {
    return this._addEdnsOptionInOutgoingQuery;
  }
  public putAddEdnsOptionInOutgoingQuery(value: DataBloxoneDnsViewsResultsInheritanceSourcesAddEdnsOptionInOutgoingQuery) {
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
  private _customRootNsBlock = new DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlockOutputReference(this, "custom_root_ns_block");
  public get customRootNsBlock() {
    return this._customRootNsBlock;
  }
  public putCustomRootNsBlock(value: DataBloxoneDnsViewsResultsInheritanceSourcesCustomRootNsBlock) {
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
  private _dnssecValidationBlock = new DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlockOutputReference(this, "dnssec_validation_block");
  public get dnssecValidationBlock() {
    return this._dnssecValidationBlock;
  }
  public putDnssecValidationBlock(value: DataBloxoneDnsViewsResultsInheritanceSourcesDnssecValidationBlock) {
    this._dnssecValidationBlock.internalValue = value;
  }
  public resetDnssecValidationBlock() {
    this._dnssecValidationBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidationBlockInput() {
    return this._dnssecValidationBlock.internalValue;
  }

  // dtc_config - computed: true, optional: true, required: false
  private _dtcConfig = new DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfigOutputReference(this, "dtc_config");
  public get dtcConfig() {
    return this._dtcConfig;
  }
  public putDtcConfig(value: DataBloxoneDnsViewsResultsInheritanceSourcesDtcConfig) {
    this._dtcConfig.internalValue = value;
  }
  public resetDtcConfig() {
    this._dtcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtcConfigInput() {
    return this._dtcConfig.internalValue;
  }

  // ecs_block - computed: true, optional: true, required: false
  private _ecsBlock = new DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlockOutputReference(this, "ecs_block");
  public get ecsBlock() {
    return this._ecsBlock;
  }
  public putEcsBlock(value: DataBloxoneDnsViewsResultsInheritanceSourcesEcsBlock) {
    this._ecsBlock.internalValue = value;
  }
  public resetEcsBlock() {
    this._ecsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsBlockInput() {
    return this._ecsBlock.internalValue;
  }

  // edns_udp_size - computed: true, optional: true, required: false
  private _ednsUdpSize = new DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSizeOutputReference(this, "edns_udp_size");
  public get ednsUdpSize() {
    return this._ednsUdpSize;
  }
  public putEdnsUdpSize(value: DataBloxoneDnsViewsResultsInheritanceSourcesEdnsUdpSize) {
    this._ednsUdpSize.internalValue = value;
  }
  public resetEdnsUdpSize() {
    this._ednsUdpSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsUdpSizeInput() {
    return this._ednsUdpSize.internalValue;
  }

  // filter_aaaa_acl - computed: true, optional: true, required: false
  private _filterAaaaAcl = new DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAclOutputReference(this, "filter_aaaa_acl");
  public get filterAaaaAcl() {
    return this._filterAaaaAcl;
  }
  public putFilterAaaaAcl(value: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaAcl) {
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
  private _filterAaaaOnV4 = new DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4OutputReference(this, "filter_aaaa_on_v4");
  public get filterAaaaOnV4() {
    return this._filterAaaaOnV4;
  }
  public putFilterAaaaOnV4(value: DataBloxoneDnsViewsResultsInheritanceSourcesFilterAaaaOnV4) {
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
  private _forwardersBlock = new DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlockOutputReference(this, "forwarders_block");
  public get forwardersBlock() {
    return this._forwardersBlock;
  }
  public putForwardersBlock(value: DataBloxoneDnsViewsResultsInheritanceSourcesForwardersBlock) {
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
  private _gssTsigEnabled = new DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabledOutputReference(this, "gss_tsig_enabled");
  public get gssTsigEnabled() {
    return this._gssTsigEnabled;
  }
  public putGssTsigEnabled(value: DataBloxoneDnsViewsResultsInheritanceSourcesGssTsigEnabled) {
    this._gssTsigEnabled.internalValue = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled.internalValue;
  }

  // lame_ttl - computed: true, optional: true, required: false
  private _lameTtl = new DataBloxoneDnsViewsResultsInheritanceSourcesLameTtlOutputReference(this, "lame_ttl");
  public get lameTtl() {
    return this._lameTtl;
  }
  public putLameTtl(value: DataBloxoneDnsViewsResultsInheritanceSourcesLameTtl) {
    this._lameTtl.internalValue = value;
  }
  public resetLameTtl() {
    this._lameTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lameTtlInput() {
    return this._lameTtl.internalValue;
  }

  // match_recursive_only - computed: true, optional: true, required: false
  private _matchRecursiveOnly = new DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnlyOutputReference(this, "match_recursive_only");
  public get matchRecursiveOnly() {
    return this._matchRecursiveOnly;
  }
  public putMatchRecursiveOnly(value: DataBloxoneDnsViewsResultsInheritanceSourcesMatchRecursiveOnly) {
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
  private _maxCacheTtl = new DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtlOutputReference(this, "max_cache_ttl");
  public get maxCacheTtl() {
    return this._maxCacheTtl;
  }
  public putMaxCacheTtl(value: DataBloxoneDnsViewsResultsInheritanceSourcesMaxCacheTtl) {
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
  private _maxNegativeTtl = new DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtlOutputReference(this, "max_negative_ttl");
  public get maxNegativeTtl() {
    return this._maxNegativeTtl;
  }
  public putMaxNegativeTtl(value: DataBloxoneDnsViewsResultsInheritanceSourcesMaxNegativeTtl) {
    this._maxNegativeTtl.internalValue = value;
  }
  public resetMaxNegativeTtl() {
    this._maxNegativeTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNegativeTtlInput() {
    return this._maxNegativeTtl.internalValue;
  }

  // max_udp_size - computed: true, optional: true, required: false
  private _maxUdpSize = new DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSizeOutputReference(this, "max_udp_size");
  public get maxUdpSize() {
    return this._maxUdpSize;
  }
  public putMaxUdpSize(value: DataBloxoneDnsViewsResultsInheritanceSourcesMaxUdpSize) {
    this._maxUdpSize.internalValue = value;
  }
  public resetMaxUdpSize() {
    this._maxUdpSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpSizeInput() {
    return this._maxUdpSize.internalValue;
  }

  // minimal_responses - computed: true, optional: true, required: false
  private _minimalResponses = new DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponsesOutputReference(this, "minimal_responses");
  public get minimalResponses() {
    return this._minimalResponses;
  }
  public putMinimalResponses(value: DataBloxoneDnsViewsResultsInheritanceSourcesMinimalResponses) {
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
  private _notify = new DataBloxoneDnsViewsResultsInheritanceSourcesNotifyOutputReference(this, "notify");
  public get notify() {
    return this._notify;
  }
  public putNotify(value: DataBloxoneDnsViewsResultsInheritanceSourcesNotify) {
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
  private _queryAcl = new DataBloxoneDnsViewsResultsInheritanceSourcesQueryAclOutputReference(this, "query_acl");
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DataBloxoneDnsViewsResultsInheritanceSourcesQueryAcl) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // recursion_acl - computed: true, optional: true, required: false
  private _recursionAcl = new DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAclOutputReference(this, "recursion_acl");
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionAcl) {
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
  private _recursionEnabled = new DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabledOutputReference(this, "recursion_enabled");
  public get recursionEnabled() {
    return this._recursionEnabled;
  }
  public putRecursionEnabled(value: DataBloxoneDnsViewsResultsInheritanceSourcesRecursionEnabled) {
    this._recursionEnabled.internalValue = value;
  }
  public resetRecursionEnabled() {
    this._recursionEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionEnabledInput() {
    return this._recursionEnabled.internalValue;
  }

  // sort_list - computed: true, optional: true, required: false
  private _sortList = new DataBloxoneDnsViewsResultsInheritanceSourcesSortListStructOutputReference(this, "sort_list");
  public get sortList() {
    return this._sortList;
  }
  public putSortList(value: DataBloxoneDnsViewsResultsInheritanceSourcesSortListStruct) {
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
  private _synthesizeAddressRecordsFromHttps = new DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttpsOutputReference(this, "synthesize_address_records_from_https");
  public get synthesizeAddressRecordsFromHttps() {
    return this._synthesizeAddressRecordsFromHttps;
  }
  public putSynthesizeAddressRecordsFromHttps(value: DataBloxoneDnsViewsResultsInheritanceSourcesSynthesizeAddressRecordsFromHttps) {
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
  private _transferAcl = new DataBloxoneDnsViewsResultsInheritanceSourcesTransferAclOutputReference(this, "transfer_acl");
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DataBloxoneDnsViewsResultsInheritanceSourcesTransferAcl) {
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
  private _updateAcl = new DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAclOutputReference(this, "update_acl");
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DataBloxoneDnsViewsResultsInheritanceSourcesUpdateAcl) {
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
  private _useForwardersForSubzones = new DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzonesOutputReference(this, "use_forwarders_for_subzones");
  public get useForwardersForSubzones() {
    return this._useForwardersForSubzones;
  }
  public putUseForwardersForSubzones(value: DataBloxoneDnsViewsResultsInheritanceSourcesUseForwardersForSubzones) {
    this._useForwardersForSubzones.internalValue = value;
  }
  public resetUseForwardersForSubzones() {
    this._useForwardersForSubzones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardersForSubzonesInput() {
    return this._useForwardersForSubzones.internalValue;
  }

  // zone_authority - computed: true, optional: true, required: false
  private _zoneAuthority = new DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
  public putZoneAuthority(value: DataBloxoneDnsViewsResultsInheritanceSourcesZoneAuthority) {
    this._zoneAuthority.internalValue = value;
  }
  public resetZoneAuthority() {
    this._zoneAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAuthorityInput() {
    return this._zoneAuthority.internalValue;
  }
}
export interface DataBloxoneDnsViewsResultsMatchClientsAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#key DataBloxoneDnsViews#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsViewsResultsMatchClientsAclTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsMatchClientsAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsViewsResultsMatchClientsAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsMatchClientsAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsMatchClientsAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsMatchClientsAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsMatchClientsAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsMatchClientsAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tsig_key DataBloxoneDnsViews#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsViewsResultsMatchClientsAclTsigKey;
}

export function dataBloxoneDnsViewsResultsMatchClientsAclToTerraform(struct?: DataBloxoneDnsViewsResultsMatchClientsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsViewsResultsMatchClientsAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsViewsResultsMatchClientsAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsMatchClientsAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsViewsResultsMatchClientsAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsMatchClientsAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsMatchClientsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsMatchClientsAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsMatchClientsAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsMatchClientsAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsViewsResultsMatchClientsAclTsigKey) {
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

export class DataBloxoneDnsViewsResultsMatchClientsAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsMatchClientsAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsMatchClientsAclOutputReference {
    return new DataBloxoneDnsViewsResultsMatchClientsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#key DataBloxoneDnsViews#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsViewsResultsMatchDestinationsAclTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsViewsResultsMatchDestinationsAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsMatchDestinationsAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tsig_key DataBloxoneDnsViews#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey;
}

export function dataBloxoneDnsViewsResultsMatchDestinationsAclToTerraform(struct?: DataBloxoneDnsViewsResultsMatchDestinationsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsViewsResultsMatchDestinationsAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsViewsResultsMatchDestinationsAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsMatchDestinationsAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsViewsResultsMatchDestinationsAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsMatchDestinationsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsMatchDestinationsAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsMatchDestinationsAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsViewsResultsMatchDestinationsAclTsigKey) {
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

export class DataBloxoneDnsViewsResultsMatchDestinationsAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsMatchDestinationsAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsMatchDestinationsAclOutputReference {
    return new DataBloxoneDnsViewsResultsMatchDestinationsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsQueryAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#key DataBloxoneDnsViews#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsViewsResultsQueryAclTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsQueryAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsViewsResultsQueryAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsQueryAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsQueryAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsQueryAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsQueryAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsQueryAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tsig_key DataBloxoneDnsViews#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsViewsResultsQueryAclTsigKey;
}

export function dataBloxoneDnsViewsResultsQueryAclToTerraform(struct?: DataBloxoneDnsViewsResultsQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsViewsResultsQueryAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsViewsResultsQueryAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsQueryAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsViewsResultsQueryAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsQueryAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsQueryAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsQueryAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsViewsResultsQueryAclTsigKey) {
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

export class DataBloxoneDnsViewsResultsQueryAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsQueryAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsQueryAclOutputReference {
    return new DataBloxoneDnsViewsResultsQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsRecursionAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#key DataBloxoneDnsViews#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsViewsResultsRecursionAclTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsRecursionAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsViewsResultsRecursionAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsRecursionAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsRecursionAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsRecursionAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsRecursionAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsRecursionAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tsig_key DataBloxoneDnsViews#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsViewsResultsRecursionAclTsigKey;
}

export function dataBloxoneDnsViewsResultsRecursionAclToTerraform(struct?: DataBloxoneDnsViewsResultsRecursionAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsViewsResultsRecursionAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsViewsResultsRecursionAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsRecursionAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsViewsResultsRecursionAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsRecursionAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsRecursionAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsRecursionAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsRecursionAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsRecursionAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsViewsResultsRecursionAclTsigKey) {
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

export class DataBloxoneDnsViewsResultsRecursionAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsRecursionAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsRecursionAclOutputReference {
    return new DataBloxoneDnsViewsResultsRecursionAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsSortListStruct {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element: string;
  /**
  * Optional. The prioritized networks. If empty, the value of _source_ or networks from _acl_ is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#prioritized_networks DataBloxoneDnsViews#prioritized_networks}
  */
  readonly prioritizedNetworks?: string[];
  /**
  * Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#source DataBloxoneDnsViews#source}
  */
  readonly source?: string;
}

export function dataBloxoneDnsViewsResultsSortListStructToTerraform(struct?: DataBloxoneDnsViewsResultsSortListStruct | cdktf.IResolvable): any {
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


export function dataBloxoneDnsViewsResultsSortListStructToHclTerraform(struct?: DataBloxoneDnsViewsResultsSortListStruct | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsSortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsSortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsSortListStruct | cdktf.IResolvable | undefined) {
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

export class DataBloxoneDnsViewsResultsSortListStructList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsSortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsSortListStructOutputReference {
    return new DataBloxoneDnsViewsResultsSortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsTransferAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#key DataBloxoneDnsViews#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsViewsResultsTransferAclTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsTransferAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsViewsResultsTransferAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsTransferAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsTransferAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsTransferAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsTransferAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsTransferAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tsig_key DataBloxoneDnsViews#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsViewsResultsTransferAclTsigKey;
}

export function dataBloxoneDnsViewsResultsTransferAclToTerraform(struct?: DataBloxoneDnsViewsResultsTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsViewsResultsTransferAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsViewsResultsTransferAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsTransferAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsViewsResultsTransferAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsTransferAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsTransferAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsTransferAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsViewsResultsTransferAclTsigKey) {
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

export class DataBloxoneDnsViewsResultsTransferAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsTransferAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsTransferAclOutputReference {
    return new DataBloxoneDnsViewsResultsTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsUpdateAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#key DataBloxoneDnsViews#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsViewsResultsUpdateAclTsigKeyToTerraform(struct?: DataBloxoneDnsViewsResultsUpdateAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsViewsResultsUpdateAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsViewsResultsUpdateAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsViewsResultsUpdateAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsUpdateAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsUpdateAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsViewsResultsUpdateAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#access DataBloxoneDnsViews#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#acl DataBloxoneDnsViews#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#address DataBloxoneDnsViews#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#element DataBloxoneDnsViews#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tsig_key DataBloxoneDnsViews#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsViewsResultsUpdateAclTsigKey;
}

export function dataBloxoneDnsViewsResultsUpdateAclToTerraform(struct?: DataBloxoneDnsViewsResultsUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsViewsResultsUpdateAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsViewsResultsUpdateAclToHclTerraform(struct?: DataBloxoneDnsViewsResultsUpdateAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsViewsResultsUpdateAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsUpdateAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResultsUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsViewsResultsUpdateAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsViewsResultsUpdateAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsViewsResultsUpdateAclTsigKey) {
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

export class DataBloxoneDnsViewsResultsUpdateAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResultsUpdateAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsUpdateAclOutputReference {
    return new DataBloxoneDnsViewsResultsUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsViewsResultsZoneAuthority {
  /**
  * Optional. ZoneAuthority default ttl for resource records in zone (value in seconds).  Defaults to 28800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#default_ttl DataBloxoneDnsViews#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Optional. ZoneAuthority expire time in seconds.  Defaults to 2419200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#expire DataBloxoneDnsViews#expire}
  */
  readonly expire?: number;
  /**
  * Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#mname DataBloxoneDnsViews#mname}
  */
  readonly mname?: string;
  /**
  * Optional. ZoneAuthority negative caching (minimum) ttl in seconds.  Defaults to 900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#negative_ttl DataBloxoneDnsViews#negative_ttl}
  */
  readonly negativeTtl?: number;
  /**
  * Optional. ZoneAuthority refresh.  Defaults to 10800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#refresh DataBloxoneDnsViews#refresh}
  */
  readonly refresh?: number;
  /**
  * Optional. ZoneAuthority retry.  Defaults to 3600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#retry DataBloxoneDnsViews#retry}
  */
  readonly retry?: number;
  /**
  * Optional. ZoneAuthority rname.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#rname DataBloxoneDnsViews#rname}
  */
  readonly rname?: string;
  /**
  * Optional. Use default value for master name server.  Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#use_default_mname DataBloxoneDnsViews#use_default_mname}
  */
  readonly useDefaultMname?: boolean | cdktf.IResolvable;
}

export function dataBloxoneDnsViewsResultsZoneAuthorityToTerraform(struct?: DataBloxoneDnsViewsResultsZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    expire: cdktf.numberToTerraform(struct!.expire),
    mname: cdktf.stringToTerraform(struct!.mname),
    negative_ttl: cdktf.numberToTerraform(struct!.negativeTtl),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    retry: cdktf.numberToTerraform(struct!.retry),
    rname: cdktf.stringToTerraform(struct!.rname),
    use_default_mname: cdktf.booleanToTerraform(struct!.useDefaultMname),
  }
}


export function dataBloxoneDnsViewsResultsZoneAuthorityToHclTerraform(struct?: DataBloxoneDnsViewsResultsZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mname: {
      value: cdktf.stringToHclTerraform(struct!.mname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_ttl: {
      value: cdktf.numberToHclTerraform(struct!.negativeTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rname: {
      value: cdktf.stringToHclTerraform(struct!.rname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_mname: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultMname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsViewsResultsZoneAuthority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._mname !== undefined) {
      hasAnyValues = true;
      internalValueResult.mname = this._mname;
    }
    if (this._negativeTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeTtl = this._negativeTtl;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._rname !== undefined) {
      hasAnyValues = true;
      internalValueResult.rname = this._rname;
    }
    if (this._useDefaultMname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultMname = this._useDefaultMname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResultsZoneAuthority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTtl = undefined;
      this._expire = undefined;
      this._mname = undefined;
      this._negativeTtl = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._rname = undefined;
      this._useDefaultMname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTtl = value.defaultTtl;
      this._expire = value.expire;
      this._mname = value.mname;
      this._negativeTtl = value.negativeTtl;
      this._refresh = value.refresh;
      this._retry = value.retry;
      this._rname = value.rname;
      this._useDefaultMname = value.useDefaultMname;
    }
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // expire - computed: true, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // mname - computed: true, optional: true, required: false
  private _mname?: string; 
  public get mname() {
    return this.getStringAttribute('mname');
  }
  public set mname(value: string) {
    this._mname = value;
  }
  public resetMname() {
    this._mname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnameInput() {
    return this._mname;
  }

  // negative_ttl - computed: true, optional: true, required: false
  private _negativeTtl?: number; 
  public get negativeTtl() {
    return this.getNumberAttribute('negative_ttl');
  }
  public set negativeTtl(value: number) {
    this._negativeTtl = value;
  }
  public resetNegativeTtl() {
    this._negativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTtlInput() {
    return this._negativeTtl;
  }

  // protocol_mname - computed: true, optional: false, required: false
  public get protocolMname() {
    return this.getStringAttribute('protocol_mname');
  }

  // protocol_rname - computed: true, optional: false, required: false
  public get protocolRname() {
    return this.getStringAttribute('protocol_rname');
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // rname - computed: true, optional: true, required: false
  private _rname?: string; 
  public get rname() {
    return this.getStringAttribute('rname');
  }
  public set rname(value: string) {
    this._rname = value;
  }
  public resetRname() {
    this._rname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnameInput() {
    return this._rname;
  }

  // use_default_mname - computed: true, optional: true, required: false
  private _useDefaultMname?: boolean | cdktf.IResolvable; 
  public get useDefaultMname() {
    return this.getBooleanAttribute('use_default_mname');
  }
  public set useDefaultMname(value: boolean | cdktf.IResolvable) {
    this._useDefaultMname = value;
  }
  public resetUseDefaultMname() {
    this._useDefaultMname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultMnameInput() {
    return this._useDefaultMname;
  }
}
export interface DataBloxoneDnsViewsResults {
  /**
  * _add_edns_option_in_outgoing_query_ adds client IP, MAC address and view name into outgoing recursive query. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#add_edns_option_in_outgoing_query DataBloxoneDnsViews#add_edns_option_in_outgoing_query}
  */
  readonly addEdnsOptionInOutgoingQuery?: boolean | cdktf.IResolvable;
  /**
  * Optional. Comment for view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#comment DataBloxoneDnsViews#comment}
  */
  readonly comment?: string;
  /**
  * Optional. List of custom root nameservers. The order does not matter.  Error if empty while _custom_root_ns_enabled_ is _true_. Error if there are duplicate items in the list.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#custom_root_ns DataBloxoneDnsViews#custom_root_ns}
  */
  readonly customRootNs?: DataBloxoneDnsViewsResultsCustomRootNs[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to use custom root nameservers instead of the default ones.  The _custom_root_ns_ is validated when enabled.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#custom_root_ns_enabled DataBloxoneDnsViews#custom_root_ns_enabled}
  */
  readonly customRootNsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to disable object. A disabled object is effectively non-existent when generating configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#disabled DataBloxoneDnsViews#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to perform DNSSEC validation. Ignored if _dnssec_enabled_ is _false_.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#dnssec_enable_validation DataBloxoneDnsViews#dnssec_enable_validation}
  */
  readonly dnssecEnableValidation?: boolean | cdktf.IResolvable;
  /**
  * Optional. Master toggle for all DNSSEC processing. Other _dnssec_*_ configuration is unused if this is disabled.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#dnssec_enabled DataBloxoneDnsViews#dnssec_enabled}
  */
  readonly dnssecEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. DNSSEC trust anchors.  Error if there are list items with duplicate (_zone_, _sep_, _algorithm_) combinations.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#dnssec_trust_anchors DataBloxoneDnsViews#dnssec_trust_anchors}
  */
  readonly dnssecTrustAnchors?: DataBloxoneDnsViewsResultsDnssecTrustAnchors[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to reject expired DNSSEC keys. Ignored if either _dnssec_enabled_ or _dnssec_enable_validation_ is _false_.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#dnssec_validate_expiry DataBloxoneDnsViews#dnssec_validate_expiry}
  */
  readonly dnssecValidateExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#dtc_config DataBloxoneDnsViews#dtc_config}
  */
  readonly dtcConfig?: DataBloxoneDnsViewsResultsDtcConfig;
  /**
  * Optional. _true_ to enable EDNS client subnet for recursive queries. Other _ecs_*_ fields are ignored if this field is not enabled.  Defaults to _false-.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#ecs_enabled DataBloxoneDnsViews#ecs_enabled}
  */
  readonly ecsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. _true_ to enable ECS options in outbound queries. This functionality has additional overhead so it is disabled by default.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#ecs_forwarding DataBloxoneDnsViews#ecs_forwarding}
  */
  readonly ecsForwarding?: boolean | cdktf.IResolvable;
  /**
  * Optional. Maximum scope length for v4 ECS.  Unsigned integer, min 1 max 24  Defaults to 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#ecs_prefix_v4 DataBloxoneDnsViews#ecs_prefix_v4}
  */
  readonly ecsPrefixV4?: number;
  /**
  * Optional. Maximum scope length for v6 ECS.  Unsigned integer, min 1 max 56  Defaults to 56.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#ecs_prefix_v6 DataBloxoneDnsViews#ecs_prefix_v6}
  */
  readonly ecsPrefixV6?: number;
  /**
  * Optional. List of zones where ECS queries may be sent.  Error if empty while _ecs_enabled_ is _true_. Error if there are duplicate FQDNs in the list.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#ecs_zones DataBloxoneDnsViews#ecs_zones}
  */
  readonly ecsZones?: DataBloxoneDnsViewsResultsEcsZones[] | cdktf.IResolvable;
  /**
  * Optional. _edns_udp_size_ represents the edns UDP size. The size a querying DNS server advertises to the DNS server it’s sending a query to.  Defaults to 1232 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#edns_udp_size DataBloxoneDnsViews#edns_udp_size}
  */
  readonly ednsUdpSize?: number;
  /**
  * Optional. Specifies a list of client addresses for which AAAA filtering is to be applied.  Defaults to _empty_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#filter_aaaa_acl DataBloxoneDnsViews#filter_aaaa_acl}
  */
  readonly filterAaaaAcl?: DataBloxoneDnsViewsResultsFilterAaaaAcl[] | cdktf.IResolvable;
  /**
  * _filter_aaaa_on_v4_ allows named to omit some IPv6 addresses when responding to IPv4 clients. Allowed values:
  *   * _yes_
  *   * _no_
  *   * _break_dnssec_
  * 
  *   Defaults to _no_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#filter_aaaa_on_v4 DataBloxoneDnsViews#filter_aaaa_on_v4}
  */
  readonly filterAaaaOnV4?: string;
  /**
  * Optional. List of forwarders.  Error if empty while _forwarders_only_ or _use_root_forwarders_for_local_resolution_with_b1td_ is _true_. Error if there are items in the list with duplicate addresses.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#forwarders DataBloxoneDnsViews#forwarders}
  */
  readonly forwarders?: DataBloxoneDnsViewsResultsForwarders[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to only forward.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#forwarders_only DataBloxoneDnsViews#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#gss_tsig_enabled DataBloxoneDnsViews#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#inheritance_sources DataBloxoneDnsViews#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneDnsViewsResultsInheritanceSources;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#ip_spaces DataBloxoneDnsViews#ip_spaces}
  */
  readonly ipSpaces?: string[];
  /**
  * Optional. Unused in the current on-prem DNS server implementation.  Unsigned integer, min 0 max 3600 (1h).  Defaults to 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#lame_ttl DataBloxoneDnsViews#lame_ttl}
  */
  readonly lameTtl?: number;
  /**
  * Optional. Specifies which clients have access to the view.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#match_clients_acl DataBloxoneDnsViews#match_clients_acl}
  */
  readonly matchClientsAcl?: DataBloxoneDnsViewsResultsMatchClientsAcl[] | cdktf.IResolvable;
  /**
  * Optional. Specifies which destination addresses have access to the view.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#match_destinations_acl DataBloxoneDnsViews#match_destinations_acl}
  */
  readonly matchDestinationsAcl?: DataBloxoneDnsViewsResultsMatchDestinationsAcl[] | cdktf.IResolvable;
  /**
  * Optional. If _true_ only recursive queries from matching clients access the view.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#match_recursive_only DataBloxoneDnsViews#match_recursive_only}
  */
  readonly matchRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional. Seconds to cache positive responses.  Unsigned integer, min 1 max 604800 (7d).  Defaults to 604800 (7d).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#max_cache_ttl DataBloxoneDnsViews#max_cache_ttl}
  */
  readonly maxCacheTtl?: number;
  /**
  * Optional. Seconds to cache negative responses.  Unsigned integer, min 1 max 604800 (7d).  Defaults to 10800 (3h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#max_negative_ttl DataBloxoneDnsViews#max_negative_ttl}
  */
  readonly maxNegativeTtl?: number;
  /**
  * Optional. _max_udp_size_ represents maximum UDP payload size. The maximum number of bytes a responding DNS server will send to a UDP datagram.  Defaults to 1232 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#max_udp_size DataBloxoneDnsViews#max_udp_size}
  */
  readonly maxUdpSize?: number;
  /**
  * Optional. When enabled, the DNS server will only add records to the authority and additional data sections when they are required.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#minimal_responses DataBloxoneDnsViews#minimal_responses}
  */
  readonly minimalResponses?: boolean | cdktf.IResolvable;
  /**
  * Name of view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#name DataBloxoneDnsViews#name}
  */
  readonly name: string;
  /**
  * _notify_ all external secondary DNS servers.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#notify DataBloxoneDnsViews#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * Optional. Clients must match this ACL to make authoritative queries. Also used for recursive queries if that ACL is unset.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#query_acl DataBloxoneDnsViews#query_acl}
  */
  readonly queryAcl?: DataBloxoneDnsViewsResultsQueryAcl[] | cdktf.IResolvable;
  /**
  * Optional. Clients must match this ACL to make recursive queries. If this ACL is empty, then the _query_acl_ will be used instead.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#recursion_acl DataBloxoneDnsViews#recursion_acl}
  */
  readonly recursionAcl?: DataBloxoneDnsViewsResultsRecursionAcl[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to allow recursive DNS queries.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#recursion_enabled DataBloxoneDnsViews#recursion_enabled}
  */
  readonly recursionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. Specifies a sorted network list for A/AAAA records in DNS query response.  Defaults to _empty_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#sort_list DataBloxoneDnsViews#sort_list}
  */
  readonly sortList?: DataBloxoneDnsViewsResultsSortListStruct[] | cdktf.IResolvable;
  /**
  * _synthesize_address_records_from_https_ enables/disables creation of A/AAAA records from HTTPS RR Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#synthesize_address_records_from_https DataBloxoneDnsViews#synthesize_address_records_from_https}
  */
  readonly synthesizeAddressRecordsFromHttps?: boolean | cdktf.IResolvable;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#tags DataBloxoneDnsViews#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Optional. Clients must match this ACL to receive zone transfers.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#transfer_acl DataBloxoneDnsViews#transfer_acl}
  */
  readonly transferAcl?: DataBloxoneDnsViewsResultsTransferAcl[] | cdktf.IResolvable;
  /**
  * Optional. Specifies which hosts are allowed to issue Dynamic DNS updates for authoritative zones of _primary_type_ _cloud_.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#update_acl DataBloxoneDnsViews#update_acl}
  */
  readonly updateAcl?: DataBloxoneDnsViewsResultsUpdateAcl[] | cdktf.IResolvable;
  /**
  * Optional. Use default forwarders to resolve queries for subzones.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#use_forwarders_for_subzones DataBloxoneDnsViews#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: boolean | cdktf.IResolvable;
  /**
  * _use_root_forwarders_for_local_resolution_with_b1td_ allows DNS recursive queries sent to root forwarders for local resolution when deployed alongside BloxOne Thread Defense. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#use_root_forwarders_for_local_resolution_with_b1td DataBloxoneDnsViews#use_root_forwarders_for_local_resolution_with_b1td}
  */
  readonly useRootForwardersForLocalResolutionWithB1Td?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#zone_authority DataBloxoneDnsViews#zone_authority}
  */
  readonly zoneAuthority?: DataBloxoneDnsViewsResultsZoneAuthority;
}

export function dataBloxoneDnsViewsResultsToTerraform(struct?: DataBloxoneDnsViewsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_edns_option_in_outgoing_query: cdktf.booleanToTerraform(struct!.addEdnsOptionInOutgoingQuery),
    comment: cdktf.stringToTerraform(struct!.comment),
    custom_root_ns: cdktf.listMapper(dataBloxoneDnsViewsResultsCustomRootNsToTerraform, false)(struct!.customRootNs),
    custom_root_ns_enabled: cdktf.booleanToTerraform(struct!.customRootNsEnabled),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    dnssec_enable_validation: cdktf.booleanToTerraform(struct!.dnssecEnableValidation),
    dnssec_enabled: cdktf.booleanToTerraform(struct!.dnssecEnabled),
    dnssec_trust_anchors: cdktf.listMapper(dataBloxoneDnsViewsResultsDnssecTrustAnchorsToTerraform, false)(struct!.dnssecTrustAnchors),
    dnssec_validate_expiry: cdktf.booleanToTerraform(struct!.dnssecValidateExpiry),
    dtc_config: dataBloxoneDnsViewsResultsDtcConfigToTerraform(struct!.dtcConfig),
    ecs_enabled: cdktf.booleanToTerraform(struct!.ecsEnabled),
    ecs_forwarding: cdktf.booleanToTerraform(struct!.ecsForwarding),
    ecs_prefix_v4: cdktf.numberToTerraform(struct!.ecsPrefixV4),
    ecs_prefix_v6: cdktf.numberToTerraform(struct!.ecsPrefixV6),
    ecs_zones: cdktf.listMapper(dataBloxoneDnsViewsResultsEcsZonesToTerraform, false)(struct!.ecsZones),
    edns_udp_size: cdktf.numberToTerraform(struct!.ednsUdpSize),
    filter_aaaa_acl: cdktf.listMapper(dataBloxoneDnsViewsResultsFilterAaaaAclToTerraform, false)(struct!.filterAaaaAcl),
    filter_aaaa_on_v4: cdktf.stringToTerraform(struct!.filterAaaaOnV4),
    forwarders: cdktf.listMapper(dataBloxoneDnsViewsResultsForwardersToTerraform, false)(struct!.forwarders),
    forwarders_only: cdktf.booleanToTerraform(struct!.forwardersOnly),
    gss_tsig_enabled: cdktf.booleanToTerraform(struct!.gssTsigEnabled),
    inheritance_sources: dataBloxoneDnsViewsResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    ip_spaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSpaces),
    lame_ttl: cdktf.numberToTerraform(struct!.lameTtl),
    match_clients_acl: cdktf.listMapper(dataBloxoneDnsViewsResultsMatchClientsAclToTerraform, false)(struct!.matchClientsAcl),
    match_destinations_acl: cdktf.listMapper(dataBloxoneDnsViewsResultsMatchDestinationsAclToTerraform, false)(struct!.matchDestinationsAcl),
    match_recursive_only: cdktf.booleanToTerraform(struct!.matchRecursiveOnly),
    max_cache_ttl: cdktf.numberToTerraform(struct!.maxCacheTtl),
    max_negative_ttl: cdktf.numberToTerraform(struct!.maxNegativeTtl),
    max_udp_size: cdktf.numberToTerraform(struct!.maxUdpSize),
    minimal_responses: cdktf.booleanToTerraform(struct!.minimalResponses),
    name: cdktf.stringToTerraform(struct!.name),
    notify: cdktf.booleanToTerraform(struct!.notify),
    query_acl: cdktf.listMapper(dataBloxoneDnsViewsResultsQueryAclToTerraform, false)(struct!.queryAcl),
    recursion_acl: cdktf.listMapper(dataBloxoneDnsViewsResultsRecursionAclToTerraform, false)(struct!.recursionAcl),
    recursion_enabled: cdktf.booleanToTerraform(struct!.recursionEnabled),
    sort_list: cdktf.listMapper(dataBloxoneDnsViewsResultsSortListStructToTerraform, false)(struct!.sortList),
    synthesize_address_records_from_https: cdktf.booleanToTerraform(struct!.synthesizeAddressRecordsFromHttps),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transfer_acl: cdktf.listMapper(dataBloxoneDnsViewsResultsTransferAclToTerraform, false)(struct!.transferAcl),
    update_acl: cdktf.listMapper(dataBloxoneDnsViewsResultsUpdateAclToTerraform, false)(struct!.updateAcl),
    use_forwarders_for_subzones: cdktf.booleanToTerraform(struct!.useForwardersForSubzones),
    use_root_forwarders_for_local_resolution_with_b1td: cdktf.booleanToTerraform(struct!.useRootForwardersForLocalResolutionWithB1Td),
    zone_authority: dataBloxoneDnsViewsResultsZoneAuthorityToTerraform(struct!.zoneAuthority),
  }
}


export function dataBloxoneDnsViewsResultsToHclTerraform(struct?: DataBloxoneDnsViewsResults): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_root_ns: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsCustomRootNsToHclTerraform, false)(struct!.customRootNs),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsCustomRootNsList",
    },
    custom_root_ns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customRootNsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
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
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsDnssecTrustAnchorsToHclTerraform, false)(struct!.dnssecTrustAnchors),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsDnssecTrustAnchorsList",
    },
    dnssec_validate_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.dnssecValidateExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dtc_config: {
      value: dataBloxoneDnsViewsResultsDtcConfigToHclTerraform(struct!.dtcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsDtcConfig",
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
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsEcsZonesToHclTerraform, false)(struct!.ecsZones),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsEcsZonesList",
    },
    edns_udp_size: {
      value: cdktf.numberToHclTerraform(struct!.ednsUdpSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_aaaa_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsFilterAaaaAclToHclTerraform, false)(struct!.filterAaaaAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsFilterAaaaAclList",
    },
    filter_aaaa_on_v4: {
      value: cdktf.stringToHclTerraform(struct!.filterAaaaOnV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarders: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsForwardersToHclTerraform, false)(struct!.forwarders),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsForwardersList",
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
      value: dataBloxoneDnsViewsResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsInheritanceSources",
    },
    ip_spaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSpaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lame_ttl: {
      value: cdktf.numberToHclTerraform(struct!.lameTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_clients_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsMatchClientsAclToHclTerraform, false)(struct!.matchClientsAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsMatchClientsAclList",
    },
    match_destinations_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsMatchDestinationsAclToHclTerraform, false)(struct!.matchDestinationsAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsMatchDestinationsAclList",
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
    max_udp_size: {
      value: cdktf.numberToHclTerraform(struct!.maxUdpSize),
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
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsQueryAclToHclTerraform, false)(struct!.queryAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsQueryAclList",
    },
    recursion_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsRecursionAclToHclTerraform, false)(struct!.recursionAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsRecursionAclList",
    },
    recursion_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.recursionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_list: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsSortListStructToHclTerraform, false)(struct!.sortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsSortListStructList",
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
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsTransferAclToHclTerraform, false)(struct!.transferAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsTransferAclList",
    },
    update_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsViewsResultsUpdateAclToHclTerraform, false)(struct!.updateAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsViewsResultsUpdateAclList",
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
    zone_authority: {
      value: dataBloxoneDnsViewsResultsZoneAuthorityToHclTerraform(struct!.zoneAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsViewsResultsZoneAuthority",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsViewsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsViewsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addEdnsOptionInOutgoingQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.addEdnsOptionInOutgoingQuery = this._addEdnsOptionInOutgoingQuery;
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
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
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
    if (this._dtcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtcConfig = this._dtcConfig?.internalValue;
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
    if (this._ednsUdpSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsUdpSize = this._ednsUdpSize;
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
    if (this._ipSpaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSpaces = this._ipSpaces;
    }
    if (this._lameTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.lameTtl = this._lameTtl;
    }
    if (this._matchClientsAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchClientsAcl = this._matchClientsAcl?.internalValue;
    }
    if (this._matchDestinationsAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDestinationsAcl = this._matchDestinationsAcl?.internalValue;
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
    if (this._maxUdpSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUdpSize = this._maxUdpSize;
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
    if (this._recursionAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionAcl = this._recursionAcl?.internalValue;
    }
    if (this._recursionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursionEnabled = this._recursionEnabled;
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
    if (this._zoneAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAuthority = this._zoneAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsViewsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addEdnsOptionInOutgoingQuery = undefined;
      this._comment = undefined;
      this._customRootNs.internalValue = undefined;
      this._customRootNsEnabled = undefined;
      this._disabled = undefined;
      this._dnssecEnableValidation = undefined;
      this._dnssecEnabled = undefined;
      this._dnssecTrustAnchors.internalValue = undefined;
      this._dnssecValidateExpiry = undefined;
      this._dtcConfig.internalValue = undefined;
      this._ecsEnabled = undefined;
      this._ecsForwarding = undefined;
      this._ecsPrefixV4 = undefined;
      this._ecsPrefixV6 = undefined;
      this._ecsZones.internalValue = undefined;
      this._ednsUdpSize = undefined;
      this._filterAaaaAcl.internalValue = undefined;
      this._filterAaaaOnV4 = undefined;
      this._forwarders.internalValue = undefined;
      this._forwardersOnly = undefined;
      this._gssTsigEnabled = undefined;
      this._inheritanceSources.internalValue = undefined;
      this._ipSpaces = undefined;
      this._lameTtl = undefined;
      this._matchClientsAcl.internalValue = undefined;
      this._matchDestinationsAcl.internalValue = undefined;
      this._matchRecursiveOnly = undefined;
      this._maxCacheTtl = undefined;
      this._maxNegativeTtl = undefined;
      this._maxUdpSize = undefined;
      this._minimalResponses = undefined;
      this._name = undefined;
      this._notify = undefined;
      this._queryAcl.internalValue = undefined;
      this._recursionAcl.internalValue = undefined;
      this._recursionEnabled = undefined;
      this._sortList.internalValue = undefined;
      this._synthesizeAddressRecordsFromHttps = undefined;
      this._tags = undefined;
      this._transferAcl.internalValue = undefined;
      this._updateAcl.internalValue = undefined;
      this._useForwardersForSubzones = undefined;
      this._useRootForwardersForLocalResolutionWithB1Td = undefined;
      this._zoneAuthority.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addEdnsOptionInOutgoingQuery = value.addEdnsOptionInOutgoingQuery;
      this._comment = value.comment;
      this._customRootNs.internalValue = value.customRootNs;
      this._customRootNsEnabled = value.customRootNsEnabled;
      this._disabled = value.disabled;
      this._dnssecEnableValidation = value.dnssecEnableValidation;
      this._dnssecEnabled = value.dnssecEnabled;
      this._dnssecTrustAnchors.internalValue = value.dnssecTrustAnchors;
      this._dnssecValidateExpiry = value.dnssecValidateExpiry;
      this._dtcConfig.internalValue = value.dtcConfig;
      this._ecsEnabled = value.ecsEnabled;
      this._ecsForwarding = value.ecsForwarding;
      this._ecsPrefixV4 = value.ecsPrefixV4;
      this._ecsPrefixV6 = value.ecsPrefixV6;
      this._ecsZones.internalValue = value.ecsZones;
      this._ednsUdpSize = value.ednsUdpSize;
      this._filterAaaaAcl.internalValue = value.filterAaaaAcl;
      this._filterAaaaOnV4 = value.filterAaaaOnV4;
      this._forwarders.internalValue = value.forwarders;
      this._forwardersOnly = value.forwardersOnly;
      this._gssTsigEnabled = value.gssTsigEnabled;
      this._inheritanceSources.internalValue = value.inheritanceSources;
      this._ipSpaces = value.ipSpaces;
      this._lameTtl = value.lameTtl;
      this._matchClientsAcl.internalValue = value.matchClientsAcl;
      this._matchDestinationsAcl.internalValue = value.matchDestinationsAcl;
      this._matchRecursiveOnly = value.matchRecursiveOnly;
      this._maxCacheTtl = value.maxCacheTtl;
      this._maxNegativeTtl = value.maxNegativeTtl;
      this._maxUdpSize = value.maxUdpSize;
      this._minimalResponses = value.minimalResponses;
      this._name = value.name;
      this._notify = value.notify;
      this._queryAcl.internalValue = value.queryAcl;
      this._recursionAcl.internalValue = value.recursionAcl;
      this._recursionEnabled = value.recursionEnabled;
      this._sortList.internalValue = value.sortList;
      this._synthesizeAddressRecordsFromHttps = value.synthesizeAddressRecordsFromHttps;
      this._tags = value.tags;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones = value.useForwardersForSubzones;
      this._useRootForwardersForLocalResolutionWithB1Td = value.useRootForwardersForLocalResolutionWithB1Td;
      this._zoneAuthority.internalValue = value.zoneAuthority;
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
  private _customRootNs = new DataBloxoneDnsViewsResultsCustomRootNsList(this, "custom_root_ns", false);
  public get customRootNs() {
    return this._customRootNs;
  }
  public putCustomRootNs(value: DataBloxoneDnsViewsResultsCustomRootNs[] | cdktf.IResolvable) {
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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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
  private _dnssecRootKeys = new DataBloxoneDnsViewsResultsDnssecRootKeysList(this, "dnssec_root_keys", false);
  public get dnssecRootKeys() {
    return this._dnssecRootKeys;
  }

  // dnssec_trust_anchors - computed: true, optional: true, required: false
  private _dnssecTrustAnchors = new DataBloxoneDnsViewsResultsDnssecTrustAnchorsList(this, "dnssec_trust_anchors", false);
  public get dnssecTrustAnchors() {
    return this._dnssecTrustAnchors;
  }
  public putDnssecTrustAnchors(value: DataBloxoneDnsViewsResultsDnssecTrustAnchors[] | cdktf.IResolvable) {
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

  // dtc_config - computed: true, optional: true, required: false
  private _dtcConfig = new DataBloxoneDnsViewsResultsDtcConfigOutputReference(this, "dtc_config");
  public get dtcConfig() {
    return this._dtcConfig;
  }
  public putDtcConfig(value: DataBloxoneDnsViewsResultsDtcConfig) {
    this._dtcConfig.internalValue = value;
  }
  public resetDtcConfig() {
    this._dtcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtcConfigInput() {
    return this._dtcConfig.internalValue;
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
  private _ecsZones = new DataBloxoneDnsViewsResultsEcsZonesList(this, "ecs_zones", false);
  public get ecsZones() {
    return this._ecsZones;
  }
  public putEcsZones(value: DataBloxoneDnsViewsResultsEcsZones[] | cdktf.IResolvable) {
    this._ecsZones.internalValue = value;
  }
  public resetEcsZones() {
    this._ecsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsZonesInput() {
    return this._ecsZones.internalValue;
  }

  // edns_udp_size - computed: true, optional: true, required: false
  private _ednsUdpSize?: number; 
  public get ednsUdpSize() {
    return this.getNumberAttribute('edns_udp_size');
  }
  public set ednsUdpSize(value: number) {
    this._ednsUdpSize = value;
  }
  public resetEdnsUdpSize() {
    this._ednsUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsUdpSizeInput() {
    return this._ednsUdpSize;
  }

  // filter_aaaa_acl - computed: true, optional: true, required: false
  private _filterAaaaAcl = new DataBloxoneDnsViewsResultsFilterAaaaAclList(this, "filter_aaaa_acl", false);
  public get filterAaaaAcl() {
    return this._filterAaaaAcl;
  }
  public putFilterAaaaAcl(value: DataBloxoneDnsViewsResultsFilterAaaaAcl[] | cdktf.IResolvable) {
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
  private _forwarders = new DataBloxoneDnsViewsResultsForwardersList(this, "forwarders", false);
  public get forwarders() {
    return this._forwarders;
  }
  public putForwarders(value: DataBloxoneDnsViewsResultsForwarders[] | cdktf.IResolvable) {
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
  private _inheritanceSources = new DataBloxoneDnsViewsResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneDnsViewsResultsInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // ip_spaces - computed: true, optional: true, required: false
  private _ipSpaces?: string[]; 
  public get ipSpaces() {
    return this.getListAttribute('ip_spaces');
  }
  public set ipSpaces(value: string[]) {
    this._ipSpaces = value;
  }
  public resetIpSpaces() {
    this._ipSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpacesInput() {
    return this._ipSpaces;
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

  // match_clients_acl - computed: true, optional: true, required: false
  private _matchClientsAcl = new DataBloxoneDnsViewsResultsMatchClientsAclList(this, "match_clients_acl", false);
  public get matchClientsAcl() {
    return this._matchClientsAcl;
  }
  public putMatchClientsAcl(value: DataBloxoneDnsViewsResultsMatchClientsAcl[] | cdktf.IResolvable) {
    this._matchClientsAcl.internalValue = value;
  }
  public resetMatchClientsAcl() {
    this._matchClientsAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientsAclInput() {
    return this._matchClientsAcl.internalValue;
  }

  // match_destinations_acl - computed: true, optional: true, required: false
  private _matchDestinationsAcl = new DataBloxoneDnsViewsResultsMatchDestinationsAclList(this, "match_destinations_acl", false);
  public get matchDestinationsAcl() {
    return this._matchDestinationsAcl;
  }
  public putMatchDestinationsAcl(value: DataBloxoneDnsViewsResultsMatchDestinationsAcl[] | cdktf.IResolvable) {
    this._matchDestinationsAcl.internalValue = value;
  }
  public resetMatchDestinationsAcl() {
    this._matchDestinationsAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationsAclInput() {
    return this._matchDestinationsAcl.internalValue;
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

  // max_udp_size - computed: true, optional: true, required: false
  private _maxUdpSize?: number; 
  public get maxUdpSize() {
    return this.getNumberAttribute('max_udp_size');
  }
  public set maxUdpSize(value: number) {
    this._maxUdpSize = value;
  }
  public resetMaxUdpSize() {
    this._maxUdpSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpSizeInput() {
    return this._maxUdpSize;
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
  private _queryAcl = new DataBloxoneDnsViewsResultsQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DataBloxoneDnsViewsResultsQueryAcl[] | cdktf.IResolvable) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // recursion_acl - computed: true, optional: true, required: false
  private _recursionAcl = new DataBloxoneDnsViewsResultsRecursionAclList(this, "recursion_acl", false);
  public get recursionAcl() {
    return this._recursionAcl;
  }
  public putRecursionAcl(value: DataBloxoneDnsViewsResultsRecursionAcl[] | cdktf.IResolvable) {
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

  // sort_list - computed: true, optional: true, required: false
  private _sortList = new DataBloxoneDnsViewsResultsSortListStructList(this, "sort_list", false);
  public get sortList() {
    return this._sortList;
  }
  public putSortList(value: DataBloxoneDnsViewsResultsSortListStruct[] | cdktf.IResolvable) {
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
  private _transferAcl = new DataBloxoneDnsViewsResultsTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DataBloxoneDnsViewsResultsTransferAcl[] | cdktf.IResolvable) {
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
  private _updateAcl = new DataBloxoneDnsViewsResultsUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DataBloxoneDnsViewsResultsUpdateAcl[] | cdktf.IResolvable) {
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

  // zone_authority - computed: true, optional: true, required: false
  private _zoneAuthority = new DataBloxoneDnsViewsResultsZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
  public putZoneAuthority(value: DataBloxoneDnsViewsResultsZoneAuthority) {
    this._zoneAuthority.internalValue = value;
  }
  public resetZoneAuthority() {
    this._zoneAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAuthorityInput() {
    return this._zoneAuthority.internalValue;
  }
}

export class DataBloxoneDnsViewsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsViewsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsViewsResultsOutputReference {
    return new DataBloxoneDnsViewsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views bloxone_dns_views}
*/
export class DataBloxoneDnsViews extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_views";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDnsViews resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDnsViews to import
  * @param importFromId The id of the existing DataBloxoneDnsViews that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDnsViews to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_views", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_views bloxone_dns_views} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDnsViewsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDnsViewsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_views',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
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
  private _results = new DataBloxoneDnsViewsResultsList(this, "results", false);
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
