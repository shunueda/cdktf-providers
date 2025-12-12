// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackDnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#id ApsarastackDnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#lba_strategy ApsarastackDnsRecord#lba_strategy}
  */
  readonly lbaStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#line_ids ApsarastackDnsRecord#line_ids}
  */
  readonly lineIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#name ApsarastackDnsRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#remark ApsarastackDnsRecord#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#rr_set ApsarastackDnsRecord#rr_set}
  */
  readonly rrSet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#ttl ApsarastackDnsRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#type ApsarastackDnsRecord#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#zone_id ApsarastackDnsRecord#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record apsarastack_dns_record}
*/
export class ApsarastackDnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackDnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackDnsRecord to import
  * @param importFromId The id of the existing ApsarastackDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackDnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_record apsarastack_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackDnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackDnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._lbaStrategy = config.lbaStrategy;
    this._lineIds = config.lineIds;
    this._name = config.name;
    this._remark = config.remark;
    this._rrSet = config.rrSet;
    this._ttl = config.ttl;
    this._type = config.type;
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

  // lba_strategy - computed: false, optional: false, required: true
  private _lbaStrategy?: string; 
  public get lbaStrategy() {
    return this.getStringAttribute('lba_strategy');
  }
  public set lbaStrategy(value: string) {
    this._lbaStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaStrategyInput() {
    return this._lbaStrategy;
  }

  // line_ids - computed: true, optional: true, required: false
  private _lineIds?: string[]; 
  public get lineIds() {
    return cdktf.Fn.tolist(this.getListAttribute('line_ids'));
  }
  public set lineIds(value: string[]) {
    this._lineIds = value;
  }
  public resetLineIds() {
    this._lineIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineIdsInput() {
    return this._lineIds;
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

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getStringAttribute('record_id');
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

  // rr_set - computed: false, optional: true, required: false
  private _rrSet?: string[]; 
  public get rrSet() {
    return cdktf.Fn.tolist(this.getListAttribute('rr_set'));
  }
  public set rrSet(value: string[]) {
    this._rrSet = value;
  }
  public resetRrSet() {
    this._rrSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrSetInput() {
    return this._rrSet;
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
      lba_strategy: cdktf.stringToTerraform(this._lbaStrategy),
      line_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lineIds),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      rr_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rrSet),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
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
      lba_strategy: {
        value: cdktf.stringToHclTerraform(this._lbaStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lineIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      rr_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rrSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
