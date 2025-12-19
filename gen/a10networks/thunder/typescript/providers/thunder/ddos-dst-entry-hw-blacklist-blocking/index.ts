// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntryHwBlacklistBlockingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Dst side hardware blocking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking#dst_enable DdosDstEntryHwBlacklistBlockingA#dst_enable}
  */
  readonly dstEnable?: number;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking#dst_entry_name DdosDstEntryHwBlacklistBlockingA#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking#id DdosDstEntryHwBlacklistBlockingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Src side hardware blocking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking#src_enable DdosDstEntryHwBlacklistBlockingA#src_enable}
  */
  readonly srcEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking#uuid DdosDstEntryHwBlacklistBlockingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking thunder_ddos_dst_entry_hw_blacklist_blocking}
*/
export class DdosDstEntryHwBlacklistBlockingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_hw_blacklist_blocking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntryHwBlacklistBlockingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntryHwBlacklistBlockingA to import
  * @param importFromId The id of the existing DdosDstEntryHwBlacklistBlockingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntryHwBlacklistBlockingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_hw_blacklist_blocking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_hw_blacklist_blocking thunder_ddos_dst_entry_hw_blacklist_blocking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntryHwBlacklistBlockingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntryHwBlacklistBlockingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_hw_blacklist_blocking',
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
    this._dstEnable = config.dstEnable;
    this._dstEntryName = config.dstEntryName;
    this._id = config.id;
    this._srcEnable = config.srcEnable;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_enable - computed: false, optional: true, required: false
  private _dstEnable?: number; 
  public get dstEnable() {
    return this.getNumberAttribute('dst_enable');
  }
  public set dstEnable(value: number) {
    this._dstEnable = value;
  }
  public resetDstEnable() {
    this._dstEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEnableInput() {
    return this._dstEnable;
  }

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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
      dst_enable: cdktf.numberToTerraform(this._dstEnable),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      id: cdktf.stringToTerraform(this._id),
      src_enable: cdktf.numberToTerraform(this._srcEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_enable: {
        value: cdktf.numberToHclTerraform(this._dstEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      src_enable: {
        value: cdktf.numberToHclTerraform(this._srcEnable),
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
