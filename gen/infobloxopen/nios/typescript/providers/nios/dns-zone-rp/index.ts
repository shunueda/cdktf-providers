// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneRpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the zone; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#comment DnsZoneRp#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether a zone is disabled or not. When this is set to False, the zone is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#disable DnsZoneRp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object. For valid values for extensible attributes, see {extattrs:values}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#extattrs DnsZoneRp#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of external primary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#external_primaries DnsZoneRp#external_primaries}
  */
  readonly externalPrimaries?: DnsZoneRpExternalPrimaries[] | cdktf.IResolvable;
  /**
  * The list of external secondary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#external_secondaries DnsZoneRp#external_secondaries}
  */
  readonly externalSecondaries?: DnsZoneRpExternalSecondaries[] | cdktf.IResolvable;
  /**
  * Rules to map fireeye alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#fireeye_rule_mapping DnsZoneRp#fireeye_rule_mapping}
  */
  readonly fireeyeRuleMapping?: DnsZoneRpFireeyeRuleMapping;
  /**
  * The name of this DNS zone in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#fqdn DnsZoneRp#fqdn}
  */
  readonly fqdn: string;
  /**
  * The grid primary servers for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#grid_primary DnsZoneRp#grid_primary}
  */
  readonly gridPrimary?: DnsZoneRpGridPrimary[] | cdktf.IResolvable;
  /**
  * The list with Grid members that are secondary servers for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#grid_secondaries DnsZoneRp#grid_secondaries}
  */
  readonly gridSecondaries?: DnsZoneRpGridSecondaries[] | cdktf.IResolvable;
  /**
  * If you enable this flag, other administrators cannot make conflicting changes. This is for administration purposes only. The zone will continue to serve DNS data even when it is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#locked DnsZoneRp#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Determines whether RPZ logging enabled or not at zone level. When this is set to False, the logging is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#log_rpz DnsZoneRp#log_rpz}
  */
  readonly logRpz?: boolean | cdktf.IResolvable;
  /**
  * The list of per-member SOA MNAME information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#member_soa_mnames DnsZoneRp#member_soa_mnames}
  */
  readonly memberSoaMnames?: DnsZoneRpMemberSoaMnames[] | cdktf.IResolvable;
  /**
  * The name server group that serves DNS for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#ns_group DnsZoneRp#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The RFC2317 prefix value of this DNS zone. Use this field only when the netmask is greater than 24 bits; that is, for a mask between 25 and 31 bits. Enter a prefix, such as the name of the allocated address block. The prefix can be alphanumeric characters, such as 128/26 , 128-189 , or sub-B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#prefix DnsZoneRp#prefix}
  */
  readonly prefix?: string;
  /**
  * The hostname policy for records under this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#record_name_policy DnsZoneRp#record_name_policy}
  */
  readonly recordNamePolicy?: string;
  /**
  * Enables the appliance to ignore RPZ-IP triggers with prefix lengths less than the specified minimum prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#rpz_drop_ip_rule_enabled DnsZoneRp#rpz_drop_ip_rule_enabled}
  */
  readonly rpzDropIpRuleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum prefix length for IPv4 RPZ-IP triggers. The appliance ignores RPZ-IP triggers with prefix lengths less than the specified minimum IPv4 prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#rpz_drop_ip_rule_min_prefix_length_ipv4 DnsZoneRp#rpz_drop_ip_rule_min_prefix_length_ipv4}
  */
  readonly rpzDropIpRuleMinPrefixLengthIpv4?: number;
  /**
  * The minimum prefix length for IPv6 RPZ-IP triggers. The appliance ignores RPZ-IP triggers with prefix lengths less than the specified minimum IPv6 prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#rpz_drop_ip_rule_min_prefix_length_ipv6 DnsZoneRp#rpz_drop_ip_rule_min_prefix_length_ipv6}
  */
  readonly rpzDropIpRuleMinPrefixLengthIpv6?: number;
  /**
  * The response policy zone override policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#rpz_policy DnsZoneRp#rpz_policy}
  */
  readonly rpzPolicy?: string;
  /**
  * The severity of this response policy zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#rpz_severity DnsZoneRp#rpz_severity}
  */
  readonly rpzSeverity?: string;
  /**
  * The type of rpz zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#rpz_type DnsZoneRp#rpz_type}
  */
  readonly rpzType?: string;
  /**
  * The serial number in the SOA record incrementally changes every time the record is modified. The Infoblox appliance allows you to change the serial number (in the SOA record) for the primary server so it is higher than the secondary server, thereby ensuring zone transfers come from the primary server (as they should). To change the serial number you need to set a new value at "soa_serial_number" and pass "set_soa_serial_number" as True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#set_soa_serial_number DnsZoneRp#set_soa_serial_number}
  */
  readonly setSoaSerialNumber?: boolean | cdktf.IResolvable;
  /**
  * The Time to Live (TTL) value of the SOA record of this zone. This value is the number of seconds that data is cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#soa_default_ttl DnsZoneRp#soa_default_ttl}
  */
  readonly soaDefaultTtl?: number;
  /**
  * The SOA email value for this zone. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#soa_email DnsZoneRp#soa_email}
  */
  readonly soaEmail?: string;
  /**
  * This setting defines the amount of time, in seconds, after which the secondary server stops giving out answers about the zone because the zone data is too old to be useful. The default is one week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#soa_expire DnsZoneRp#soa_expire}
  */
  readonly soaExpire?: number;
  /**
  * The negative Time to Live (TTL) value of the SOA of the zone indicates how long a secondary server can cache data for "Does Not Respond" responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#soa_negative_ttl DnsZoneRp#soa_negative_ttl}
  */
  readonly soaNegativeTtl?: number;
  /**
  * This indicates the interval at which a secondary server sends a message to the primary server for a zone to check that its data is current, and retrieve fresh data if it is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#soa_refresh DnsZoneRp#soa_refresh}
  */
  readonly soaRefresh?: number;
  /**
  * This indicates how long a secondary server must wait before attempting to recontact the primary server after a connection failure between the two servers occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#soa_retry DnsZoneRp#soa_retry}
  */
  readonly soaRetry?: number;
  /**
  * The serial number in the SOA record incrementally changes every time the record is modified. The Infoblox appliance allows you to change the serial number (in the SOA record) for the primary server so it is higher than the secondary server, thereby ensuring zone transfers come from the primary server (as they should). To change the serial number you need to set a new value at "soa_serial_number" and pass "set_soa_serial_number" as True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#soa_serial_number DnsZoneRp#soa_serial_number}
  */
  readonly soaSerialNumber?: number;
  /**
  * The canonical name of redirect target in substitute policy of response policy zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#substitute_name DnsZoneRp#substitute_name}
  */
  readonly substituteName?: string;
  /**
  * This flag controls whether the zone is using an external primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_external_primary DnsZoneRp#use_external_primary}
  */
  readonly useExternalPrimary?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: soa_default_ttl , soa_expire, soa_negative_ttl, soa_refresh, soa_retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_grid_zone_timer DnsZoneRp#use_grid_zone_timer}
  */
  readonly useGridZoneTimer?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: log_rpz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_log_rpz DnsZoneRp#use_log_rpz}
  */
  readonly useLogRpz?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: record_name_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_record_name_policy DnsZoneRp#use_record_name_policy}
  */
  readonly useRecordNamePolicy?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: rpz_drop_ip_rule_enabled , rpz_drop_ip_rule_min_prefix_length_ipv4, rpz_drop_ip_rule_min_prefix_length_ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_rpz_drop_ip_rule DnsZoneRp#use_rpz_drop_ip_rule}
  */
  readonly useRpzDropIpRule?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: soa_email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_soa_email DnsZoneRp#use_soa_email}
  */
  readonly useSoaEmail?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the zone resides. Example "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#view DnsZoneRp#view}
  */
  readonly view?: string;
}
export interface DnsZoneRpExternalPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#address DnsZoneRp#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#name DnsZoneRp#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#stealth DnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key DnsZoneRp#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key_alg DnsZoneRp#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key_name DnsZoneRp#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_tsig_key_name DnsZoneRp#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dnsZoneRpExternalPrimariesToTerraform(struct?: DnsZoneRpExternalPrimaries | cdktf.IResolvable): any {
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


