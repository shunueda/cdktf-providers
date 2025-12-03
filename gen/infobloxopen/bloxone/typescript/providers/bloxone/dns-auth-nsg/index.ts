// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsAuthNsgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Comment for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#comment DnsAuthNsg#comment}
  */
  readonly comment?: string;
  /**
  * Optional. DNS primaries external to BloxOne DDI. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#external_primaries DnsAuthNsg#external_primaries}
  */
  readonly externalPrimaries?: DnsAuthNsgExternalPrimaries[] | cdktf.IResolvable;
  /**
  * DNS secondaries external to BloxOne DDI. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#external_secondaries DnsAuthNsg#external_secondaries}
  */
  readonly externalSecondaries?: DnsAuthNsgExternalSecondaries[] | cdktf.IResolvable;
  /**
  * Optional. BloxOne DDI hosts acting as internal secondaries. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#internal_secondaries DnsAuthNsg#internal_secondaries}
  */
  readonly internalSecondaries?: DnsAuthNsgInternalSecondaries[] | cdktf.IResolvable;
  /**
  * Name of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#name DnsAuthNsg#name}
  */
  readonly name: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#nsgs DnsAuthNsg#nsgs}
  */
  readonly nsgs?: string[];
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#tags DnsAuthNsg#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DnsAuthNsgExternalPrimariesTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#key DnsAuthNsg#key}
  */
  readonly key?: string;
}

