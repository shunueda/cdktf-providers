// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PatchReferenceUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update#app_inst_id_list PatchReferenceUpdate#app_inst_id_list}
  */
  readonly appInstIdList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update#id PatchReferenceUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update#patchenvelope_id PatchReferenceUpdate#patchenvelope_id}
  */
  readonly patchenvelopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update#project_id PatchReferenceUpdate#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update zedcloud_patch_reference_update}
*/
export class PatchReferenceUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_patch_reference_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PatchReferenceUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PatchReferenceUpdate to import
  * @param importFromId The id of the existing PatchReferenceUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PatchReferenceUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_patch_reference_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_reference_update zedcloud_patch_reference_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PatchReferenceUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: PatchReferenceUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_patch_reference_update',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appInstIdList = config.appInstIdList;
    this._id = config.id;
    this._patchenvelopeId = config.patchenvelopeId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_inst_id_list - computed: false, optional: false, required: true
  private _appInstIdList?: string[]; 
  public get appInstIdList() {
    return this.getListAttribute('app_inst_id_list');
  }
  public set appInstIdList(value: string[]) {
    this._appInstIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstIdListInput() {
    return this._appInstIdList;
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

  // patchenvelope_id - computed: false, optional: false, required: true
  private _patchenvelopeId?: string; 
  public get patchenvelopeId() {
    return this.getStringAttribute('patchenvelope_id');
  }
  public set patchenvelopeId(value: string) {
    this._patchenvelopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchenvelopeIdInput() {
    return this._patchenvelopeId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_inst_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appInstIdList),
      id: cdktf.stringToTerraform(this._id),
      patchenvelope_id: cdktf.stringToTerraform(this._patchenvelopeId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_inst_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appInstIdList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patchenvelope_id: {
        value: cdktf.stringToHclTerraform(this._patchenvelopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
