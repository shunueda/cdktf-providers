// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDnsAuthZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#filters DataBloxoneDnsAuthZones#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tag_filters DataBloxoneDnsAuthZones#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#key DataBloxoneDnsAuthZones#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsExternalPrimaries {
  /**
  * Optional. Required only if _type_ is _server_. IP Address of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#address DataBloxoneDnsAuthZones#address}
  */
  readonly address?: string;
  /**
  * Optional. Required only if _type_ is _server_. FQDN of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#fqdn DataBloxoneDnsAuthZones#fqdn}
  */
  readonly fqdn?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#nsg DataBloxoneDnsAuthZones#nsg}
  */
  readonly nsg?: string;
  /**
  * Optional. If enabled, secondaries will use the configured TSIG key when requesting a zone transfer from this primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tsig_enabled DataBloxoneDnsAuthZones#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tsig_key DataBloxoneDnsAuthZones#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey;
  /**
  * Allowed values: * _nsg_, * _primary_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#type DataBloxoneDnsAuthZones#type}
  */
  readonly type: string;
}

export function dataBloxoneDnsAuthZonesResultsExternalPrimariesToTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalPrimaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    nsg: cdktf.stringToTerraform(struct!.nsg),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKeyToTerraform(struct!.tsigKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneDnsAuthZonesResultsExternalPrimariesToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalPrimaries | cdktf.IResolvable): any {
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
    nsg: {
      value: cdktf.stringToHclTerraform(struct!.nsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tsig_key: {
      value: dataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey",
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

export class DataBloxoneDnsAuthZonesResultsExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsExternalPrimaries | cdktf.IResolvable | undefined {
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
    if (this._nsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsg = this._nsg;
    }
    if (this._tsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigEnabled = this._tsigEnabled;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsExternalPrimaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
      this._nsg = undefined;
      this._tsigEnabled = undefined;
      this._tsigKey.internalValue = undefined;
      this._type = undefined;
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
      this._nsg = value.nsg;
      this._tsigEnabled = value.tsigEnabled;
      this._tsigKey.internalValue = value.tsigKey;
      this._type = value.type;
    }
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

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // nsg - computed: true, optional: true, required: false
  private _nsg?: string; 
  public get nsg() {
    return this.getStringAttribute('nsg');
  }
  public set nsg(value: string) {
    this._nsg = value;
  }
  public resetNsg() {
    this._nsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgInput() {
    return this._nsg;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }

  // tsig_enabled - computed: true, optional: true, required: false
  private _tsigEnabled?: boolean | cdktf.IResolvable; 
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }
  public set tsigEnabled(value: boolean | cdktf.IResolvable) {
    this._tsigEnabled = value;
  }
  public resetTsigEnabled() {
    this._tsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigEnabledInput() {
    return this._tsigEnabled;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsAuthZonesResultsExternalPrimariesTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }

  // type - computed: true, optional: false, required: true
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

export class DataBloxoneDnsAuthZonesResultsExternalPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsExternalPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsExternalPrimariesOutputReference {
    return new DataBloxoneDnsAuthZonesResultsExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsExternalProviders {
  /**
  * The name of the external provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#name DataBloxoneDnsAuthZones#name}
  */
  readonly name?: string;
  /**
  * Defines the type of external provider. Allowed values:  * _bloxone_ddi_: host type is BloxOne DDI,  * _microsoft_azure_: host type is Microsoft Azure,  * _amazon_web_service_: host type is Amazon Web Services,  * _microsoft_active_directory_: host type is Microsoft Active Directory,  * _google_cloud_platform_: host type is Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#type DataBloxoneDnsAuthZones#type}
  */
  readonly type?: string;
}

export function dataBloxoneDnsAuthZonesResultsExternalProvidersToTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBloxoneDnsAuthZonesResultsExternalProvidersToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalProviders): any {
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

export class DataBloxoneDnsAuthZonesResultsExternalProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsExternalProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsExternalProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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
}

export class DataBloxoneDnsAuthZonesResultsExternalProvidersList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsExternalProviders[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsExternalProvidersOutputReference {
    return new DataBloxoneDnsAuthZonesResultsExternalProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#key DataBloxoneDnsAuthZones#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsExternalSecondaries {
  /**
  * IP Address of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#address DataBloxoneDnsAuthZones#address}
  */
  readonly address: string;
  /**
  * FQDN of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#fqdn DataBloxoneDnsAuthZones#fqdn}
  */
  readonly fqdn: string;
  /**
  * If enabled, the NS record and glue record will NOT be automatically generated according to secondaries nameserver assignment.  Default: _false_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#stealth DataBloxoneDnsAuthZones#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * If enabled, secondaries will use the configured TSIG key when requesting a zone transfer.  Default: _false_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tsig_enabled DataBloxoneDnsAuthZones#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tsig_key DataBloxoneDnsAuthZones#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey;
}

export function dataBloxoneDnsAuthZonesResultsExternalSecondariesToTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsAuthZonesResultsExternalSecondariesToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsExternalSecondaries | cdktf.IResolvable): any {
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
    stealth: {
      value: cdktf.booleanToHclTerraform(struct!.stealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tsig_key: {
      value: dataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsExternalSecondaries | cdktf.IResolvable | undefined {
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
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    if (this._tsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigEnabled = this._tsigEnabled;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsExternalSecondaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
      this._stealth = undefined;
      this._tsigEnabled = undefined;
      this._tsigKey.internalValue = undefined;
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
      this._stealth = value.stealth;
      this._tsigEnabled = value.tsigEnabled;
      this._tsigKey.internalValue = value.tsigKey;
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

  // stealth - computed: true, optional: true, required: false
  private _stealth?: boolean | cdktf.IResolvable; 
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }
  public set stealth(value: boolean | cdktf.IResolvable) {
    this._stealth = value;
  }
  public resetStealth() {
    this._stealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stealthInput() {
    return this._stealth;
  }

  // tsig_enabled - computed: true, optional: true, required: false
  private _tsigEnabled?: boolean | cdktf.IResolvable; 
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }
  public set tsigEnabled(value: boolean | cdktf.IResolvable) {
    this._tsigEnabled = value;
  }
  public resetTsigEnabled() {
    this._tsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigEnabledInput() {
    return this._tsigEnabled;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsAuthZonesResultsExternalSecondariesTsigKey) {
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

export class DataBloxoneDnsAuthZonesResultsExternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsExternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsExternalSecondariesOutputReference {
    return new DataBloxoneDnsAuthZonesResultsExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceAssignedHosts {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#host DataBloxoneDnsAuthZones#host}
  */
  readonly host?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceAssignedHostsToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceAssignedHostsToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsInheritanceAssignedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceAssignedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceAssignedHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }
}

export class DataBloxoneDnsAuthZonesResultsInheritanceAssignedHostsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsInheritanceAssignedHosts[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsInheritanceAssignedHostsOutputReference {
    return new DataBloxoneDnsAuthZonesResultsInheritanceAssignedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesNotifyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesNotifyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey {
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValue {
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueOutputReference {
    return new DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey {
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValue {
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueOutputReference {
    return new DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey {
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValue {
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValue | undefined) {
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
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueOutputReference {
    return new DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue {
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#action DataBloxoneDnsAuthZones#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#default_ttl DataBloxoneDnsAuthZones#default_ttl}
  */
  readonly defaultTtl?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#expire DataBloxoneDnsAuthZones#expire}
  */
  readonly expire?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#mname_block DataBloxoneDnsAuthZones#mname_block}
  */
  readonly mnameBlock?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#negative_ttl DataBloxoneDnsAuthZones#negative_ttl}
  */
  readonly negativeTtl?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#protocol_rname DataBloxoneDnsAuthZones#protocol_rname}
  */
  readonly protocolRname?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#refresh DataBloxoneDnsAuthZones#refresh}
  */
  readonly refresh?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#retry DataBloxoneDnsAuthZones#retry}
  */
  readonly retry?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#rname DataBloxoneDnsAuthZones#rname}
  */
  readonly rname?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct!.defaultTtl),
    expire: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireToTerraform(struct!.expire),
    mname_block: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct!.mnameBlock),
    negative_ttl: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct!.negativeTtl),
    protocol_rname: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct!.protocolRname),
    refresh: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshToTerraform(struct!.refresh),
    retry: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryToTerraform(struct!.retry),
    rname: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameToTerraform(struct!.rname),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl",
    },
    expire: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct!.expire),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire",
    },
    mname_block: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct!.mnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock",
    },
    negative_ttl: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct!.negativeTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl",
    },
    protocol_rname: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct!.protocolRname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname",
    },
    refresh: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct!.refresh),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh",
    },
    retry: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry",
    },
    rname: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct!.rname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority | cdktf.IResolvable | undefined) {
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
  private _defaultTtl = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl) {
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
  private _expire = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireOutputReference(this, "expire");
  public get expire() {
    return this._expire;
  }
  public putExpire(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire) {
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
  private _mnameBlock = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockOutputReference(this, "mname_block");
  public get mnameBlock() {
    return this._mnameBlock;
  }
  public putMnameBlock(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock) {
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
  private _negativeTtl = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlOutputReference(this, "negative_ttl");
  public get negativeTtl() {
    return this._negativeTtl;
  }
  public putNegativeTtl(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl) {
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
  private _protocolRname = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameOutputReference(this, "protocol_rname");
  public get protocolRname() {
    return this._protocolRname;
  }
  public putProtocolRname(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname) {
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
  private _refresh = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshOutputReference(this, "refresh");
  public get refresh() {
    return this._refresh;
  }
  public putRefresh(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh) {
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
  private _retry = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry) {
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
  private _rname = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameOutputReference(this, "rname");
  public get rname() {
    return this._rname;
  }
  public putRname(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname) {
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
export interface DataBloxoneDnsAuthZonesResultsInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#gss_tsig_enabled DataBloxoneDnsAuthZones#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#notify DataBloxoneDnsAuthZones#notify}
  */
  readonly notify?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#query_acl DataBloxoneDnsAuthZones#query_acl}
  */
  readonly queryAcl?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#transfer_acl DataBloxoneDnsAuthZones#transfer_acl}
  */
  readonly transferAcl?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#update_acl DataBloxoneDnsAuthZones#update_acl}
  */
  readonly updateAcl?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#use_forwarders_for_subzones DataBloxoneDnsAuthZones#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#zone_authority DataBloxoneDnsAuthZones#zone_authority}
  */
  readonly zoneAuthority?: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority;
}

export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gss_tsig_enabled: dataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledToTerraform(struct!.gssTsigEnabled),
    notify: dataBloxoneDnsAuthZonesResultsInheritanceSourcesNotifyToTerraform(struct!.notify),
    query_acl: dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclToTerraform(struct!.queryAcl),
    transfer_acl: dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclToTerraform(struct!.transferAcl),
    update_acl: dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclToTerraform(struct!.updateAcl),
    use_forwarders_for_subzones: dataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesToTerraform(struct!.useForwardersForSubzones),
    zone_authority: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityToTerraform(struct!.zoneAuthority),
  }
}


export function dataBloxoneDnsAuthZonesResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gss_tsig_enabled: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledToHclTerraform(struct!.gssTsigEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled",
    },
    notify: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesNotifyToHclTerraform(struct!.notify),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify",
    },
    query_acl: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclToHclTerraform(struct!.queryAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl",
    },
    transfer_acl: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclToHclTerraform(struct!.transferAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl",
    },
    update_acl: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclToHclTerraform(struct!.updateAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl",
    },
    use_forwarders_for_subzones: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones",
    },
    zone_authority: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityToHclTerraform(struct!.zoneAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gssTsigEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled?.internalValue;
    }
    if (this._notify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify?.internalValue;
    }
    if (this._queryAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAcl = this._queryAcl?.internalValue;
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gssTsigEnabled.internalValue = undefined;
      this._notify.internalValue = undefined;
      this._queryAcl.internalValue = undefined;
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
      this._gssTsigEnabled.internalValue = value.gssTsigEnabled;
      this._notify.internalValue = value.notify;
      this._queryAcl.internalValue = value.queryAcl;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones.internalValue = value.useForwardersForSubzones;
      this._zoneAuthority.internalValue = value.zoneAuthority;
    }
  }

  // gss_tsig_enabled - computed: true, optional: true, required: false
  private _gssTsigEnabled = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledOutputReference(this, "gss_tsig_enabled");
  public get gssTsigEnabled() {
    return this._gssTsigEnabled;
  }
  public putGssTsigEnabled(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled) {
    this._gssTsigEnabled.internalValue = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled.internalValue;
  }

  // notify - computed: true, optional: true, required: false
  private _notify = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotifyOutputReference(this, "notify");
  public get notify() {
    return this._notify;
  }
  public putNotify(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesNotify) {
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
  private _queryAcl = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAclOutputReference(this, "query_acl");
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesQueryAcl) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
  }

  // transfer_acl - computed: true, optional: true, required: false
  private _transferAcl = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAclOutputReference(this, "transfer_acl");
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesTransferAcl) {
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
  private _updateAcl = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAclOutputReference(this, "update_acl");
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUpdateAcl) {
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
  private _useForwardersForSubzones = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesOutputReference(this, "use_forwarders_for_subzones");
  public get useForwardersForSubzones() {
    return this._useForwardersForSubzones;
  }
  public putUseForwardersForSubzones(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones) {
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
  private _zoneAuthority = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
  public putZoneAuthority(value: DataBloxoneDnsAuthZonesResultsInheritanceSourcesZoneAuthority) {
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
export interface DataBloxoneDnsAuthZonesResultsInternalSecondaries {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#host DataBloxoneDnsAuthZones#host}
  */
  readonly host: string;
}

export function dataBloxoneDnsAuthZonesResultsInternalSecondariesToTerraform(struct?: DataBloxoneDnsAuthZonesResultsInternalSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataBloxoneDnsAuthZonesResultsInternalSecondariesToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsInternalSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsInternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsInternalSecondaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsInternalSecondaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
    }
  }

  // host - computed: true, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}

export class DataBloxoneDnsAuthZonesResultsInternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsInternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsInternalSecondariesOutputReference {
    return new DataBloxoneDnsAuthZonesResultsInternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsQueryAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#key DataBloxoneDnsAuthZones#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsAuthZonesResultsQueryAclTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsQueryAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsAuthZonesResultsQueryAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsQueryAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsQueryAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsQueryAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsQueryAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsQueryAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#access DataBloxoneDnsAuthZones#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#acl DataBloxoneDnsAuthZones#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#address DataBloxoneDnsAuthZones#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#element DataBloxoneDnsAuthZones#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tsig_key DataBloxoneDnsAuthZones#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsAuthZonesResultsQueryAclTsigKey;
}

export function dataBloxoneDnsAuthZonesResultsQueryAclToTerraform(struct?: DataBloxoneDnsAuthZonesResultsQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsAuthZonesResultsQueryAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsAuthZonesResultsQueryAclToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsQueryAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsAuthZonesResultsQueryAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsQueryAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsQueryAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsQueryAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsAuthZonesResultsQueryAclTsigKey) {
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

export class DataBloxoneDnsAuthZonesResultsQueryAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsQueryAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsQueryAclOutputReference {
    return new DataBloxoneDnsAuthZonesResultsQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsTransferAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#key DataBloxoneDnsAuthZones#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsAuthZonesResultsTransferAclTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsTransferAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsAuthZonesResultsTransferAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsTransferAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsTransferAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsTransferAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsTransferAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsTransferAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#access DataBloxoneDnsAuthZones#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#acl DataBloxoneDnsAuthZones#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#address DataBloxoneDnsAuthZones#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#element DataBloxoneDnsAuthZones#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tsig_key DataBloxoneDnsAuthZones#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsAuthZonesResultsTransferAclTsigKey;
}

export function dataBloxoneDnsAuthZonesResultsTransferAclToTerraform(struct?: DataBloxoneDnsAuthZonesResultsTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsAuthZonesResultsTransferAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsAuthZonesResultsTransferAclToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsTransferAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsAuthZonesResultsTransferAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsTransferAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsTransferAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsTransferAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsAuthZonesResultsTransferAclTsigKey) {
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

export class DataBloxoneDnsAuthZonesResultsTransferAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsTransferAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsTransferAclOutputReference {
    return new DataBloxoneDnsAuthZonesResultsTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#key DataBloxoneDnsAuthZones#key}
  */
  readonly key?: string;
}

export function dataBloxoneDnsAuthZonesResultsUpdateAclTsigKeyToTerraform(struct?: DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataBloxoneDnsAuthZonesResultsUpdateAclTsigKeyToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey | cdktf.IResolvable): any {
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

export class DataBloxoneDnsAuthZonesResultsUpdateAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsAuthZonesResultsUpdateAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#access DataBloxoneDnsAuthZones#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#acl DataBloxoneDnsAuthZones#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#address DataBloxoneDnsAuthZones#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#element DataBloxoneDnsAuthZones#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tsig_key DataBloxoneDnsAuthZones#tsig_key}
  */
  readonly tsigKey?: DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey;
}

export function dataBloxoneDnsAuthZonesResultsUpdateAclToTerraform(struct?: DataBloxoneDnsAuthZonesResultsUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dataBloxoneDnsAuthZonesResultsUpdateAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dataBloxoneDnsAuthZonesResultsUpdateAclToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsUpdateAcl | cdktf.IResolvable): any {
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
      value: dataBloxoneDnsAuthZonesResultsUpdateAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsUpdateAcl | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DataBloxoneDnsAuthZonesResultsUpdateAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DataBloxoneDnsAuthZonesResultsUpdateAclTsigKey) {
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

export class DataBloxoneDnsAuthZonesResultsUpdateAclList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsUpdateAcl[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsUpdateAclOutputReference {
    return new DataBloxoneDnsAuthZonesResultsUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsWarnings {
  /**
  * Warning message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#message DataBloxoneDnsAuthZones#message}
  */
  readonly message?: string;
  /**
  * Name of a warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#name DataBloxoneDnsAuthZones#name}
  */
  readonly name?: string;
}

export function dataBloxoneDnsAuthZonesResultsWarningsToTerraform(struct?: DataBloxoneDnsAuthZonesResultsWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataBloxoneDnsAuthZonesResultsWarningsToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataBloxoneDnsAuthZonesResultsWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResultsWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._name = value.name;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // name - computed: true, optional: true, required: false
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
}

export class DataBloxoneDnsAuthZonesResultsWarningsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResultsWarnings[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsWarningsOutputReference {
    return new DataBloxoneDnsAuthZonesResultsWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDnsAuthZonesResultsZoneAuthority {
  /**
  * Optional. ZoneAuthority default ttl for resource records in zone (value in seconds).  Defaults to 28800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#default_ttl DataBloxoneDnsAuthZones#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Optional. ZoneAuthority expire time in seconds.  Defaults to 2419200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#expire DataBloxoneDnsAuthZones#expire}
  */
  readonly expire?: number;
  /**
  * Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#mname DataBloxoneDnsAuthZones#mname}
  */
  readonly mname?: string;
  /**
  * Optional. ZoneAuthority negative caching (minimum) ttl in seconds.  Defaults to 900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#negative_ttl DataBloxoneDnsAuthZones#negative_ttl}
  */
  readonly negativeTtl?: number;
  /**
  * Optional. ZoneAuthority refresh.  Defaults to 10800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#refresh DataBloxoneDnsAuthZones#refresh}
  */
  readonly refresh?: number;
  /**
  * Optional. ZoneAuthority retry.  Defaults to 3600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#retry DataBloxoneDnsAuthZones#retry}
  */
  readonly retry?: number;
  /**
  * Optional. ZoneAuthority rname.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#rname DataBloxoneDnsAuthZones#rname}
  */
  readonly rname?: string;
  /**
  * Optional. Use default value for master name server.  Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#use_default_mname DataBloxoneDnsAuthZones#use_default_mname}
  */
  readonly useDefaultMname?: boolean | cdktf.IResolvable;
}

export function dataBloxoneDnsAuthZonesResultsZoneAuthorityToTerraform(struct?: DataBloxoneDnsAuthZonesResultsZoneAuthority): any {
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


export function dataBloxoneDnsAuthZonesResultsZoneAuthorityToHclTerraform(struct?: DataBloxoneDnsAuthZonesResultsZoneAuthority): any {
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

export class DataBloxoneDnsAuthZonesResultsZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsAuthZonesResultsZoneAuthority | undefined {
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

  public set internalValue(value: DataBloxoneDnsAuthZonesResultsZoneAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTtl = undefined;
      this._expire = undefined;
      this._mname = undefined;
      this._negativeTtl = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._rname = undefined;
      this._useDefaultMname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DataBloxoneDnsAuthZonesResults {
  /**
  * Optional. Comment for zone configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#comment DataBloxoneDnsAuthZones#comment}
  */
  readonly comment?: string;
  /**
  * Optional. _true_ to disable object. A disabled object is effectively non-existent when generating configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#disabled DataBloxoneDnsAuthZones#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. DNS primaries external to BloxOne DDI. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#external_primaries DataBloxoneDnsAuthZones#external_primaries}
  */
  readonly externalPrimaries?: DataBloxoneDnsAuthZonesResultsExternalPrimaries[] | cdktf.IResolvable;
  /**
  * DNS secondaries external to BloxOne DDI. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#external_secondaries DataBloxoneDnsAuthZones#external_secondaries}
  */
  readonly externalSecondaries?: DataBloxoneDnsAuthZonesResultsExternalSecondaries[] | cdktf.IResolvable;
  /**
  * Zone FQDN. The FQDN supplied at creation will be converted to canonical form.  Read-only after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#fqdn DataBloxoneDnsAuthZones#fqdn}
  */
  readonly fqdn: string;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#gss_tsig_enabled DataBloxoneDnsAuthZones#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#inheritance_sources DataBloxoneDnsAuthZones#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneDnsAuthZonesResultsInheritanceSources;
  /**
  * On-create-only. SOA serial is allowed to be set when the authoritative zone is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#initial_soa_serial DataBloxoneDnsAuthZones#initial_soa_serial}
  */
  readonly initialSoaSerial?: number;
  /**
  * Optional. BloxOne DDI hosts acting as internal secondaries. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#internal_secondaries DataBloxoneDnsAuthZones#internal_secondaries}
  */
  readonly internalSecondaries?: DataBloxoneDnsAuthZonesResultsInternalSecondaries[] | cdktf.IResolvable;
  /**
  * Also notify all external secondary DNS servers if enabled.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#notify DataBloxoneDnsAuthZones#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#nsgs DataBloxoneDnsAuthZones#nsgs}
  */
  readonly nsgs?: string[];
  /**
  * Primary type for an authoritative zone. Read only after creation. Allowed values:  * _external_: zone data owned by an external nameserver,  * _cloud_: zone data is owned by a BloxOne DDI host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#primary_type DataBloxoneDnsAuthZones#primary_type}
  */
  readonly primaryType: string;
  /**
  * Optional. Clients must match this ACL to make authoritative queries. Also used for recursive queries if that ACL is unset.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#query_acl DataBloxoneDnsAuthZones#query_acl}
  */
  readonly queryAcl?: DataBloxoneDnsAuthZonesResultsQueryAcl[] | cdktf.IResolvable;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#tags DataBloxoneDnsAuthZones#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Optional. Clients must match this ACL to receive zone transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#transfer_acl DataBloxoneDnsAuthZones#transfer_acl}
  */
  readonly transferAcl?: DataBloxoneDnsAuthZonesResultsTransferAcl[] | cdktf.IResolvable;
  /**
  * Optional. Specifies which hosts are allowed to submit Dynamic DNS updates for authoritative zones of _primary_type_ _cloud_.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#update_acl DataBloxoneDnsAuthZones#update_acl}
  */
  readonly updateAcl?: DataBloxoneDnsAuthZonesResultsUpdateAcl[] | cdktf.IResolvable;
  /**
  * Optional. Use default forwarders to resolve queries for subzones.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#use_forwarders_for_subzones DataBloxoneDnsAuthZones#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#view DataBloxoneDnsAuthZones#view}
  */
  readonly view?: string;
}

export function dataBloxoneDnsAuthZonesResultsToTerraform(struct?: DataBloxoneDnsAuthZonesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    external_primaries: cdktf.listMapper(dataBloxoneDnsAuthZonesResultsExternalPrimariesToTerraform, false)(struct!.externalPrimaries),
    external_secondaries: cdktf.listMapper(dataBloxoneDnsAuthZonesResultsExternalSecondariesToTerraform, false)(struct!.externalSecondaries),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    gss_tsig_enabled: cdktf.booleanToTerraform(struct!.gssTsigEnabled),
    inheritance_sources: dataBloxoneDnsAuthZonesResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    initial_soa_serial: cdktf.numberToTerraform(struct!.initialSoaSerial),
    internal_secondaries: cdktf.listMapper(dataBloxoneDnsAuthZonesResultsInternalSecondariesToTerraform, false)(struct!.internalSecondaries),
    notify: cdktf.booleanToTerraform(struct!.notify),
    nsgs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgs),
    primary_type: cdktf.stringToTerraform(struct!.primaryType),
    query_acl: cdktf.listMapper(dataBloxoneDnsAuthZonesResultsQueryAclToTerraform, false)(struct!.queryAcl),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transfer_acl: cdktf.listMapper(dataBloxoneDnsAuthZonesResultsTransferAclToTerraform, false)(struct!.transferAcl),
    update_acl: cdktf.listMapper(dataBloxoneDnsAuthZonesResultsUpdateAclToTerraform, false)(struct!.updateAcl),
    use_forwarders_for_subzones: cdktf.booleanToTerraform(struct!.useForwardersForSubzones),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dataBloxoneDnsAuthZonesResultsToHclTerraform(struct?: DataBloxoneDnsAuthZonesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_primaries: {
      value: cdktf.listMapperHcl(dataBloxoneDnsAuthZonesResultsExternalPrimariesToHclTerraform, false)(struct!.externalPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsAuthZonesResultsExternalPrimariesList",
    },
    external_secondaries: {
      value: cdktf.listMapperHcl(dataBloxoneDnsAuthZonesResultsExternalSecondariesToHclTerraform, false)(struct!.externalSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsAuthZonesResultsExternalSecondariesList",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gssTsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inheritance_sources: {
      value: dataBloxoneDnsAuthZonesResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInheritanceSources",
    },
    initial_soa_serial: {
      value: cdktf.numberToHclTerraform(struct!.initialSoaSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_secondaries: {
      value: cdktf.listMapperHcl(dataBloxoneDnsAuthZonesResultsInternalSecondariesToHclTerraform, false)(struct!.internalSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsAuthZonesResultsInternalSecondariesList",
    },
    notify: {
      value: cdktf.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nsgs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_type: {
      value: cdktf.stringToHclTerraform(struct!.primaryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsAuthZonesResultsQueryAclToHclTerraform, false)(struct!.queryAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsAuthZonesResultsQueryAclList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transfer_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsAuthZonesResultsTransferAclToHclTerraform, false)(struct!.transferAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsAuthZonesResultsTransferAclList",
    },
    update_acl: {
      value: cdktf.listMapperHcl(dataBloxoneDnsAuthZonesResultsUpdateAclToHclTerraform, false)(struct!.updateAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDnsAuthZonesResultsUpdateAclList",
    },
    use_forwarders_for_subzones: {
      value: cdktf.booleanToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsAuthZonesResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsAuthZonesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._externalPrimaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPrimaries = this._externalPrimaries?.internalValue;
    }
    if (this._externalSecondaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSecondaries = this._externalSecondaries?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._gssTsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled;
    }
    if (this._inheritanceSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritanceSources = this._inheritanceSources?.internalValue;
    }
    if (this._initialSoaSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSoaSerial = this._initialSoaSerial;
    }
    if (this._internalSecondaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalSecondaries = this._internalSecondaries?.internalValue;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    if (this._nsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgs = this._nsgs;
    }
    if (this._primaryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryType = this._primaryType;
    }
    if (this._queryAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAcl = this._queryAcl?.internalValue;
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
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsAuthZonesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._disabled = undefined;
      this._externalPrimaries.internalValue = undefined;
      this._externalSecondaries.internalValue = undefined;
      this._fqdn = undefined;
      this._gssTsigEnabled = undefined;
      this._inheritanceSources.internalValue = undefined;
      this._initialSoaSerial = undefined;
      this._internalSecondaries.internalValue = undefined;
      this._notify = undefined;
      this._nsgs = undefined;
      this._primaryType = undefined;
      this._queryAcl.internalValue = undefined;
      this._tags = undefined;
      this._transferAcl.internalValue = undefined;
      this._updateAcl.internalValue = undefined;
      this._useForwardersForSubzones = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._disabled = value.disabled;
      this._externalPrimaries.internalValue = value.externalPrimaries;
      this._externalSecondaries.internalValue = value.externalSecondaries;
      this._fqdn = value.fqdn;
      this._gssTsigEnabled = value.gssTsigEnabled;
      this._inheritanceSources.internalValue = value.inheritanceSources;
      this._initialSoaSerial = value.initialSoaSerial;
      this._internalSecondaries.internalValue = value.internalSecondaries;
      this._notify = value.notify;
      this._nsgs = value.nsgs;
      this._primaryType = value.primaryType;
      this._queryAcl.internalValue = value.queryAcl;
      this._tags = value.tags;
      this._transferAcl.internalValue = value.transferAcl;
      this._updateAcl.internalValue = value.updateAcl;
      this._useForwardersForSubzones = value.useForwardersForSubzones;
      this._view = value.view;
    }
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

  // external_primaries - computed: true, optional: true, required: false
  private _externalPrimaries = new DataBloxoneDnsAuthZonesResultsExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }
  public putExternalPrimaries(value: DataBloxoneDnsAuthZonesResultsExternalPrimaries[] | cdktf.IResolvable) {
    this._externalPrimaries.internalValue = value;
  }
  public resetExternalPrimaries() {
    this._externalPrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPrimariesInput() {
    return this._externalPrimaries.internalValue;
  }

  // external_providers - computed: true, optional: false, required: false
  private _externalProviders = new DataBloxoneDnsAuthZonesResultsExternalProvidersList(this, "external_providers", false);
  public get externalProviders() {
    return this._externalProviders;
  }

  // external_secondaries - computed: true, optional: true, required: false
  private _externalSecondaries = new DataBloxoneDnsAuthZonesResultsExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }
  public putExternalSecondaries(value: DataBloxoneDnsAuthZonesResultsExternalSecondaries[] | cdktf.IResolvable) {
    this._externalSecondaries.internalValue = value;
  }
  public resetExternalSecondaries() {
    this._externalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecondariesInput() {
    return this._externalSecondaries.internalValue;
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

  // inheritance_assigned_hosts - computed: true, optional: false, required: false
  private _inheritanceAssignedHosts = new DataBloxoneDnsAuthZonesResultsInheritanceAssignedHostsList(this, "inheritance_assigned_hosts", false);
  public get inheritanceAssignedHosts() {
    return this._inheritanceAssignedHosts;
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DataBloxoneDnsAuthZonesResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneDnsAuthZonesResultsInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // initial_soa_serial - computed: true, optional: true, required: false
  private _initialSoaSerial?: number; 
  public get initialSoaSerial() {
    return this.getNumberAttribute('initial_soa_serial');
  }
  public set initialSoaSerial(value: number) {
    this._initialSoaSerial = value;
  }
  public resetInitialSoaSerial() {
    this._initialSoaSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSoaSerialInput() {
    return this._initialSoaSerial;
  }

  // internal_secondaries - computed: true, optional: true, required: false
  private _internalSecondaries = new DataBloxoneDnsAuthZonesResultsInternalSecondariesList(this, "internal_secondaries", false);
  public get internalSecondaries() {
    return this._internalSecondaries;
  }
  public putInternalSecondaries(value: DataBloxoneDnsAuthZonesResultsInternalSecondaries[] | cdktf.IResolvable) {
    this._internalSecondaries.internalValue = value;
  }
  public resetInternalSecondaries() {
    this._internalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalSecondariesInput() {
    return this._internalSecondaries.internalValue;
  }

  // mapped_subnet - computed: true, optional: false, required: false
  public get mappedSubnet() {
    return this.getStringAttribute('mapped_subnet');
  }

  // mapping - computed: true, optional: false, required: false
  public get mapping() {
    return this.getStringAttribute('mapping');
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

  // nsgs - computed: true, optional: true, required: false
  private _nsgs?: string[]; 
  public get nsgs() {
    return this.getListAttribute('nsgs');
  }
  public set nsgs(value: string[]) {
    this._nsgs = value;
  }
  public resetNsgs() {
    this._nsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgsInput() {
    return this._nsgs;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // primary_type - computed: true, optional: false, required: true
  private _primaryType?: string; 
  public get primaryType() {
    return this.getStringAttribute('primary_type');
  }
  public set primaryType(value: string) {
    this._primaryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTypeInput() {
    return this._primaryType;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }

  // query_acl - computed: true, optional: true, required: false
  private _queryAcl = new DataBloxoneDnsAuthZonesResultsQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DataBloxoneDnsAuthZonesResultsQueryAcl[] | cdktf.IResolvable) {
    this._queryAcl.internalValue = value;
  }
  public resetQueryAcl() {
    this._queryAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAclInput() {
    return this._queryAcl.internalValue;
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
  private _transferAcl = new DataBloxoneDnsAuthZonesResultsTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DataBloxoneDnsAuthZonesResultsTransferAcl[] | cdktf.IResolvable) {
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
  private _updateAcl = new DataBloxoneDnsAuthZonesResultsUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DataBloxoneDnsAuthZonesResultsUpdateAcl[] | cdktf.IResolvable) {
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

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataBloxoneDnsAuthZonesResultsWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }

  // zone_authority - computed: true, optional: false, required: false
  private _zoneAuthority = new DataBloxoneDnsAuthZonesResultsZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
}

export class DataBloxoneDnsAuthZonesResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsAuthZonesResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsAuthZonesResultsOutputReference {
    return new DataBloxoneDnsAuthZonesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones bloxone_dns_auth_zones}
*/
export class DataBloxoneDnsAuthZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_auth_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDnsAuthZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDnsAuthZones to import
  * @param importFromId The id of the existing DataBloxoneDnsAuthZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDnsAuthZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_auth_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dns_auth_zones bloxone_dns_auth_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDnsAuthZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDnsAuthZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_auth_zones',
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
  private _results = new DataBloxoneDnsAuthZonesResultsList(this, "results", false);
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
