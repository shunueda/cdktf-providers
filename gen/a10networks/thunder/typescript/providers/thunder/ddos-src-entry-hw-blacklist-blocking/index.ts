// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSrcEntryHwBlacklistBlockingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking#id DdosSrcEntryHwBlacklistBlockingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Src side hardware blocking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking#src_enable DdosSrcEntryHwBlacklistBlockingA#src_enable}
  */
  readonly srcEnable?: number;
  /**
  * SrcEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking#src_entry_name DdosSrcEntryHwBlacklistBlockingA#src_entry_name}
  */
  readonly srcEntryName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking#uuid DdosSrcEntryHwBlacklistBlockingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking thunder_ddos_src_entry_hw_blacklist_blocking}
*/
export class DdosSrcEntryHwBlacklistBlockingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_entry_hw_blacklist_blocking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSrcEntryHwBlacklistBlockingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSrcEntryHwBlacklistBlockingA to import
  * @param importFromId The id of the existing DdosSrcEntryHwBlacklistBlockingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSrcEntryHwBlacklistBlockingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_entry_hw_blacklist_blocking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_src_entry_hw_blacklist_blocking thunder_ddos_src_entry_hw_blacklist_blocking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSrcEntryHwBlacklistBlockingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSrcEntryHwBlacklistBlockingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_entry_hw_blacklist_blocking',
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
    this._srcEnable = config.srcEnable;
    this._srcEntryName = config.srcEntryName;
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

  // src_enable - computed: false, optional: true, required: false
  private _srcEnable?: number; 
  public get srcEnable() {
    return this.getNumberAttribute('src_enable');
  }
  public set srcEnable(value: number) {
    this._srcEnable = value;
  }
  public resetSrcEnable() {
    this._srcEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEnableInput() {
    return this._srcEnable;
  }

  // src_entry_name - computed: false, optional: false, required: true
  private _srcEntryName?: string; 
  public get srcEntryName() {
    return this.getStringAttribute('src_entry_name');
  }
  public set srcEntryName(value: string) {
    this._srcEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryNameInput() {
    return this._srcEntryName;
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
      src_enable: cdktf.numberToTerraform(this._srcEnable),
      src_entry_name: cdktf.stringToTerraform(this._srcEntryName),
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
      src_enable: {
        value: cdktf.numberToHclTerraform(this._srcEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_entry_name: {
        value: cdktf.stringToHclTerraform(this._srcEntryName),
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
