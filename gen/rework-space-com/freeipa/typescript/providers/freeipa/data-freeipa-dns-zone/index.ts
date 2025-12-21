// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Zone name (FQDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/dns_zone#zone_name DataFreeipaDnsZone#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/dns_zone freeipa_dns_zone}
*/
export class DataFreeipaDnsZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaDnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaDnsZone to import
  * @param importFromId The id of the existing DataFreeipaDnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaDnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/data-sources/dns_zone freeipa_dns_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email_address - computed: true, optional: false, required: false
  public get adminEmailAddress() {
    return this.getStringAttribute('admin_email_address');
  }

  // allow_inline_dnssec_signing - computed: true, optional: false, required: false
  public get allowInlineDnssecSigning() {
    return this.getBooleanAttribute('allow_inline_dnssec_signing');
  }

  // allow_prt_sync - computed: true, optional: false, required: false
  public get allowPrtSync() {
    return this.getBooleanAttribute('allow_prt_sync');
  }

  // allow_query - computed: true, optional: false, required: false
  public get allowQuery() {
    return this.getStringAttribute('allow_query');
  }

  // allow_transfer - computed: true, optional: false, required: false
  public get allowTransfer() {
    return this.getStringAttribute('allow_transfer');
  }

  // authoritative_nameserver - computed: true, optional: false, required: false
  public get authoritativeNameserver() {
    return this.getStringAttribute('authoritative_nameserver');
  }

  // bind_update_policy - computed: true, optional: false, required: false
  public get bindUpdatePolicy() {
    return this.getStringAttribute('bind_update_policy');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // disable_zone - computed: true, optional: false, required: false
  public get disableZone() {
    return this.getBooleanAttribute('disable_zone');
  }

  // dynamic_updates - computed: true, optional: false, required: false
  public get dynamicUpdates() {
    return this.getBooleanAttribute('dynamic_updates');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nsec3param_record - computed: true, optional: false, required: false
  public get nsec3ParamRecord() {
    return this.getStringAttribute('nsec3param_record');
  }

  // skip_nameserver_check - computed: true, optional: false, required: false
  public get skipNameserverCheck() {
    return this.getBooleanAttribute('skip_nameserver_check');
  }

  // skip_overlap_check - computed: true, optional: false, required: false
  public get skipOverlapCheck() {
    return this.getBooleanAttribute('skip_overlap_check');
  }

  // soa_expire - computed: true, optional: false, required: false
  public get soaExpire() {
    return this.getNumberAttribute('soa_expire');
  }

  // soa_minimum - computed: true, optional: false, required: false
  public get soaMinimum() {
    return this.getNumberAttribute('soa_minimum');
  }

  // soa_refresh - computed: true, optional: false, required: false
  public get soaRefresh() {
    return this.getNumberAttribute('soa_refresh');
  }

  // soa_retry - computed: true, optional: false, required: false
  public get soaRetry() {
    return this.getNumberAttribute('soa_retry');
  }

  // soa_serial_number - computed: true, optional: false, required: false
  public get soaSerialNumber() {
    return this.getNumberAttribute('soa_serial_number');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // zone_forwarders - computed: true, optional: false, required: false
  public get zoneForwarders() {
    return this.getListAttribute('zone_forwarders');
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
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