export function dnsAuthNsgExternalPrimariesTsigKeyToTerraform(struct?: DnsAuthNsgExternalPrimariesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsAuthNsgExternalPrimariesTsigKeyToHclTerraform(struct?: DnsAuthNsgExternalPrimariesTsigKey | cdktf.IResolvable): any {
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

export class DnsAuthNsgExternalPrimariesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthNsgExternalPrimariesTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthNsgExternalPrimariesTsigKey | cdktf.IResolvable | undefined) {
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
export interface DnsAuthNsgExternalPrimaries {
  /**
  * Optional. Required only if _type_ is _server_. IP Address of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#address DnsAuthNsg#address}
  */
  readonly address?: string;
  /**
  * Optional. Required only if _type_ is _server_. FQDN of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#fqdn DnsAuthNsg#fqdn}
  */
  readonly fqdn?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#nsg DnsAuthNsg#nsg}
  */
  readonly nsg?: string;
  /**
  * Optional. If enabled, secondaries will use the configured TSIG key when requesting a zone transfer from this primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#tsig_enabled DnsAuthNsg#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#tsig_key DnsAuthNsg#tsig_key}
  */
  readonly tsigKey?: DnsAuthNsgExternalPrimariesTsigKey;
  /**
  * Allowed values: * _nsg_, * _primary_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#type DnsAuthNsg#type}
  */
  readonly type: string;
}

export function dnsAuthNsgExternalPrimariesToTerraform(struct?: DnsAuthNsgExternalPrimaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    nsg: cdktf.stringToTerraform(struct!.nsg),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dnsAuthNsgExternalPrimariesTsigKeyToTerraform(struct!.tsigKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnsAuthNsgExternalPrimariesToHclTerraform(struct?: DnsAuthNsgExternalPrimaries | cdktf.IResolvable): any {
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
      value: dnsAuthNsgExternalPrimariesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthNsgExternalPrimariesTsigKey",
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

export class DnsAuthNsgExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthNsgExternalPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthNsgExternalPrimaries | cdktf.IResolvable | undefined) {
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

  // nsg - computed: false, optional: true, required: false
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

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsAuthNsgExternalPrimariesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsAuthNsgExternalPrimariesTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
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
}

export class DnsAuthNsgExternalPrimariesList extends cdktf.ComplexList {
  public internalValue? : DnsAuthNsgExternalPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthNsgExternalPrimariesOutputReference {
    return new DnsAuthNsgExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthNsgExternalSecondariesTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#key DnsAuthNsg#key}
  */
  readonly key?: string;
}

export function dnsAuthNsgExternalSecondariesTsigKeyToTerraform(struct?: DnsAuthNsgExternalSecondariesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsAuthNsgExternalSecondariesTsigKeyToHclTerraform(struct?: DnsAuthNsgExternalSecondariesTsigKey | cdktf.IResolvable): any {
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

export class DnsAuthNsgExternalSecondariesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthNsgExternalSecondariesTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthNsgExternalSecondariesTsigKey | cdktf.IResolvable | undefined) {
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
export interface DnsAuthNsgExternalSecondaries {
  /**
  * IP Address of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#address DnsAuthNsg#address}
  */
  readonly address: string;
  /**
  * FQDN of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#fqdn DnsAuthNsg#fqdn}
  */
  readonly fqdn: string;
  /**
  * If enabled, the NS record and glue record will NOT be automatically generated according to secondaries nameserver assignment.  Default: _false_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#stealth DnsAuthNsg#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * If enabled, secondaries will use the configured TSIG key when requesting a zone transfer.  Default: _false_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#tsig_enabled DnsAuthNsg#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#tsig_key DnsAuthNsg#tsig_key}
  */
  readonly tsigKey?: DnsAuthNsgExternalSecondariesTsigKey;
}

export function dnsAuthNsgExternalSecondariesToTerraform(struct?: DnsAuthNsgExternalSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dnsAuthNsgExternalSecondariesTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsAuthNsgExternalSecondariesToHclTerraform(struct?: DnsAuthNsgExternalSecondaries | cdktf.IResolvable): any {
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
      value: dnsAuthNsgExternalSecondariesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthNsgExternalSecondariesTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsAuthNsgExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthNsgExternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthNsgExternalSecondaries | cdktf.IResolvable | undefined) {
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

  // address - computed: false, optional: false, required: true
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

  // fqdn - computed: false, optional: false, required: true
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
  private _tsigKey = new DnsAuthNsgExternalSecondariesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsAuthNsgExternalSecondariesTsigKey) {
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

export class DnsAuthNsgExternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DnsAuthNsgExternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthNsgExternalSecondariesOutputReference {
    return new DnsAuthNsgExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthNsgInternalSecondaries {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#host DnsAuthNsg#host}
  */
  readonly host: string;
}

export function dnsAuthNsgInternalSecondariesToTerraform(struct?: DnsAuthNsgInternalSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dnsAuthNsgInternalSecondariesToHclTerraform(struct?: DnsAuthNsgInternalSecondaries | cdktf.IResolvable): any {
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

export class DnsAuthNsgInternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthNsgInternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthNsgInternalSecondaries | cdktf.IResolvable | undefined) {
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

  // host - computed: false, optional: false, required: true
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

export class DnsAuthNsgInternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DnsAuthNsgInternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthNsgInternalSecondariesOutputReference {
    return new DnsAuthNsgInternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg bloxone_dns_auth_nsg}
*/
export class DnsAuthNsg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_auth_nsg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsAuthNsg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsAuthNsg to import
  * @param importFromId The id of the existing DnsAuthNsg that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsAuthNsg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_auth_nsg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_auth_nsg bloxone_dns_auth_nsg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsAuthNsgConfig
  */
  public constructor(scope: Construct, id: string, config: DnsAuthNsgConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_auth_nsg',
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
    this._comment = config.comment;
    this._externalPrimaries.internalValue = config.externalPrimaries;
    this._externalSecondaries.internalValue = config.externalSecondaries;
    this._internalSecondaries.internalValue = config.internalSecondaries;
    this._name = config.name;
    this._nsgs = config.nsgs;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // external_primaries - computed: false, optional: true, required: false
  private _externalPrimaries = new DnsAuthNsgExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }
  public putExternalPrimaries(value: DnsAuthNsgExternalPrimaries[] | cdktf.IResolvable) {
    this._externalPrimaries.internalValue = value;
  }
  public resetExternalPrimaries() {
    this._externalPrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPrimariesInput() {
    return this._externalPrimaries.internalValue;
  }

  // external_secondaries - computed: false, optional: true, required: false
  private _externalSecondaries = new DnsAuthNsgExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }
  public putExternalSecondaries(value: DnsAuthNsgExternalSecondaries[] | cdktf.IResolvable) {
    this._externalSecondaries.internalValue = value;
  }
  public resetExternalSecondaries() {
    this._externalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecondariesInput() {
    return this._externalSecondaries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_secondaries - computed: false, optional: true, required: false
  private _internalSecondaries = new DnsAuthNsgInternalSecondariesList(this, "internal_secondaries", false);
  public get internalSecondaries() {
    return this._internalSecondaries;
  }
  public putInternalSecondaries(value: DnsAuthNsgInternalSecondaries[] | cdktf.IResolvable) {
    this._internalSecondaries.internalValue = value;
  }
  public resetInternalSecondaries() {
    this._internalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalSecondariesInput() {
    return this._internalSecondaries.internalValue;
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

  // nsgs - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      external_primaries: cdktf.listMapper(dnsAuthNsgExternalPrimariesToTerraform, false)(this._externalPrimaries.internalValue),
      external_secondaries: cdktf.listMapper(dnsAuthNsgExternalSecondariesToTerraform, false)(this._externalSecondaries.internalValue),
      internal_secondaries: cdktf.listMapper(dnsAuthNsgInternalSecondariesToTerraform, false)(this._internalSecondaries.internalValue),
      name: cdktf.stringToTerraform(this._name),
      nsgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgs),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_primaries: {
        value: cdktf.listMapperHcl(dnsAuthNsgExternalPrimariesToHclTerraform, false)(this._externalPrimaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthNsgExternalPrimariesList",
      },
      external_secondaries: {
        value: cdktf.listMapperHcl(dnsAuthNsgExternalSecondariesToHclTerraform, false)(this._externalSecondaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthNsgExternalSecondariesList",
      },
      internal_secondaries: {
        value: cdktf.listMapperHcl(dnsAuthNsgInternalSecondariesToHclTerraform, false)(this._internalSecondaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthNsgInternalSecondariesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
