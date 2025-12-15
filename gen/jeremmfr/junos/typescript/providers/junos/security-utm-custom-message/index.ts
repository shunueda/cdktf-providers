// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUtmCustomMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content of custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message#content SecurityUtmCustomMessage#content}
  */
  readonly content?: string;
  /**
  * Name of custom page file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message#custom_page_file SecurityUtmCustomMessage#custom_page_file}
  */
  readonly customPageFile?: string;
  /**
  * The name of security utm custom-object custom-message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message#name SecurityUtmCustomMessage#name}
  */
  readonly name: string;
  /**
  * Type of custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message#type SecurityUtmCustomMessage#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message junos_security_utm_custom_message}
*/
export class SecurityUtmCustomMessage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_utm_custom_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUtmCustomMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUtmCustomMessage to import
  * @param importFromId The id of the existing SecurityUtmCustomMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUtmCustomMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_utm_custom_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_message junos_security_utm_custom_message} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUtmCustomMessageConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUtmCustomMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_utm_custom_message',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._customPageFile = config.customPageFile;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // custom_page_file - computed: false, optional: true, required: false
  private _customPageFile?: string; 
  public get customPageFile() {
    return this.getStringAttribute('custom_page_file');
  }
  public set customPageFile(value: string) {
    this._customPageFile = value;
  }
  public resetCustomPageFile() {
    this._customPageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageFileInput() {
    return this._customPageFile;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      custom_page_file: cdktf.stringToTerraform(this._customPageFile),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_page_file: {
        value: cdktf.stringToHclTerraform(this._customPageFile),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
