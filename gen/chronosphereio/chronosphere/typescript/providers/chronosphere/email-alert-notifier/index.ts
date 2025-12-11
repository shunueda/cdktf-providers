// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailAlertNotifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#html EmailAlertNotifier#html}
  */
  readonly html?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#id EmailAlertNotifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#name EmailAlertNotifier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#send_resolved EmailAlertNotifier#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#slug EmailAlertNotifier#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#text EmailAlertNotifier#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#to EmailAlertNotifier#to}
  */
  readonly to: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier chronosphere_email_alert_notifier}
*/
export class EmailAlertNotifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_email_alert_notifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailAlertNotifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailAlertNotifier to import
  * @param importFromId The id of the existing EmailAlertNotifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailAlertNotifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_email_alert_notifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/email_alert_notifier chronosphere_email_alert_notifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailAlertNotifierConfig
  */
  public constructor(scope: Construct, id: string, config: EmailAlertNotifierConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_email_alert_notifier',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._html = config.html;
    this._id = config.id;
    this._name = config.name;
    this._sendResolved = config.sendResolved;
    this._slug = config.slug;
    this._text = config.text;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // html - computed: false, optional: true, required: false
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  public resetHtml() {
    this._html = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
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

  // send_resolved - computed: false, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
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
      html: cdktf.stringToTerraform(this._html),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      send_resolved: cdktf.booleanToTerraform(this._sendResolved),
      slug: cdktf.stringToTerraform(this._slug),
      text: cdktf.stringToTerraform(this._text),
      to: cdktf.stringToTerraform(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      html: {
        value: cdktf.stringToHclTerraform(this._html),
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
      send_resolved: {
        value: cdktf.booleanToHclTerraform(this._sendResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to: {
        value: cdktf.stringToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
