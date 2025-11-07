// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdwpgRestartInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance#id CdwpgRestartInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id (e.g., "cdwpg-xxxx").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance#instance_id CdwpgRestartInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Node ids to restart (specify nodes to reboot).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance#node_ids CdwpgRestartInstance#node_ids}
  */
  readonly nodeIds?: string[];
  /**
  * Node types to restart (gtm/cn/dn).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance#node_types CdwpgRestartInstance#node_types}
  */
  readonly nodeTypes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance tencentcloud_cdwpg_restart_instance}
*/
export class CdwpgRestartInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdwpg_restart_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdwpgRestartInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdwpgRestartInstance to import
  * @param importFromId The id of the existing CdwpgRestartInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdwpgRestartInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdwpg_restart_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cdwpg_restart_instance tencentcloud_cdwpg_restart_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdwpgRestartInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CdwpgRestartInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdwpg_restart_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._instanceId = config.instanceId;
    this._nodeIds = config.nodeIds;
    this._nodeTypes = config.nodeTypes;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // node_ids - computed: false, optional: true, required: false
  private _nodeIds?: string[]; 
  public get nodeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('node_ids'));
  }
  public set nodeIds(value: string[]) {
    this._nodeIds = value;
  }
  public resetNodeIds() {
    this._nodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdsInput() {
    return this._nodeIds;
  }

  // node_types - computed: false, optional: true, required: false
  private _nodeTypes?: string[]; 
  public get nodeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('node_types'));
  }
  public set nodeTypes(value: string[]) {
    this._nodeTypes = value;
  }
  public resetNodeTypes() {
    this._nodeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypesInput() {
    return this._nodeTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      node_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeIds),
      node_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeTypes),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      node_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
