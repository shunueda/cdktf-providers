// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LindormLtsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#cpu_brand LindormLtsInstance#cpu_brand}
  */
  readonly cpuBrand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#deletion_protection LindormLtsInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#id LindormLtsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#instance_alias LindormLtsInstance#instance_alias}
  */
  readonly instanceAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#instance_type LindormLtsInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#lts_num LindormLtsInstance#lts_num}
  */
  readonly ltsNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#zone_id LindormLtsInstance#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance alibabacloudstack_lindorm_lts_instance}
*/
export class LindormLtsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_lindorm_lts_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LindormLtsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LindormLtsInstance to import
  * @param importFromId The id of the existing LindormLtsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LindormLtsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_lindorm_lts_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/lindorm_lts_instance alibabacloudstack_lindorm_lts_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LindormLtsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: LindormLtsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_lindorm_lts_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuBrand = config.cpuBrand;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._instanceAlias = config.instanceAlias;
    this._instanceType = config.instanceType;
    this._ltsNum = config.ltsNum;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_brand - computed: false, optional: false, required: true
  private _cpuBrand?: string; 
  public get cpuBrand() {
    return this.getStringAttribute('cpu_brand');
  }
  public set cpuBrand(value: string) {
    this._cpuBrand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBrandInput() {
    return this._cpuBrand;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // instance_alias - computed: false, optional: false, required: true
  private _instanceAlias?: string; 
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }
  public set instanceAlias(value: string) {
    this._instanceAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasInput() {
    return this._instanceAlias;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
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

  // lts_num - computed: false, optional: false, required: true
  private _ltsNum?: number; 
  public get ltsNum() {
    return this.getNumberAttribute('lts_num');
  }
  public set ltsNum(value: number) {
    this._ltsNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ltsNumInput() {
    return this._ltsNum;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_brand: cdktf.stringToTerraform(this._cpuBrand),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      instance_alias: cdktf.stringToTerraform(this._instanceAlias),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      lts_num: cdktf.numberToTerraform(this._ltsNum),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_brand: {
        value: cdktf.stringToHclTerraform(this._cpuBrand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_alias: {
        value: cdktf.stringToHclTerraform(this._instanceAlias),
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
      lts_num: {
        value: cdktf.numberToHclTerraform(this._ltsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
