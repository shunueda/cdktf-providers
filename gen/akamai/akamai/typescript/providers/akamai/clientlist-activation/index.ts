// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClientlistActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A brief description for the activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#comments ClientlistActivation#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#id ClientlistActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The client list unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#list_id ClientlistActivation#list_id}
  */
  readonly listId: string;
  /**
  * The network environment where you activate your client list: either STAGING or PRODUCTION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#network ClientlistActivation#network}
  */
  readonly network: string;
  /**
  * Users to notify via email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#notification_recipients ClientlistActivation#notification_recipients}
  */
  readonly notificationRecipients?: string[];
  /**
  * Identifies the Siebel ticket, if the activation is linked to one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#siebel_ticket_id ClientlistActivation#siebel_ticket_id}
  */
  readonly siebelTicketId?: string;
  /**
  * The client list version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#version ClientlistActivation#version}
  */
  readonly version: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation akamai_clientlist_activation}
*/
export class ClientlistActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_clientlist_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClientlistActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClientlistActivation to import
  * @param importFromId The id of the existing ClientlistActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClientlistActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_clientlist_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/clientlist_activation akamai_clientlist_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClientlistActivationConfig
  */
  public constructor(scope: Construct, id: string, config: ClientlistActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_clientlist_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._id = config.id;
    this._listId = config.listId;
    this._network = config.network;
    this._notificationRecipients = config.notificationRecipients;
    this._siebelTicketId = config.siebelTicketId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // list_id - computed: false, optional: false, required: true
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // notification_recipients - computed: false, optional: true, required: false
  private _notificationRecipients?: string[]; 
  public get notificationRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_recipients'));
  }
  public set notificationRecipients(value: string[]) {
    this._notificationRecipients = value;
  }
  public resetNotificationRecipients() {
    this._notificationRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRecipientsInput() {
    return this._notificationRecipients;
  }

  // siebel_ticket_id - computed: false, optional: true, required: false
  private _siebelTicketId?: string; 
  public get siebelTicketId() {
    return this.getStringAttribute('siebel_ticket_id');
  }
  public set siebelTicketId(value: string) {
    this._siebelTicketId = value;
  }
  public resetSiebelTicketId() {
    this._siebelTicketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siebelTicketIdInput() {
    return this._siebelTicketId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      list_id: cdktf.stringToTerraform(this._listId),
      network: cdktf.stringToTerraform(this._network),
      notification_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationRecipients),
      siebel_ticket_id: cdktf.stringToTerraform(this._siebelTicketId),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationRecipients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      siebel_ticket_id: {
        value: cdktf.stringToHclTerraform(this._siebelTicketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
