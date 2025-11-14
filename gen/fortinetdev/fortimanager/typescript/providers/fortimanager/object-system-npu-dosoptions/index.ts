// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuDosoptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions#adom ObjectSystemNpuDosoptions#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions#id ObjectSystemNpuDosoptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions#npu_dos_meter_mode ObjectSystemNpuDosoptions#npu_dos_meter_mode}
  */
  readonly npuDosMeterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions#npu_dos_synproxy_mode ObjectSystemNpuDosoptions#npu_dos_synproxy_mode}
  */
  readonly npuDosSynproxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions#npu_dos_tpe_mode ObjectSystemNpuDosoptions#npu_dos_tpe_mode}
  */
  readonly npuDosTpeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions#scopetype ObjectSystemNpuDosoptions#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions fortimanager_object_system_npu_dosoptions}
*/
export class ObjectSystemNpuDosoptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_dosoptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuDosoptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuDosoptions to import
  * @param importFromId The id of the existing ObjectSystemNpuDosoptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuDosoptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_dosoptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_dosoptions fortimanager_object_system_npu_dosoptions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuDosoptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuDosoptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_dosoptions',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._npuDosMeterMode = config.npuDosMeterMode;
    this._npuDosSynproxyMode = config.npuDosSynproxyMode;
    this._npuDosTpeMode = config.npuDosTpeMode;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // npu_dos_meter_mode - computed: true, optional: true, required: false
  private _npuDosMeterMode?: string; 
  public get npuDosMeterMode() {
    return this.getStringAttribute('npu_dos_meter_mode');
  }
  public set npuDosMeterMode(value: string) {
    this._npuDosMeterMode = value;
  }
  public resetNpuDosMeterMode() {
    this._npuDosMeterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuDosMeterModeInput() {
    return this._npuDosMeterMode;
  }

  // npu_dos_synproxy_mode - computed: true, optional: true, required: false
  private _npuDosSynproxyMode?: string; 
  public get npuDosSynproxyMode() {
    return this.getStringAttribute('npu_dos_synproxy_mode');
  }
  public set npuDosSynproxyMode(value: string) {
    this._npuDosSynproxyMode = value;
  }
  public resetNpuDosSynproxyMode() {
    this._npuDosSynproxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuDosSynproxyModeInput() {
    return this._npuDosSynproxyMode;
  }

  // npu_dos_tpe_mode - computed: true, optional: true, required: false
  private _npuDosTpeMode?: string; 
  public get npuDosTpeMode() {
    return this.getStringAttribute('npu_dos_tpe_mode');
  }
  public set npuDosTpeMode(value: string) {
    this._npuDosTpeMode = value;
  }
  public resetNpuDosTpeMode() {
    this._npuDosTpeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuDosTpeModeInput() {
    return this._npuDosTpeMode;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      npu_dos_meter_mode: cdktf.stringToTerraform(this._npuDosMeterMode),
      npu_dos_synproxy_mode: cdktf.stringToTerraform(this._npuDosSynproxyMode),
      npu_dos_tpe_mode: cdktf.stringToTerraform(this._npuDosTpeMode),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      npu_dos_meter_mode: {
        value: cdktf.stringToHclTerraform(this._npuDosMeterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npu_dos_synproxy_mode: {
        value: cdktf.stringToHclTerraform(this._npuDosSynproxyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npu_dos_tpe_mode: {
        value: cdktf.stringToHclTerraform(this._npuDosTpeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
