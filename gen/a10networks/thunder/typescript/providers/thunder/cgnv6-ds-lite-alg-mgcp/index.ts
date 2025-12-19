// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_alg_mgcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6DsLiteAlgMgcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_alg_mgcp#id Cgnv6DsLiteAlgMgcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable ALG;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_alg_mgcp#mgcp_enable Cgnv6DsLiteAlgMgcp#mgcp_enable}
  */
  readonly mgcpEnable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_alg_mgcp#uuid Cgnv6DsLiteAlgMgcp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_alg_mgcp thunder_cgnv6_ds_lite_alg_mgcp}
*/
export class Cgnv6DsLiteAlgMgcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ds_lite_alg_mgcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6DsLiteAlgMgcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6DsLiteAlgMgcp to import
  * @param importFromId The id of the existing Cgnv6DsLiteAlgMgcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_alg_mgcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6DsLiteAlgMgcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ds_lite_alg_mgcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_ds_lite_alg_mgcp thunder_cgnv6_ds_lite_alg_mgcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6DsLiteAlgMgcpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6DsLiteAlgMgcpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ds_lite_alg_mgcp',
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
    this._id = config.id;
    this._mgcpEnable = config.mgcpEnable;
    this._uuid = config.uuid;
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

  // mgcp_enable - computed: false, optional: true, required: false
  private _mgcpEnable?: string; 
  public get mgcpEnable() {
    return this.getStringAttribute('mgcp_enable');
  }
  public set mgcpEnable(value: string) {
    this._mgcpEnable = value;
  }
  public resetMgcpEnable() {
    this._mgcpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgcpEnableInput() {
    return this._mgcpEnable;
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
      id: cdktf.stringToTerraform(this._id),
      mgcp_enable: cdktf.stringToTerraform(this._mgcpEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      mgcp_enable: {
        value: cdktf.stringToHclTerraform(this._mgcpEnable),
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
