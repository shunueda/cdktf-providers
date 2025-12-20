// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Layer2SubinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#comment Layer2Subinterface#comment}
  */
  readonly comment?: string;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#device Layer2Subinterface#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#folder Layer2Subinterface#folder}
  */
  readonly folder?: string;
  /**
  * L2 sub-interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#name Layer2Subinterface#name}
  */
  readonly name: string;
  /**
  * Parent interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#parent_interface Layer2Subinterface#parent_interface}
  */
  readonly parentInterface?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#snippet Layer2Subinterface#snippet}
  */
  readonly snippet?: string;
  /**
  * VLAN tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#vlan_tag Layer2Subinterface#vlan_tag}
  */
  readonly vlanTag: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface scm_layer2_subinterface}
*/
export class Layer2Subinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_layer2_subinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Layer2Subinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Layer2Subinterface to import
  * @param importFromId The id of the existing Layer2Subinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Layer2Subinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_layer2_subinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/layer2_subinterface scm_layer2_subinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Layer2SubinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: Layer2SubinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_layer2_subinterface',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._parentInterface = config.parentInterface;
    this._snippet = config.snippet;
    this._vlanTag = config.vlanTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parent_interface - computed: false, optional: true, required: false
  private _parentInterface?: string; 
  public get parentInterface() {
    return this.getStringAttribute('parent_interface');
  }
  public set parentInterface(value: string) {
    this._parentInterface = value;
  }
  public resetParentInterface() {
    this._parentInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInterfaceInput() {
    return this._parentInterface;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // vlan_tag - computed: false, optional: false, required: true
  private _vlanTag?: string; 
  public get vlanTag() {
    return this.getStringAttribute('vlan_tag');
  }
  public set vlanTag(value: string) {
    this._vlanTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      parent_interface: cdktf.stringToTerraform(this._parentInterface),
      snippet: cdktf.stringToTerraform(this._snippet),
      vlan_tag: cdktf.stringToTerraform(this._vlanTag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      parent_interface: {
        value: cdktf.stringToHclTerraform(this._parentInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_tag: {
        value: cdktf.stringToHclTerraform(this._vlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
