// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdCommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command#command_content EcdCommand#command_content}
  */
  readonly commandContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command#command_type EcdCommand#command_type}
  */
  readonly commandType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command#content_encoding EcdCommand#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command#desktop_id EcdCommand#desktop_id}
  */
  readonly desktopId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command#id EcdCommand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command#timeout EcdCommand#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command alicloud_ecd_command}
*/
export class EcdCommand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdCommand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdCommand to import
  * @param importFromId The id of the existing EcdCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_command alicloud_ecd_command} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdCommandConfig
  */
  public constructor(scope: Construct, id: string, config: EcdCommandConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_command',
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
    this._commandContent = config.commandContent;
    this._commandType = config.commandType;
    this._contentEncoding = config.contentEncoding;
    this._desktopId = config.desktopId;
    this._id = config.id;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_content - computed: false, optional: false, required: true
  private _commandContent?: string; 
  public get commandContent() {
    return this.getStringAttribute('command_content');
  }
  public set commandContent(value: string) {
    this._commandContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandContentInput() {
    return this._commandContent;
  }

  // command_type - computed: false, optional: false, required: true
  private _commandType?: string; 
  public get commandType() {
    return this.getStringAttribute('command_type');
  }
  public set commandType(value: string) {
    this._commandType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandTypeInput() {
    return this._commandType;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // desktop_id - computed: false, optional: false, required: true
  private _desktopId?: string; 
  public get desktopId() {
    return this.getStringAttribute('desktop_id');
  }
  public set desktopId(value: string) {
    this._desktopId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopIdInput() {
    return this._desktopId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_content: cdktf.stringToTerraform(this._commandContent),
      command_type: cdktf.stringToTerraform(this._commandType),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      desktop_id: cdktf.stringToTerraform(this._desktopId),
      id: cdktf.stringToTerraform(this._id),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_content: {
        value: cdktf.stringToHclTerraform(this._commandContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_type: {
        value: cdktf.stringToHclTerraform(this._commandType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktf.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desktop_id: {
        value: cdktf.stringToHclTerraform(this._desktopId),
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
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
