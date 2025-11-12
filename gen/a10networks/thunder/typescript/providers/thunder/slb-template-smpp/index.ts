// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateSmppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Respond client ENQUIRE_LINK packet directly instead of forwarding to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#client_enquire_link SlbTemplateSmpp#client_enquire_link}
  */
  readonly clientEnquireLink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#id SlbTemplateSmpp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SMPP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#name SlbTemplateSmpp#name}
  */
  readonly name: string;
  /**
  * Configure the password used to bind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#password SlbTemplateSmpp#password}
  */
  readonly password?: string;
  /**
  * Send server ENQUIRE_LINK packet for every persist connection when enable conn-reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#server_enquire_link SlbTemplateSmpp#server_enquire_link}
  */
  readonly serverEnquireLink?: number;
  /**
  * Set interval of keep-alive packet for each persistent connection (second, default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#server_enquire_link_val SlbTemplateSmpp#server_enquire_link_val}
  */
  readonly serverEnquireLinkVal?: number;
  /**
  * Force server selection on every SMPP request when enable conn-reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#server_selection_per_request SlbTemplateSmpp#server_selection_per_request}
  */
  readonly serverSelectionPerRequest?: number;
  /**
  * Configure the user to bind (The name used to bind)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#user SlbTemplateSmpp#user}
  */
  readonly user?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#user_tag SlbTemplateSmpp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#uuid SlbTemplateSmpp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp thunder_slb_template_smpp}
*/
export class SlbTemplateSmpp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_smpp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateSmpp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateSmpp to import
  * @param importFromId The id of the existing SlbTemplateSmpp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateSmpp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_smpp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smpp thunder_slb_template_smpp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateSmppConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateSmppConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_smpp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientEnquireLink = config.clientEnquireLink;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._serverEnquireLink = config.serverEnquireLink;
    this._serverEnquireLinkVal = config.serverEnquireLinkVal;
    this._serverSelectionPerRequest = config.serverSelectionPerRequest;
    this._user = config.user;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_enquire_link - computed: false, optional: true, required: false
  private _clientEnquireLink?: number; 
  public get clientEnquireLink() {
    return this.getNumberAttribute('client_enquire_link');
  }
  public set clientEnquireLink(value: number) {
    this._clientEnquireLink = value;
  }
  public resetClientEnquireLink() {
    this._clientEnquireLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEnquireLinkInput() {
    return this._clientEnquireLink;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server_enquire_link - computed: false, optional: true, required: false
  private _serverEnquireLink?: number; 
  public get serverEnquireLink() {
    return this.getNumberAttribute('server_enquire_link');
  }
  public set serverEnquireLink(value: number) {
    this._serverEnquireLink = value;
  }
  public resetServerEnquireLink() {
    this._serverEnquireLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEnquireLinkInput() {
    return this._serverEnquireLink;
  }

  // server_enquire_link_val - computed: false, optional: true, required: false
  private _serverEnquireLinkVal?: number; 
  public get serverEnquireLinkVal() {
    return this.getNumberAttribute('server_enquire_link_val');
  }
  public set serverEnquireLinkVal(value: number) {
    this._serverEnquireLinkVal = value;
  }
  public resetServerEnquireLinkVal() {
    this._serverEnquireLinkVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEnquireLinkValInput() {
    return this._serverEnquireLinkVal;
  }

  // server_selection_per_request - computed: false, optional: true, required: false
  private _serverSelectionPerRequest?: number; 
  public get serverSelectionPerRequest() {
    return this.getNumberAttribute('server_selection_per_request');
  }
  public set serverSelectionPerRequest(value: number) {
    this._serverSelectionPerRequest = value;
  }
  public resetServerSelectionPerRequest() {
    this._serverSelectionPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionPerRequestInput() {
    return this._serverSelectionPerRequest;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_enquire_link: cdktf.numberToTerraform(this._clientEnquireLink),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      server_enquire_link: cdktf.numberToTerraform(this._serverEnquireLink),
      server_enquire_link_val: cdktf.numberToTerraform(this._serverEnquireLinkVal),
      server_selection_per_request: cdktf.numberToTerraform(this._serverSelectionPerRequest),
      user: cdktf.stringToTerraform(this._user),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_enquire_link: {
        value: cdktf.numberToHclTerraform(this._clientEnquireLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_enquire_link: {
        value: cdktf.numberToHclTerraform(this._serverEnquireLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_enquire_link_val: {
        value: cdktf.numberToHclTerraform(this._serverEnquireLinkVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_selection_per_request: {
        value: cdktf.numberToHclTerraform(this._serverSelectionPerRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
