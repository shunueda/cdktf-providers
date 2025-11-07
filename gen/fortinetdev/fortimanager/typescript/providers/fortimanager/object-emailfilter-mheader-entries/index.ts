// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectEmailfilterMheaderEntriesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#action ObjectEmailfilterMheaderEntriesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#adom ObjectEmailfilterMheaderEntriesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#fieldbody ObjectEmailfilterMheaderEntriesA#fieldbody}
  */
  readonly fieldbody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#fieldname ObjectEmailfilterMheaderEntriesA#fieldname}
  */
  readonly fieldname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#fosid ObjectEmailfilterMheaderEntriesA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#id ObjectEmailfilterMheaderEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#mheader ObjectEmailfilterMheaderEntriesA#mheader}
  */
  readonly mheader: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#pattern_type ObjectEmailfilterMheaderEntriesA#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#scopetype ObjectEmailfilterMheaderEntriesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#status ObjectEmailfilterMheaderEntriesA#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries fortimanager_object_emailfilter_mheader_entries}
*/
export class ObjectEmailfilterMheaderEntriesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_emailfilter_mheader_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectEmailfilterMheaderEntriesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectEmailfilterMheaderEntriesA to import
  * @param importFromId The id of the existing ObjectEmailfilterMheaderEntriesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectEmailfilterMheaderEntriesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_emailfilter_mheader_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_mheader_entries fortimanager_object_emailfilter_mheader_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectEmailfilterMheaderEntriesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectEmailfilterMheaderEntriesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_emailfilter_mheader_entries',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._adom = config.adom;
    this._fieldbody = config.fieldbody;
    this._fieldname = config.fieldname;
    this._fosid = config.fosid;
    this._id = config.id;
    this._mheader = config.mheader;
    this._patternType = config.patternType;
    this._scopetype = config.scopetype;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // fieldbody - computed: false, optional: true, required: false
  private _fieldbody?: string; 
  public get fieldbody() {
    return this.getStringAttribute('fieldbody');
  }
  public set fieldbody(value: string) {
    this._fieldbody = value;
  }
  public resetFieldbody() {
    this._fieldbody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldbodyInput() {
    return this._fieldbody;
  }

  // fieldname - computed: false, optional: true, required: false
  private _fieldname?: string; 
  public get fieldname() {
    return this.getStringAttribute('fieldname');
  }
  public set fieldname(value: string) {
    this._fieldname = value;
  }
  public resetFieldname() {
    this._fieldname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldnameInput() {
    return this._fieldname;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // mheader - computed: false, optional: false, required: true
  private _mheader?: string; 
  public get mheader() {
    return this.getStringAttribute('mheader');
  }
  public set mheader(value: string) {
    this._mheader = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mheaderInput() {
    return this._mheader;
  }

  // pattern_type - computed: true, optional: true, required: false
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  public resetPatternType() {
    this._patternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      fieldbody: cdktf.stringToTerraform(this._fieldbody),
      fieldname: cdktf.stringToTerraform(this._fieldname),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      mheader: cdktf.stringToTerraform(this._mheader),
      pattern_type: cdktf.stringToTerraform(this._patternType),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fieldbody: {
        value: cdktf.stringToHclTerraform(this._fieldbody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fieldname: {
        value: cdktf.stringToHclTerraform(this._fieldname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      mheader: {
        value: cdktf.stringToHclTerraform(this._mheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern_type: {
        value: cdktf.stringToHclTerraform(this._patternType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
