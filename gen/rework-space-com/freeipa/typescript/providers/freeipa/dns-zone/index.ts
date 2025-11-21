// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrator e-mail address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#admin_email_address DnsZone#admin_email_address}
  */
  readonly adminEmailAddress?: string;
  /**
  * Allow inline DNSSEC signing of records in the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#allow_inline_dnssec_signing DnsZone#allow_inline_dnssec_signing}
  */
  readonly allowInlineDnssecSigning?: boolean | cdktf.IResolvable;
  /**
  * Allow synchronization of forward (A, AAAA) and reverse (PTR) records in the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#allow_prt_sync DnsZone#allow_prt_sync}
  */
  readonly allowPrtSync?: boolean | cdktf.IResolvable;
  /**
  * Semicolon separated list of IP addresses or networks which are allowed to issue queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#allow_query DnsZone#allow_query}
  */
  readonly allowQuery?: string;
  /**
  * Semicolon separated list of IP addresses or networks which are allowed to transfer the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#allow_transfer DnsZone#allow_transfer}
  */
  readonly allowTransfer?: string;
  /**
  * Authoritative nameserver domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#authoritative_nameserver DnsZone#authoritative_nameserver}
  */
  readonly authoritativeNameserver?: string;
  /**
  * BIND update policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#bind_update_policy DnsZone#bind_update_policy}
  */
  readonly bindUpdatePolicy?: string;
  /**
  * Time to live for records without explicit TTL definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#default_ttl DnsZone#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Allow disabled the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#disable_zone DnsZone#disable_zone}
  */
  readonly disableZone?: boolean | cdktf.IResolvable;
  /**
  * Allow dynamic updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#dynamic_updates DnsZone#dynamic_updates}
  */
  readonly dynamicUpdates?: boolean | cdktf.IResolvable;
  /**
  * Allow create the reverse zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#is_reverse_zone DnsZone#is_reverse_zone}
  */
  readonly isReverseZone?: boolean | cdktf.IResolvable;
  /**
  * NSEC3PARAM record for zone in format: hash_algorithm flags iterations salt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#nsec3param_record DnsZone#nsec3param_record}
  */
  readonly nsec3ParamRecord?: string;
  /**
  * Force DNS zone creation even if nameserver is not resolvable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#skip_nameserver_check DnsZone#skip_nameserver_check}
  */
  readonly skipNameserverCheck?: boolean | cdktf.IResolvable;
  /**
  * Force DNS zone creation even if it will overlap with an existing zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#skip_overlap_check DnsZone#skip_overlap_check}
  */
  readonly skipOverlapCheck?: boolean | cdktf.IResolvable;
  /**
  * SOA record expire time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#soa_expire DnsZone#soa_expire}
  */
  readonly soaExpire?: number;
  /**
  * How long should negative responses be cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#soa_minimum DnsZone#soa_minimum}
  */
  readonly soaMinimum?: number;
  /**
  * SOA record refresh time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#soa_refresh DnsZone#soa_refresh}
  */
  readonly soaRefresh?: number;
  /**
  * SOA record retry time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#soa_retry DnsZone#soa_retry}
  */
  readonly soaRetry?: number;
  /**
  * Time to live for records at zone apex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#ttl DnsZone#ttl}
  */
  readonly ttl?: number;
  /**
  * Per-zone forwarders. A custom port can be specified for each forwarder using a standard format IP_ADDRESS port PORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#zone_forwarders DnsZone#zone_forwarders}
  */
  readonly zoneForwarders?: string[];
  /**
  * Zone name (FQDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#zone_name DnsZone#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone freeipa_dns_zone}
*/
export class DnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZone to import
  * @param importFromId The id of the existing DnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/dns_zone freeipa_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.4',
        providerVersionConstraint: '5.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminEmailAddress = config.adminEmailAddress;
    this._allowInlineDnssecSigning = config.allowInlineDnssecSigning;
    this._allowPrtSync = config.allowPrtSync;
    this._allowQuery = config.allowQuery;
    this._allowTransfer = config.allowTransfer;
    this._authoritativeNameserver = config.authoritativeNameserver;
    this._bindUpdatePolicy = config.bindUpdatePolicy;
    this._defaultTtl = config.defaultTtl;
    this._disableZone = config.disableZone;
    this._dynamicUpdates = config.dynamicUpdates;
    this._isReverseZone = config.isReverseZone;
    this._nsec3ParamRecord = config.nsec3ParamRecord;
    this._skipNameserverCheck = config.skipNameserverCheck;
    this._skipOverlapCheck = config.skipOverlapCheck;
    this._soaExpire = config.soaExpire;
    this._soaMinimum = config.soaMinimum;
    this._soaRefresh = config.soaRefresh;
    this._soaRetry = config.soaRetry;
    this._ttl = config.ttl;
    this._zoneForwarders = config.zoneForwarders;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email_address - computed: false, optional: true, required: false
  private _adminEmailAddress?: string; 
  public get adminEmailAddress() {
    return this.getStringAttribute('admin_email_address');
  }
  public set adminEmailAddress(value: string) {
    this._adminEmailAddress = value;
  }
  public resetAdminEmailAddress() {
    this._adminEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailAddressInput() {
    return this._adminEmailAddress;
  }

  // allow_inline_dnssec_signing - computed: true, optional: true, required: false
  private _allowInlineDnssecSigning?: boolean | cdktf.IResolvable; 
  public get allowInlineDnssecSigning() {
    return this.getBooleanAttribute('allow_inline_dnssec_signing');
  }
  public set allowInlineDnssecSigning(value: boolean | cdktf.IResolvable) {
    this._allowInlineDnssecSigning = value;
  }
  public resetAllowInlineDnssecSigning() {
    this._allowInlineDnssecSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInlineDnssecSigningInput() {
    return this._allowInlineDnssecSigning;
  }

  // allow_prt_sync - computed: true, optional: true, required: false
  private _allowPrtSync?: boolean | cdktf.IResolvable; 
  public get allowPrtSync() {
    return this.getBooleanAttribute('allow_prt_sync');
  }
  public set allowPrtSync(value: boolean | cdktf.IResolvable) {
    this._allowPrtSync = value;
  }
  public resetAllowPrtSync() {
    this._allowPrtSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrtSyncInput() {
    return this._allowPrtSync;
  }

  // allow_query - computed: true, optional: true, required: false
  private _allowQuery?: string; 
  public get allowQuery() {
    return this.getStringAttribute('allow_query');
  }
  public set allowQuery(value: string) {
    this._allowQuery = value;
  }
  public resetAllowQuery() {
    this._allowQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryInput() {
    return this._allowQuery;
  }

  // allow_transfer - computed: true, optional: true, required: false
  private _allowTransfer?: string; 
  public get allowTransfer() {
    return this.getStringAttribute('allow_transfer');
  }
  public set allowTransfer(value: string) {
    this._allowTransfer = value;
  }
  public resetAllowTransfer() {
    this._allowTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransferInput() {
    return this._allowTransfer;
  }

  // authoritative_nameserver - computed: false, optional: true, required: false
  private _authoritativeNameserver?: string; 
  public get authoritativeNameserver() {
    return this.getStringAttribute('authoritative_nameserver');
  }
  public set authoritativeNameserver(value: string) {
    this._authoritativeNameserver = value;
  }
  public resetAuthoritativeNameserver() {
    this._authoritativeNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeNameserverInput() {
    return this._authoritativeNameserver;
  }

  // bind_update_policy - computed: false, optional: true, required: false
  private _bindUpdatePolicy?: string; 
  public get bindUpdatePolicy() {
    return this.getStringAttribute('bind_update_policy');
  }
  public set bindUpdatePolicy(value: string) {
    this._bindUpdatePolicy = value;
  }
  public resetBindUpdatePolicy() {
    this._bindUpdatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindUpdatePolicyInput() {
    return this._bindUpdatePolicy;
  }

  // computed_zone_name - computed: true, optional: false, required: false
  public get computedZoneName() {
    return this.getStringAttribute('computed_zone_name');
  }

  // default_ttl - computed: false, optional: true, required: false
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

  // disable_zone - computed: true, optional: true, required: false
  private _disableZone?: boolean | cdktf.IResolvable; 
  public get disableZone() {
    return this.getBooleanAttribute('disable_zone');
  }
  public set disableZone(value: boolean | cdktf.IResolvable) {
    this._disableZone = value;
  }
  public resetDisableZone() {
    this._disableZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableZoneInput() {
    return this._disableZone;
  }

  // dynamic_updates - computed: true, optional: true, required: false
  private _dynamicUpdates?: boolean | cdktf.IResolvable; 
  public get dynamicUpdates() {
    return this.getBooleanAttribute('dynamic_updates');
  }
  public set dynamicUpdates(value: boolean | cdktf.IResolvable) {
    this._dynamicUpdates = value;
  }
  public resetDynamicUpdates() {
    this._dynamicUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUpdatesInput() {
    return this._dynamicUpdates;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_reverse_zone - computed: true, optional: true, required: false
  private _isReverseZone?: boolean | cdktf.IResolvable; 
  public get isReverseZone() {
    return this.getBooleanAttribute('is_reverse_zone');
  }
  public set isReverseZone(value: boolean | cdktf.IResolvable) {
    this._isReverseZone = value;
  }
  public resetIsReverseZone() {
    this._isReverseZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReverseZoneInput() {
    return this._isReverseZone;
  }

  // nsec3param_record - computed: false, optional: true, required: false
  private _nsec3ParamRecord?: string; 
  public get nsec3ParamRecord() {
    return this.getStringAttribute('nsec3param_record');
  }
  public set nsec3ParamRecord(value: string) {
    this._nsec3ParamRecord = value;
  }
  public resetNsec3ParamRecord() {
    this._nsec3ParamRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3ParamRecordInput() {
    return this._nsec3ParamRecord;
  }

  // skip_nameserver_check - computed: true, optional: true, required: false
  private _skipNameserverCheck?: boolean | cdktf.IResolvable; 
  public get skipNameserverCheck() {
    return this.getBooleanAttribute('skip_nameserver_check');
  }
  public set skipNameserverCheck(value: boolean | cdktf.IResolvable) {
    this._skipNameserverCheck = value;
  }
  public resetSkipNameserverCheck() {
    this._skipNameserverCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNameserverCheckInput() {
    return this._skipNameserverCheck;
  }

  // skip_overlap_check - computed: true, optional: true, required: false
  private _skipOverlapCheck?: boolean | cdktf.IResolvable; 
  public get skipOverlapCheck() {
    return this.getBooleanAttribute('skip_overlap_check');
  }
  public set skipOverlapCheck(value: boolean | cdktf.IResolvable) {
    this._skipOverlapCheck = value;
  }
  public resetSkipOverlapCheck() {
    this._skipOverlapCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOverlapCheckInput() {
    return this._skipOverlapCheck;
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

  // soa_minimum - computed: true, optional: true, required: false
  private _soaMinimum?: number; 
  public get soaMinimum() {
    return this.getNumberAttribute('soa_minimum');
  }
  public set soaMinimum(value: number) {
    this._soaMinimum = value;
  }
  public resetSoaMinimum() {
    this._soaMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaMinimumInput() {
    return this._soaMinimum;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // zone_forwarders - computed: false, optional: true, required: false
  private _zoneForwarders?: string[]; 
  public get zoneForwarders() {
    return this.getListAttribute('zone_forwarders');
  }
  public set zoneForwarders(value: string[]) {
    this._zoneForwarders = value;
  }
  public resetZoneForwarders() {
    this._zoneForwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneForwardersInput() {
    return this._zoneForwarders;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_email_address: cdktf.stringToTerraform(this._adminEmailAddress),
      allow_inline_dnssec_signing: cdktf.booleanToTerraform(this._allowInlineDnssecSigning),
      allow_prt_sync: cdktf.booleanToTerraform(this._allowPrtSync),
      allow_query: cdktf.stringToTerraform(this._allowQuery),
      allow_transfer: cdktf.stringToTerraform(this._allowTransfer),
      authoritative_nameserver: cdktf.stringToTerraform(this._authoritativeNameserver),
      bind_update_policy: cdktf.stringToTerraform(this._bindUpdatePolicy),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      disable_zone: cdktf.booleanToTerraform(this._disableZone),
      dynamic_updates: cdktf.booleanToTerraform(this._dynamicUpdates),
      is_reverse_zone: cdktf.booleanToTerraform(this._isReverseZone),
      nsec3param_record: cdktf.stringToTerraform(this._nsec3ParamRecord),
      skip_nameserver_check: cdktf.booleanToTerraform(this._skipNameserverCheck),
      skip_overlap_check: cdktf.booleanToTerraform(this._skipOverlapCheck),
      soa_expire: cdktf.numberToTerraform(this._soaExpire),
      soa_minimum: cdktf.numberToTerraform(this._soaMinimum),
      soa_refresh: cdktf.numberToTerraform(this._soaRefresh),
      soa_retry: cdktf.numberToTerraform(this._soaRetry),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneForwarders),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_email_address: {
        value: cdktf.stringToHclTerraform(this._adminEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_inline_dnssec_signing: {
        value: cdktf.booleanToHclTerraform(this._allowInlineDnssecSigning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_prt_sync: {
        value: cdktf.booleanToHclTerraform(this._allowPrtSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_query: {
        value: cdktf.stringToHclTerraform(this._allowQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_transfer: {
        value: cdktf.stringToHclTerraform(this._allowTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authoritative_nameserver: {
        value: cdktf.stringToHclTerraform(this._authoritativeNameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_update_policy: {
        value: cdktf.stringToHclTerraform(this._bindUpdatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_zone: {
        value: cdktf.booleanToHclTerraform(this._disableZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_updates: {
        value: cdktf.booleanToHclTerraform(this._dynamicUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_reverse_zone: {
        value: cdktf.booleanToHclTerraform(this._isReverseZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsec3param_record: {
        value: cdktf.stringToHclTerraform(this._nsec3ParamRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_nameserver_check: {
        value: cdktf.booleanToHclTerraform(this._skipNameserverCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_overlap_check: {
        value: cdktf.booleanToHclTerraform(this._skipOverlapCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soa_expire: {
        value: cdktf.numberToHclTerraform(this._soaExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soa_minimum: {
        value: cdktf.numberToHclTerraform(this._soaMinimum),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_forwarders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneForwarders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
