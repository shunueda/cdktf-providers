// https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#id RecordSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#name RecordSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#owner_group_id RecordSet#owner_group_id}
  */
  readonly ownerGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#record_addresses RecordSet#record_addresses}
  */
  readonly recordAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#record_cname RecordSet#record_cname}
  */
  readonly recordCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#record_nsdnames RecordSet#record_nsdnames}
  */
  readonly recordNsdnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#record_ptrdnames RecordSet#record_ptrdnames}
  */
  readonly recordPtrdnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#record_texts RecordSet#record_texts}
  */
  readonly recordTexts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#ttl RecordSet#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#type RecordSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#zone_id RecordSet#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set vinyldns_record_set}
*/
export class RecordSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vinyldns_record_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecordSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecordSet to import
  * @param importFromId The id of the existing RecordSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecordSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vinyldns_record_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/record_set vinyldns_record_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: RecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'vinyldns_record_set',
      terraformGeneratorMetadata: {
        providerName: 'vinyldns',
        providerVersion: '0.10.3',
        providerVersionConstraint: '0.10.3'
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
    this._ownerGroupId = config.ownerGroupId;
    this._recordAddresses = config.recordAddresses;
    this._recordCname = config.recordCname;
    this._recordNsdnames = config.recordNsdnames;
    this._recordPtrdnames = config.recordPtrdnames;
    this._recordTexts = config.recordTexts;
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

  // owner_group_id - computed: false, optional: true, required: false
  private _ownerGroupId?: string; 
  public get ownerGroupId() {
    return this.getStringAttribute('owner_group_id');
  }
  public set ownerGroupId(value: string) {
    this._ownerGroupId = value;
  }
  public resetOwnerGroupId() {
    this._ownerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGroupIdInput() {
    return this._ownerGroupId;
  }

  // record_addresses - computed: false, optional: true, required: false
  private _recordAddresses?: string[]; 
  public get recordAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('record_addresses'));
  }
  public set recordAddresses(value: string[]) {
    this._recordAddresses = value;
  }
  public resetRecordAddresses() {
    this._recordAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordAddressesInput() {
    return this._recordAddresses;
  }

  // record_cname - computed: false, optional: true, required: false
  private _recordCname?: string; 
  public get recordCname() {
    return this.getStringAttribute('record_cname');
  }
  public set recordCname(value: string) {
    this._recordCname = value;
  }
  public resetRecordCname() {
    this._recordCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordCnameInput() {
    return this._recordCname;
  }

  // record_nsdnames - computed: false, optional: true, required: false
  private _recordNsdnames?: string[]; 
  public get recordNsdnames() {
    return cdktf.Fn.tolist(this.getListAttribute('record_nsdnames'));
  }
  public set recordNsdnames(value: string[]) {
    this._recordNsdnames = value;
  }
  public resetRecordNsdnames() {
    this._recordNsdnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNsdnamesInput() {
    return this._recordNsdnames;
  }

  // record_ptrdnames - computed: false, optional: true, required: false
  private _recordPtrdnames?: string[]; 
  public get recordPtrdnames() {
    return cdktf.Fn.tolist(this.getListAttribute('record_ptrdnames'));
  }
  public set recordPtrdnames(value: string[]) {
    this._recordPtrdnames = value;
  }
  public resetRecordPtrdnames() {
    this._recordPtrdnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordPtrdnamesInput() {
    return this._recordPtrdnames;
  }

  // record_texts - computed: false, optional: true, required: false
  private _recordTexts?: string[]; 
  public get recordTexts() {
    return cdktf.Fn.tolist(this.getListAttribute('record_texts'));
  }
  public set recordTexts(value: string[]) {
    this._recordTexts = value;
  }
  public resetRecordTexts() {
    this._recordTexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTextsInput() {
    return this._recordTexts;
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
      name: cdktf.stringToTerraform(this._name),
      owner_group_id: cdktf.stringToTerraform(this._ownerGroupId),
      record_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordAddresses),
      record_cname: cdktf.stringToTerraform(this._recordCname),
      record_nsdnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordNsdnames),
      record_ptrdnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordPtrdnames),
      record_texts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordTexts),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_group_id: {
        value: cdktf.stringToHclTerraform(this._ownerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_cname: {
        value: cdktf.stringToHclTerraform(this._recordCname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_nsdnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordNsdnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_ptrdnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordPtrdnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_texts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordTexts),
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
