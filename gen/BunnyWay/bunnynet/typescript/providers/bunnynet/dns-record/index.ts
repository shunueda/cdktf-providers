// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the DNS record should utilize bunny.net’s acceleration services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#accelerated DnsRecord#accelerated}
  */
  readonly accelerated?: boolean | cdktf.IResolvable;
  /**
  * This property allows users to add descriptive notes for documentation and management purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#comment DnsRecord#comment}
  */
  readonly comment?: string;
  /**
  * Indicates whether the DNS record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#enabled DnsRecord#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Flags for advanced DNS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#flags DnsRecord#flags}
  */
  readonly flags?: number;
  /**
  * The latitude for geolocation-based routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#geolocation_lat DnsRecord#geolocation_lat}
  */
  readonly geolocationLat?: number;
  /**
  * The longitude for geolocation-based routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#geolocation_long DnsRecord#geolocation_long}
  */
  readonly geolocationLong?: number;
  /**
  * The latency zone for latency-based routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#latency_zone DnsRecord#latency_zone}
  */
  readonly latencyZone?: string;
  /**
  * Options: `Http`, `Monitor`, `None`, `Ping`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#monitor_type DnsRecord#monitor_type}
  */
  readonly monitorType?: string;
  /**
  * The name of the DNS record. Use <code>name = ""</code> for apex domain records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#name DnsRecord#name}
  */
  readonly name: string;
  /**
  * The port number for services that require a specific port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#port DnsRecord#port}
  */
  readonly port?: number;
  /**
  * The priority of the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#priority DnsRecord#priority}
  */
  readonly priority?: number;
  /**
  * The ID of the linked pullzone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#pullzone_id DnsRecord#pullzone_id}
  */
  readonly pullzoneId?: number;
  /**
  * Options: `Geolocation`, `Latency`, `None`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#smart_routing_type DnsRecord#smart_routing_type}
  */
  readonly smartRoutingType?: string;
  /**
  * A tag for the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#tag DnsRecord#tag}
  */
  readonly tag?: string;
  /**
  * The time-to-live value for the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#ttl DnsRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * Options: `A`, `AAAA`, `CAA`, `CNAME`, `Flatten`, `MX`, `NS`, `PTR`, `PullZone`, `Redirect`, `SRV`, `Script`, `TXT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#type DnsRecord#type}
  */
  readonly type: string;
  /**
  * The value of the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#value DnsRecord#value}
  */
  readonly value: string;
  /**
  * The weight of the DNS record. It is used in load balancing scenarios to distribute traffic based on the specified weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#weight DnsRecord#weight}
  */
  readonly weight?: number;
  /**
  * ID of the related DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#zone DnsRecord#zone}
  */
  readonly zone: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record bunnynet_dns_record}
*/
export class DnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecord to import
  * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/dns_record bunnynet_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accelerated = config.accelerated;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._flags = config.flags;
    this._geolocationLat = config.geolocationLat;
    this._geolocationLong = config.geolocationLong;
    this._latencyZone = config.latencyZone;
    this._monitorType = config.monitorType;
    this._name = config.name;
    this._port = config.port;
    this._priority = config.priority;
    this._pullzoneId = config.pullzoneId;
    this._smartRoutingType = config.smartRoutingType;
    this._tag = config.tag;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._weight = config.weight;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated - computed: true, optional: true, required: false
  private _accelerated?: boolean | cdktf.IResolvable; 
  public get accelerated() {
    return this.getBooleanAttribute('accelerated');
  }
  public set accelerated(value: boolean | cdktf.IResolvable) {
    this._accelerated = value;
  }
  public resetAccelerated() {
    this._accelerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedInput() {
    return this._accelerated;
  }

  // accelerated_pullzone - computed: true, optional: false, required: false
  public get acceleratedPullzone() {
    return this.getNumberAttribute('accelerated_pullzone');
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // geolocation_lat - computed: true, optional: true, required: false
  private _geolocationLat?: number; 
  public get geolocationLat() {
    return this.getNumberAttribute('geolocation_lat');
  }
  public set geolocationLat(value: number) {
    this._geolocationLat = value;
  }
  public resetGeolocationLat() {
    this._geolocationLat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationLatInput() {
    return this._geolocationLat;
  }

  // geolocation_long - computed: true, optional: true, required: false
  private _geolocationLong?: number; 
  public get geolocationLong() {
    return this.getNumberAttribute('geolocation_long');
  }
  public set geolocationLong(value: number) {
    this._geolocationLong = value;
  }
  public resetGeolocationLong() {
    this._geolocationLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationLongInput() {
    return this._geolocationLong;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // latency_zone - computed: true, optional: true, required: false
  private _latencyZone?: string; 
  public get latencyZone() {
    return this.getStringAttribute('latency_zone');
  }
  public set latencyZone(value: string) {
    this._latencyZone = value;
  }
  public resetLatencyZone() {
    this._latencyZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyZoneInput() {
    return this._latencyZone;
  }

  // link_name - computed: true, optional: false, required: false
  public get linkName() {
    return this.getStringAttribute('link_name');
  }

  // monitor_type - computed: true, optional: true, required: false
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  public resetMonitorType() {
    this._monitorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // pullzone_id - computed: true, optional: true, required: false
  private _pullzoneId?: number; 
  public get pullzoneId() {
    return this.getNumberAttribute('pullzone_id');
  }
  public set pullzoneId(value: number) {
    this._pullzoneId = value;
  }
  public resetPullzoneId() {
    this._pullzoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneIdInput() {
    return this._pullzoneId;
  }

  // smart_routing_type - computed: true, optional: true, required: false
  private _smartRoutingType?: string; 
  public get smartRoutingType() {
    return this.getStringAttribute('smart_routing_type');
  }
  public set smartRoutingType(value: string) {
    this._smartRoutingType = value;
  }
  public resetSmartRoutingType() {
    this._smartRoutingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRoutingTypeInput() {
    return this._smartRoutingType;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
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
      accelerated: cdktf.booleanToTerraform(this._accelerated),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.booleanToTerraform(this._enabled),
      flags: cdktf.numberToTerraform(this._flags),
      geolocation_lat: cdktf.numberToTerraform(this._geolocationLat),
      geolocation_long: cdktf.numberToTerraform(this._geolocationLong),
      latency_zone: cdktf.stringToTerraform(this._latencyZone),
      monitor_type: cdktf.stringToTerraform(this._monitorType),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      pullzone_id: cdktf.numberToTerraform(this._pullzoneId),
      smart_routing_type: cdktf.stringToTerraform(this._smartRoutingType),
      tag: cdktf.stringToTerraform(this._tag),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      weight: cdktf.numberToTerraform(this._weight),
      zone: cdktf.numberToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerated: {
        value: cdktf.booleanToHclTerraform(this._accelerated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flags: {
        value: cdktf.numberToHclTerraform(this._flags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geolocation_lat: {
        value: cdktf.numberToHclTerraform(this._geolocationLat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geolocation_long: {
        value: cdktf.numberToHclTerraform(this._geolocationLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      latency_zone: {
        value: cdktf.stringToHclTerraform(this._latencyZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_type: {
        value: cdktf.stringToHclTerraform(this._monitorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pullzone_id: {
        value: cdktf.numberToHclTerraform(this._pullzoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smart_routing_type: {
        value: cdktf.stringToHclTerraform(this._smartRoutingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
