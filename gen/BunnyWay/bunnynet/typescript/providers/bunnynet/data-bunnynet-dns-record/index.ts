// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetDnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record#id DataBunnynetDnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The name of the DNS record. Use <code>name = ""</code> for apex domain records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record#name DataBunnynetDnsRecord#name}
  */
  readonly name: string;
  /**
  * Options: `A`, `AAAA`, `CAA`, `CNAME`, `Flatten`, `MX`, `NS`, `PTR`, `PullZone`, `Redirect`, `SRV`, `Script`, `TXT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record#type DataBunnynetDnsRecord#type}
  */
  readonly type: string;
  /**
  * ID of the related DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record#zone DataBunnynetDnsRecord#zone}
  */
  readonly zone: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record bunnynet_dns_record}
*/
export class DataBunnynetDnsRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetDnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetDnsRecord to import
  * @param importFromId The id of the existing DataBunnynetDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetDnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/data-sources/dns_record bunnynet_dns_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetDnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetDnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated - computed: true, optional: false, required: false
  public get accelerated() {
    return this.getBooleanAttribute('accelerated');
  }

  // accelerated_pullzone - computed: true, optional: false, required: false
  public get acceleratedPullzone() {
    return this.getNumberAttribute('accelerated_pullzone');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // flags - computed: true, optional: false, required: false
  public get flags() {
    return this.getNumberAttribute('flags');
  }

  // geolocation_lat - computed: true, optional: false, required: false
  public get geolocationLat() {
    return this.getNumberAttribute('geolocation_lat');
  }

  // geolocation_long - computed: true, optional: false, required: false
  public get geolocationLong() {
    return this.getNumberAttribute('geolocation_long');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // latency_zone - computed: true, optional: false, required: false
  public get latencyZone() {
    return this.getStringAttribute('latency_zone');
  }

  // link_name - computed: true, optional: false, required: false
  public get linkName() {
    return this.getStringAttribute('link_name');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // smart_routing_type - computed: true, optional: false, required: false
  public get smartRoutingType() {
    return this.getStringAttribute('smart_routing_type');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: number; 
  public get zone() {
    return this.getNumberAttribute('zone');
  }
  public set zone(value: number) {
    this._zone = value;
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
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.numberToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.numberToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
