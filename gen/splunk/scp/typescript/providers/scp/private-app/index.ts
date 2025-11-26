// https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * When you install a private app, you must also specify the ACS-Legal-Ack: Y parameter to acknowledge your acceptance of any risks involved with the installation of unsupported apps on your system, as specified in the Splunk legal disclaimer for app installation, which is provided in the ACS OpenAPI 3.0 specification. To review the disclaimer, see Set up the ACS API: https://docs.splunk.com/Documentation/SplunkCloud/latest/Config/ACSusage#Set_up_the_ACS_API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app#acs_legal_ack PrivateApp#acs_legal_ack}
  */
  readonly acsLegalAck: string;
  /**
  * The path to the private app file. The file must be a valid tar.gz archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app#filename PrivateApp#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app#id PrivateApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the private app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app#name PrivateApp#name}
  */
  readonly name: string;
  /**
  * Whether the private app has been pre-vetted using AppInspect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app#pre_vetted PrivateApp#pre_vetted}
  */
  readonly preVetted: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app scp_private_app}
*/
export class PrivateApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scp_private_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateApp to import
  * @param importFromId The id of the existing PrivateApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scp_private_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/private_app scp_private_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateAppConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateAppConfig) {
    super(scope, id, {
      terraformResourceType: 'scp_private_app',
      terraformGeneratorMetadata: {
        providerName: 'scp',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acsLegalAck = config.acsLegalAck;
    this._filename = config.filename;
    this._id = config.id;
    this._name = config.name;
    this._preVetted = config.preVetted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_legal_ack - computed: false, optional: false, required: true
  private _acsLegalAck?: string; 
  public get acsLegalAck() {
    return this.getStringAttribute('acs_legal_ack');
  }
  public set acsLegalAck(value: string) {
    this._acsLegalAck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acsLegalAckInput() {
    return this._acsLegalAck;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pre_vetted - computed: false, optional: false, required: true
  private _preVetted?: boolean | cdktf.IResolvable; 
  public get preVetted() {
    return this.getBooleanAttribute('pre_vetted');
  }
  public set preVetted(value: boolean | cdktf.IResolvable) {
    this._preVetted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preVettedInput() {
    return this._preVetted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acs_legal_ack: cdktf.stringToTerraform(this._acsLegalAck),
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pre_vetted: cdktf.booleanToTerraform(this._preVetted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acs_legal_ack: {
        value: cdktf.stringToHclTerraform(this._acsLegalAck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_vetted: {
        value: cdktf.booleanToHclTerraform(this._preVetted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
