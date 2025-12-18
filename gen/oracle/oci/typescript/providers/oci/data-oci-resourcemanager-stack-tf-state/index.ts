// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_stack_tf_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciResourcemanagerStackTfStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_stack_tf_state#id DataOciResourcemanagerStackTfState#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_stack_tf_state#local_path DataOciResourcemanagerStackTfState#local_path}
  */
  readonly localPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_stack_tf_state#stack_id DataOciResourcemanagerStackTfState#stack_id}
  */
  readonly stackId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_stack_tf_state oci_resourcemanager_stack_tf_state}
*/
export class DataOciResourcemanagerStackTfState extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resourcemanager_stack_tf_state";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciResourcemanagerStackTfState resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciResourcemanagerStackTfState to import
  * @param importFromId The id of the existing DataOciResourcemanagerStackTfState that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_stack_tf_state#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciResourcemanagerStackTfState to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resourcemanager_stack_tf_state", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_stack_tf_state oci_resourcemanager_stack_tf_state} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciResourcemanagerStackTfStateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciResourcemanagerStackTfStateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resourcemanager_stack_tf_state',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._localPath = config.localPath;
    this._stackId = config.stackId;
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

  // local_path - computed: false, optional: false, required: true
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      local_path: cdktf.stringToTerraform(this._localPath),
      stack_id: cdktf.stringToTerraform(this._stackId),
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
      local_path: {
        value: cdktf.stringToHclTerraform(this._localPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
