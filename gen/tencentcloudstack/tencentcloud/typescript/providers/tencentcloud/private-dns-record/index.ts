// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#id PrivateDnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MX priority, which is required when the record type is MX. Valid values: 5, 10, 15, 20, 30, 40, 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#mx PrivateDnsRecord#mx}
  */
  readonly mx?: number;
  /**
  * Record type. Valid values: `A`, `AAAA`, `CNAME`, `MX`, `TXT`, `PTR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#record_type PrivateDnsRecord#record_type}
  */
  readonly recordType: string;
  /**
  * Record value, such as IP: 192.168.10.2, CNAME: cname.qcloud.com, and MX: mail.qcloud.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#record_value PrivateDnsRecord#record_value}
  */
  readonly recordValue: string;
  /**
  * Record status. Valid values: `enabled`, `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#status PrivateDnsRecord#status}
  */
  readonly status?: string;
  /**
  * Subdomain, such as `www`, `m`, and `@`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#sub_domain PrivateDnsRecord#sub_domain}
  */
  readonly subDomain: string;
  /**
  * Record cache time. The smaller the value, the faster the record will take effect. Value range: 1~86400s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#ttl PrivateDnsRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * Record weight. Value range: 1~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#weight PrivateDnsRecord#weight}
  */
  readonly weight?: number;
  /**
  * Private domain ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#zone_id PrivateDnsRecord#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record tencentcloud_private_dns_record}
*/
export class PrivateDnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_private_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateDnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateDnsRecord to import
  * @param importFromId The id of the existing PrivateDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateDnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_private_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_record tencentcloud_private_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_private_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._mx = config.mx;
    this._recordType = config.recordType;
    this._recordValue = config.recordValue;
    this._status = config.status;
    this._subDomain = config.subDomain;
    this._ttl = config.ttl;
    this._weight = config.weight;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mx - computed: false, optional: true, required: false
  private _mx?: number; 
  public get mx() {
    return this.getNumberAttribute('mx');
  }
  public set mx(value: number) {
    this._mx = value;
  }
  public resetMx() {
    this._mx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxInput() {
    return this._mx;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // record_value - computed: false, optional: false, required: true
  private _recordValue?: string; 
  public get recordValue() {
    return this.getStringAttribute('record_value');
  }
  public set recordValue(value: string) {
    this._recordValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordValueInput() {
    return this._recordValue;
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

  // sub_domain - computed: false, optional: false, required: true
  private _subDomain?: string; 
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }
  public set subDomain(value: string) {
    this._subDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain;
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

  // weight - computed: false, optional: true, required: false
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
      mx: cdktf.numberToTerraform(this._mx),
      record_type: cdktf.stringToTerraform(this._recordType),
      record_value: cdktf.stringToTerraform(this._recordValue),
      status: cdktf.stringToTerraform(this._status),
      sub_domain: cdktf.stringToTerraform(this._subDomain),
      ttl: cdktf.numberToTerraform(this._ttl),
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
      mx: {
        value: cdktf.numberToHclTerraform(this._mx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_value: {
        value: cdktf.stringToHclTerraform(this._recordValue),
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
      sub_domain: {
        value: cdktf.stringToHclTerraform(this._subDomain),
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
