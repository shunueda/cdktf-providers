// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnPortOverloadingGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow different users to overload the same port (default: disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global#allow_different_user Cgnv6LsnPortOverloadingGlobal#allow_different_user}
  */
  readonly allowDifferentUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global#id Cgnv6LsnPortOverloadingGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'destination-address': Allow overloading when the destination addresses is unique; 'destination-address-and-port': Allow overloading when the destination address and port 2-tuple is unique (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global#unique Cgnv6LsnPortOverloadingGlobal#unique}
  */
  readonly unique?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global#uuid Cgnv6LsnPortOverloadingGlobal#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global thunder_cgnv6_lsn_port_overloading_global}
*/
export class Cgnv6LsnPortOverloadingGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_port_overloading_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnPortOverloadingGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnPortOverloadingGlobal to import
  * @param importFromId The id of the existing Cgnv6LsnPortOverloadingGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnPortOverloadingGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_port_overloading_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_port_overloading_global thunder_cgnv6_lsn_port_overloading_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnPortOverloadingGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnPortOverloadingGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_port_overloading_global',
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
    this._allowDifferentUser = config.allowDifferentUser;
    this._id = config.id;
    this._unique = config.unique;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_different_user - computed: false, optional: true, required: false
  private _allowDifferentUser?: number; 
  public get allowDifferentUser() {
    return this.getNumberAttribute('allow_different_user');
  }
  public set allowDifferentUser(value: number) {
    this._allowDifferentUser = value;
  }
  public resetAllowDifferentUser() {
    this._allowDifferentUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDifferentUserInput() {
    return this._allowDifferentUser;
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

  // unique - computed: false, optional: true, required: false
  private _unique?: string; 
  public get unique() {
    return this.getStringAttribute('unique');
  }
  public set unique(value: string) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
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
      allow_different_user: cdktf.numberToTerraform(this._allowDifferentUser),
      id: cdktf.stringToTerraform(this._id),
      unique: cdktf.stringToTerraform(this._unique),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_different_user: {
        value: cdktf.numberToHclTerraform(this._allowDifferentUser),
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
      unique: {
        value: cdktf.stringToHclTerraform(this._unique),
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
