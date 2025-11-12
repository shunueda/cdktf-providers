// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsConsumerChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel#consumer_group_name DtsConsumerChannel#consumer_group_name}
  */
  readonly consumerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel#consumer_group_password DtsConsumerChannel#consumer_group_password}
  */
  readonly consumerGroupPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel#consumer_group_user_name DtsConsumerChannel#consumer_group_user_name}
  */
  readonly consumerGroupUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel#dts_instance_id DtsConsumerChannel#dts_instance_id}
  */
  readonly dtsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel#id DtsConsumerChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel alicloud_dts_consumer_channel}
*/
export class DtsConsumerChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dts_consumer_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsConsumerChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsConsumerChannel to import
  * @param importFromId The id of the existing DtsConsumerChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsConsumerChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dts_consumer_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dts_consumer_channel alicloud_dts_consumer_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsConsumerChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DtsConsumerChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dts_consumer_channel',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerGroupName = config.consumerGroupName;
    this._consumerGroupPassword = config.consumerGroupPassword;
    this._consumerGroupUserName = config.consumerGroupUserName;
    this._dtsInstanceId = config.dtsInstanceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_group_id - computed: true, optional: false, required: false
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }

  // consumer_group_name - computed: false, optional: false, required: true
  private _consumerGroupName?: string; 
  public get consumerGroupName() {
    return this.getStringAttribute('consumer_group_name');
  }
  public set consumerGroupName(value: string) {
    this._consumerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupNameInput() {
    return this._consumerGroupName;
  }

  // consumer_group_password - computed: false, optional: false, required: true
  private _consumerGroupPassword?: string; 
  public get consumerGroupPassword() {
    return this.getStringAttribute('consumer_group_password');
  }
  public set consumerGroupPassword(value: string) {
    this._consumerGroupPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupPasswordInput() {
    return this._consumerGroupPassword;
  }

  // consumer_group_user_name - computed: false, optional: false, required: true
  private _consumerGroupUserName?: string; 
  public get consumerGroupUserName() {
    return this.getStringAttribute('consumer_group_user_name');
  }
  public set consumerGroupUserName(value: string) {
    this._consumerGroupUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupUserNameInput() {
    return this._consumerGroupUserName;
  }

  // dts_instance_id - computed: false, optional: false, required: true
  private _dtsInstanceId?: string; 
  public get dtsInstanceId() {
    return this.getStringAttribute('dts_instance_id');
  }
  public set dtsInstanceId(value: string) {
    this._dtsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsInstanceIdInput() {
    return this._dtsInstanceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_group_name: cdktf.stringToTerraform(this._consumerGroupName),
      consumer_group_password: cdktf.stringToTerraform(this._consumerGroupPassword),
      consumer_group_user_name: cdktf.stringToTerraform(this._consumerGroupUserName),
      dts_instance_id: cdktf.stringToTerraform(this._dtsInstanceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_group_name: {
        value: cdktf.stringToHclTerraform(this._consumerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_group_password: {
        value: cdktf.stringToHclTerraform(this._consumerGroupPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_group_user_name: {
        value: cdktf.stringToHclTerraform(this._consumerGroupUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dts_instance_id: {
        value: cdktf.stringToHclTerraform(this._dtsInstanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
