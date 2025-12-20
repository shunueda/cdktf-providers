// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/sshkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeSshkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/sshkey#id DataLinodeSshkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The label of the Linode SSH Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/sshkey#label DataLinodeSshkey#label}
  */
  readonly label: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/sshkey linode_sshkey}
*/
export class DataLinodeSshkey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_sshkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeSshkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeSshkey to import
  * @param importFromId The id of the existing DataLinodeSshkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/sshkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeSshkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_sshkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/sshkey linode_sshkey} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeSshkeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeSshkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_sshkey',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
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
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: false, optional: true, required: false
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
