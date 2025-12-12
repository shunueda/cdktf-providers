// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZdnsZoneRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#id ZdnsZoneRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resolver line. Default is `default`. Also valid for specified region, such as `asia-east-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#line ZdnsZoneRecord#line}
  */
  readonly line?: string;
  /**
  * MX priority, which is required when the record type is `MX`. Range: [1, 99], default: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#priority ZdnsZoneRecord#priority}
  */
  readonly priority?: number;
  /**
  * The name of the record. such as `www`, `@`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#record_name ZdnsZoneRecord#record_name}
  */
  readonly recordName: string;
  /**
  * Remarks for the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#remark ZdnsZoneRecord#remark}
  */
  readonly remark?: string;
  /**
  * Record status. Valid values: `Enabled`, `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#status ZdnsZoneRecord#status}
  */
  readonly status?: string;
  /**
  * The ttl of the Private Zone Record. Measured in second. Range: [5,86400], default: 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#ttl ZdnsZoneRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * DNS record type. Valid values: 
  * 	- `A`: Maps a domain name to an IP address 
  * 	- `AAAA`: Maps a domain name to an IPv6 address 
  * 	- `CNAME`: Maps a domain name to another domain name 
  * 	- `MX`: Maps a domain name to a mail server address 
  * 	- `TXT`: Text information 
  * 	- `PTR`: Maps an IP address to a domain name for reverse DNS lookup 
  * 	- `SRV`: Specifies servers providing specific services (format: [priority] [weight] [port] [target address], e.g., 0 5 5060 sipserver.example.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#type ZdnsZoneRecord#type}
  */
  readonly type: string;
  /**
  * The value of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#value ZdnsZoneRecord#value}
  */
  readonly value: string;
  /**
  * Weight for the record. Only takes effect for type `A` or `AAAA`. Range: [1, 100], default: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#weight ZdnsZoneRecord#weight}
  */
  readonly weight?: number;
  /**
  * The ID of the private zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#zone_id ZdnsZoneRecord#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record zenlayercloud_zdns_zone_record}
*/
export class ZdnsZoneRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zdns_zone_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZdnsZoneRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZdnsZoneRecord to import
  * @param importFromId The id of the existing ZdnsZoneRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZdnsZoneRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zdns_zone_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/resources/zdns_zone_record zenlayercloud_zdns_zone_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZdnsZoneRecordConfig
  */
  public constructor(scope: Construct, id: string, config: ZdnsZoneRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zdns_zone_record',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.17',
        providerVersionConstraint: '0.2.17'
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
    this._line = config.line;
    this._priority = config.priority;
    this._recordName = config.recordName;
    this._remark = config.remark;
    this._status = config.status;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._weight = config.weight;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // line - computed: true, optional: true, required: false
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  public resetLine() {
    this._line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // priority - computed: false, optional: true, required: false
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

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      line: cdktf.stringToTerraform(this._line),
      priority: cdktf.numberToTerraform(this._priority),
      record_name: cdktf.stringToTerraform(this._recordName),
      remark: cdktf.stringToTerraform(this._remark),
      status: cdktf.stringToTerraform(this._status),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      weight: cdktf.numberToTerraform(this._weight),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line: {
        value: cdktf.stringToHclTerraform(this._line),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_name: {
        value: cdktf.stringToHclTerraform(this._recordName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
