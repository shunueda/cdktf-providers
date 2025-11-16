// https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/binary_manager_release_bundles_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryManagerReleaseBundlesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the binary manager, e.g. 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/binary_manager_release_bundles_v2#id BinaryManagerReleaseBundlesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Release Bundles V2 to be indexed.
  * 
  * ~>Currently does not support Ant-style path patterns (`*`, `**`, or `?`) due to API limitation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/binary_manager_release_bundles_v2#indexed_release_bundle_v2 BinaryManagerReleaseBundlesV2#indexed_release_bundle_v2}
  */
  readonly indexedReleaseBundleV2: string[];
  /**
  * For Xray version 3.21.2 and above with Projects, a Project Admin with Index Resources privilege can maintain the indexed and not indexed repositories in a given binary manger using this resource in the scope of a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/binary_manager_release_bundles_v2#project_key BinaryManagerReleaseBundlesV2#project_key}
  */
  readonly projectKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/binary_manager_release_bundles_v2 xray_binary_manager_release_bundles_v2}
*/
export class BinaryManagerReleaseBundlesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_binary_manager_release_bundles_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BinaryManagerReleaseBundlesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BinaryManagerReleaseBundlesV2 to import
  * @param importFromId The id of the existing BinaryManagerReleaseBundlesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/binary_manager_release_bundles_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BinaryManagerReleaseBundlesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_binary_manager_release_bundles_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.3/docs/resources/binary_manager_release_bundles_v2 xray_binary_manager_release_bundles_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BinaryManagerReleaseBundlesV2Config
  */
  public constructor(scope: Construct, id: string, config: BinaryManagerReleaseBundlesV2Config) {
    super(scope, id, {
      terraformResourceType: 'xray_binary_manager_release_bundles_v2',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
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
    this._indexedReleaseBundleV2 = config.indexedReleaseBundleV2;
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

  // indexed_release_bundle_v2 - computed: false, optional: false, required: true
  private _indexedReleaseBundleV2?: string[]; 
  public get indexedReleaseBundleV2() {
    return cdktf.Fn.tolist(this.getListAttribute('indexed_release_bundle_v2'));
  }
  public set indexedReleaseBundleV2(value: string[]) {
    this._indexedReleaseBundleV2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedReleaseBundleV2Input() {
    return this._indexedReleaseBundleV2;
  }

  // non_indexed_release_bundle_v2 - computed: true, optional: false, required: false
  public get nonIndexedReleaseBundleV2() {
    return cdktf.Fn.tolist(this.getListAttribute('non_indexed_release_bundle_v2'));
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
      indexed_release_bundle_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexedReleaseBundleV2),
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
      indexed_release_bundle_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexedReleaseBundleV2),
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
