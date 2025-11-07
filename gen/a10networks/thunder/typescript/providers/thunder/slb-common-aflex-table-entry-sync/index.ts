// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonAflexTableEntrySyncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable aflex table sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync#aflex_table_entry_sync_enable SlbCommonAflexTableEntrySyncA#aflex_table_entry_sync_enable}
  */
  readonly aflexTableEntrySyncEnable?: number;
  /**
  * aflex table entry max key length to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync#aflex_table_entry_sync_max_key_len SlbCommonAflexTableEntrySyncA#aflex_table_entry_sync_max_key_len}
  */
  readonly aflexTableEntrySyncMaxKeyLen?: number;
  /**
  * aflex table entry max value length to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync#aflex_table_entry_sync_max_value_len SlbCommonAflexTableEntrySyncA#aflex_table_entry_sync_max_value_len}
  */
  readonly aflexTableEntrySyncMaxValueLen?: number;
  /**
  * aflex table entry minimum lifetime to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync#aflex_table_entry_sync_min_lifetime SlbCommonAflexTableEntrySyncA#aflex_table_entry_sync_min_lifetime}
  */
  readonly aflexTableEntrySyncMinLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync#id SlbCommonAflexTableEntrySyncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync#uuid SlbCommonAflexTableEntrySyncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync thunder_slb_common_aflex_table_entry_sync}
*/
export class SlbCommonAflexTableEntrySyncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_aflex_table_entry_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonAflexTableEntrySyncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonAflexTableEntrySyncA to import
  * @param importFromId The id of the existing SlbCommonAflexTableEntrySyncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonAflexTableEntrySyncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_aflex_table_entry_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_aflex_table_entry_sync thunder_slb_common_aflex_table_entry_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonAflexTableEntrySyncAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbCommonAflexTableEntrySyncAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_aflex_table_entry_sync',
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
    this._aflexTableEntrySyncEnable = config.aflexTableEntrySyncEnable;
    this._aflexTableEntrySyncMaxKeyLen = config.aflexTableEntrySyncMaxKeyLen;
    this._aflexTableEntrySyncMaxValueLen = config.aflexTableEntrySyncMaxValueLen;
    this._aflexTableEntrySyncMinLifetime = config.aflexTableEntrySyncMinLifetime;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aflex_table_entry_sync_enable - computed: false, optional: true, required: false
  private _aflexTableEntrySyncEnable?: number; 
  public get aflexTableEntrySyncEnable() {
    return this.getNumberAttribute('aflex_table_entry_sync_enable');
  }
  public set aflexTableEntrySyncEnable(value: number) {
    this._aflexTableEntrySyncEnable = value;
  }
  public resetAflexTableEntrySyncEnable() {
    this._aflexTableEntrySyncEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncEnableInput() {
    return this._aflexTableEntrySyncEnable;
  }

  // aflex_table_entry_sync_max_key_len - computed: false, optional: true, required: false
  private _aflexTableEntrySyncMaxKeyLen?: number; 
  public get aflexTableEntrySyncMaxKeyLen() {
    return this.getNumberAttribute('aflex_table_entry_sync_max_key_len');
  }
  public set aflexTableEntrySyncMaxKeyLen(value: number) {
    this._aflexTableEntrySyncMaxKeyLen = value;
  }
  public resetAflexTableEntrySyncMaxKeyLen() {
    this._aflexTableEntrySyncMaxKeyLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncMaxKeyLenInput() {
    return this._aflexTableEntrySyncMaxKeyLen;
  }

  // aflex_table_entry_sync_max_value_len - computed: false, optional: true, required: false
  private _aflexTableEntrySyncMaxValueLen?: number; 
  public get aflexTableEntrySyncMaxValueLen() {
    return this.getNumberAttribute('aflex_table_entry_sync_max_value_len');
  }
  public set aflexTableEntrySyncMaxValueLen(value: number) {
    this._aflexTableEntrySyncMaxValueLen = value;
  }
  public resetAflexTableEntrySyncMaxValueLen() {
    this._aflexTableEntrySyncMaxValueLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncMaxValueLenInput() {
    return this._aflexTableEntrySyncMaxValueLen;
  }

  // aflex_table_entry_sync_min_lifetime - computed: false, optional: true, required: false
  private _aflexTableEntrySyncMinLifetime?: number; 
  public get aflexTableEntrySyncMinLifetime() {
    return this.getNumberAttribute('aflex_table_entry_sync_min_lifetime');
  }
  public set aflexTableEntrySyncMinLifetime(value: number) {
    this._aflexTableEntrySyncMinLifetime = value;
  }
  public resetAflexTableEntrySyncMinLifetime() {
    this._aflexTableEntrySyncMinLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncMinLifetimeInput() {
    return this._aflexTableEntrySyncMinLifetime;
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
      aflex_table_entry_sync_enable: cdktf.numberToTerraform(this._aflexTableEntrySyncEnable),
      aflex_table_entry_sync_max_key_len: cdktf.numberToTerraform(this._aflexTableEntrySyncMaxKeyLen),
      aflex_table_entry_sync_max_value_len: cdktf.numberToTerraform(this._aflexTableEntrySyncMaxValueLen),
      aflex_table_entry_sync_min_lifetime: cdktf.numberToTerraform(this._aflexTableEntrySyncMinLifetime),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aflex_table_entry_sync_enable: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntrySyncEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aflex_table_entry_sync_max_key_len: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntrySyncMaxKeyLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aflex_table_entry_sync_max_value_len: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntrySyncMaxValueLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aflex_table_entry_sync_min_lifetime: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntrySyncMinLifetime),
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
