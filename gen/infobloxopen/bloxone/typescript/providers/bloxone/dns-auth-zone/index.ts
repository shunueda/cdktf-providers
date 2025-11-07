// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsAuthZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Comment for zone configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#comment DnsAuthZone#comment}
  */
  readonly comment?: string;
  /**
  * Optional. _true_ to disable object. A disabled object is effectively non-existent when generating configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#disabled DnsAuthZone#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. DNS primaries external to BloxOne DDI. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#external_primaries DnsAuthZone#external_primaries}
  */
  readonly externalPrimaries?: DnsAuthZoneExternalPrimaries[] | cdktf.IResolvable;
  /**
  * DNS secondaries external to BloxOne DDI. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#external_secondaries DnsAuthZone#external_secondaries}
  */
  readonly externalSecondaries?: DnsAuthZoneExternalSecondaries[] | cdktf.IResolvable;
  /**
  * Zone FQDN. The FQDN supplied at creation will be converted to canonical form.  Read-only after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#fqdn DnsAuthZone#fqdn}
  */
  readonly fqdn: string;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#gss_tsig_enabled DnsAuthZone#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#inheritance_sources DnsAuthZone#inheritance_sources}
  */
  readonly inheritanceSources?: DnsAuthZoneInheritanceSources;
  /**
  * On-create-only. SOA serial is allowed to be set when the authoritative zone is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#initial_soa_serial DnsAuthZone#initial_soa_serial}
  */
  readonly initialSoaSerial?: number;
  /**
  * Optional. BloxOne DDI hosts acting as internal secondaries. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#internal_secondaries DnsAuthZone#internal_secondaries}
  */
  readonly internalSecondaries?: DnsAuthZoneInternalSecondaries[] | cdktf.IResolvable;
  /**
  * Also notify all external secondary DNS servers if enabled.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#notify DnsAuthZone#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#nsgs DnsAuthZone#nsgs}
  */
  readonly nsgs?: string[];
  /**
  * Primary type for an authoritative zone. Read only after creation. Allowed values:  * _external_: zone data owned by an external nameserver,  * _cloud_: zone data is owned by a BloxOne DDI host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#primary_type DnsAuthZone#primary_type}
  */
  readonly primaryType: string;
  /**
  * Optional. Clients must match this ACL to make authoritative queries. Also used for recursive queries if that ACL is unset.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#query_acl DnsAuthZone#query_acl}
  */
  readonly queryAcl?: DnsAuthZoneQueryAcl[] | cdktf.IResolvable;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tags DnsAuthZone#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Optional. Clients must match this ACL to receive zone transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#transfer_acl DnsAuthZone#transfer_acl}
  */
  readonly transferAcl?: DnsAuthZoneTransferAcl[] | cdktf.IResolvable;
  /**
  * Optional. Specifies which hosts are allowed to submit Dynamic DNS updates for authoritative zones of _primary_type_ _cloud_.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#update_acl DnsAuthZone#update_acl}
  */
  readonly updateAcl?: DnsAuthZoneUpdateAcl[] | cdktf.IResolvable;
  /**
  * Optional. Use default forwarders to resolve queries for subzones.  Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#use_forwarders_for_subzones DnsAuthZone#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#view DnsAuthZone#view}
  */
  readonly view?: string;
}
export interface DnsAuthZoneExternalPrimariesTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#key DnsAuthZone#key}
  */
  readonly key?: string;
}

