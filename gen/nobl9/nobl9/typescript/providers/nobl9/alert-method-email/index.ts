// https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertMethodEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blind carbon copy recipients. The maximum number of recipients is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#bcc AlertMethodEmail#bcc}
  */
  readonly bcc?: string[];
  /**
  * Carbon copy recipients. The maximum number of recipients is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#cc AlertMethodEmail#cc}
  */
  readonly cc?: string[];
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#description AlertMethodEmail#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#display_name AlertMethodEmail#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#id AlertMethodEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#name AlertMethodEmail#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#project AlertMethodEmail#project}
  */
  readonly project: string;
  /**
  * Send email as plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#send_as_plain_text AlertMethodEmail#send_as_plain_text}
  */
  readonly sendAsPlainText?: boolean | cdktf.IResolvable;
  /**
  * Recipients. The maximum number of recipients is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#to AlertMethodEmail#to}
  */
  readonly to: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email nobl9_alert_method_email}
*/
export class AlertMethodEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_alert_method_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertMethodEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertMethodEmail to import
  * @param importFromId The id of the existing AlertMethodEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertMethodEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_alert_method_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/alert_method_email nobl9_alert_method_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertMethodEmailConfig
  */
  public constructor(scope: Construct, id: string, config: AlertMethodEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_alert_method_email',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.44.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bcc = config.bcc;
    this._cc = config.cc;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._sendAsPlainText = config.sendAsPlainText;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bcc - computed: false, optional: true, required: false
  private _bcc?: string[]; 
  public get bcc() {
    return this.getListAttribute('bcc');
  }
  public set bcc(value: string[]) {
    this._bcc = value;
  }
  public resetBcc() {
    this._bcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccInput() {
    return this._bcc;
  }

  // cc - computed: false, optional: true, required: false
  private _cc?: string[]; 
  public get cc() {
    return this.getListAttribute('cc');
  }
  public set cc(value: string[]) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc;
  }

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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // send_as_plain_text - computed: false, optional: true, required: false
  private _sendAsPlainText?: boolean | cdktf.IResolvable; 
  public get sendAsPlainText() {
    return this.getBooleanAttribute('send_as_plain_text');
  }
  public set sendAsPlainText(value: boolean | cdktf.IResolvable) {
    this._sendAsPlainText = value;
  }
  public resetSendAsPlainText() {
    this._sendAsPlainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAsPlainTextInput() {
    return this._sendAsPlainText;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bcc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bcc),
      cc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cc),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      send_as_plain_text: cdktf.booleanToTerraform(this._sendAsPlainText),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bcc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bcc),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cc),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_as_plain_text: {
        value: cdktf.booleanToHclTerraform(this._sendAsPlainText),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
