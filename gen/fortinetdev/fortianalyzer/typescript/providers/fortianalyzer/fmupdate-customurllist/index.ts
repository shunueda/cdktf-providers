// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_customurllist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateCustomurllistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_customurllist#db_selection FmupdateCustomurllist#db_selection}
  */
  readonly dbSelection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_customurllist#id FmupdateCustomurllist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_customurllist fortianalyzer_fmupdate_customurllist}
*/
export class FmupdateCustomurllist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_fmupdate_customurllist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateCustomurllist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateCustomurllist to import
  * @param importFromId The id of the existing FmupdateCustomurllist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_customurllist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateCustomurllist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_fmupdate_customurllist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_customurllist fortianalyzer_fmupdate_customurllist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateCustomurllistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateCustomurllistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_fmupdate_customurllist',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbSelection = config.dbSelection;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_selection - computed: true, optional: true, required: false
  private _dbSelection?: string[]; 
  public get dbSelection() {
    return cdktf.Fn.tolist(this.getListAttribute('db_selection'));
  }
  public set dbSelection(value: string[]) {
    this._dbSelection = value;
  }
  public resetDbSelection() {
    this._dbSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSelectionInput() {
    return this._dbSelection;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_selection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbSelection),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_selection: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbSelection),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
