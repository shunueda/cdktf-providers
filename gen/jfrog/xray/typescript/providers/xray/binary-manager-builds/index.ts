// https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/binary_manager_builds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryManagerBuildsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the binary manager, e.g. 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/binary_manager_builds#id BinaryManagerBuilds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Builds to be indexed.
  * 
  * ~>Currently does not support Ant-style path patterns (`*`, `**`, or `?`) due to API limitation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/binary_manager_builds#indexed_builds BinaryManagerBuilds#indexed_builds}
  */
  readonly indexedBuilds: string[];
  /**
  * For Xray version 3.21.2 and above with Projects, a Project Admin with Index Resources privilege can maintain the indexed and not indexed repositories in a given binary manger using this resource in the scope of a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/binary_manager_builds#project_key BinaryManagerBuilds#project_key}
  */
  readonly projectKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/binary_manager_builds xray_binary_manager_builds}
*/
export class BinaryManagerBuilds extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_binary_manager_builds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BinaryManagerBuilds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BinaryManagerBuilds to import
  * @param importFromId The id of the existing BinaryManagerBuilds that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/binary_manager_builds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BinaryManagerBuilds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_binary_manager_builds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/binary_manager_builds xray_binary_manager_builds} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BinaryManagerBuildsConfig
  */
  public constructor(scope: Construct, id: string, config: BinaryManagerBuildsConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_binary_manager_builds',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.2',
        providerVersionConstraint: '3.1.2'
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
    this._indexedBuilds = config.indexedBuilds;
    this._projectKey = config.projectKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // indexed_builds - computed: false, optional: false, required: true
  private _indexedBuilds?: string[]; 
  public get indexedBuilds() {
    return cdktf.Fn.tolist(this.getListAttribute('indexed_builds'));
  }
  public set indexedBuilds(value: string[]) {
    this._indexedBuilds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedBuildsInput() {
    return this._indexedBuilds;
  }

  // non_indexed_builds - computed: true, optional: false, required: false
  public get nonIndexedBuilds() {
    return cdktf.Fn.tolist(this.getListAttribute('non_indexed_builds'));
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      indexed_builds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexedBuilds),
      project_key: cdktf.stringToTerraform(this._projectKey),
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
      indexed_builds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexedBuilds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
