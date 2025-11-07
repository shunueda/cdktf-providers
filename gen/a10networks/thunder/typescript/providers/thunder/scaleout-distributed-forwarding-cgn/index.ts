// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_cgn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutDistributedForwardingCgnConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable CGN; 'disable': Disable CGN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_cgn#cgn_value ScaleoutDistributedForwardingCgn#cgn_value}
  */
  readonly cgnValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_cgn#id ScaleoutDistributedForwardingCgn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_cgn#uuid ScaleoutDistributedForwardingCgn#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_cgn thunder_scaleout_distributed_forwarding_cgn}
*/
export class ScaleoutDistributedForwardingCgn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_distributed_forwarding_cgn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutDistributedForwardingCgn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutDistributedForwardingCgn to import
  * @param importFromId The id of the existing ScaleoutDistributedForwardingCgn that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_cgn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutDistributedForwardingCgn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_distributed_forwarding_cgn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_cgn thunder_scaleout_distributed_forwarding_cgn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutDistributedForwardingCgnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ScaleoutDistributedForwardingCgnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_distributed_forwarding_cgn',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cgnValue = config.cgnValue;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cgn_value - computed: false, optional: true, required: false
  private _cgnValue?: string; 
  public get cgnValue() {
    return this.getStringAttribute('cgn_value');
  }
  public set cgnValue(value: string) {
    this._cgnValue = value;
  }
  public resetCgnValue() {
    this._cgnValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnValueInput() {
    return this._cgnValue;
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
      cgn_value: cdktf.stringToTerraform(this._cgnValue),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cgn_value: {
        value: cdktf.stringToHclTerraform(this._cgnValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
