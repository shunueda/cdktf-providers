// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tat_invoker_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TatInvokerConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tat_invoker_config#id TatInvokerConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the invoker to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tat_invoker_config#invoker_id TatInvokerConfigA#invoker_id}
  */
  readonly invokerId: string;
  /**
  * Invoker on and off state, Values: `on`, `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tat_invoker_config#invoker_status TatInvokerConfigA#invoker_status}
  */
  readonly invokerStatus: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tat_invoker_config tencentcloud_tat_invoker_config}
*/
export class TatInvokerConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tat_invoker_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TatInvokerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TatInvokerConfigA to import
  * @param importFromId The id of the existing TatInvokerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tat_invoker_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TatInvokerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tat_invoker_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tat_invoker_config tencentcloud_tat_invoker_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TatInvokerConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: TatInvokerConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tat_invoker_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._invokerId = config.invokerId;
    this._invokerStatus = config.invokerStatus;
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

  // invoker_id - computed: false, optional: false, required: true
  private _invokerId?: string; 
  public get invokerId() {
    return this.getStringAttribute('invoker_id');
  }
  public set invokerId(value: string) {
    this._invokerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerIdInput() {
    return this._invokerId;
  }

  // invoker_status - computed: false, optional: false, required: true
  private _invokerStatus?: string; 
  public get invokerStatus() {
    return this.getStringAttribute('invoker_status');
  }
  public set invokerStatus(value: string) {
    this._invokerStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerStatusInput() {
    return this._invokerStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      invoker_id: cdktf.stringToTerraform(this._invokerId),
      invoker_status: cdktf.stringToTerraform(this._invokerStatus),
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
      invoker_id: {
        value: cdktf.stringToHclTerraform(this._invokerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoker_status: {
        value: cdktf.stringToHclTerraform(this._invokerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
