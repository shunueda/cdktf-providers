// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MirrorPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ethernet port as mirror port (Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port#ethernet MirrorPort#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port#id MirrorPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'input': Mirror incoming packets to this port; 'output': Mirror outgoing packets to this port; 'both': Mirror both incoming and outgoing packets to this port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port#mirror_dir MirrorPort#mirror_dir}
  */
  readonly mirrorDir?: string;
  /**
  * Mirror index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port#mirror_index MirrorPort#mirror_index}
  */
  readonly mirrorIndex: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port#uuid MirrorPort#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port thunder_mirror_port}
*/
export class MirrorPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_mirror_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MirrorPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MirrorPort to import
  * @param importFromId The id of the existing MirrorPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MirrorPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_mirror_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/mirror_port thunder_mirror_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MirrorPortConfig
  */
  public constructor(scope: Construct, id: string, config: MirrorPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_mirror_port',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ethernet = config.ethernet;
    this._id = config.id;
    this._mirrorDir = config.mirrorDir;
    this._mirrorIndex = config.mirrorIndex;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
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

  // mirror_dir - computed: false, optional: true, required: false
  private _mirrorDir?: string; 
  public get mirrorDir() {
    return this.getStringAttribute('mirror_dir');
  }
  public set mirrorDir(value: string) {
    this._mirrorDir = value;
  }
  public resetMirrorDir() {
    this._mirrorDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorDirInput() {
    return this._mirrorDir;
  }

  // mirror_index - computed: false, optional: false, required: true
  private _mirrorIndex?: number; 
  public get mirrorIndex() {
    return this.getNumberAttribute('mirror_index');
  }
  public set mirrorIndex(value: number) {
    this._mirrorIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIndexInput() {
    return this._mirrorIndex;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ethernet: cdktf.numberToTerraform(this._ethernet),
      id: cdktf.stringToTerraform(this._id),
      mirror_dir: cdktf.stringToTerraform(this._mirrorDir),
      mirror_index: cdktf.numberToTerraform(this._mirrorIndex),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_dir: {
        value: cdktf.stringToHclTerraform(this._mirrorDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror_index: {
        value: cdktf.numberToHclTerraform(this._mirrorIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
