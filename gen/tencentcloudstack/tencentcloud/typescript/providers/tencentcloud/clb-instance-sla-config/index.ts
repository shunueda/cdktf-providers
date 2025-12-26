// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_instance_sla_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbInstanceSlaConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_instance_sla_config#id ClbInstanceSlaConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the CLB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_instance_sla_config#load_balancer_id ClbInstanceSlaConfig#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * This parameter is required to create LCU-supported instances. Values:`SLA`: Super Large 4. When you have activated Super Large models, `SLA` refers to Super Large 4; `clb.c2.medium`: Standard; `clb.c3.small`: Advanced 1; `clb.c3.medium`: Advanced 2; `clb.c4.small`: Super Large 1; `clb.c4.medium`: Super Large 2; `clb.c4.large`: Super Large 3; `clb.c4.xlarge`: Super Large 4. For more details, see [Instance Specifications](https://intl.cloud.tencent.com/document/product/214/84689?from_cn_redirect=1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_instance_sla_config#sla_type ClbInstanceSlaConfig#sla_type}
  */
  readonly slaType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_instance_sla_config tencentcloud_clb_instance_sla_config}
*/
export class ClbInstanceSlaConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_instance_sla_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbInstanceSlaConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbInstanceSlaConfig to import
  * @param importFromId The id of the existing ClbInstanceSlaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_instance_sla_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbInstanceSlaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_instance_sla_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_instance_sla_config tencentcloud_clb_instance_sla_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbInstanceSlaConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ClbInstanceSlaConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_instance_sla_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._loadBalancerId = config.loadBalancerId;
    this._slaType = config.slaType;
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // sla_type - computed: false, optional: false, required: true
  private _slaType?: string; 
  public get slaType() {
    return this.getStringAttribute('sla_type');
  }
  public set slaType(value: string) {
    this._slaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTypeInput() {
    return this._slaType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      sla_type: cdktf.stringToTerraform(this._slaType),
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
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_type: {
        value: cdktf.stringToHclTerraform(this._slaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
