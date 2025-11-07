// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosBasicDefenseThresholdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#bps DdosBasicDefenseThreshold#bps}
  */
  readonly bps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#ddos_type DdosBasicDefenseThreshold#ddos_type}
  */
  readonly ddosType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#id DdosBasicDefenseThreshold#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#instance_id DdosBasicDefenseThreshold#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#instance_type DdosBasicDefenseThreshold#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#internet_ip DdosBasicDefenseThreshold#internet_ip}
  */
  readonly internetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#is_auto DdosBasicDefenseThreshold#is_auto}
  */
  readonly isAuto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#pps DdosBasicDefenseThreshold#pps}
  */
  readonly pps?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold alicloud_ddos_basic_defense_threshold}
*/
export class DdosBasicDefenseThreshold extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ddos_basic_defense_threshold";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosBasicDefenseThreshold resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosBasicDefenseThreshold to import
  * @param importFromId The id of the existing DdosBasicDefenseThreshold that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosBasicDefenseThreshold to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ddos_basic_defense_threshold", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ddos_basic_defense_threshold alicloud_ddos_basic_defense_threshold} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosBasicDefenseThresholdConfig
  */
  public constructor(scope: Construct, id: string, config: DdosBasicDefenseThresholdConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ddos_basic_defense_threshold',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bps = config.bps;
    this._ddosType = config.ddosType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceType = config.instanceType;
    this._internetIp = config.internetIp;
    this._isAuto = config.isAuto;
    this._pps = config.pps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bps - computed: true, optional: true, required: false
  private _bps?: number; 
  public get bps() {
    return this.getNumberAttribute('bps');
  }
  public set bps(value: number) {
    this._bps = value;
  }
  public resetBps() {
    this._bps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpsInput() {
    return this._bps;
  }

  // ddos_type - computed: false, optional: false, required: true
  private _ddosType?: string; 
  public get ddosType() {
    return this.getStringAttribute('ddos_type');
  }
  public set ddosType(value: string) {
    this._ddosType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosTypeInput() {
    return this._ddosType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_ip - computed: true, optional: true, required: false
  private _internetIp?: string; 
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }
  public set internetIp(value: string) {
    this._internetIp = value;
  }
  public resetInternetIp() {
    this._internetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetIpInput() {
    return this._internetIp;
  }

  // is_auto - computed: true, optional: true, required: false
  private _isAuto?: boolean | cdktf.IResolvable; 
  public get isAuto() {
    return this.getBooleanAttribute('is_auto');
  }
  public set isAuto(value: boolean | cdktf.IResolvable) {
    this._isAuto = value;
  }
  public resetIsAuto() {
    this._isAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoInput() {
    return this._isAuto;
  }

  // max_bps - computed: true, optional: false, required: false
  public get maxBps() {
    return this.getNumberAttribute('max_bps');
  }

  // max_pps - computed: true, optional: false, required: false
  public get maxPps() {
    return this.getNumberAttribute('max_pps');
  }

  // pps - computed: true, optional: true, required: false
  private _pps?: number; 
  public get pps() {
    return this.getNumberAttribute('pps');
  }
  public set pps(value: number) {
    this._pps = value;
  }
  public resetPps() {
    this._pps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppsInput() {
    return this._pps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bps: cdktf.numberToTerraform(this._bps),
      ddos_type: cdktf.stringToTerraform(this._ddosType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_ip: cdktf.stringToTerraform(this._internetIp),
      is_auto: cdktf.booleanToTerraform(this._isAuto),
      pps: cdktf.numberToTerraform(this._pps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bps: {
        value: cdktf.numberToHclTerraform(this._bps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_type: {
        value: cdktf.stringToHclTerraform(this._ddosType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_ip: {
        value: cdktf.stringToHclTerraform(this._internetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto: {
        value: cdktf.booleanToHclTerraform(this._isAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pps: {
        value: cdktf.numberToHclTerraform(this._pps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
