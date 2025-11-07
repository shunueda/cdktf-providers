// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceContentRewritingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#action LoadBalanceContentRewriting#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#action_type LoadBalanceContentRewriting#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#comments LoadBalanceContentRewriting#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#header_name LoadBalanceContentRewriting#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#header_value LoadBalanceContentRewriting#header_value}
  */
  readonly headerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#host_content LoadBalanceContentRewriting#host_content}
  */
  readonly hostContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#host_status LoadBalanceContentRewriting#host_status}
  */
  readonly hostStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#id LoadBalanceContentRewriting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#location LoadBalanceContentRewriting#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#mkey LoadBalanceContentRewriting#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#redirect LoadBalanceContentRewriting#redirect}
  */
  readonly redirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#referer_content LoadBalanceContentRewriting#referer_content}
  */
  readonly refererContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#referer_status LoadBalanceContentRewriting#referer_status}
  */
  readonly refererStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#url_content LoadBalanceContentRewriting#url_content}
  */
  readonly urlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#url_status LoadBalanceContentRewriting#url_status}
  */
  readonly urlStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#vdom LoadBalanceContentRewriting#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting fortiadc_load_balance_content_rewriting}
*/
export class LoadBalanceContentRewriting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_content_rewriting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceContentRewriting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceContentRewriting to import
  * @param importFromId The id of the existing LoadBalanceContentRewriting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceContentRewriting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_content_rewriting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_content_rewriting fortiadc_load_balance_content_rewriting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceContentRewritingConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceContentRewritingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_content_rewriting',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._actionType = config.actionType;
    this._comments = config.comments;
    this._headerName = config.headerName;
    this._headerValue = config.headerValue;
    this._hostContent = config.hostContent;
    this._hostStatus = config.hostStatus;
    this._id = config.id;
    this._location = config.location;
    this._mkey = config.mkey;
    this._redirect = config.redirect;
    this._refererContent = config.refererContent;
    this._refererStatus = config.refererStatus;
    this._urlContent = config.urlContent;
    this._urlStatus = config.urlStatus;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_type - computed: true, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // comments - computed: true, optional: true, required: false
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

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: true, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // host_content - computed: true, optional: true, required: false
  private _hostContent?: string; 
  public get hostContent() {
    return this.getStringAttribute('host_content');
  }
  public set hostContent(value: string) {
    this._hostContent = value;
  }
  public resetHostContent() {
    this._hostContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostContentInput() {
    return this._hostContent;
  }

  // host_status - computed: true, optional: true, required: false
  private _hostStatus?: string; 
  public get hostStatus() {
    return this.getStringAttribute('host_status');
  }
  public set hostStatus(value: string) {
    this._hostStatus = value;
  }
  public resetHostStatus() {
    this._hostStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostStatusInput() {
    return this._hostStatus;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // redirect - computed: true, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // referer_content - computed: true, optional: true, required: false
  private _refererContent?: string; 
  public get refererContent() {
    return this.getStringAttribute('referer_content');
  }
  public set refererContent(value: string) {
    this._refererContent = value;
  }
  public resetRefererContent() {
    this._refererContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererContentInput() {
    return this._refererContent;
  }

  // referer_status - computed: true, optional: true, required: false
  private _refererStatus?: string; 
  public get refererStatus() {
    return this.getStringAttribute('referer_status');
  }
  public set refererStatus(value: string) {
    this._refererStatus = value;
  }
  public resetRefererStatus() {
    this._refererStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererStatusInput() {
    return this._refererStatus;
  }

  // url_content - computed: true, optional: true, required: false
  private _urlContent?: string; 
  public get urlContent() {
    return this.getStringAttribute('url_content');
  }
  public set urlContent(value: string) {
    this._urlContent = value;
  }
  public resetUrlContent() {
    this._urlContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlContentInput() {
    return this._urlContent;
  }

  // url_status - computed: true, optional: true, required: false
  private _urlStatus?: string; 
  public get urlStatus() {
    return this.getStringAttribute('url_status');
  }
  public set urlStatus(value: string) {
    this._urlStatus = value;
  }
  public resetUrlStatus() {
    this._urlStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlStatusInput() {
    return this._urlStatus;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      action_type: cdktf.stringToTerraform(this._actionType),
      comments: cdktf.stringToTerraform(this._comments),
      header_name: cdktf.stringToTerraform(this._headerName),
      header_value: cdktf.stringToTerraform(this._headerValue),
      host_content: cdktf.stringToTerraform(this._hostContent),
      host_status: cdktf.stringToTerraform(this._hostStatus),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      mkey: cdktf.stringToTerraform(this._mkey),
      redirect: cdktf.stringToTerraform(this._redirect),
      referer_content: cdktf.stringToTerraform(this._refererContent),
      referer_status: cdktf.stringToTerraform(this._refererStatus),
      url_content: cdktf.stringToTerraform(this._urlContent),
      url_status: cdktf.stringToTerraform(this._urlStatus),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
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
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value: {
        value: cdktf.stringToHclTerraform(this._headerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_content: {
        value: cdktf.stringToHclTerraform(this._hostContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_status: {
        value: cdktf.stringToHclTerraform(this._hostStatus),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect: {
        value: cdktf.stringToHclTerraform(this._redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      referer_content: {
        value: cdktf.stringToHclTerraform(this._refererContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      referer_status: {
        value: cdktf.stringToHclTerraform(this._refererStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_content: {
        value: cdktf.stringToHclTerraform(this._urlContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_status: {
        value: cdktf.stringToHclTerraform(this._urlStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