export function dnsZoneRpExternalPrimariesToHclTerraform(struct?: DnsZoneRpExternalPrimaries | cdktf.IResolvable): any {
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

export class DnsZoneRpExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpExternalPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRpExternalPrimaries | cdktf.IResolvable | undefined) {
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

export class DnsZoneRpExternalPrimariesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRpExternalPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRpExternalPrimariesOutputReference {
    return new DnsZoneRpExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpExternalSecondaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#address DnsZoneRp#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#name DnsZoneRp#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#stealth DnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key DnsZoneRp#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key_alg DnsZoneRp#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key_name DnsZoneRp#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_tsig_key_name DnsZoneRp#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dnsZoneRpExternalSecondariesToTerraform(struct?: DnsZoneRpExternalSecondaries | cdktf.IResolvable): any {
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


export function dnsZoneRpExternalSecondariesToHclTerraform(struct?: DnsZoneRpExternalSecondaries | cdktf.IResolvable): any {
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

export class DnsZoneRpExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpExternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRpExternalSecondaries | cdktf.IResolvable | undefined) {
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

export class DnsZoneRpExternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRpExternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRpExternalSecondariesOutputReference {
    return new DnsZoneRpExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping {
  /**
  * The type of Fireeye Alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#alert_type DnsZoneRp#alert_type}
  */
  readonly alertType?: string;
  /**
  * The expiration Lifetime of alert type. The 32-bit unsigned integer represents the amount of seconds this alert type will live for. 0 means the alert will never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#lifetime DnsZoneRp#lifetime}
  */
  readonly lifetime?: number;
  /**
  * The RPZ rule for the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#rpz_rule DnsZoneRp#rpz_rule}
  */
  readonly rpzRule?: string;
}

export function dnsZoneRpFireeyeRuleMappingFireeyeAlertMappingToTerraform(struct?: DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_type: cdktf.stringToTerraform(struct!.alertType),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    rpz_rule: cdktf.stringToTerraform(struct!.rpzRule),
  }
}


export function dnsZoneRpFireeyeRuleMappingFireeyeAlertMappingToHclTerraform(struct?: DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_type: {
      value: cdktf.stringToHclTerraform(struct!.alertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_rule: {
      value: cdktf.stringToHclTerraform(struct!.rpzRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRpFireeyeRuleMappingFireeyeAlertMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertType = this._alertType;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._rpzRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzRule = this._rpzRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertType = undefined;
      this._lifetime = undefined;
      this._rpzRule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertType = value.alertType;
      this._lifetime = value.lifetime;
      this._rpzRule = value.rpzRule;
    }
  }

  // alert_type - computed: true, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // rpz_rule - computed: true, optional: true, required: false
  private _rpzRule?: string; 
  public get rpzRule() {
    return this.getStringAttribute('rpz_rule');
  }
  public set rpzRule(value: string) {
    this._rpzRule = value;
  }
  public resetRpzRule() {
    this._rpzRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzRuleInput() {
    return this._rpzRule;
  }
}

export class DnsZoneRpFireeyeRuleMappingFireeyeAlertMappingList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRpFireeyeRuleMappingFireeyeAlertMappingOutputReference {
    return new DnsZoneRpFireeyeRuleMappingFireeyeAlertMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpFireeyeRuleMapping {
  /**
  * The override setting for APT alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#apt_override DnsZoneRp#apt_override}
  */
  readonly aptOverride?: string;
  /**
  * The FireEye alert mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#fireeye_alert_mapping DnsZoneRp#fireeye_alert_mapping}
  */
  readonly fireeyeAlertMapping?: DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping[] | cdktf.IResolvable;
  /**
  * The domain name to be substituted, this is applicable only when apt_override is set to "SUBSTITUTE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#substituted_domain_name DnsZoneRp#substituted_domain_name}
  */
  readonly substitutedDomainName?: string;
}

export function dnsZoneRpFireeyeRuleMappingToTerraform(struct?: DnsZoneRpFireeyeRuleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apt_override: cdktf.stringToTerraform(struct!.aptOverride),
    fireeye_alert_mapping: cdktf.listMapper(dnsZoneRpFireeyeRuleMappingFireeyeAlertMappingToTerraform, false)(struct!.fireeyeAlertMapping),
    substituted_domain_name: cdktf.stringToTerraform(struct!.substitutedDomainName),
  }
}


export function dnsZoneRpFireeyeRuleMappingToHclTerraform(struct?: DnsZoneRpFireeyeRuleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apt_override: {
      value: cdktf.stringToHclTerraform(struct!.aptOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fireeye_alert_mapping: {
      value: cdktf.listMapperHcl(dnsZoneRpFireeyeRuleMappingFireeyeAlertMappingToHclTerraform, false)(struct!.fireeyeAlertMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRpFireeyeRuleMappingFireeyeAlertMappingList",
    },
    substituted_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.substitutedDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRpFireeyeRuleMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsZoneRpFireeyeRuleMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aptOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.aptOverride = this._aptOverride;
    }
    if (this._fireeyeAlertMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fireeyeAlertMapping = this._fireeyeAlertMapping?.internalValue;
    }
    if (this._substitutedDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutedDomainName = this._substitutedDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRpFireeyeRuleMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aptOverride = undefined;
      this._fireeyeAlertMapping.internalValue = undefined;
      this._substitutedDomainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aptOverride = value.aptOverride;
      this._fireeyeAlertMapping.internalValue = value.fireeyeAlertMapping;
      this._substitutedDomainName = value.substitutedDomainName;
    }
  }

  // apt_override - computed: true, optional: true, required: false
  private _aptOverride?: string; 
  public get aptOverride() {
    return this.getStringAttribute('apt_override');
  }
  public set aptOverride(value: string) {
    this._aptOverride = value;
  }
  public resetAptOverride() {
    this._aptOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptOverrideInput() {
    return this._aptOverride;
  }

  // fireeye_alert_mapping - computed: true, optional: true, required: false
  private _fireeyeAlertMapping = new DnsZoneRpFireeyeRuleMappingFireeyeAlertMappingList(this, "fireeye_alert_mapping", false);
  public get fireeyeAlertMapping() {
    return this._fireeyeAlertMapping;
  }
  public putFireeyeAlertMapping(value: DnsZoneRpFireeyeRuleMappingFireeyeAlertMapping[] | cdktf.IResolvable) {
    this._fireeyeAlertMapping.internalValue = value;
  }
  public resetFireeyeAlertMapping() {
    this._fireeyeAlertMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireeyeAlertMappingInput() {
    return this._fireeyeAlertMapping.internalValue;
  }

  // substituted_domain_name - computed: true, optional: true, required: false
  private _substitutedDomainName?: string; 
  public get substitutedDomainName() {
    return this.getStringAttribute('substituted_domain_name');
  }
  public set substitutedDomainName(value: string) {
    this._substitutedDomainName = value;
  }
  public resetSubstitutedDomainName() {
    this._substitutedDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutedDomainNameInput() {
    return this._substitutedDomainName;
  }
}
export interface DnsZoneRpGridPrimaryPreferredPrimaries {
}

export function dnsZoneRpGridPrimaryPreferredPrimariesToTerraform(struct?: DnsZoneRpGridPrimaryPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsZoneRpGridPrimaryPreferredPrimariesToHclTerraform(struct?: DnsZoneRpGridPrimaryPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsZoneRpGridPrimaryPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpGridPrimaryPreferredPrimaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRpGridPrimaryPreferredPrimaries | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_alg - computed: true, optional: false, required: false
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // use_tsig_key_name - computed: true, optional: false, required: false
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
}

export class DnsZoneRpGridPrimaryPreferredPrimariesList extends cdktf.ComplexList {

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
  public get(index: number): DnsZoneRpGridPrimaryPreferredPrimariesOutputReference {
    return new DnsZoneRpGridPrimaryPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpGridPrimary {
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#name DnsZoneRp#name}
  */
  readonly name: string;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#stealth DnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dnsZoneRpGridPrimaryToTerraform(struct?: DnsZoneRpGridPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dnsZoneRpGridPrimaryToHclTerraform(struct?: DnsZoneRpGridPrimary | cdktf.IResolvable): any {
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
    stealth: {
      value: cdktf.booleanToHclTerraform(struct!.stealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRpGridPrimaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpGridPrimary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRpGridPrimary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stealth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stealth = value.stealth;
    }
  }

  // enable_preferred_primaries - computed: true, optional: false, required: false
  public get enablePreferredPrimaries() {
    return this.getBooleanAttribute('enable_preferred_primaries');
  }

  // grid_replicate - computed: true, optional: false, required: false
  public get gridReplicate() {
    return this.getBooleanAttribute('grid_replicate');
  }

  // lead - computed: true, optional: false, required: false
  public get lead() {
    return this.getBooleanAttribute('lead');
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

  // preferred_primaries - computed: true, optional: false, required: false
  private _preferredPrimaries = new DnsZoneRpGridPrimaryPreferredPrimariesList(this, "preferred_primaries", false);
  public get preferredPrimaries() {
    return this._preferredPrimaries;
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
}

export class DnsZoneRpGridPrimaryList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRpGridPrimary[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRpGridPrimaryOutputReference {
    return new DnsZoneRpGridPrimaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpGridSecondariesPreferredPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#address DnsZoneRp#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#name DnsZoneRp#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#stealth DnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key DnsZoneRp#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key_alg DnsZoneRp#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#tsig_key_name DnsZoneRp#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#use_tsig_key_name DnsZoneRp#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dnsZoneRpGridSecondariesPreferredPrimariesToTerraform(struct?: DnsZoneRpGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
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


export function dnsZoneRpGridSecondariesPreferredPrimariesToHclTerraform(struct?: DnsZoneRpGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
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

export class DnsZoneRpGridSecondariesPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRpGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined) {
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

export class DnsZoneRpGridSecondariesPreferredPrimariesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRpGridSecondariesPreferredPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRpGridSecondariesPreferredPrimariesOutputReference {
    return new DnsZoneRpGridSecondariesPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpGridSecondaries {
  /**
  * This flag represents whether the preferred_primaries field values of this member are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#enable_preferred_primaries DnsZoneRp#enable_preferred_primaries}
  */
  readonly enablePreferredPrimaries?: boolean | cdktf.IResolvable;
  /**
  * The flag represents DNS zone transfers if set to False, and ID Grid Replication if set to True. This flag is ignored if the struct is specified as part of a stub zone or if it is set as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#grid_replicate DnsZoneRp#grid_replicate}
  */
  readonly gridReplicate?: boolean | cdktf.IResolvable;
  /**
  * This flag controls whether the Grid lead secondary server performs zone transfers to non lead secondaries. This flag is ignored if the struct is specified as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#lead DnsZoneRp#lead}
  */
  readonly lead?: boolean | cdktf.IResolvable;
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#name DnsZoneRp#name}
  */
  readonly name: string;
  /**
  * The primary preference list with Grid member names and\or External Server extserver structs for this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#preferred_primaries DnsZoneRp#preferred_primaries}
  */
  readonly preferredPrimaries?: DnsZoneRpGridSecondariesPreferredPrimaries[] | cdktf.IResolvable;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#stealth DnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dnsZoneRpGridSecondariesToTerraform(struct?: DnsZoneRpGridSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_preferred_primaries: cdktf.booleanToTerraform(struct!.enablePreferredPrimaries),
    grid_replicate: cdktf.booleanToTerraform(struct!.gridReplicate),
    lead: cdktf.booleanToTerraform(struct!.lead),
    name: cdktf.stringToTerraform(struct!.name),
    preferred_primaries: cdktf.listMapper(dnsZoneRpGridSecondariesPreferredPrimariesToTerraform, false)(struct!.preferredPrimaries),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dnsZoneRpGridSecondariesToHclTerraform(struct?: DnsZoneRpGridSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_preferred_primaries: {
      value: cdktf.booleanToHclTerraform(struct!.enablePreferredPrimaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grid_replicate: {
      value: cdktf.booleanToHclTerraform(struct!.gridReplicate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lead: {
      value: cdktf.booleanToHclTerraform(struct!.lead),
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
    preferred_primaries: {
      value: cdktf.listMapperHcl(dnsZoneRpGridSecondariesPreferredPrimariesToHclTerraform, false)(struct!.preferredPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DnsZoneRpGridSecondariesPreferredPrimariesList",
    },
    stealth: {
      value: cdktf.booleanToHclTerraform(struct!.stealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRpGridSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpGridSecondaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePreferredPrimaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePreferredPrimaries = this._enablePreferredPrimaries;
    }
    if (this._gridReplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridReplicate = this._gridReplicate;
    }
    if (this._lead !== undefined) {
      hasAnyValues = true;
      internalValueResult.lead = this._lead;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredPrimaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredPrimaries = this._preferredPrimaries?.internalValue;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRpGridSecondaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePreferredPrimaries = undefined;
      this._gridReplicate = undefined;
      this._lead = undefined;
      this._name = undefined;
      this._preferredPrimaries.internalValue = undefined;
      this._stealth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePreferredPrimaries = value.enablePreferredPrimaries;
      this._gridReplicate = value.gridReplicate;
      this._lead = value.lead;
      this._name = value.name;
      this._preferredPrimaries.internalValue = value.preferredPrimaries;
      this._stealth = value.stealth;
    }
  }

  // enable_preferred_primaries - computed: true, optional: true, required: false
  private _enablePreferredPrimaries?: boolean | cdktf.IResolvable; 
  public get enablePreferredPrimaries() {
    return this.getBooleanAttribute('enable_preferred_primaries');
  }
  public set enablePreferredPrimaries(value: boolean | cdktf.IResolvable) {
    this._enablePreferredPrimaries = value;
  }
  public resetEnablePreferredPrimaries() {
    this._enablePreferredPrimaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreferredPrimariesInput() {
    return this._enablePreferredPrimaries;
  }

  // grid_replicate - computed: true, optional: true, required: false
  private _gridReplicate?: boolean | cdktf.IResolvable; 
  public get gridReplicate() {
    return this.getBooleanAttribute('grid_replicate');
  }
  public set gridReplicate(value: boolean | cdktf.IResolvable) {
    this._gridReplicate = value;
  }
  public resetGridReplicate() {
    this._gridReplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridReplicateInput() {
    return this._gridReplicate;
  }

  // lead - computed: true, optional: true, required: false
  private _lead?: boolean | cdktf.IResolvable; 
  public get lead() {
    return this.getBooleanAttribute('lead');
  }
  public set lead(value: boolean | cdktf.IResolvable) {
    this._lead = value;
  }
  public resetLead() {
    this._lead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadInput() {
    return this._lead;
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

  // preferred_primaries - computed: true, optional: true, required: false
  private _preferredPrimaries = new DnsZoneRpGridSecondariesPreferredPrimariesList(this, "preferred_primaries", false);
  public get preferredPrimaries() {
    return this._preferredPrimaries;
  }
  public putPreferredPrimaries(value: DnsZoneRpGridSecondariesPreferredPrimaries[] | cdktf.IResolvable) {
    this._preferredPrimaries.internalValue = value;
  }
  public resetPreferredPrimaries() {
    this._preferredPrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredPrimariesInput() {
    return this._preferredPrimaries.internalValue;
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
}

export class DnsZoneRpGridSecondariesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRpGridSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRpGridSecondariesOutputReference {
    return new DnsZoneRpGridSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpMemberSoaMnames {
  /**
  * The grid primary server for the zone. Only one of "grid_primary" or "ms_server_primary" should be set when modifying or creating the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#grid_primary DnsZoneRp#grid_primary}
  */
  readonly gridPrimary?: string;
  /**
  * Master's SOA MNAME. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#mname DnsZoneRp#mname}
  */
  readonly mname?: string;
  /**
  * The primary MS server for the zone. Only one of "grid_primary" or "ms_server_primary" should be set when modifying or creating the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#ms_server_primary DnsZoneRp#ms_server_primary}
  */
  readonly msServerPrimary?: string;
}

export function dnsZoneRpMemberSoaMnamesToTerraform(struct?: DnsZoneRpMemberSoaMnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grid_primary: cdktf.stringToTerraform(struct!.gridPrimary),
    mname: cdktf.stringToTerraform(struct!.mname),
    ms_server_primary: cdktf.stringToTerraform(struct!.msServerPrimary),
  }
}


export function dnsZoneRpMemberSoaMnamesToHclTerraform(struct?: DnsZoneRpMemberSoaMnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grid_primary: {
      value: cdktf.stringToHclTerraform(struct!.gridPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mname: {
      value: cdktf.stringToHclTerraform(struct!.mname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_server_primary: {
      value: cdktf.stringToHclTerraform(struct!.msServerPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRpMemberSoaMnamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpMemberSoaMnames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gridPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridPrimary = this._gridPrimary;
    }
    if (this._mname !== undefined) {
      hasAnyValues = true;
      internalValueResult.mname = this._mname;
    }
    if (this._msServerPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.msServerPrimary = this._msServerPrimary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRpMemberSoaMnames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gridPrimary = undefined;
      this._mname = undefined;
      this._msServerPrimary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gridPrimary = value.gridPrimary;
      this._mname = value.mname;
      this._msServerPrimary = value.msServerPrimary;
    }
  }

  // dns_mname - computed: true, optional: false, required: false
  public get dnsMname() {
    return this.getStringAttribute('dns_mname');
  }

  // grid_primary - computed: true, optional: true, required: false
  private _gridPrimary?: string; 
  public get gridPrimary() {
    return this.getStringAttribute('grid_primary');
  }
  public set gridPrimary(value: string) {
    this._gridPrimary = value;
  }
  public resetGridPrimary() {
    this._gridPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridPrimaryInput() {
    return this._gridPrimary;
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

  // ms_server_primary - computed: true, optional: true, required: false
  private _msServerPrimary?: string; 
  public get msServerPrimary() {
    return this.getStringAttribute('ms_server_primary');
  }
  public set msServerPrimary(value: string) {
    this._msServerPrimary = value;
  }
  public resetMsServerPrimary() {
    this._msServerPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msServerPrimaryInput() {
    return this._msServerPrimary;
  }
}

export class DnsZoneRpMemberSoaMnamesList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRpMemberSoaMnames[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRpMemberSoaMnamesOutputReference {
    return new DnsZoneRpMemberSoaMnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRpMemberSoaSerials {
}

export function dnsZoneRpMemberSoaSerialsToTerraform(struct?: DnsZoneRpMemberSoaSerials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsZoneRpMemberSoaSerialsToHclTerraform(struct?: DnsZoneRpMemberSoaSerials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsZoneRpMemberSoaSerialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRpMemberSoaSerials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRpMemberSoaSerials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grid_primary - computed: true, optional: false, required: false
  public get gridPrimary() {
    return this.getStringAttribute('grid_primary');
  }

  // ms_server_primary - computed: true, optional: false, required: false
  public get msServerPrimary() {
    return this.getStringAttribute('ms_server_primary');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getNumberAttribute('serial');
  }
}

export class DnsZoneRpMemberSoaSerialsList extends cdktf.ComplexList {

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
  public get(index: number): DnsZoneRpMemberSoaSerialsOutputReference {
    return new DnsZoneRpMemberSoaSerialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp nios_dns_zone_rp}
*/
export class DnsZoneRp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_zone_rp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZoneRp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZoneRp to import
  * @param importFromId The id of the existing DnsZoneRp that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZoneRp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_zone_rp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_zone_rp nios_dns_zone_rp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneRpConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneRpConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_zone_rp',
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
    this._disable = config.disable;
    this._extattrs = config.extattrs;
    this._externalPrimaries.internalValue = config.externalPrimaries;
    this._externalSecondaries.internalValue = config.externalSecondaries;
    this._fireeyeRuleMapping.internalValue = config.fireeyeRuleMapping;
    this._fqdn = config.fqdn;
    this._gridPrimary.internalValue = config.gridPrimary;
    this._gridSecondaries.internalValue = config.gridSecondaries;
    this._locked = config.locked;
    this._logRpz = config.logRpz;
    this._memberSoaMnames.internalValue = config.memberSoaMnames;
    this._nsGroup = config.nsGroup;
    this._prefix = config.prefix;
    this._recordNamePolicy = config.recordNamePolicy;
    this._rpzDropIpRuleEnabled = config.rpzDropIpRuleEnabled;
    this._rpzDropIpRuleMinPrefixLengthIpv4 = config.rpzDropIpRuleMinPrefixLengthIpv4;
    this._rpzDropIpRuleMinPrefixLengthIpv6 = config.rpzDropIpRuleMinPrefixLengthIpv6;
    this._rpzPolicy = config.rpzPolicy;
    this._rpzSeverity = config.rpzSeverity;
    this._rpzType = config.rpzType;
    this._setSoaSerialNumber = config.setSoaSerialNumber;
    this._soaDefaultTtl = config.soaDefaultTtl;
    this._soaEmail = config.soaEmail;
    this._soaExpire = config.soaExpire;
    this._soaNegativeTtl = config.soaNegativeTtl;
    this._soaRefresh = config.soaRefresh;
    this._soaRetry = config.soaRetry;
    this._soaSerialNumber = config.soaSerialNumber;
    this._substituteName = config.substituteName;
    this._useExternalPrimary = config.useExternalPrimary;
    this._useGridZoneTimer = config.useGridZoneTimer;
    this._useLogRpz = config.useLogRpz;
    this._useRecordNamePolicy = config.useRecordNamePolicy;
    this._useRpzDropIpRule = config.useRpzDropIpRule;
    this._useSoaEmail = config.useSoaEmail;
    this._view = config.view;
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

  // dns_soa_email - computed: true, optional: false, required: false
  public get dnsSoaEmail() {
    return this.getStringAttribute('dns_soa_email');
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

  // external_primaries - computed: true, optional: true, required: false
  private _externalPrimaries = new DnsZoneRpExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }
  public putExternalPrimaries(value: DnsZoneRpExternalPrimaries[] | cdktf.IResolvable) {
    this._externalPrimaries.internalValue = value;
  }
  public resetExternalPrimaries() {
    this._externalPrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPrimariesInput() {
    return this._externalPrimaries.internalValue;
  }

  // external_secondaries - computed: true, optional: true, required: false
  private _externalSecondaries = new DnsZoneRpExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }
  public putExternalSecondaries(value: DnsZoneRpExternalSecondaries[] | cdktf.IResolvable) {
    this._externalSecondaries.internalValue = value;
  }
  public resetExternalSecondaries() {
    this._externalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecondariesInput() {
    return this._externalSecondaries.internalValue;
  }

  // fireeye_rule_mapping - computed: true, optional: true, required: false
  private _fireeyeRuleMapping = new DnsZoneRpFireeyeRuleMappingOutputReference(this, "fireeye_rule_mapping");
  public get fireeyeRuleMapping() {
    return this._fireeyeRuleMapping;
  }
  public putFireeyeRuleMapping(value: DnsZoneRpFireeyeRuleMapping) {
    this._fireeyeRuleMapping.internalValue = value;
  }
  public resetFireeyeRuleMapping() {
    this._fireeyeRuleMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireeyeRuleMappingInput() {
    return this._fireeyeRuleMapping.internalValue;
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

  // grid_primary - computed: true, optional: true, required: false
  private _gridPrimary = new DnsZoneRpGridPrimaryList(this, "grid_primary", false);
  public get gridPrimary() {
    return this._gridPrimary;
  }
  public putGridPrimary(value: DnsZoneRpGridPrimary[] | cdktf.IResolvable) {
    this._gridPrimary.internalValue = value;
  }
  public resetGridPrimary() {
    this._gridPrimary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridPrimaryInput() {
    return this._gridPrimary.internalValue;
  }

  // grid_secondaries - computed: true, optional: true, required: false
  private _gridSecondaries = new DnsZoneRpGridSecondariesList(this, "grid_secondaries", false);
  public get gridSecondaries() {
    return this._gridSecondaries;
  }
  public putGridSecondaries(value: DnsZoneRpGridSecondaries[] | cdktf.IResolvable) {
    this._gridSecondaries.internalValue = value;
  }
  public resetGridSecondaries() {
    this._gridSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridSecondariesInput() {
    return this._gridSecondaries.internalValue;
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

  // log_rpz - computed: true, optional: true, required: false
  private _logRpz?: boolean | cdktf.IResolvable; 
  public get logRpz() {
    return this.getBooleanAttribute('log_rpz');
  }
  public set logRpz(value: boolean | cdktf.IResolvable) {
    this._logRpz = value;
  }
  public resetLogRpz() {
    this._logRpz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRpzInput() {
    return this._logRpz;
  }

  // mask_prefix - computed: true, optional: false, required: false
  public get maskPrefix() {
    return this.getStringAttribute('mask_prefix');
  }

  // member_soa_mnames - computed: true, optional: true, required: false
  private _memberSoaMnames = new DnsZoneRpMemberSoaMnamesList(this, "member_soa_mnames", false);
  public get memberSoaMnames() {
    return this._memberSoaMnames;
  }
  public putMemberSoaMnames(value: DnsZoneRpMemberSoaMnames[] | cdktf.IResolvable) {
    this._memberSoaMnames.internalValue = value;
  }
  public resetMemberSoaMnames() {
    this._memberSoaMnames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberSoaMnamesInput() {
    return this._memberSoaMnames.internalValue;
  }

  // member_soa_serials - computed: true, optional: false, required: false
  private _memberSoaSerials = new DnsZoneRpMemberSoaSerialsList(this, "member_soa_serials", false);
  public get memberSoaSerials() {
    return this._memberSoaSerials;
  }

  // network_view - computed: true, optional: false, required: false
  public get networkView() {
    return this.getStringAttribute('network_view');
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

  // primary_type - computed: true, optional: false, required: false
  public get primaryType() {
    return this.getStringAttribute('primary_type');
  }

  // record_name_policy - computed: true, optional: true, required: false
  private _recordNamePolicy?: string; 
  public get recordNamePolicy() {
    return this.getStringAttribute('record_name_policy');
  }
  public set recordNamePolicy(value: string) {
    this._recordNamePolicy = value;
  }
  public resetRecordNamePolicy() {
    this._recordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNamePolicyInput() {
    return this._recordNamePolicy;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // rpz_drop_ip_rule_enabled - computed: true, optional: true, required: false
  private _rpzDropIpRuleEnabled?: boolean | cdktf.IResolvable; 
  public get rpzDropIpRuleEnabled() {
    return this.getBooleanAttribute('rpz_drop_ip_rule_enabled');
  }
  public set rpzDropIpRuleEnabled(value: boolean | cdktf.IResolvable) {
    this._rpzDropIpRuleEnabled = value;
  }
  public resetRpzDropIpRuleEnabled() {
    this._rpzDropIpRuleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleEnabledInput() {
    return this._rpzDropIpRuleEnabled;
  }

  // rpz_drop_ip_rule_min_prefix_length_ipv4 - computed: true, optional: true, required: false
  private _rpzDropIpRuleMinPrefixLengthIpv4?: number; 
  public get rpzDropIpRuleMinPrefixLengthIpv4() {
    return this.getNumberAttribute('rpz_drop_ip_rule_min_prefix_length_ipv4');
  }
  public set rpzDropIpRuleMinPrefixLengthIpv4(value: number) {
    this._rpzDropIpRuleMinPrefixLengthIpv4 = value;
  }
  public resetRpzDropIpRuleMinPrefixLengthIpv4() {
    this._rpzDropIpRuleMinPrefixLengthIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleMinPrefixLengthIpv4Input() {
    return this._rpzDropIpRuleMinPrefixLengthIpv4;
  }

  // rpz_drop_ip_rule_min_prefix_length_ipv6 - computed: true, optional: true, required: false
  private _rpzDropIpRuleMinPrefixLengthIpv6?: number; 
  public get rpzDropIpRuleMinPrefixLengthIpv6() {
    return this.getNumberAttribute('rpz_drop_ip_rule_min_prefix_length_ipv6');
  }
  public set rpzDropIpRuleMinPrefixLengthIpv6(value: number) {
    this._rpzDropIpRuleMinPrefixLengthIpv6 = value;
  }
  public resetRpzDropIpRuleMinPrefixLengthIpv6() {
    this._rpzDropIpRuleMinPrefixLengthIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleMinPrefixLengthIpv6Input() {
    return this._rpzDropIpRuleMinPrefixLengthIpv6;
  }

  // rpz_last_updated_time - computed: true, optional: false, required: false
  public get rpzLastUpdatedTime() {
    return this.getNumberAttribute('rpz_last_updated_time');
  }

  // rpz_policy - computed: true, optional: true, required: false
  private _rpzPolicy?: string; 
  public get rpzPolicy() {
    return this.getStringAttribute('rpz_policy');
  }
  public set rpzPolicy(value: string) {
    this._rpzPolicy = value;
  }
  public resetRpzPolicy() {
    this._rpzPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzPolicyInput() {
    return this._rpzPolicy;
  }

  // rpz_priority - computed: true, optional: false, required: false
  public get rpzPriority() {
    return this.getNumberAttribute('rpz_priority');
  }

  // rpz_priority_end - computed: true, optional: false, required: false
  public get rpzPriorityEnd() {
    return this.getNumberAttribute('rpz_priority_end');
  }

  // rpz_severity - computed: true, optional: true, required: false
  private _rpzSeverity?: string; 
  public get rpzSeverity() {
    return this.getStringAttribute('rpz_severity');
  }
  public set rpzSeverity(value: string) {
    this._rpzSeverity = value;
  }
  public resetRpzSeverity() {
    this._rpzSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzSeverityInput() {
    return this._rpzSeverity;
  }

  // rpz_type - computed: true, optional: true, required: false
  private _rpzType?: string; 
  public get rpzType() {
    return this.getStringAttribute('rpz_type');
  }
  public set rpzType(value: string) {
    this._rpzType = value;
  }
  public resetRpzType() {
    this._rpzType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzTypeInput() {
    return this._rpzType;
  }

  // set_soa_serial_number - computed: true, optional: true, required: false
  private _setSoaSerialNumber?: boolean | cdktf.IResolvable; 
  public get setSoaSerialNumber() {
    return this.getBooleanAttribute('set_soa_serial_number');
  }
  public set setSoaSerialNumber(value: boolean | cdktf.IResolvable) {
    this._setSoaSerialNumber = value;
  }
  public resetSetSoaSerialNumber() {
    this._setSoaSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSoaSerialNumberInput() {
    return this._setSoaSerialNumber;
  }

  // soa_default_ttl - computed: true, optional: true, required: false
  private _soaDefaultTtl?: number; 
  public get soaDefaultTtl() {
    return this.getNumberAttribute('soa_default_ttl');
  }
  public set soaDefaultTtl(value: number) {
    this._soaDefaultTtl = value;
  }
  public resetSoaDefaultTtl() {
    this._soaDefaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaDefaultTtlInput() {
    return this._soaDefaultTtl;
  }

  // soa_email - computed: true, optional: true, required: false
  private _soaEmail?: string; 
  public get soaEmail() {
    return this.getStringAttribute('soa_email');
  }
  public set soaEmail(value: string) {
    this._soaEmail = value;
  }
  public resetSoaEmail() {
    this._soaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaEmailInput() {
    return this._soaEmail;
  }

  // soa_expire - computed: true, optional: true, required: false
  private _soaExpire?: number; 
  public get soaExpire() {
    return this.getNumberAttribute('soa_expire');
  }
  public set soaExpire(value: number) {
    this._soaExpire = value;
  }
  public resetSoaExpire() {
    this._soaExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaExpireInput() {
    return this._soaExpire;
  }

  // soa_negative_ttl - computed: true, optional: true, required: false
  private _soaNegativeTtl?: number; 
  public get soaNegativeTtl() {
    return this.getNumberAttribute('soa_negative_ttl');
  }
  public set soaNegativeTtl(value: number) {
    this._soaNegativeTtl = value;
  }
  public resetSoaNegativeTtl() {
    this._soaNegativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaNegativeTtlInput() {
    return this._soaNegativeTtl;
  }

  // soa_refresh - computed: true, optional: true, required: false
  private _soaRefresh?: number; 
  public get soaRefresh() {
    return this.getNumberAttribute('soa_refresh');
  }
  public set soaRefresh(value: number) {
    this._soaRefresh = value;
  }
  public resetSoaRefresh() {
    this._soaRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaRefreshInput() {
    return this._soaRefresh;
  }

  // soa_retry - computed: true, optional: true, required: false
  private _soaRetry?: number; 
  public get soaRetry() {
    return this.getNumberAttribute('soa_retry');
  }
  public set soaRetry(value: number) {
    this._soaRetry = value;
  }
  public resetSoaRetry() {
    this._soaRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaRetryInput() {
    return this._soaRetry;
  }

  // soa_serial_number - computed: true, optional: true, required: false
  private _soaSerialNumber?: number; 
  public get soaSerialNumber() {
    return this.getNumberAttribute('soa_serial_number');
  }
  public set soaSerialNumber(value: number) {
    this._soaSerialNumber = value;
  }
  public resetSoaSerialNumber() {
    this._soaSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaSerialNumberInput() {
    return this._soaSerialNumber;
  }

  // substitute_name - computed: true, optional: true, required: false
  private _substituteName?: string; 
  public get substituteName() {
    return this.getStringAttribute('substitute_name');
  }
  public set substituteName(value: string) {
    this._substituteName = value;
  }
  public resetSubstituteName() {
    this._substituteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteNameInput() {
    return this._substituteName;
  }

  // use_external_primary - computed: true, optional: true, required: false
  private _useExternalPrimary?: boolean | cdktf.IResolvable; 
  public get useExternalPrimary() {
    return this.getBooleanAttribute('use_external_primary');
  }
  public set useExternalPrimary(value: boolean | cdktf.IResolvable) {
    this._useExternalPrimary = value;
  }
  public resetUseExternalPrimary() {
    this._useExternalPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExternalPrimaryInput() {
    return this._useExternalPrimary;
  }

  // use_grid_zone_timer - computed: true, optional: true, required: false
  private _useGridZoneTimer?: boolean | cdktf.IResolvable; 
  public get useGridZoneTimer() {
    return this.getBooleanAttribute('use_grid_zone_timer');
  }
  public set useGridZoneTimer(value: boolean | cdktf.IResolvable) {
    this._useGridZoneTimer = value;
  }
  public resetUseGridZoneTimer() {
    this._useGridZoneTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGridZoneTimerInput() {
    return this._useGridZoneTimer;
  }

  // use_log_rpz - computed: true, optional: true, required: false
  private _useLogRpz?: boolean | cdktf.IResolvable; 
  public get useLogRpz() {
    return this.getBooleanAttribute('use_log_rpz');
  }
  public set useLogRpz(value: boolean | cdktf.IResolvable) {
    this._useLogRpz = value;
  }
  public resetUseLogRpz() {
    this._useLogRpz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogRpzInput() {
    return this._useLogRpz;
  }

  // use_record_name_policy - computed: true, optional: true, required: false
  private _useRecordNamePolicy?: boolean | cdktf.IResolvable; 
  public get useRecordNamePolicy() {
    return this.getBooleanAttribute('use_record_name_policy');
  }
  public set useRecordNamePolicy(value: boolean | cdktf.IResolvable) {
    this._useRecordNamePolicy = value;
  }
  public resetUseRecordNamePolicy() {
    this._useRecordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecordNamePolicyInput() {
    return this._useRecordNamePolicy;
  }

  // use_rpz_drop_ip_rule - computed: true, optional: true, required: false
  private _useRpzDropIpRule?: boolean | cdktf.IResolvable; 
  public get useRpzDropIpRule() {
    return this.getBooleanAttribute('use_rpz_drop_ip_rule');
  }
  public set useRpzDropIpRule(value: boolean | cdktf.IResolvable) {
    this._useRpzDropIpRule = value;
  }
  public resetUseRpzDropIpRule() {
    this._useRpzDropIpRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRpzDropIpRuleInput() {
    return this._useRpzDropIpRule;
  }

  // use_soa_email - computed: true, optional: true, required: false
  private _useSoaEmail?: boolean | cdktf.IResolvable; 
  public get useSoaEmail() {
    return this.getBooleanAttribute('use_soa_email');
  }
  public set useSoaEmail(value: boolean | cdktf.IResolvable) {
    this._useSoaEmail = value;
  }
  public resetUseSoaEmail() {
    this._useSoaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSoaEmailInput() {
    return this._useSoaEmail;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      external_primaries: cdktf.listMapper(dnsZoneRpExternalPrimariesToTerraform, false)(this._externalPrimaries.internalValue),
      external_secondaries: cdktf.listMapper(dnsZoneRpExternalSecondariesToTerraform, false)(this._externalSecondaries.internalValue),
      fireeye_rule_mapping: dnsZoneRpFireeyeRuleMappingToTerraform(this._fireeyeRuleMapping.internalValue),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      grid_primary: cdktf.listMapper(dnsZoneRpGridPrimaryToTerraform, false)(this._gridPrimary.internalValue),
      grid_secondaries: cdktf.listMapper(dnsZoneRpGridSecondariesToTerraform, false)(this._gridSecondaries.internalValue),
      locked: cdktf.booleanToTerraform(this._locked),
      log_rpz: cdktf.booleanToTerraform(this._logRpz),
      member_soa_mnames: cdktf.listMapper(dnsZoneRpMemberSoaMnamesToTerraform, false)(this._memberSoaMnames.internalValue),
      ns_group: cdktf.stringToTerraform(this._nsGroup),
      prefix: cdktf.stringToTerraform(this._prefix),
      record_name_policy: cdktf.stringToTerraform(this._recordNamePolicy),
      rpz_drop_ip_rule_enabled: cdktf.booleanToTerraform(this._rpzDropIpRuleEnabled),
      rpz_drop_ip_rule_min_prefix_length_ipv4: cdktf.numberToTerraform(this._rpzDropIpRuleMinPrefixLengthIpv4),
      rpz_drop_ip_rule_min_prefix_length_ipv6: cdktf.numberToTerraform(this._rpzDropIpRuleMinPrefixLengthIpv6),
      rpz_policy: cdktf.stringToTerraform(this._rpzPolicy),
      rpz_severity: cdktf.stringToTerraform(this._rpzSeverity),
      rpz_type: cdktf.stringToTerraform(this._rpzType),
      set_soa_serial_number: cdktf.booleanToTerraform(this._setSoaSerialNumber),
      soa_default_ttl: cdktf.numberToTerraform(this._soaDefaultTtl),
      soa_email: cdktf.stringToTerraform(this._soaEmail),
      soa_expire: cdktf.numberToTerraform(this._soaExpire),
      soa_negative_ttl: cdktf.numberToTerraform(this._soaNegativeTtl),
      soa_refresh: cdktf.numberToTerraform(this._soaRefresh),
      soa_retry: cdktf.numberToTerraform(this._soaRetry),
      soa_serial_number: cdktf.numberToTerraform(this._soaSerialNumber),
      substitute_name: cdktf.stringToTerraform(this._substituteName),
      use_external_primary: cdktf.booleanToTerraform(this._useExternalPrimary),
      use_grid_zone_timer: cdktf.booleanToTerraform(this._useGridZoneTimer),
      use_log_rpz: cdktf.booleanToTerraform(this._useLogRpz),
      use_record_name_policy: cdktf.booleanToTerraform(this._useRecordNamePolicy),
      use_rpz_drop_ip_rule: cdktf.booleanToTerraform(this._useRpzDropIpRule),
      use_soa_email: cdktf.booleanToTerraform(this._useSoaEmail),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      external_primaries: {
        value: cdktf.listMapperHcl(dnsZoneRpExternalPrimariesToHclTerraform, false)(this._externalPrimaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneRpExternalPrimariesList",
      },
      external_secondaries: {
        value: cdktf.listMapperHcl(dnsZoneRpExternalSecondariesToHclTerraform, false)(this._externalSecondaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneRpExternalSecondariesList",
      },
      fireeye_rule_mapping: {
        value: dnsZoneRpFireeyeRuleMappingToHclTerraform(this._fireeyeRuleMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsZoneRpFireeyeRuleMapping",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grid_primary: {
        value: cdktf.listMapperHcl(dnsZoneRpGridPrimaryToHclTerraform, false)(this._gridPrimary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneRpGridPrimaryList",
      },
      grid_secondaries: {
        value: cdktf.listMapperHcl(dnsZoneRpGridSecondariesToHclTerraform, false)(this._gridSecondaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneRpGridSecondariesList",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_rpz: {
        value: cdktf.booleanToHclTerraform(this._logRpz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      member_soa_mnames: {
        value: cdktf.listMapperHcl(dnsZoneRpMemberSoaMnamesToHclTerraform, false)(this._memberSoaMnames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneRpMemberSoaMnamesList",
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
      record_name_policy: {
        value: cdktf.stringToHclTerraform(this._recordNamePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpz_drop_ip_rule_enabled: {
        value: cdktf.booleanToHclTerraform(this._rpzDropIpRuleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpz_drop_ip_rule_min_prefix_length_ipv4: {
        value: cdktf.numberToHclTerraform(this._rpzDropIpRuleMinPrefixLengthIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rpz_drop_ip_rule_min_prefix_length_ipv6: {
        value: cdktf.numberToHclTerraform(this._rpzDropIpRuleMinPrefixLengthIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rpz_policy: {
        value: cdktf.stringToHclTerraform(this._rpzPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpz_severity: {
        value: cdktf.stringToHclTerraform(this._rpzSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpz_type: {
        value: cdktf.stringToHclTerraform(this._rpzType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_soa_serial_number: {
        value: cdktf.booleanToHclTerraform(this._setSoaSerialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soa_default_ttl: {
        value: cdktf.numberToHclTerraform(this._soaDefaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soa_email: {
        value: cdktf.stringToHclTerraform(this._soaEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soa_expire: {
        value: cdktf.numberToHclTerraform(this._soaExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soa_negative_ttl: {
        value: cdktf.numberToHclTerraform(this._soaNegativeTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soa_refresh: {
        value: cdktf.numberToHclTerraform(this._soaRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soa_retry: {
        value: cdktf.numberToHclTerraform(this._soaRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soa_serial_number: {
        value: cdktf.numberToHclTerraform(this._soaSerialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      substitute_name: {
        value: cdktf.stringToHclTerraform(this._substituteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_external_primary: {
        value: cdktf.booleanToHclTerraform(this._useExternalPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_grid_zone_timer: {
        value: cdktf.booleanToHclTerraform(this._useGridZoneTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_log_rpz: {
        value: cdktf.booleanToHclTerraform(this._useLogRpz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_record_name_policy: {
        value: cdktf.booleanToHclTerraform(this._useRecordNamePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_rpz_drop_ip_rule: {
        value: cdktf.booleanToHclTerraform(this._useRpzDropIpRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_soa_email: {
        value: cdktf.booleanToHclTerraform(this._useSoaEmail),
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
