// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbTargetGroupInstanceAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Intranet IP of the target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment#bind_ip ClbTargetGroupInstanceAttachment#bind_ip}
  */
  readonly bindIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment#id ClbTargetGroupInstanceAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port of the target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment#port ClbTargetGroupInstanceAttachment#port}
  */
  readonly port: number;
  /**
  * Target group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment#target_group_id ClbTargetGroupInstanceAttachment#target_group_id}
  */
  readonly targetGroupId: string;
  /**
  * The weight of the target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment#weight ClbTargetGroupInstanceAttachment#weight}
  */
  readonly weight: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment tencentcloud_clb_target_group_instance_attachment}
*/
export class ClbTargetGroupInstanceAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_target_group_instance_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbTargetGroupInstanceAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbTargetGroupInstanceAttachment to import
  * @param importFromId The id of the existing ClbTargetGroupInstanceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbTargetGroupInstanceAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_target_group_instance_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group_instance_attachment tencentcloud_clb_target_group_instance_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbTargetGroupInstanceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ClbTargetGroupInstanceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_target_group_instance_attachment',
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
    this._bindIp = config.bindIp;
    this._id = config.id;
    this._port = config.port;
    this._targetGroupId = config.targetGroupId;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_ip - computed: false, optional: false, required: true
  private _bindIp?: string; 
  public get bindIp() {
    return this.getStringAttribute('bind_ip');
  }
  public set bindIp(value: string) {
    this._bindIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindIpInput() {
    return this._bindIp;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_group_id - computed: false, optional: false, required: true
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bind_ip: cdktf.stringToTerraform(this._bindIp),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      target_group_id: cdktf.stringToTerraform(this._targetGroupId),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_ip: {
        value: cdktf.stringToHclTerraform(this._bindIp),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_group_id: {
        value: cdktf.stringToHclTerraform(this._targetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
