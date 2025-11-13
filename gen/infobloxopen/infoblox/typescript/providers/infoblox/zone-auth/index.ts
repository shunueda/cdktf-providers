// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the zone; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#comment ZoneAuth#comment}
  */
  readonly comment?: string;
  /**
  * The Extensible attributes of the zone, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#ext_attrs ZoneAuth#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The name of this DNS zone. For a reverse zone, this is in 'address/cidr' format. For other zones, this is in FQDN format. This value can be in unicode format. Note that for a reverse zone, the corresponding zone_format value should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#fqdn ZoneAuth#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#id ZoneAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name server group that serves DNS for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#ns_group ZoneAuth#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#restart_if_needed ZoneAuth#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The Time to Live (TTL) value of the SOA record of this zone. This value is the number of seconds that data is cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#soa_default_ttl ZoneAuth#soa_default_ttl}
  */
  readonly soaDefaultTtl?: number;
  /**
  * This setting defines the amount of time, in seconds, after which the secondary server stops giving out answers about the zone because the zone data is too old to be useful. The default is one week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#soa_expire ZoneAuth#soa_expire}
  */
  readonly soaExpire?: number;
  /**
  * The negative Time to Live (TTL) value of the SOA of the zone indicates how long a secondary server can cache data for 'Does Not Respond' responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#soa_negative_ttl ZoneAuth#soa_negative_ttl}
  */
  readonly soaNegativeTtl?: number;
  /**
  * This indicates the interval at which a secondary server sends a message to the primary server for a zone to check that its data is current, and retrieve fresh data if it is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#soa_refresh ZoneAuth#soa_refresh}
  */
  readonly soaRefresh?: number;
  /**
  * This indicates how long a secondary server must wait before attempting to recontact the primary server after a connection failure between the two servers occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#soa_retry ZoneAuth#soa_retry}
  */
  readonly soaRetry?: number;
  /**
  * The name of the DNS view in which the zone resides. Example: 'external'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#view ZoneAuth#view}
  */
  readonly view?: string;
  /**
  * Determines the format of this zone. Valid values are: FORWARD, IPV4, IPV6; the default is FORWARD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#zone_format ZoneAuth#zone_format}
  */
  readonly zoneFormat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth infoblox_zone_auth}
*/
export class ZoneAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_zone_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneAuth to import
  * @param importFromId The id of the existing ZoneAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_zone_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_auth infoblox_zone_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneAuthConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_zone_auth',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
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
    this._extAttrs = config.extAttrs;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._nsGroup = config.nsGroup;
    this._restartIfNeeded = config.restartIfNeeded;
    this._soaDefaultTtl = config.soaDefaultTtl;
    this._soaExpire = config.soaExpire;
    this._soaNegativeTtl = config.soaNegativeTtl;
    this._soaRefresh = config.soaRefresh;
    this._soaRetry = config.soaRetry;
    this._view = config.view;
    this._zoneFormat = config.zoneFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
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

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // ns_group - computed: false, optional: true, required: false
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // restart_if_needed - computed: false, optional: true, required: false
  private _restartIfNeeded?: boolean | cdktf.IResolvable; 
  public get restartIfNeeded() {
    return this.getBooleanAttribute('restart_if_needed');
  }
  public set restartIfNeeded(value: boolean | cdktf.IResolvable) {
    this._restartIfNeeded = value;
  }
  public resetRestartIfNeeded() {
    this._restartIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIfNeededInput() {
    return this._restartIfNeeded;
  }

  // soa_default_ttl - computed: false, optional: true, required: false
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

  // soa_expire - computed: false, optional: true, required: false
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

  // soa_negative_ttl - computed: false, optional: true, required: false
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

  // soa_refresh - computed: false, optional: true, required: false
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

  // soa_retry - computed: false, optional: true, required: false
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
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      ns_group: cdktf.stringToTerraform(this._nsGroup),
      restart_if_needed: cdktf.booleanToTerraform(this._restartIfNeeded),
      soa_default_ttl: cdktf.numberToTerraform(this._soaDefaultTtl),
      soa_expire: cdktf.numberToTerraform(this._soaExpire),
      soa_negative_ttl: cdktf.numberToTerraform(this._soaNegativeTtl),
      soa_refresh: cdktf.numberToTerraform(this._soaRefresh),
      soa_retry: cdktf.numberToTerraform(this._soaRetry),
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
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      restart_if_needed: {
        value: cdktf.booleanToHclTerraform(this._restartIfNeeded),
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
