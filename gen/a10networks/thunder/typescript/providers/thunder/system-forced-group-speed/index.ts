// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemForcedGroupSpeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set speed for interface ethernet  1 ~  4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#eth01_to_04 SystemForcedGroupSpeed#eth01_to_04}
  */
  readonly eth01To04: number;
  /**
  * Set speed for interface ethernet  5 ~  8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#eth05_to_08 SystemForcedGroupSpeed#eth05_to_08}
  */
  readonly eth05To08: number;
  /**
  * Set speed for interface ethernet  9 ~ 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#eth09_to_12 SystemForcedGroupSpeed#eth09_to_12}
  */
  readonly eth09To12: number;
  /**
  * Set speed for interface ethernet 13 ~ 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#eth13_to_16 SystemForcedGroupSpeed#eth13_to_16}
  */
  readonly eth13To16: number;
  /**
  * Set speed for interface ethernet 17 ~ 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#eth17_to_20 SystemForcedGroupSpeed#eth17_to_20}
  */
  readonly eth17To20: number;
  /**
  * Set speed for interface ethernet 21 ~ 24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#eth21_to_24 SystemForcedGroupSpeed#eth21_to_24}
  */
  readonly eth21To24: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#id SystemForcedGroupSpeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '1G': Speed 1G; '10G': Speed 10G (default); '25G': Speed 25G;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#speed SystemForcedGroupSpeed#speed}
  */
  readonly speed?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#uuid SystemForcedGroupSpeed#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed thunder_system_forced_group_speed}
*/
export class SystemForcedGroupSpeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_forced_group_speed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemForcedGroupSpeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemForcedGroupSpeed to import
  * @param importFromId The id of the existing SystemForcedGroupSpeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemForcedGroupSpeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_forced_group_speed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_forced_group_speed thunder_system_forced_group_speed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemForcedGroupSpeedConfig
  */
  public constructor(scope: Construct, id: string, config: SystemForcedGroupSpeedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_forced_group_speed',
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
    this._eth01To04 = config.eth01To04;
    this._eth05To08 = config.eth05To08;
    this._eth09To12 = config.eth09To12;
    this._eth13To16 = config.eth13To16;
    this._eth17To20 = config.eth17To20;
    this._eth21To24 = config.eth21To24;
    this._id = config.id;
    this._speed = config.speed;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eth01_to_04 - computed: false, optional: false, required: true
  private _eth01To04?: number; 
  public get eth01To04() {
    return this.getNumberAttribute('eth01_to_04');
  }
  public set eth01To04(value: number) {
    this._eth01To04 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth01To04Input() {
    return this._eth01To04;
  }

  // eth05_to_08 - computed: false, optional: false, required: true
  private _eth05To08?: number; 
  public get eth05To08() {
    return this.getNumberAttribute('eth05_to_08');
  }
  public set eth05To08(value: number) {
    this._eth05To08 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth05To08Input() {
    return this._eth05To08;
  }

  // eth09_to_12 - computed: false, optional: false, required: true
  private _eth09To12?: number; 
  public get eth09To12() {
    return this.getNumberAttribute('eth09_to_12');
  }
  public set eth09To12(value: number) {
    this._eth09To12 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth09To12Input() {
    return this._eth09To12;
  }

  // eth13_to_16 - computed: false, optional: false, required: true
  private _eth13To16?: number; 
  public get eth13To16() {
    return this.getNumberAttribute('eth13_to_16');
  }
  public set eth13To16(value: number) {
    this._eth13To16 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth13To16Input() {
    return this._eth13To16;
  }

  // eth17_to_20 - computed: false, optional: false, required: true
  private _eth17To20?: number; 
  public get eth17To20() {
    return this.getNumberAttribute('eth17_to_20');
  }
  public set eth17To20(value: number) {
    this._eth17To20 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth17To20Input() {
    return this._eth17To20;
  }

  // eth21_to_24 - computed: false, optional: false, required: true
  private _eth21To24?: number; 
  public get eth21To24() {
    return this.getNumberAttribute('eth21_to_24');
  }
  public set eth21To24(value: number) {
    this._eth21To24 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth21To24Input() {
    return this._eth21To24;
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

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
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
      eth01_to_04: cdktf.numberToTerraform(this._eth01To04),
      eth05_to_08: cdktf.numberToTerraform(this._eth05To08),
      eth09_to_12: cdktf.numberToTerraform(this._eth09To12),
      eth13_to_16: cdktf.numberToTerraform(this._eth13To16),
      eth17_to_20: cdktf.numberToTerraform(this._eth17To20),
      eth21_to_24: cdktf.numberToTerraform(this._eth21To24),
      id: cdktf.stringToTerraform(this._id),
      speed: cdktf.stringToTerraform(this._speed),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eth01_to_04: {
        value: cdktf.numberToHclTerraform(this._eth01To04),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth05_to_08: {
        value: cdktf.numberToHclTerraform(this._eth05To08),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth09_to_12: {
        value: cdktf.numberToHclTerraform(this._eth09To12),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth13_to_16: {
        value: cdktf.numberToHclTerraform(this._eth13To16),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth17_to_20: {
        value: cdktf.numberToHclTerraform(this._eth17To20),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth21_to_24: {
        value: cdktf.numberToHclTerraform(this._eth21To24),
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
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
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
