// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneDelegatedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the zone; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#comment DnsZoneDelegated#comment}
  */
  readonly comment?: string;
  /**
  * This provides information for the remote name server that maintains data for the delegated zone. The Infoblox appliance redirects queries for data for the delegated zone to this remote name server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#delegate_to DnsZoneDelegated#delegate_to}
  */
  readonly delegateTo: DnsZoneDelegatedDelegateTo[] | cdktf.IResolvable;
  /**
  * You can specify the Time to Live (TTL) values of auto-generated NS and glue records for a delegated zone. This value is the number of seconds that data is cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#delegated_ttl DnsZoneDelegated#delegated_ttl}
  */
  readonly delegatedTtl?: number;
  /**
  * Determines whether a zone is disabled or not. When this is set to False, the zone is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#disable DnsZoneDelegated#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * This flag controls whether automatic generation of RFC 2317 CNAMEs for delegated reverse zones overwrite existing PTR records. The default behavior is to overwrite all the existing records in the range; this corresponds to "allow_ptr_creation_in_parent" set to False. However, when this flag is set to True the existing PTR records are not overwritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#enable_rfc2317_exclusion DnsZoneDelegated#enable_rfc2317_exclusion}
  */
  readonly enableRfc2317Exclusion?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#extattrs DnsZoneDelegated#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The name of this DNS zone. For a reverse zone, this is in "address/cidr" format. For other zones, this is in FQDN format. This value can be in unicode format. Note that for a reverse zone, the corresponding zone_format value should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#fqdn DnsZoneDelegated#fqdn}
  */
  readonly fqdn: string;
  /**
  * If you enable this flag, other administrators cannot make conflicting changes. This is for administration purposes only. The zone will continue to serve DNS data even when it is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#locked DnsZoneDelegated#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The flag that determines whether Active Directory is integrated or not. This field is valid only when ms_managed is "STUB", "AUTH_PRIMARY", or "AUTH_BOTH".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#ms_ad_integrated DnsZoneDelegated#ms_ad_integrated}
  */
  readonly msAdIntegrated?: boolean | cdktf.IResolvable;
  /**
  * Determines whether an Active Directory-integrated zone with a Microsoft DNS server as primary allows dynamic updates. Valid values are: "SECURE" if the zone allows secure updates only. "NONE" if the zone forbids dynamic updates. "ANY" if the zone accepts both secure and nonsecure updates. This field is valid only if ms_managed is either "AUTH_PRIMARY" or "AUTH_BOTH". If the flag ms_ad_integrated is false, the value "SECURE" is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#ms_ddns_mode DnsZoneDelegated#ms_ddns_mode}
  */
  readonly msDdnsMode?: string;
  /**
  * The delegation NS group bound with delegated zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#ns_group DnsZoneDelegated#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The RFC2317 prefix value of this DNS zone. Use this field only when the netmask is greater than 24 bits; that is, for a mask between 25 and 31 bits. Enter a prefix, such as the name of the allocated address block. The prefix can be alphanumeric characters, such as 128/26 , 128-189 , or sub-B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#prefix DnsZoneDelegated#prefix}
  */
  readonly prefix?: string;
  /**
  * Use flag for: delegated_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#use_delegated_ttl DnsZoneDelegated#use_delegated_ttl}
  */
  readonly useDelegatedTtl?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the zone resides. Example "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#view DnsZoneDelegated#view}
  */
  readonly view?: string;
  /**
  * Determines the format of this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#zone_format DnsZoneDelegated#zone_format}
  */
  readonly zoneFormat?: string;
}
export interface DnsZoneDelegatedDelegateTo {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#address DnsZoneDelegated#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#name DnsZoneDelegated#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#stealth DnsZoneDelegated#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#tsig_key DnsZoneDelegated#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#tsig_key_alg DnsZoneDelegated#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#tsig_key_name DnsZoneDelegated#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#use_tsig_key_name DnsZoneDelegated#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dnsZoneDelegatedDelegateToToTerraform(struct?: DnsZoneDelegatedDelegateTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dnsZoneDelegatedDelegateToToHclTerraform(struct?: DnsZoneDelegatedDelegateTo | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    tsig_key: {
      value: cdktf.stringToHclTerraform(struct!.tsigKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_alg: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tsig_key_name: {
      value: cdktf.booleanToHclTerraform(struct!.useTsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneDelegatedDelegateToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneDelegatedDelegateTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlg = this._tsigKeyAlg;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    if (this._useTsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTsigKeyName = this._useTsigKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneDelegatedDelegateTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._stealth = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
      this._useTsigKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._stealth = value.stealth;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
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

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
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

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey?: string; 
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }
  public set tsigKey(value: string) {
    this._tsigKey = value;
  }
  public resetTsigKey() {
    this._tsigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey;
  }

  // tsig_key_alg - computed: true, optional: true, required: false
  private _tsigKeyAlg?: string; 
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }
  public set tsigKeyAlg(value: string) {
    this._tsigKeyAlg = value;
  }
  public resetTsigKeyAlg() {
    this._tsigKeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgInput() {
    return this._tsigKeyAlg;
  }

  // tsig_key_name - computed: true, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // use_tsig_key_name - computed: true, optional: true, required: false
  private _useTsigKeyName?: boolean | cdktf.IResolvable; 
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
  public set useTsigKeyName(value: boolean | cdktf.IResolvable) {
    this._useTsigKeyName = value;
  }
  public resetUseTsigKeyName() {
    this._useTsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTsigKeyNameInput() {
    return this._useTsigKeyName;
  }
}

export class DnsZoneDelegatedDelegateToList extends cdktf.ComplexList {
  public internalValue? : DnsZoneDelegatedDelegateTo[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneDelegatedDelegateToOutputReference {
    return new DnsZoneDelegatedDelegateToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated nios_dns_zone_delegated}
*/
export class DnsZoneDelegated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_zone_delegated";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZoneDelegated resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZoneDelegated to import
  * @param importFromId The id of the existing DnsZoneDelegated that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZoneDelegated to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_zone_delegated", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_delegated nios_dns_zone_delegated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneDelegatedConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneDelegatedConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_zone_delegated',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
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
    this._delegateTo.internalValue = config.delegateTo;
    this._delegatedTtl = config.delegatedTtl;
    this._disable = config.disable;
    this._enableRfc2317Exclusion = config.enableRfc2317Exclusion;
    this._extattrs = config.extattrs;
    this._fqdn = config.fqdn;
    this._locked = config.locked;
    this._msAdIntegrated = config.msAdIntegrated;
    this._msDdnsMode = config.msDdnsMode;
    this._nsGroup = config.nsGroup;
    this._prefix = config.prefix;
    this._useDelegatedTtl = config.useDelegatedTtl;
    this._view = config.view;
    this._zoneFormat = config.zoneFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
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

  // delegate_to - computed: false, optional: false, required: true
  private _delegateTo = new DnsZoneDelegatedDelegateToList(this, "delegate_to", false);
  public get delegateTo() {
    return this._delegateTo;
  }
  public putDelegateTo(value: DnsZoneDelegatedDelegateTo[] | cdktf.IResolvable) {
    this._delegateTo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateToInput() {
    return this._delegateTo.internalValue;
  }

  // delegated_ttl - computed: true, optional: true, required: false
  private _delegatedTtl?: number; 
  public get delegatedTtl() {
    return this.getNumberAttribute('delegated_ttl');
  }
  public set delegatedTtl(value: number) {
    this._delegatedTtl = value;
  }
  public resetDelegatedTtl() {
    this._delegatedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedTtlInput() {
    return this._delegatedTtl;
  }

  // disable - computed: true, optional: true, required: false
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

  // display_domain - computed: true, optional: false, required: false
  public get displayDomain() {
    return this.getStringAttribute('display_domain');
  }

  // dns_fqdn - computed: true, optional: false, required: false
  public get dnsFqdn() {
    return this.getStringAttribute('dns_fqdn');
  }

  // enable_rfc2317_exclusion - computed: true, optional: true, required: false
  private _enableRfc2317Exclusion?: boolean | cdktf.IResolvable; 
  public get enableRfc2317Exclusion() {
    return this.getBooleanAttribute('enable_rfc2317_exclusion');
  }
  public set enableRfc2317Exclusion(value: boolean | cdktf.IResolvable) {
    this._enableRfc2317Exclusion = value;
  }
  public resetEnableRfc2317Exclusion() {
    this._enableRfc2317Exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRfc2317ExclusionInput() {
    return this._enableRfc2317Exclusion;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
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

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // locked_by - computed: true, optional: false, required: false
  public get lockedBy() {
    return this.getStringAttribute('locked_by');
  }

  // mask_prefix - computed: true, optional: false, required: false
  public get maskPrefix() {
    return this.getStringAttribute('mask_prefix');
  }

  // ms_ad_integrated - computed: true, optional: true, required: false
  private _msAdIntegrated?: boolean | cdktf.IResolvable; 
  public get msAdIntegrated() {
    return this.getBooleanAttribute('ms_ad_integrated');
  }
  public set msAdIntegrated(value: boolean | cdktf.IResolvable) {
    this._msAdIntegrated = value;
  }
  public resetMsAdIntegrated() {
    this._msAdIntegrated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msAdIntegratedInput() {
    return this._msAdIntegrated;
  }

  // ms_ddns_mode - computed: true, optional: true, required: false
  private _msDdnsMode?: string; 
  public get msDdnsMode() {
    return this.getStringAttribute('ms_ddns_mode');
  }
  public set msDdnsMode(value: string) {
    this._msDdnsMode = value;
  }
  public resetMsDdnsMode() {
    this._msDdnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msDdnsModeInput() {
    return this._msDdnsMode;
  }

  // ms_managed - computed: true, optional: false, required: false
  public get msManaged() {
    return this.getStringAttribute('ms_managed');
  }

  // ms_read_only - computed: true, optional: false, required: false
  public get msReadOnly() {
    return this.getBooleanAttribute('ms_read_only');
  }

  // ms_sync_master_name - computed: true, optional: false, required: false
  public get msSyncMasterName() {
    return this.getStringAttribute('ms_sync_master_name');
  }

  // ns_group - computed: true, optional: true, required: false
  private _nsGroup?: string; 
  public get nsGroup() {
    return this.getStringAttribute('ns_group');
  }
  public set nsGroup(value: string) {
    this._nsGroup = value;
  }
  public resetNsGroup() {
    this._nsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsGroupInput() {
    return this._nsGroup;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // use_delegated_ttl - computed: true, optional: true, required: false
  private _useDelegatedTtl?: boolean | cdktf.IResolvable; 
  public get useDelegatedTtl() {
    return this.getBooleanAttribute('use_delegated_ttl');
  }
  public set useDelegatedTtl(value: boolean | cdktf.IResolvable) {
    this._useDelegatedTtl = value;
  }
  public resetUseDelegatedTtl() {
    this._useDelegatedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDelegatedTtlInput() {
    return this._useDelegatedTtl;
  }

  // using_srg_associations - computed: true, optional: false, required: false
  public get usingSrgAssociations() {
    return this.getBooleanAttribute('using_srg_associations');
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

  // zone_format - computed: true, optional: true, required: false
  private _zoneFormat?: string; 
  public get zoneFormat() {
    return this.getStringAttribute('zone_format');
  }
  public set zoneFormat(value: string) {
    this._zoneFormat = value;
  }
  public resetZoneFormat() {
    this._zoneFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneFormatInput() {
    return this._zoneFormat;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      delegate_to: cdktf.listMapper(dnsZoneDelegatedDelegateToToTerraform, false)(this._delegateTo.internalValue),
      delegated_ttl: cdktf.numberToTerraform(this._delegatedTtl),
      disable: cdktf.booleanToTerraform(this._disable),
      enable_rfc2317_exclusion: cdktf.booleanToTerraform(this._enableRfc2317Exclusion),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      locked: cdktf.booleanToTerraform(this._locked),
      ms_ad_integrated: cdktf.booleanToTerraform(this._msAdIntegrated),
      ms_ddns_mode: cdktf.stringToTerraform(this._msDdnsMode),
      ns_group: cdktf.stringToTerraform(this._nsGroup),
      prefix: cdktf.stringToTerraform(this._prefix),
      use_delegated_ttl: cdktf.booleanToTerraform(this._useDelegatedTtl),
      view: cdktf.stringToTerraform(this._view),
      zone_format: cdktf.stringToTerraform(this._zoneFormat),
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
      delegate_to: {
        value: cdktf.listMapperHcl(dnsZoneDelegatedDelegateToToHclTerraform, false)(this._delegateTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneDelegatedDelegateToList",
      },
      delegated_ttl: {
        value: cdktf.numberToHclTerraform(this._delegatedTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rfc2317_exclusion: {
        value: cdktf.booleanToHclTerraform(this._enableRfc2317Exclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ms_ad_integrated: {
        value: cdktf.booleanToHclTerraform(this._msAdIntegrated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ms_ddns_mode: {
        value: cdktf.stringToHclTerraform(this._msDdnsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ns_group: {
        value: cdktf.stringToHclTerraform(this._nsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_delegated_ttl: {
        value: cdktf.booleanToHclTerraform(this._useDelegatedTtl),
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
      zone_format: {
        value: cdktf.stringToHclTerraform(this._zoneFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
