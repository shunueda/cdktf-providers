// https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#access_log ContentRules#access_log}
  */
  readonly accessLog?: string;
  /**
  * Rule App Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#app_id ContentRules#app_id}
  */
  readonly appId?: string;
  /**
  * Comments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#comments ContentRules#comments}
  */
  readonly comments?: string;
  /**
  * Extended Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#extended_match ContentRules#extended_match}
  */
  readonly extendedMatch?: string;
  /**
  * Extended Match Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#extended_match_sequence ContentRules#extended_match_sequence}
  */
  readonly extendedMatchSequence?: string;
  /**
  * Host Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#host_match ContentRules#host_match}
  */
  readonly hostMatch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#id ContentRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#mode ContentRules#mode}
  */
  readonly mode?: string;
  /**
  * Rule Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#name ContentRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#parent ContentRules#parent}
  */
  readonly parent: string[];
  /**
  * Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#status ContentRules#status}
  */
  readonly status?: string;
  /**
  * URL Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#url_match ContentRules#url_match}
  */
  readonly urlMatch: string;
  /**
  * Web Firewall Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#web_firewall_policy ContentRules#web_firewall_policy}
  */
  readonly webFirewallPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules barracudawaf_content_rules}
*/
export class ContentRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "barracudawaf_content_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContentRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContentRules to import
  * @param importFromId The id of the existing ContentRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContentRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "barracudawaf_content_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/content_rules barracudawaf_content_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ContentRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'barracudawaf_content_rules',
      terraformGeneratorMetadata: {
        providerName: 'barracudawaf',
        providerVersion: '1.0.10',
        providerVersionConstraint: '1.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLog = config.accessLog;
    this._appId = config.appId;
    this._comments = config.comments;
    this._extendedMatch = config.extendedMatch;
    this._extendedMatchSequence = config.extendedMatchSequence;
    this._hostMatch = config.hostMatch;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._parent = config.parent;
    this._status = config.status;
    this._urlMatch = config.urlMatch;
    this._webFirewallPolicy = config.webFirewallPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_log - computed: false, optional: true, required: false
  private _accessLog?: string; 
  public get accessLog() {
    return this.getStringAttribute('access_log');
  }
  public set accessLog(value: string) {
    this._accessLog = value;
  }
  public resetAccessLog() {
    this._accessLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

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

  // extended_match - computed: false, optional: true, required: false
  private _extendedMatch?: string; 
  public get extendedMatch() {
    return this.getStringAttribute('extended_match');
  }
  public set extendedMatch(value: string) {
    this._extendedMatch = value;
  }
  public resetExtendedMatch() {
    this._extendedMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMatchInput() {
    return this._extendedMatch;
  }

  // extended_match_sequence - computed: false, optional: true, required: false
  private _extendedMatchSequence?: string; 
  public get extendedMatchSequence() {
    return this.getStringAttribute('extended_match_sequence');
  }
  public set extendedMatchSequence(value: string) {
    this._extendedMatchSequence = value;
  }
  public resetExtendedMatchSequence() {
    this._extendedMatchSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMatchSequenceInput() {
    return this._extendedMatchSequence;
  }

  // host_match - computed: false, optional: false, required: true
  private _hostMatch?: string; 
  public get hostMatch() {
    return this.getStringAttribute('host_match');
  }
  public set hostMatch(value: string) {
    this._hostMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMatchInput() {
    return this._hostMatch;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string[]; 
  public get parent() {
    return this.getListAttribute('parent');
  }
  public set parent(value: string[]) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // url_match - computed: false, optional: false, required: true
  private _urlMatch?: string; 
  public get urlMatch() {
    return this.getStringAttribute('url_match');
  }
  public set urlMatch(value: string) {
    this._urlMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMatchInput() {
    return this._urlMatch;
  }

  // web_firewall_policy - computed: false, optional: true, required: false
  private _webFirewallPolicy?: string; 
  public get webFirewallPolicy() {
    return this.getStringAttribute('web_firewall_policy');
  }
  public set webFirewallPolicy(value: string) {
    this._webFirewallPolicy = value;
  }
  public resetWebFirewallPolicy() {
    this._webFirewallPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFirewallPolicyInput() {
    return this._webFirewallPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_log: cdktf.stringToTerraform(this._accessLog),
      app_id: cdktf.stringToTerraform(this._appId),
      comments: cdktf.stringToTerraform(this._comments),
      extended_match: cdktf.stringToTerraform(this._extendedMatch),
      extended_match_sequence: cdktf.stringToTerraform(this._extendedMatchSequence),
      host_match: cdktf.stringToTerraform(this._hostMatch),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parent),
      status: cdktf.stringToTerraform(this._status),
      url_match: cdktf.stringToTerraform(this._urlMatch),
      web_firewall_policy: cdktf.stringToTerraform(this._webFirewallPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_log: {
        value: cdktf.stringToHclTerraform(this._accessLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_match: {
        value: cdktf.stringToHclTerraform(this._extendedMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_match_sequence: {
        value: cdktf.stringToHclTerraform(this._extendedMatchSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_match: {
        value: cdktf.stringToHclTerraform(this._hostMatch),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      parent: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parent),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_match: {
        value: cdktf.stringToHclTerraform(this._urlMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_firewall_policy: {
        value: cdktf.stringToHclTerraform(this._webFirewallPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