export function dnsAuthZoneExternalPrimariesTsigKeyToTerraform(struct?: DnsAuthZoneExternalPrimariesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsAuthZoneExternalPrimariesTsigKeyToHclTerraform(struct?: DnsAuthZoneExternalPrimariesTsigKey | cdktf.IResolvable): any {
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

export class DnsAuthZoneExternalPrimariesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneExternalPrimariesTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneExternalPrimariesTsigKey | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneExternalPrimaries {
  /**
  * Optional. Required only if _type_ is _server_. IP Address of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#address DnsAuthZone#address}
  */
  readonly address?: string;
  /**
  * Optional. Required only if _type_ is _server_. FQDN of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#fqdn DnsAuthZone#fqdn}
  */
  readonly fqdn?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#nsg DnsAuthZone#nsg}
  */
  readonly nsg?: string;
  /**
  * Optional. If enabled, secondaries will use the configured TSIG key when requesting a zone transfer from this primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tsig_enabled DnsAuthZone#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tsig_key DnsAuthZone#tsig_key}
  */
  readonly tsigKey?: DnsAuthZoneExternalPrimariesTsigKey;
  /**
  * Allowed values: * _nsg_, * _primary_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#type DnsAuthZone#type}
  */
  readonly type: string;
}

export function dnsAuthZoneExternalPrimariesToTerraform(struct?: DnsAuthZoneExternalPrimaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    nsg: cdktf.stringToTerraform(struct!.nsg),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dnsAuthZoneExternalPrimariesTsigKeyToTerraform(struct!.tsigKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnsAuthZoneExternalPrimariesToHclTerraform(struct?: DnsAuthZoneExternalPrimaries | cdktf.IResolvable): any {
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
      value: dnsAuthZoneExternalPrimariesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneExternalPrimariesTsigKey",
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

export class DnsAuthZoneExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneExternalPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneExternalPrimaries | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DnsAuthZoneExternalPrimariesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsAuthZoneExternalPrimariesTsigKey) {
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

export class DnsAuthZoneExternalPrimariesList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneExternalPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneExternalPrimariesOutputReference {
    return new DnsAuthZoneExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneExternalProviders {
  /**
  * The name of the external provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#name DnsAuthZone#name}
  */
  readonly name?: string;
  /**
  * Defines the type of external provider. Allowed values:  * _bloxone_ddi_: host type is BloxOne DDI,  * _microsoft_azure_: host type is Microsoft Azure,  * _amazon_web_service_: host type is Amazon Web Services,  * _microsoft_active_directory_: host type is Microsoft Active Directory,  * _google_cloud_platform_: host type is Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#type DnsAuthZone#type}
  */
  readonly type?: string;
}

export function dnsAuthZoneExternalProvidersToTerraform(struct?: DnsAuthZoneExternalProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnsAuthZoneExternalProvidersToHclTerraform(struct?: DnsAuthZoneExternalProviders): any {
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

export class DnsAuthZoneExternalProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneExternalProviders | undefined {
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

  public set internalValue(value: DnsAuthZoneExternalProviders | undefined) {
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

export class DnsAuthZoneExternalProvidersList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneExternalProviders[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneExternalProvidersOutputReference {
    return new DnsAuthZoneExternalProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneExternalSecondariesTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#key DnsAuthZone#key}
  */
  readonly key?: string;
}

export function dnsAuthZoneExternalSecondariesTsigKeyToTerraform(struct?: DnsAuthZoneExternalSecondariesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsAuthZoneExternalSecondariesTsigKeyToHclTerraform(struct?: DnsAuthZoneExternalSecondariesTsigKey | cdktf.IResolvable): any {
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

export class DnsAuthZoneExternalSecondariesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneExternalSecondariesTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneExternalSecondariesTsigKey | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneExternalSecondaries {
  /**
  * IP Address of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#address DnsAuthZone#address}
  */
  readonly address: string;
  /**
  * FQDN of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#fqdn DnsAuthZone#fqdn}
  */
  readonly fqdn: string;
  /**
  * If enabled, the NS record and glue record will NOT be automatically generated according to secondaries nameserver assignment.  Default: _false_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#stealth DnsAuthZone#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * If enabled, secondaries will use the configured TSIG key when requesting a zone transfer.  Default: _false_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tsig_enabled DnsAuthZone#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tsig_key DnsAuthZone#tsig_key}
  */
  readonly tsigKey?: DnsAuthZoneExternalSecondariesTsigKey;
}

export function dnsAuthZoneExternalSecondariesToTerraform(struct?: DnsAuthZoneExternalSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dnsAuthZoneExternalSecondariesTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsAuthZoneExternalSecondariesToHclTerraform(struct?: DnsAuthZoneExternalSecondaries | cdktf.IResolvable): any {
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
      value: dnsAuthZoneExternalSecondariesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneExternalSecondariesTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsAuthZoneExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneExternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneExternalSecondaries | cdktf.IResolvable | undefined) {
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
  private _tsigKey = new DnsAuthZoneExternalSecondariesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsAuthZoneExternalSecondariesTsigKey) {
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

export class DnsAuthZoneExternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneExternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneExternalSecondariesOutputReference {
    return new DnsAuthZoneExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneInheritanceAssignedHosts {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#host DnsAuthZone#host}
  */
  readonly host?: string;
}

export function dnsAuthZoneInheritanceAssignedHostsToTerraform(struct?: DnsAuthZoneInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dnsAuthZoneInheritanceAssignedHostsToHclTerraform(struct?: DnsAuthZoneInheritanceAssignedHosts): any {
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

export class DnsAuthZoneInheritanceAssignedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneInheritanceAssignedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceAssignedHosts | undefined) {
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

export class DnsAuthZoneInheritanceAssignedHostsList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneInheritanceAssignedHosts[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneInheritanceAssignedHostsOutputReference {
    return new DnsAuthZoneInheritanceAssignedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneInheritanceSourcesGssTsigEnabled {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesGssTsigEnabledToTerraform(struct?: DnsAuthZoneInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesGssTsigEnabledToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesGssTsigEnabled | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesGssTsigEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesGssTsigEnabled | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesNotify {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesNotifyToTerraform(struct?: DnsAuthZoneInheritanceSourcesNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesNotifyToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesNotify | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesNotifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesNotify | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesNotify | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesQueryAclValueTsigKey {
}

export function dnsAuthZoneInheritanceSourcesQueryAclValueTsigKeyToTerraform(struct?: DnsAuthZoneInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsAuthZoneInheritanceSourcesQueryAclValueTsigKeyToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsAuthZoneInheritanceSourcesQueryAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesQueryAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceSourcesQueryAclValueTsigKey | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesQueryAclValue {
}

export function dnsAuthZoneInheritanceSourcesQueryAclValueToTerraform(struct?: DnsAuthZoneInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsAuthZoneInheritanceSourcesQueryAclValueToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsAuthZoneInheritanceSourcesQueryAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneInheritanceSourcesQueryAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceSourcesQueryAclValue | undefined) {
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
  private _tsigKey = new DnsAuthZoneInheritanceSourcesQueryAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsAuthZoneInheritanceSourcesQueryAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsAuthZoneInheritanceSourcesQueryAclValueOutputReference {
    return new DnsAuthZoneInheritanceSourcesQueryAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneInheritanceSourcesQueryAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesQueryAclToTerraform(struct?: DnsAuthZoneInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesQueryAclToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesQueryAcl | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesQueryAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesQueryAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsAuthZoneInheritanceSourcesQueryAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsAuthZoneInheritanceSourcesTransferAclValueTsigKey {
}

export function dnsAuthZoneInheritanceSourcesTransferAclValueTsigKeyToTerraform(struct?: DnsAuthZoneInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsAuthZoneInheritanceSourcesTransferAclValueTsigKeyToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsAuthZoneInheritanceSourcesTransferAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesTransferAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceSourcesTransferAclValueTsigKey | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesTransferAclValue {
}

export function dnsAuthZoneInheritanceSourcesTransferAclValueToTerraform(struct?: DnsAuthZoneInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsAuthZoneInheritanceSourcesTransferAclValueToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsAuthZoneInheritanceSourcesTransferAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneInheritanceSourcesTransferAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceSourcesTransferAclValue | undefined) {
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
  private _tsigKey = new DnsAuthZoneInheritanceSourcesTransferAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsAuthZoneInheritanceSourcesTransferAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsAuthZoneInheritanceSourcesTransferAclValueOutputReference {
    return new DnsAuthZoneInheritanceSourcesTransferAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneInheritanceSourcesTransferAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesTransferAclToTerraform(struct?: DnsAuthZoneInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesTransferAclToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesTransferAcl | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesTransferAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesTransferAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsAuthZoneInheritanceSourcesTransferAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsAuthZoneInheritanceSourcesUpdateAclValueTsigKey {
}

export function dnsAuthZoneInheritanceSourcesUpdateAclValueTsigKeyToTerraform(struct?: DnsAuthZoneInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsAuthZoneInheritanceSourcesUpdateAclValueTsigKeyToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsAuthZoneInheritanceSourcesUpdateAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesUpdateAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceSourcesUpdateAclValueTsigKey | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesUpdateAclValue {
}

export function dnsAuthZoneInheritanceSourcesUpdateAclValueToTerraform(struct?: DnsAuthZoneInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsAuthZoneInheritanceSourcesUpdateAclValueToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsAuthZoneInheritanceSourcesUpdateAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneInheritanceSourcesUpdateAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceSourcesUpdateAclValue | undefined) {
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
  private _tsigKey = new DnsAuthZoneInheritanceSourcesUpdateAclValueTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DnsAuthZoneInheritanceSourcesUpdateAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DnsAuthZoneInheritanceSourcesUpdateAclValueOutputReference {
    return new DnsAuthZoneInheritanceSourcesUpdateAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneInheritanceSourcesUpdateAcl {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesUpdateAclToTerraform(struct?: DnsAuthZoneInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesUpdateAclToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesUpdateAcl | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesUpdateAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesUpdateAcl | cdktf.IResolvable | undefined) {
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
  private _value = new DnsAuthZoneInheritanceSourcesUpdateAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsAuthZoneInheritanceSourcesUseForwardersForSubzones {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesUseForwardersForSubzonesToTerraform(struct?: DnsAuthZoneInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesUseForwardersForSubzonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesUseForwardersForSubzones | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityExpire {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityExpireToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityExpireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityExpire | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValue {
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValueToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValueToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValue | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock {
  /**
  * Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock | cdktf.IResolvable | undefined) {
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
  private _value = new DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityRefreshToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityRetry {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityRetryToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityRetry | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthorityRname {
  /**
  * The inheritance setting for a field. Valid values are:
  * 
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#action DnsAuthZone#action}
  */
  readonly action?: string;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityRnameToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable): any {
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

export class DnsAuthZoneInheritanceSourcesZoneAuthorityRnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthorityRname | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneInheritanceSourcesZoneAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#default_ttl DnsAuthZone#default_ttl}
  */
  readonly defaultTtl?: DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#expire DnsAuthZone#expire}
  */
  readonly expire?: DnsAuthZoneInheritanceSourcesZoneAuthorityExpire;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#mname_block DnsAuthZone#mname_block}
  */
  readonly mnameBlock?: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#negative_ttl DnsAuthZone#negative_ttl}
  */
  readonly negativeTtl?: DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#protocol_rname DnsAuthZone#protocol_rname}
  */
  readonly protocolRname?: DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#refresh DnsAuthZone#refresh}
  */
  readonly refresh?: DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#retry DnsAuthZone#retry}
  */
  readonly retry?: DnsAuthZoneInheritanceSourcesZoneAuthorityRetry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#rname DnsAuthZone#rname}
  */
  readonly rname?: DnsAuthZoneInheritanceSourcesZoneAuthorityRname;
}

export function dnsAuthZoneInheritanceSourcesZoneAuthorityToTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ttl: dnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct!.defaultTtl),
    expire: dnsAuthZoneInheritanceSourcesZoneAuthorityExpireToTerraform(struct!.expire),
    mname_block: dnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct!.mnameBlock),
    negative_ttl: dnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct!.negativeTtl),
    protocol_rname: dnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct!.protocolRname),
    refresh: dnsAuthZoneInheritanceSourcesZoneAuthorityRefreshToTerraform(struct!.refresh),
    retry: dnsAuthZoneInheritanceSourcesZoneAuthorityRetryToTerraform(struct!.retry),
    rname: dnsAuthZoneInheritanceSourcesZoneAuthorityRnameToTerraform(struct!.rname),
  }
}


export function dnsAuthZoneInheritanceSourcesZoneAuthorityToHclTerraform(struct?: DnsAuthZoneInheritanceSourcesZoneAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ttl: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl",
    },
    expire: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct!.expire),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityExpire",
    },
    mname_block: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct!.mnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock",
    },
    negative_ttl: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct!.negativeTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl",
    },
    protocol_rname: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct!.protocolRname),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname",
    },
    refresh: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct!.refresh),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh",
    },
    retry: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityRetry",
    },
    rname: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct!.rname),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthorityRname",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsAuthZoneInheritanceSourcesZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSourcesZoneAuthority | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSourcesZoneAuthority | cdktf.IResolvable | undefined) {
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
  private _defaultTtl = new DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: DnsAuthZoneInheritanceSourcesZoneAuthorityDefaultTtl) {
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
  private _expire = new DnsAuthZoneInheritanceSourcesZoneAuthorityExpireOutputReference(this, "expire");
  public get expire() {
    return this._expire;
  }
  public putExpire(value: DnsAuthZoneInheritanceSourcesZoneAuthorityExpire) {
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
  private _mnameBlock = new DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlockOutputReference(this, "mname_block");
  public get mnameBlock() {
    return this._mnameBlock;
  }
  public putMnameBlock(value: DnsAuthZoneInheritanceSourcesZoneAuthorityMnameBlock) {
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
  private _negativeTtl = new DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtlOutputReference(this, "negative_ttl");
  public get negativeTtl() {
    return this._negativeTtl;
  }
  public putNegativeTtl(value: DnsAuthZoneInheritanceSourcesZoneAuthorityNegativeTtl) {
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
  private _protocolRname = new DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRnameOutputReference(this, "protocol_rname");
  public get protocolRname() {
    return this._protocolRname;
  }
  public putProtocolRname(value: DnsAuthZoneInheritanceSourcesZoneAuthorityProtocolRname) {
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
  private _refresh = new DnsAuthZoneInheritanceSourcesZoneAuthorityRefreshOutputReference(this, "refresh");
  public get refresh() {
    return this._refresh;
  }
  public putRefresh(value: DnsAuthZoneInheritanceSourcesZoneAuthorityRefresh) {
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
  private _retry = new DnsAuthZoneInheritanceSourcesZoneAuthorityRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DnsAuthZoneInheritanceSourcesZoneAuthorityRetry) {
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
  private _rname = new DnsAuthZoneInheritanceSourcesZoneAuthorityRnameOutputReference(this, "rname");
  public get rname() {
    return this._rname;
  }
  public putRname(value: DnsAuthZoneInheritanceSourcesZoneAuthorityRname) {
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
export interface DnsAuthZoneInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#gss_tsig_enabled DnsAuthZone#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: DnsAuthZoneInheritanceSourcesGssTsigEnabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#notify DnsAuthZone#notify}
  */
  readonly notify?: DnsAuthZoneInheritanceSourcesNotify;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#query_acl DnsAuthZone#query_acl}
  */
  readonly queryAcl?: DnsAuthZoneInheritanceSourcesQueryAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#transfer_acl DnsAuthZone#transfer_acl}
  */
  readonly transferAcl?: DnsAuthZoneInheritanceSourcesTransferAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#update_acl DnsAuthZone#update_acl}
  */
  readonly updateAcl?: DnsAuthZoneInheritanceSourcesUpdateAcl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#use_forwarders_for_subzones DnsAuthZone#use_forwarders_for_subzones}
  */
  readonly useForwardersForSubzones?: DnsAuthZoneInheritanceSourcesUseForwardersForSubzones;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#zone_authority DnsAuthZone#zone_authority}
  */
  readonly zoneAuthority?: DnsAuthZoneInheritanceSourcesZoneAuthority;
}

export function dnsAuthZoneInheritanceSourcesToTerraform(struct?: DnsAuthZoneInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gss_tsig_enabled: dnsAuthZoneInheritanceSourcesGssTsigEnabledToTerraform(struct!.gssTsigEnabled),
    notify: dnsAuthZoneInheritanceSourcesNotifyToTerraform(struct!.notify),
    query_acl: dnsAuthZoneInheritanceSourcesQueryAclToTerraform(struct!.queryAcl),
    transfer_acl: dnsAuthZoneInheritanceSourcesTransferAclToTerraform(struct!.transferAcl),
    update_acl: dnsAuthZoneInheritanceSourcesUpdateAclToTerraform(struct!.updateAcl),
    use_forwarders_for_subzones: dnsAuthZoneInheritanceSourcesUseForwardersForSubzonesToTerraform(struct!.useForwardersForSubzones),
    zone_authority: dnsAuthZoneInheritanceSourcesZoneAuthorityToTerraform(struct!.zoneAuthority),
  }
}


export function dnsAuthZoneInheritanceSourcesToHclTerraform(struct?: DnsAuthZoneInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gss_tsig_enabled: {
      value: dnsAuthZoneInheritanceSourcesGssTsigEnabledToHclTerraform(struct!.gssTsigEnabled),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesGssTsigEnabled",
    },
    notify: {
      value: dnsAuthZoneInheritanceSourcesNotifyToHclTerraform(struct!.notify),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesNotify",
    },
    query_acl: {
      value: dnsAuthZoneInheritanceSourcesQueryAclToHclTerraform(struct!.queryAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesQueryAcl",
    },
    transfer_acl: {
      value: dnsAuthZoneInheritanceSourcesTransferAclToHclTerraform(struct!.transferAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesTransferAcl",
    },
    update_acl: {
      value: dnsAuthZoneInheritanceSourcesUpdateAclToHclTerraform(struct!.updateAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesUpdateAcl",
    },
    use_forwarders_for_subzones: {
      value: dnsAuthZoneInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct!.useForwardersForSubzones),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesUseForwardersForSubzones",
    },
    zone_authority: {
      value: dnsAuthZoneInheritanceSourcesZoneAuthorityToHclTerraform(struct!.zoneAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneInheritanceSourcesZoneAuthority",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsAuthZoneInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneInheritanceSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInheritanceSources | cdktf.IResolvable | undefined) {
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
  private _gssTsigEnabled = new DnsAuthZoneInheritanceSourcesGssTsigEnabledOutputReference(this, "gss_tsig_enabled");
  public get gssTsigEnabled() {
    return this._gssTsigEnabled;
  }
  public putGssTsigEnabled(value: DnsAuthZoneInheritanceSourcesGssTsigEnabled) {
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
  private _notify = new DnsAuthZoneInheritanceSourcesNotifyOutputReference(this, "notify");
  public get notify() {
    return this._notify;
  }
  public putNotify(value: DnsAuthZoneInheritanceSourcesNotify) {
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
  private _queryAcl = new DnsAuthZoneInheritanceSourcesQueryAclOutputReference(this, "query_acl");
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DnsAuthZoneInheritanceSourcesQueryAcl) {
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
  private _transferAcl = new DnsAuthZoneInheritanceSourcesTransferAclOutputReference(this, "transfer_acl");
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DnsAuthZoneInheritanceSourcesTransferAcl) {
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
  private _updateAcl = new DnsAuthZoneInheritanceSourcesUpdateAclOutputReference(this, "update_acl");
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DnsAuthZoneInheritanceSourcesUpdateAcl) {
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
  private _useForwardersForSubzones = new DnsAuthZoneInheritanceSourcesUseForwardersForSubzonesOutputReference(this, "use_forwarders_for_subzones");
  public get useForwardersForSubzones() {
    return this._useForwardersForSubzones;
  }
  public putUseForwardersForSubzones(value: DnsAuthZoneInheritanceSourcesUseForwardersForSubzones) {
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
  private _zoneAuthority = new DnsAuthZoneInheritanceSourcesZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
  public putZoneAuthority(value: DnsAuthZoneInheritanceSourcesZoneAuthority) {
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
export interface DnsAuthZoneInternalSecondaries {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#host DnsAuthZone#host}
  */
  readonly host: string;
}

export function dnsAuthZoneInternalSecondariesToTerraform(struct?: DnsAuthZoneInternalSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dnsAuthZoneInternalSecondariesToHclTerraform(struct?: DnsAuthZoneInternalSecondaries | cdktf.IResolvable): any {
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

export class DnsAuthZoneInternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneInternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneInternalSecondaries | cdktf.IResolvable | undefined) {
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

export class DnsAuthZoneInternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneInternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneInternalSecondariesOutputReference {
    return new DnsAuthZoneInternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneQueryAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#key DnsAuthZone#key}
  */
  readonly key?: string;
}

export function dnsAuthZoneQueryAclTsigKeyToTerraform(struct?: DnsAuthZoneQueryAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsAuthZoneQueryAclTsigKeyToHclTerraform(struct?: DnsAuthZoneQueryAclTsigKey | cdktf.IResolvable): any {
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

export class DnsAuthZoneQueryAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneQueryAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneQueryAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneQueryAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#access DnsAuthZone#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#acl DnsAuthZone#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#address DnsAuthZone#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#element DnsAuthZone#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tsig_key DnsAuthZone#tsig_key}
  */
  readonly tsigKey?: DnsAuthZoneQueryAclTsigKey;
}

export function dnsAuthZoneQueryAclToTerraform(struct?: DnsAuthZoneQueryAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsAuthZoneQueryAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsAuthZoneQueryAclToHclTerraform(struct?: DnsAuthZoneQueryAcl | cdktf.IResolvable): any {
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
      value: dnsAuthZoneQueryAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneQueryAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsAuthZoneQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneQueryAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneQueryAcl | cdktf.IResolvable | undefined) {
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

  // acl - computed: false, optional: true, required: false
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

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsAuthZoneQueryAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsAuthZoneQueryAclTsigKey) {
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

export class DnsAuthZoneQueryAclList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneQueryAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneQueryAclOutputReference {
    return new DnsAuthZoneQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneTransferAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#key DnsAuthZone#key}
  */
  readonly key?: string;
}

export function dnsAuthZoneTransferAclTsigKeyToTerraform(struct?: DnsAuthZoneTransferAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsAuthZoneTransferAclTsigKeyToHclTerraform(struct?: DnsAuthZoneTransferAclTsigKey | cdktf.IResolvable): any {
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

export class DnsAuthZoneTransferAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneTransferAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneTransferAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneTransferAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#access DnsAuthZone#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#acl DnsAuthZone#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#address DnsAuthZone#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#element DnsAuthZone#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tsig_key DnsAuthZone#tsig_key}
  */
  readonly tsigKey?: DnsAuthZoneTransferAclTsigKey;
}

export function dnsAuthZoneTransferAclToTerraform(struct?: DnsAuthZoneTransferAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsAuthZoneTransferAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsAuthZoneTransferAclToHclTerraform(struct?: DnsAuthZoneTransferAcl | cdktf.IResolvable): any {
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
      value: dnsAuthZoneTransferAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneTransferAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsAuthZoneTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneTransferAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneTransferAcl | cdktf.IResolvable | undefined) {
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

  // acl - computed: false, optional: true, required: false
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

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsAuthZoneTransferAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsAuthZoneTransferAclTsigKey) {
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

export class DnsAuthZoneTransferAclList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneTransferAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneTransferAclOutputReference {
    return new DnsAuthZoneTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneUpdateAclTsigKey {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#key DnsAuthZone#key}
  */
  readonly key?: string;
}

export function dnsAuthZoneUpdateAclTsigKeyToTerraform(struct?: DnsAuthZoneUpdateAclTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsAuthZoneUpdateAclTsigKeyToHclTerraform(struct?: DnsAuthZoneUpdateAclTsigKey | cdktf.IResolvable): any {
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

export class DnsAuthZoneUpdateAclTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneUpdateAclTsigKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneUpdateAclTsigKey | cdktf.IResolvable | undefined) {
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
export interface DnsAuthZoneUpdateAcl {
  /**
  * Access permission for _element_.
  * 
  *   Allowed values:
  *   * _allow_
  *   * _deny_
  * 
  *   Must be empty if _element_ is _acl_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#access DnsAuthZone#access}
  */
  readonly access?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#acl DnsAuthZone#acl}
  */
  readonly acl?: string;
  /**
  * Optional. Data for _ip_ _element_.  Must be empty if _element_ is not _ip_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#address DnsAuthZone#address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#element DnsAuthZone#element}
  */
  readonly element?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#tsig_key DnsAuthZone#tsig_key}
  */
  readonly tsigKey?: DnsAuthZoneUpdateAclTsigKey;
}

export function dnsAuthZoneUpdateAclToTerraform(struct?: DnsAuthZoneUpdateAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    acl: cdktf.stringToTerraform(struct!.acl),
    address: cdktf.stringToTerraform(struct!.address),
    element: cdktf.stringToTerraform(struct!.element),
    tsig_key: dnsAuthZoneUpdateAclTsigKeyToTerraform(struct!.tsigKey),
  }
}


export function dnsAuthZoneUpdateAclToHclTerraform(struct?: DnsAuthZoneUpdateAcl | cdktf.IResolvable): any {
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
      value: dnsAuthZoneUpdateAclTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsAuthZoneUpdateAclTsigKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsAuthZoneUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneUpdateAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsAuthZoneUpdateAcl | cdktf.IResolvable | undefined) {
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

  // acl - computed: false, optional: true, required: false
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

  // tsig_key - computed: false, optional: true, required: false
  private _tsigKey = new DnsAuthZoneUpdateAclTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DnsAuthZoneUpdateAclTsigKey) {
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

export class DnsAuthZoneUpdateAclList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneUpdateAcl[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneUpdateAclOutputReference {
    return new DnsAuthZoneUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneWarnings {
  /**
  * Warning message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#message DnsAuthZone#message}
  */
  readonly message?: string;
  /**
  * Name of a warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#name DnsAuthZone#name}
  */
  readonly name?: string;
}

export function dnsAuthZoneWarningsToTerraform(struct?: DnsAuthZoneWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsAuthZoneWarningsToHclTerraform(struct?: DnsAuthZoneWarnings): any {
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

export class DnsAuthZoneWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsAuthZoneWarnings | undefined {
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

  public set internalValue(value: DnsAuthZoneWarnings | undefined) {
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

export class DnsAuthZoneWarningsList extends cdktf.ComplexList {
  public internalValue? : DnsAuthZoneWarnings[] | cdktf.IResolvable

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
  public get(index: number): DnsAuthZoneWarningsOutputReference {
    return new DnsAuthZoneWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsAuthZoneZoneAuthority {
  /**
  * Optional. ZoneAuthority default ttl for resource records in zone (value in seconds).  Defaults to 28800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#default_ttl DnsAuthZone#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Optional. ZoneAuthority expire time in seconds.  Defaults to 2419200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#expire DnsAuthZone#expire}
  */
  readonly expire?: number;
  /**
  * Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#mname DnsAuthZone#mname}
  */
  readonly mname?: string;
  /**
  * Optional. ZoneAuthority negative caching (minimum) ttl in seconds.  Defaults to 900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#negative_ttl DnsAuthZone#negative_ttl}
  */
  readonly negativeTtl?: number;
  /**
  * Optional. ZoneAuthority refresh.  Defaults to 10800.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#refresh DnsAuthZone#refresh}
  */
  readonly refresh?: number;
  /**
  * Optional. ZoneAuthority retry.  Defaults to 3600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#retry DnsAuthZone#retry}
  */
  readonly retry?: number;
  /**
  * Optional. ZoneAuthority rname.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#rname DnsAuthZone#rname}
  */
  readonly rname?: string;
  /**
  * Optional. Use default value for master name server.  Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#use_default_mname DnsAuthZone#use_default_mname}
  */
  readonly useDefaultMname?: boolean | cdktf.IResolvable;
}

export function dnsAuthZoneZoneAuthorityToTerraform(struct?: DnsAuthZoneZoneAuthority): any {
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


export function dnsAuthZoneZoneAuthorityToHclTerraform(struct?: DnsAuthZoneZoneAuthority): any {
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

export class DnsAuthZoneZoneAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsAuthZoneZoneAuthority | undefined {
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

  public set internalValue(value: DnsAuthZoneZoneAuthority | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone bloxone_dns_auth_zone}
*/
export class DnsAuthZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_auth_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsAuthZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsAuthZone to import
  * @param importFromId The id of the existing DnsAuthZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsAuthZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_auth_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_auth_zone bloxone_dns_auth_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsAuthZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsAuthZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_auth_zone',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
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
    this._disabled = config.disabled;
    this._externalPrimaries.internalValue = config.externalPrimaries;
    this._externalSecondaries.internalValue = config.externalSecondaries;
    this._fqdn = config.fqdn;
    this._gssTsigEnabled = config.gssTsigEnabled;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._initialSoaSerial = config.initialSoaSerial;
    this._internalSecondaries.internalValue = config.internalSecondaries;
    this._notify = config.notify;
    this._nsgs = config.nsgs;
    this._primaryType = config.primaryType;
    this._queryAcl.internalValue = config.queryAcl;
    this._tags = config.tags;
    this._transferAcl.internalValue = config.transferAcl;
    this._updateAcl.internalValue = config.updateAcl;
    this._useForwardersForSubzones = config.useForwardersForSubzones;
    this._view = config.view;
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

  // external_primaries - computed: false, optional: true, required: false
  private _externalPrimaries = new DnsAuthZoneExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }
  public putExternalPrimaries(value: DnsAuthZoneExternalPrimaries[] | cdktf.IResolvable) {
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
  private _externalProviders = new DnsAuthZoneExternalProvidersList(this, "external_providers", false);
  public get externalProviders() {
    return this._externalProviders;
  }

  // external_secondaries - computed: false, optional: true, required: false
  private _externalSecondaries = new DnsAuthZoneExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }
  public putExternalSecondaries(value: DnsAuthZoneExternalSecondaries[] | cdktf.IResolvable) {
    this._externalSecondaries.internalValue = value;
  }
  public resetExternalSecondaries() {
    this._externalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecondariesInput() {
    return this._externalSecondaries.internalValue;
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
  private _inheritanceAssignedHosts = new DnsAuthZoneInheritanceAssignedHostsList(this, "inheritance_assigned_hosts", false);
  public get inheritanceAssignedHosts() {
    return this._inheritanceAssignedHosts;
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DnsAuthZoneInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DnsAuthZoneInheritanceSources) {
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

  // internal_secondaries - computed: false, optional: true, required: false
  private _internalSecondaries = new DnsAuthZoneInternalSecondariesList(this, "internal_secondaries", false);
  public get internalSecondaries() {
    return this._internalSecondaries;
  }
  public putInternalSecondaries(value: DnsAuthZoneInternalSecondaries[] | cdktf.IResolvable) {
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

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // primary_type - computed: false, optional: false, required: true
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

  // query_acl - computed: false, optional: true, required: false
  private _queryAcl = new DnsAuthZoneQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }
  public putQueryAcl(value: DnsAuthZoneQueryAcl[] | cdktf.IResolvable) {
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

  // transfer_acl - computed: false, optional: true, required: false
  private _transferAcl = new DnsAuthZoneTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }
  public putTransferAcl(value: DnsAuthZoneTransferAcl[] | cdktf.IResolvable) {
    this._transferAcl.internalValue = value;
  }
  public resetTransferAcl() {
    this._transferAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAclInput() {
    return this._transferAcl.internalValue;
  }

  // update_acl - computed: false, optional: true, required: false
  private _updateAcl = new DnsAuthZoneUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }
  public putUpdateAcl(value: DnsAuthZoneUpdateAcl[] | cdktf.IResolvable) {
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
  private _warnings = new DnsAuthZoneWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }

  // zone_authority - computed: true, optional: false, required: false
  private _zoneAuthority = new DnsAuthZoneZoneAuthorityOutputReference(this, "zone_authority");
  public get zoneAuthority() {
    return this._zoneAuthority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      external_primaries: cdktf.listMapper(dnsAuthZoneExternalPrimariesToTerraform, false)(this._externalPrimaries.internalValue),
      external_secondaries: cdktf.listMapper(dnsAuthZoneExternalSecondariesToTerraform, false)(this._externalSecondaries.internalValue),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      gss_tsig_enabled: cdktf.booleanToTerraform(this._gssTsigEnabled),
      inheritance_sources: dnsAuthZoneInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      initial_soa_serial: cdktf.numberToTerraform(this._initialSoaSerial),
      internal_secondaries: cdktf.listMapper(dnsAuthZoneInternalSecondariesToTerraform, false)(this._internalSecondaries.internalValue),
      notify: cdktf.booleanToTerraform(this._notify),
      nsgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgs),
      primary_type: cdktf.stringToTerraform(this._primaryType),
      query_acl: cdktf.listMapper(dnsAuthZoneQueryAclToTerraform, false)(this._queryAcl.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transfer_acl: cdktf.listMapper(dnsAuthZoneTransferAclToTerraform, false)(this._transferAcl.internalValue),
      update_acl: cdktf.listMapper(dnsAuthZoneUpdateAclToTerraform, false)(this._updateAcl.internalValue),
      use_forwarders_for_subzones: cdktf.booleanToTerraform(this._useForwardersForSubzones),
      view: cdktf.stringToTerraform(this._view),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_primaries: {
        value: cdktf.listMapperHcl(dnsAuthZoneExternalPrimariesToHclTerraform, false)(this._externalPrimaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthZoneExternalPrimariesList",
      },
      external_secondaries: {
        value: cdktf.listMapperHcl(dnsAuthZoneExternalSecondariesToHclTerraform, false)(this._externalSecondaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthZoneExternalSecondariesList",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gss_tsig_enabled: {
        value: cdktf.booleanToHclTerraform(this._gssTsigEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inheritance_sources: {
        value: dnsAuthZoneInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsAuthZoneInheritanceSources",
      },
      initial_soa_serial: {
        value: cdktf.numberToHclTerraform(this._initialSoaSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal_secondaries: {
        value: cdktf.listMapperHcl(dnsAuthZoneInternalSecondariesToHclTerraform, false)(this._internalSecondaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthZoneInternalSecondariesList",
      },
      notify: {
        value: cdktf.booleanToHclTerraform(this._notify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      primary_type: {
        value: cdktf.stringToHclTerraform(this._primaryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_acl: {
        value: cdktf.listMapperHcl(dnsAuthZoneQueryAclToHclTerraform, false)(this._queryAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthZoneQueryAclList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transfer_acl: {
        value: cdktf.listMapperHcl(dnsAuthZoneTransferAclToHclTerraform, false)(this._transferAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthZoneTransferAclList",
      },
      update_acl: {
        value: cdktf.listMapperHcl(dnsAuthZoneUpdateAclToHclTerraform, false)(this._updateAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsAuthZoneUpdateAclList",
      },
      use_forwarders_for_subzones: {
        value: cdktf.booleanToHclTerraform(this._useForwardersForSubzones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
