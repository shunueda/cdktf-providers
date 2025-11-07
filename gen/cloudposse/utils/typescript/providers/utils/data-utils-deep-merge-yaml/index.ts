// https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUtilsDeepMergeYamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean flag to enable/disable appending lists instead of overwriting them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml#append_list DataUtilsDeepMergeYaml#append_list}
  */
  readonly appendList?: boolean | cdktf.IResolvable;
  /**
  * A boolean flag to enable/disable merging of list elements one by one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml#deep_copy_list DataUtilsDeepMergeYaml#deep_copy_list}
  */
  readonly deepCopyList?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml#id DataUtilsDeepMergeYaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of YAML strings that is deep merged into the `output` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml#input DataUtilsDeepMergeYaml#input}
  */
  readonly input: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml utils_deep_merge_yaml}
*/
export class DataUtilsDeepMergeYaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "utils_deep_merge_yaml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUtilsDeepMergeYaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUtilsDeepMergeYaml to import
  * @param importFromId The id of the existing DataUtilsDeepMergeYaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUtilsDeepMergeYaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "utils_deep_merge_yaml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/deep_merge_yaml utils_deep_merge_yaml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUtilsDeepMergeYamlConfig
  */
  public constructor(scope: Construct, id: string, config: DataUtilsDeepMergeYamlConfig) {
    super(scope, id, {
      terraformResourceType: 'utils_deep_merge_yaml',
      terraformGeneratorMetadata: {
        providerName: 'utils',
        providerVersion: '1.31.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appendList = config.appendList;
    this._deepCopyList = config.deepCopyList;
    this._id = config.id;
    this._input = config.input;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_list - computed: false, optional: true, required: false
  private _appendList?: boolean | cdktf.IResolvable; 
  public get appendList() {
    return this.getBooleanAttribute('append_list');
  }
  public set appendList(value: boolean | cdktf.IResolvable) {
    this._appendList = value;
  }
  public resetAppendList() {
    this._appendList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendListInput() {
    return this._appendList;
  }

  // deep_copy_list - computed: false, optional: true, required: false
  private _deepCopyList?: boolean | cdktf.IResolvable; 
  public get deepCopyList() {
    return this.getBooleanAttribute('deep_copy_list');
  }
  public set deepCopyList(value: boolean | cdktf.IResolvable) {
    this._deepCopyList = value;
  }
  public resetDeepCopyList() {
    this._deepCopyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepCopyListInput() {
    return this._deepCopyList;
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

  // input - computed: false, optional: false, required: true
  private _input?: string[]; 
  public get input() {
    return this.getListAttribute('input');
  }
  public set input(value: string[]) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_list: cdktf.booleanToTerraform(this._appendList),
      deep_copy_list: cdktf.booleanToTerraform(this._deepCopyList),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.listMapper(cdktf.stringToTerraform, false)(this._input),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_list: {
        value: cdktf.booleanToHclTerraform(this._appendList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deep_copy_list: {
        value: cdktf.booleanToHclTerraform(this._deepCopyList),
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
      input: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._input),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
