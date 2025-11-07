// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessCommandsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#callback_method WirelessCommandsV1#callback_method}
  */
  readonly callbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#callback_url WirelessCommandsV1#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#command WirelessCommandsV1#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#command_mode WirelessCommandsV1#command_mode}
  */
  readonly commandMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#delivery_receipt_requested WirelessCommandsV1#delivery_receipt_requested}
  */
  readonly deliveryReceiptRequested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#id WirelessCommandsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#include_sid WirelessCommandsV1#include_sid}
  */
  readonly includeSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#sim WirelessCommandsV1#sim}
  */
  readonly sim?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1 twilio_wireless_commands_v1}
*/
export class WirelessCommandsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_wireless_commands_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessCommandsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessCommandsV1 to import
  * @param importFromId The id of the existing WirelessCommandsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessCommandsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_wireless_commands_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/wireless_commands_v1 twilio_wireless_commands_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessCommandsV1Config
  */
  public constructor(scope: Construct, id: string, config: WirelessCommandsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_wireless_commands_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callbackMethod = config.callbackMethod;
    this._callbackUrl = config.callbackUrl;
    this._command = config.command;
    this._commandMode = config.commandMode;
    this._deliveryReceiptRequested = config.deliveryReceiptRequested;
    this._id = config.id;
    this._includeSid = config.includeSid;
    this._sim = config.sim;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_method - computed: true, optional: true, required: false
  private _callbackMethod?: string; 
  public get callbackMethod() {
    return this.getStringAttribute('callback_method');
  }
  public set callbackMethod(value: string) {
    this._callbackMethod = value;
  }
  public resetCallbackMethod() {
    this._callbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackMethodInput() {
    return this._callbackMethod;
  }

  // callback_url - computed: true, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_mode - computed: true, optional: true, required: false
  private _commandMode?: string; 
  public get commandMode() {
    return this.getStringAttribute('command_mode');
  }
  public set commandMode(value: string) {
    this._commandMode = value;
  }
  public resetCommandMode() {
    this._commandMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandModeInput() {
    return this._commandMode;
  }

  // delivery_receipt_requested - computed: true, optional: true, required: false
  private _deliveryReceiptRequested?: boolean | cdktf.IResolvable; 
  public get deliveryReceiptRequested() {
    return this.getBooleanAttribute('delivery_receipt_requested');
  }
  public set deliveryReceiptRequested(value: boolean | cdktf.IResolvable) {
    this._deliveryReceiptRequested = value;
  }
  public resetDeliveryReceiptRequested() {
    this._deliveryReceiptRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryReceiptRequestedInput() {
    return this._deliveryReceiptRequested;
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

  // include_sid - computed: true, optional: true, required: false
  private _includeSid?: string; 
  public get includeSid() {
    return this.getStringAttribute('include_sid');
  }
  public set includeSid(value: string) {
    this._includeSid = value;
  }
  public resetIncludeSid() {
    this._includeSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSidInput() {
    return this._includeSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sim - computed: true, optional: true, required: false
  private _sim?: string; 
  public get sim() {
    return this.getStringAttribute('sim');
  }
  public set sim(value: string) {
    this._sim = value;
  }
  public resetSim() {
    this._sim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simInput() {
    return this._sim;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callback_method: cdktf.stringToTerraform(this._callbackMethod),
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      command: cdktf.stringToTerraform(this._command),
      command_mode: cdktf.stringToTerraform(this._commandMode),
      delivery_receipt_requested: cdktf.booleanToTerraform(this._deliveryReceiptRequested),
      id: cdktf.stringToTerraform(this._id),
      include_sid: cdktf.stringToTerraform(this._includeSid),
      sim: cdktf.stringToTerraform(this._sim),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback_method: {
        value: cdktf.stringToHclTerraform(this._callbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callback_url: {
        value: cdktf.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_mode: {
        value: cdktf.stringToHclTerraform(this._commandMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_receipt_requested: {
        value: cdktf.booleanToHclTerraform(this._deliveryReceiptRequested),
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
      include_sid: {
        value: cdktf.stringToHclTerraform(this._includeSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim: {
        value: cdktf.stringToHclTerraform(this._sim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
