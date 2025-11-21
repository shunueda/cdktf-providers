// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqRabbitmqVirtualHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * describe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host#description TdmqRabbitmqVirtualHost#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host#id TdmqRabbitmqVirtualHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host#instance_id TdmqRabbitmqVirtualHost#instance_id}
  */
  readonly instanceId: string;
  /**
  * Message track switch, true is on, false is off, default is off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host#trace_flag TdmqRabbitmqVirtualHost#trace_flag}
  */
  readonly traceFlag?: boolean | cdktf.IResolvable;
  /**
  * vhost name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host#virtual_host TdmqRabbitmqVirtualHost#virtual_host}
  */
  readonly virtualHost: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host tencentcloud_tdmq_rabbitmq_virtual_host}
*/
export class TdmqRabbitmqVirtualHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_rabbitmq_virtual_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqRabbitmqVirtualHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqRabbitmqVirtualHost to import
  * @param importFromId The id of the existing TdmqRabbitmqVirtualHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqRabbitmqVirtualHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_rabbitmq_virtual_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tdmq_rabbitmq_virtual_host tencentcloud_tdmq_rabbitmq_virtual_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqRabbitmqVirtualHostConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqRabbitmqVirtualHostConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_rabbitmq_virtual_host',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._traceFlag = config.traceFlag;
    this._virtualHost = config.virtualHost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // trace_flag - computed: true, optional: true, required: false
  private _traceFlag?: boolean | cdktf.IResolvable; 
  public get traceFlag() {
    return this.getBooleanAttribute('trace_flag');
  }
  public set traceFlag(value: boolean | cdktf.IResolvable) {
    this._traceFlag = value;
  }
  public resetTraceFlag() {
    this._traceFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceFlagInput() {
    return this._traceFlag;
  }

  // virtual_host - computed: false, optional: false, required: true
  private _virtualHost?: string; 
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
  public set virtualHost(value: string) {
    this._virtualHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      trace_flag: cdktf.booleanToTerraform(this._traceFlag),
      virtual_host: cdktf.stringToTerraform(this._virtualHost),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      trace_flag: {
        value: cdktf.booleanToHclTerraform(this._traceFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_host: {
        value: cdktf.stringToHclTerraform(this._virtualHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
