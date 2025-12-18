// https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access control list. E.g. `0.0.0.0/0,::/0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#acl DnsZone#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#active DnsZone#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * A contact e-mail for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#contact_email DnsZone#contact_email}
  */
  readonly contactEmail?: string;
  /**
  * Default time to live. E.g. 3600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#default_ttl DnsZone#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Description of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#description DnsZone#description}
  */
  readonly description?: string;
  /**
  * The zone name. E.g. `example.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#dns_name DnsZone#dns_name}
  */
  readonly dnsName: string;
  /**
  * Expire time. E.g. 1209600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#expire_time DnsZone#expire_time}
  */
  readonly expireTime?: number;
  /**
  * Specifies, if the zone is a reverse zone or not. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#is_reverse_zone DnsZone#is_reverse_zone}
  */
  readonly isReverseZone?: boolean | cdktf.IResolvable;
  /**
  * The user given name of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * Negative caching. E.g. 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#negative_cache DnsZone#negative_cache}
  */
  readonly negativeCache?: number;
  /**
  * Primary name server for secondary zone. E.g. ["1.2.3.4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#primaries DnsZone#primaries}
  */
  readonly primaries?: string[];
  /**
  * STACKIT project ID to which the dns zone is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#project_id DnsZone#project_id}
  */
  readonly projectId: string;
  /**
  * Refresh time. E.g. 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#refresh_time DnsZone#refresh_time}
  */
  readonly refreshTime?: number;
  /**
  * Retry time. E.g. 600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#retry_time DnsZone#retry_time}
  */
  readonly retryTime?: number;
  /**
  * Zone type. Defaults to `primary`. Possible values are: `primary`, `secondary`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#type DnsZone#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone stackit_dns_zone}
*/
export class DnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZone to import
  * @param importFromId The id of the existing DnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/dns_zone stackit_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.75.0',
        providerVersionConstraint: '0.75.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._active = config.active;
    this._contactEmail = config.contactEmail;
    this._defaultTtl = config.defaultTtl;
    this._description = config.description;
    this._dnsName = config.dnsName;
    this._expireTime = config.expireTime;
    this._isReverseZone = config.isReverseZone;
    this._name = config.name;
    this._negativeCache = config.negativeCache;
    this._primaries = config.primaries;
    this._projectId = config.projectId;
    this._refreshTime = config.refreshTime;
    this._retryTime = config.retryTime;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // contact_email - computed: true, optional: true, required: false
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  public resetContactEmail() {
    this._contactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // negative_cache - computed: true, optional: true, required: false
  private _negativeCache?: number; 
  public get negativeCache() {
    return this.getNumberAttribute('negative_cache');
  }
  public set negativeCache(value: number) {
    this._negativeCache = value;
  }
  public resetNegativeCache() {
    this._negativeCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCacheInput() {
    return this._negativeCache;
  }

  // primaries - computed: true, optional: true, required: false
  private _primaries?: string[]; 
  public get primaries() {
    return this.getListAttribute('primaries');
  }
  public set primaries(value: string[]) {
    this._primaries = value;
  }
  public resetPrimaries() {
    this._primaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primariesInput() {
    return this._primaries;
  }

  // primary_name_server - computed: true, optional: false, required: false
  public get primaryNameServer() {
    return this.getStringAttribute('primary_name_server');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // record_count - computed: true, optional: false, required: false
  public get recordCount() {
    return this.getNumberAttribute('record_count');
  }

  // refresh_time - computed: true, optional: true, required: false
  private _refreshTime?: number; 
  public get refreshTime() {
    return this.getNumberAttribute('refresh_time');
  }
  public set refreshTime(value: number) {
    this._refreshTime = value;
  }
  public resetRefreshTime() {
    this._refreshTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTimeInput() {
    return this._refreshTime;
  }

  // retry_time - computed: true, optional: true, required: false
  private _retryTime?: number; 
  public get retryTime() {
    return this.getNumberAttribute('retry_time');
  }
  public set retryTime(value: number) {
    this._retryTime = value;
  }
  public resetRetryTime() {
    this._retryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeInput() {
    return this._retryTime;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getNumberAttribute('serial_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      active: cdktf.booleanToTerraform(this._active),
      contact_email: cdktf.stringToTerraform(this._contactEmail),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      description: cdktf.stringToTerraform(this._description),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      expire_time: cdktf.numberToTerraform(this._expireTime),
      is_reverse_zone: cdktf.booleanToTerraform(this._isReverseZone),
      name: cdktf.stringToTerraform(this._name),
      negative_cache: cdktf.numberToTerraform(this._negativeCache),
      primaries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaries),
      project_id: cdktf.stringToTerraform(this._projectId),
      refresh_time: cdktf.numberToTerraform(this._refreshTime),
      retry_time: cdktf.numberToTerraform(this._retryTime),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_email: {
        value: cdktf.stringToHclTerraform(this._contactEmail),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.numberToHclTerraform(this._expireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_reverse_zone: {
        value: cdktf.booleanToHclTerraform(this._isReverseZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negative_cache: {
        value: cdktf.numberToHclTerraform(this._negativeCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primaries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_time: {
        value: cdktf.numberToHclTerraform(this._refreshTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_time: {
        value: cdktf.numberToHclTerraform(this._retryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
