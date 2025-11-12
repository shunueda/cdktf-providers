// https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create PTR records for requested (A or AAAA) records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record#create_ptr Record#create_ptr}
  */
  readonly createPtr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record#id Record#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the dns records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record#name Record#name}
  */
  readonly name: string;
  /**
  * A list of records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record#records Record#records}
  */
  readonly records: string[];
  /**
  * The type of the dns records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record#type Record#type}
  */
  readonly type: string;
  /**
  * The zone name for the dns records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record#zone_name Record#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record windns_record}
*/
export class Record extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "windns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Record to import
  * @param importFromId The id of the existing Record that should be imported. Refer to the {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Record to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "windns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nrkno/windns/1.0.5/docs/resources/record windns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecordConfig
  */
  public constructor(scope: Construct, id: string, config: RecordConfig) {
    super(scope, id, {
      terraformResourceType: 'windns_record',
      terraformGeneratorMetadata: {
        providerName: 'windns',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createPtr = config.createPtr;
    this._id = config.id;
    this._name = config.name;
    this._records = config.records;
    this._type = config.type;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_ptr - computed: false, optional: true, required: false
  private _createPtr?: boolean | cdktf.IResolvable; 
  public get createPtr() {
    return this.getBooleanAttribute('create_ptr');
  }
  public set createPtr(value: boolean | cdktf.IResolvable) {
    this._createPtr = value;
  }
  public resetCreatePtr() {
    this._createPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPtrInput() {
    return this._createPtr;
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

  // records - computed: false, optional: false, required: true
  private _records?: string[]; 
  public get records() {
    return cdktf.Fn.tolist(this.getListAttribute('records'));
  }
  public set records(value: string[]) {
    this._records = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_ptr: cdktf.booleanToTerraform(this._createPtr),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      records: cdktf.listMapper(cdktf.stringToTerraform, false)(this._records),
      type: cdktf.stringToTerraform(this._type),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_ptr: {
        value: cdktf.booleanToHclTerraform(this._createPtr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      records: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._records),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
