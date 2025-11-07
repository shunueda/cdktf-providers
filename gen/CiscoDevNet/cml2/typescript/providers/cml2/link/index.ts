// https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lab ID containing the link (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link#lab_id Link#lab_id}
  */
  readonly labId: string;
  /**
  * Node (A) attached to link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link#node_a Link#node_a}
  */
  readonly nodeA: string;
  /**
  * Node (B) attached to link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link#node_b Link#node_b}
  */
  readonly nodeB: string;
  /**
  * Optional interface slot on node A (src), if not provided use next free.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link#slot_a Link#slot_a}
  */
  readonly slotA?: number;
  /**
  * Optional interface slot on node B (dst), if not provided use next free.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link#slot_b Link#slot_b}
  */
  readonly slotB?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link cml2_link}
*/
export class Link extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cml2_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Link resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Link to import
  * @param importFromId The id of the existing Link that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Link to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cml2_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/link cml2_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkConfig
  */
  public constructor(scope: Construct, id: string, config: LinkConfig) {
    super(scope, id, {
      terraformResourceType: 'cml2_link',
      terraformGeneratorMetadata: {
        providerName: 'cml2',
        providerVersion: '0.8.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labId = config.labId;
    this._nodeA = config.nodeA;
    this._nodeB = config.nodeB;
    this._slotA = config.slotA;
    this._slotB = config.slotB;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_a - computed: true, optional: false, required: false
  public get interfaceA() {
    return this.getStringAttribute('interface_a');
  }

  // interface_b - computed: true, optional: false, required: false
  public get interfaceB() {
    return this.getStringAttribute('interface_b');
  }

  // lab_id - computed: false, optional: false, required: true
  private _labId?: string; 
  public get labId() {
    return this.getStringAttribute('lab_id');
  }
  public set labId(value: string) {
    this._labId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labIdInput() {
    return this._labId;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // link_capture_key - computed: true, optional: false, required: false
  public get linkCaptureKey() {
    return this.getStringAttribute('link_capture_key');
  }

  // node_a - computed: false, optional: false, required: true
  private _nodeA?: string; 
  public get nodeA() {
    return this.getStringAttribute('node_a');
  }
  public set nodeA(value: string) {
    this._nodeA = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAInput() {
    return this._nodeA;
  }

  // node_b - computed: false, optional: false, required: true
  private _nodeB?: string; 
  public get nodeB() {
    return this.getStringAttribute('node_b');
  }
  public set nodeB(value: string) {
    this._nodeB = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBInput() {
    return this._nodeB;
  }

  // slot_a - computed: true, optional: true, required: false
  private _slotA?: number; 
  public get slotA() {
    return this.getNumberAttribute('slot_a');
  }
  public set slotA(value: number) {
    this._slotA = value;
  }
  public resetSlotA() {
    this._slotA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotAInput() {
    return this._slotA;
  }

  // slot_b - computed: true, optional: true, required: false
  private _slotB?: number; 
  public get slotB() {
    return this.getNumberAttribute('slot_b');
  }
  public set slotB(value: number) {
    this._slotB = value;
  }
  public resetSlotB() {
    this._slotB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotBInput() {
    return this._slotB;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lab_id: cdktf.stringToTerraform(this._labId),
      node_a: cdktf.stringToTerraform(this._nodeA),
      node_b: cdktf.stringToTerraform(this._nodeB),
      slot_a: cdktf.numberToTerraform(this._slotA),
      slot_b: cdktf.numberToTerraform(this._slotB),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lab_id: {
        value: cdktf.stringToHclTerraform(this._labId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_a: {
        value: cdktf.stringToHclTerraform(this._nodeA),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_b: {
        value: cdktf.stringToHclTerraform(this._nodeB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_a: {
        value: cdktf.numberToHclTerraform(this._slotA),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slot_b: {
        value: cdktf.numberToHclTerraform(this._slotB),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
