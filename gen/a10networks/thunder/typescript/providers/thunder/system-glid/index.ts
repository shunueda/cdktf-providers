// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGlidAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply limits to the whole system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid#glid_id SystemGlidA#glid_id}
  */
  readonly glidId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid#id SystemGlidA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply global limit ID to the whole system at per data cpu level (default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid#non_shared SystemGlidA#non_shared}
  */
  readonly nonShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid#uuid SystemGlidA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid thunder_system_glid}
*/
export class SystemGlidA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_glid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGlidA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGlidA to import
  * @param importFromId The id of the existing SystemGlidA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGlidA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_glid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_glid thunder_system_glid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGlidAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGlidAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_glid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._glidId = config.glidId;
    this._id = config.id;
    this._nonShared = config.nonShared;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // glid_id - computed: false, optional: true, required: false
  private _glidId?: string; 
  public get glidId() {
    return this.getStringAttribute('glid_id');
  }
  public set glidId(value: string) {
    this._glidId = value;
  }
  public resetGlidId() {
    this._glidId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidIdInput() {
    return this._glidId;
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

  // non_shared - computed: false, optional: true, required: false
  private _nonShared?: number; 
  public get nonShared() {
    return this.getNumberAttribute('non_shared');
  }
  public set nonShared(value: number) {
    this._nonShared = value;
  }
  public resetNonShared() {
    this._nonShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSharedInput() {
    return this._nonShared;
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
      glid_id: cdktf.stringToTerraform(this._glidId),
      id: cdktf.stringToTerraform(this._id),
      non_shared: cdktf.numberToTerraform(this._nonShared),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      glid_id: {
        value: cdktf.stringToHclTerraform(this._glidId),
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
      non_shared: {
        value: cdktf.numberToHclTerraform(this._nonShared),
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
