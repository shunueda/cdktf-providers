// https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set webhook to active, e.g. `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#active RepositoryWebhook#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Webhook authorization header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#authorization_header RepositoryWebhook#authorization_header}
  */
  readonly authorizationHeader?: string;
  /**
  * Set branch filter on the webhook, e.g. `"*"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#branch_filter RepositoryWebhook#branch_filter}
  */
  readonly branchFilter: string;
  /**
  * The content type of the payload. It can be `json`, or `form`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#content_type RepositoryWebhook#content_type}
  */
  readonly contentType: string;
  /**
  * A list of events that will trigger the webhool, e.g. `["push"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#events RepositoryWebhook#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#id RepositoryWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Repository name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#name RepositoryWebhook#name}
  */
  readonly name: string;
  /**
  * Webhook secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#secret RepositoryWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Webhook type, e.g. `gitea`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#type RepositoryWebhook#type}
  */
  readonly type: string;
  /**
  * Target URL of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#url RepositoryWebhook#url}
  */
  readonly url: string;
  /**
  * User name or organization name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#username RepositoryWebhook#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook gitea_repository_webhook}
*/
export class RepositoryWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitea_repository_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryWebhook to import
  * @param importFromId The id of the existing RepositoryWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitea_repository_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_webhook gitea_repository_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'gitea_repository_webhook',
      terraformGeneratorMetadata: {
        providerName: 'gitea',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._authorizationHeader = config.authorizationHeader;
    this._branchFilter = config.branchFilter;
    this._contentType = config.contentType;
    this._events = config.events;
    this._id = config.id;
    this._name = config.name;
    this._secret = config.secret;
    this._type = config.type;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // authorization_header - computed: false, optional: true, required: false
  private _authorizationHeader?: string; 
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }
  public set authorizationHeader(value: string) {
    this._authorizationHeader = value;
  }
  public resetAuthorizationHeader() {
    this._authorizationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationHeaderInput() {
    return this._authorizationHeader;
  }

  // branch_filter - computed: false, optional: false, required: true
  private _branchFilter?: string; 
  public get branchFilter() {
    return this.getStringAttribute('branch_filter');
  }
  public set branchFilter(value: string) {
    this._branchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      authorization_header: cdktf.stringToTerraform(this._authorizationHeader),
      branch_filter: cdktf.stringToTerraform(this._branchFilter),
      content_type: cdktf.stringToTerraform(this._contentType),
      events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.stringToTerraform(this._secret),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_header: {
        value: cdktf.stringToHclTerraform(this._authorizationHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch_filter: {
        value: cdktf.stringToHclTerraform(this._branchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
