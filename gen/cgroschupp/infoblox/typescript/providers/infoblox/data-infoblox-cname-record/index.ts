// https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfobloxCnameRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Canonical name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record#canonical DataInfobloxCnameRecord#canonical}
  */
  readonly canonical?: string;
  /**
  * Dns View under which the zone has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record#dns_view DataInfobloxCnameRecord#dns_view}
  */
  readonly dnsView?: string;
  /**
  * Return first found record. Raise error if set to false and more than one record found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record#first_record DataInfobloxCnameRecord#first_record}
  */
  readonly firstRecord?: boolean | cdktf.IResolvable;
  /**
  * A record FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record#fqdn DataInfobloxCnameRecord#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Zone under which record has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record#zone DataInfobloxCnameRecord#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record infoblox_cname_record}
*/
export class DataInfobloxCnameRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_cname_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfobloxCnameRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfobloxCnameRecord to import
  * @param importFromId The id of the existing DataInfobloxCnameRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfobloxCnameRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_cname_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/data-sources/cname_record infoblox_cname_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfobloxCnameRecordConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataInfobloxCnameRecordConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infoblox_cname_record',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '1.1.7',
        providerVersionConstraint: '1.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canonical = config.canonical;
    this._dnsView = config.dnsView;
    this._firstRecord = config.firstRecord;
    this._fqdn = config.fqdn;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical - computed: true, optional: true, required: false
  private _canonical?: string; 
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
  public set canonical(value: string) {
    this._canonical = value;
  }
  public resetCanonical() {
    this._canonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical;
  }

  // dns_view - computed: true, optional: true, required: false
  private _dnsView?: string; 
  public get dnsView() {
    return this.getStringAttribute('dns_view');
  }
  public set dnsView(value: string) {
    this._dnsView = value;
  }
  public resetDnsView() {
    this._dnsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewInput() {
    return this._dnsView;
  }

  // eas - computed: true, optional: false, required: false
  private _eas = new cdktf.StringMap(this, "eas");
  public get eas() {
    return this._eas;
  }

  // first_record - computed: false, optional: true, required: false
  private _firstRecord?: boolean | cdktf.IResolvable; 
  public get firstRecord() {
    return this.getBooleanAttribute('first_record');
  }
  public set firstRecord(value: boolean | cdktf.IResolvable) {
    this._firstRecord = value;
  }
  public resetFirstRecord() {
    this._firstRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstRecordInput() {
    return this._firstRecord;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      canonical: cdktf.stringToTerraform(this._canonical),
      dns_view: cdktf.stringToTerraform(this._dnsView),
      first_record: cdktf.booleanToTerraform(this._firstRecord),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonical: {
        value: cdktf.stringToHclTerraform(this._canonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_view: {
        value: cdktf.stringToHclTerraform(this._dnsView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_record: {
        value: cdktf.booleanToHclTerraform(this._firstRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
