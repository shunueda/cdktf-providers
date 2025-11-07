// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuSsehascanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan#adom ObjectSystemNpuSsehascan#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan#gap ObjectSystemNpuSsehascan#gap}
  */
  readonly gap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan#id ObjectSystemNpuSsehascan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan#max_session_cnt ObjectSystemNpuSsehascan#max_session_cnt}
  */
  readonly maxSessionCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan#min_duration ObjectSystemNpuSsehascan#min_duration}
  */
  readonly minDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan#scopetype ObjectSystemNpuSsehascan#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan fortimanager_object_system_npu_ssehascan}
*/
export class ObjectSystemNpuSsehascan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_ssehascan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuSsehascan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuSsehascan to import
  * @param importFromId The id of the existing ObjectSystemNpuSsehascan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuSsehascan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_ssehascan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_ssehascan fortimanager_object_system_npu_ssehascan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuSsehascanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuSsehascanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_ssehascan',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._gap = config.gap;
    this._id = config.id;
    this._maxSessionCnt = config.maxSessionCnt;
    this._minDuration = config.minDuration;
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

  // gap - computed: false, optional: true, required: false
  private _gap?: number; 
  public get gap() {
    return this.getNumberAttribute('gap');
  }
  public set gap(value: number) {
    this._gap = value;
  }
  public resetGap() {
    this._gap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapInput() {
    return this._gap;
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

  // max_session_cnt - computed: true, optional: true, required: false
  private _maxSessionCnt?: number; 
  public get maxSessionCnt() {
    return this.getNumberAttribute('max_session_cnt');
  }
  public set maxSessionCnt(value: number) {
    this._maxSessionCnt = value;
  }
  public resetMaxSessionCnt() {
    this._maxSessionCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionCntInput() {
    return this._maxSessionCnt;
  }

  // min_duration - computed: true, optional: true, required: false
  private _minDuration?: number; 
  public get minDuration() {
    return this.getNumberAttribute('min_duration');
  }
  public set minDuration(value: number) {
    this._minDuration = value;
  }
  public resetMinDuration() {
    this._minDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDurationInput() {
    return this._minDuration;
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
      gap: cdktf.numberToTerraform(this._gap),
      id: cdktf.stringToTerraform(this._id),
      max_session_cnt: cdktf.numberToTerraform(this._maxSessionCnt),
      min_duration: cdktf.numberToTerraform(this._minDuration),
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
      gap: {
        value: cdktf.numberToHclTerraform(this._gap),
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
      max_session_cnt: {
        value: cdktf.numberToHclTerraform(this._maxSessionCnt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_duration: {
        value: cdktf.numberToHclTerraform(this._minDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
