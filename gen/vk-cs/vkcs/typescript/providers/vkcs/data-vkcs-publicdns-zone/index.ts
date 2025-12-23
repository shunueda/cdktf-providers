// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsPublicdnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The admin email of the zone SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#admin_email DataVkcsPublicdnsZone#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * The expire time of the zone SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#expire DataVkcsPublicdnsZone#expire}
  */
  readonly expire?: number;
  /**
  * The UUID of the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#id DataVkcsPublicdnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The primary DNS of the zone SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#primary_dns DataVkcsPublicdnsZone#primary_dns}
  */
  readonly primaryDns?: string;
  /**
  * The refresh time of the zone SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#refresh DataVkcsPublicdnsZone#refresh}
  */
  readonly refresh?: number;
  /**
  * The region in which to obtain the V2 Public DNS client. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#region DataVkcsPublicdnsZone#region}
  */
  readonly region?: string;
  /**
  * The retry time of the zone SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#retry DataVkcsPublicdnsZone#retry}
  */
  readonly retry?: number;
  /**
  * The serial number of the zone SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#serial DataVkcsPublicdnsZone#serial}
  */
  readonly serial?: number;
  /**
  * The status of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#status DataVkcsPublicdnsZone#status}
  */
  readonly status?: string;
  /**
  * The TTL (time to live) of the zone SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#ttl DataVkcsPublicdnsZone#ttl}
  */
  readonly ttl?: number;
  /**
  * The name of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#zone DataVkcsPublicdnsZone#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone vkcs_publicdns_zone}
*/
export class DataVkcsPublicdnsZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_publicdns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsPublicdnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsPublicdnsZone to import
  * @param importFromId The id of the existing DataVkcsPublicdnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsPublicdnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_publicdns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.2/docs/data-sources/publicdns_zone vkcs_publicdns_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsPublicdnsZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsPublicdnsZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_publicdns_zone',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.2',
        providerVersionConstraint: '0.13.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminEmail = config.adminEmail;
    this._expire = config.expire;
    this._id = config.id;
    this._primaryDns = config.primaryDns;
    this._refresh = config.refresh;
    this._region = config.region;
    this._retry = config.retry;
    this._serial = config.serial;
    this._status = config.status;
    this._ttl = config.ttl;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email - computed: true, optional: true, required: false
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  public resetAdminEmail() {
    this._adminEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
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

  // primary_dns - computed: true, optional: true, required: false
  private _primaryDns?: string; 
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }
  public set primaryDns(value: string) {
    this._primaryDns = value;
  }
  public resetPrimaryDns() {
    this._primaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsInput() {
    return this._primaryDns;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // serial - computed: true, optional: true, required: false
  private _serial?: number; 
  public get serial() {
    return this.getNumberAttribute('serial');
  }
  public set serial(value: number) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // ttl - computed: true, optional: true, required: false
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_email: cdktf.stringToTerraform(this._adminEmail),
      expire: cdktf.numberToTerraform(this._expire),
      id: cdktf.stringToTerraform(this._id),
      primary_dns: cdktf.stringToTerraform(this._primaryDns),
      refresh: cdktf.numberToTerraform(this._refresh),
      region: cdktf.stringToTerraform(this._region),
      retry: cdktf.numberToTerraform(this._retry),
      serial: cdktf.numberToTerraform(this._serial),
      status: cdktf.stringToTerraform(this._status),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_email: {
        value: cdktf.stringToHclTerraform(this._adminEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns: {
        value: cdktf.stringToHclTerraform(this._primaryDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: cdktf.numberToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.numberToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
