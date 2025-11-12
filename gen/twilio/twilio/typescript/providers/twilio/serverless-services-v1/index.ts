// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessServicesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1#friendly_name ServerlessServicesV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1#id ServerlessServicesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1#include_credentials ServerlessServicesV1#include_credentials}
  */
  readonly includeCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1#ui_editable ServerlessServicesV1#ui_editable}
  */
  readonly uiEditable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1#unique_name ServerlessServicesV1#unique_name}
  */
  readonly uniqueName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1 twilio_serverless_services_v1}
*/
export class ServerlessServicesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_serverless_services_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessServicesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessServicesV1 to import
  * @param importFromId The id of the existing ServerlessServicesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessServicesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_serverless_services_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_v1 twilio_serverless_services_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessServicesV1Config
  */
  public constructor(scope: Construct, id: string, config: ServerlessServicesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_serverless_services_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._includeCredentials = config.includeCredentials;
    this._uiEditable = config.uiEditable;
    this._uniqueName = config.uniqueName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // include_credentials - computed: true, optional: true, required: false
  private _includeCredentials?: boolean | cdktf.IResolvable; 
  public get includeCredentials() {
    return this.getBooleanAttribute('include_credentials');
  }
  public set includeCredentials(value: boolean | cdktf.IResolvable) {
    this._includeCredentials = value;
  }
  public resetIncludeCredentials() {
    this._includeCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCredentialsInput() {
    return this._includeCredentials;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // ui_editable - computed: true, optional: true, required: false
  private _uiEditable?: boolean | cdktf.IResolvable; 
  public get uiEditable() {
    return this.getBooleanAttribute('ui_editable');
  }
  public set uiEditable(value: boolean | cdktf.IResolvable) {
    this._uiEditable = value;
  }
  public resetUiEditable() {
    this._uiEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiEditableInput() {
    return this._uiEditable;
  }

  // unique_name - computed: false, optional: false, required: true
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      include_credentials: cdktf.booleanToTerraform(this._includeCredentials),
      ui_editable: cdktf.booleanToTerraform(this._uiEditable),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      include_credentials: {
        value: cdktf.booleanToHclTerraform(this._includeCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ui_editable: {
        value: cdktf.booleanToHclTerraform(this._uiEditable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
