// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAdfsPublishConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#backend_server_url UserAdfsPublish#backend_server_url}
  */
  readonly backendServerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#external_url UserAdfsPublish#external_url}
  */
  readonly externalUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#id UserAdfsPublish#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#mkey UserAdfsPublish#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#preauth UserAdfsPublish#preauth}
  */
  readonly preauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#proxy UserAdfsPublish#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#relying_party UserAdfsPublish#relying_party}
  */
  readonly relyingParty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#status UserAdfsPublish#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#vdom UserAdfsPublish#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish fortiadc_user_adfs_publish}
*/
export class UserAdfsPublish extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_user_adfs_publish";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAdfsPublish resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAdfsPublish to import
  * @param importFromId The id of the existing UserAdfsPublish that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAdfsPublish to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_user_adfs_publish", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/user_adfs_publish fortiadc_user_adfs_publish} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAdfsPublishConfig
  */
  public constructor(scope: Construct, id: string, config: UserAdfsPublishConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_user_adfs_publish',
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
    this._backendServerUrl = config.backendServerUrl;
    this._externalUrl = config.externalUrl;
    this._id = config.id;
    this._mkey = config.mkey;
    this._preauth = config.preauth;
    this._proxy = config.proxy;
    this._relyingParty = config.relyingParty;
    this._status = config.status;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_server_url - computed: true, optional: true, required: false
  private _backendServerUrl?: string; 
  public get backendServerUrl() {
    return this.getStringAttribute('backend_server_url');
  }
  public set backendServerUrl(value: string) {
    this._backendServerUrl = value;
  }
  public resetBackendServerUrl() {
    this._backendServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServerUrlInput() {
    return this._backendServerUrl;
  }

  // external_url - computed: true, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
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

  // preauth - computed: true, optional: true, required: false
  private _preauth?: string; 
  public get preauth() {
    return this.getStringAttribute('preauth');
  }
  public set preauth(value: string) {
    this._preauth = value;
  }
  public resetPreauth() {
    this._preauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthInput() {
    return this._preauth;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // relying_party - computed: true, optional: true, required: false
  private _relyingParty?: string; 
  public get relyingParty() {
    return this.getStringAttribute('relying_party');
  }
  public set relyingParty(value: string) {
    this._relyingParty = value;
  }
  public resetRelyingParty() {
    this._relyingParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyInput() {
    return this._relyingParty;
  }

  // status - computed: true, optional: true, required: false
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
      backend_server_url: cdktf.stringToTerraform(this._backendServerUrl),
      external_url: cdktf.stringToTerraform(this._externalUrl),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      preauth: cdktf.stringToTerraform(this._preauth),
      proxy: cdktf.stringToTerraform(this._proxy),
      relying_party: cdktf.stringToTerraform(this._relyingParty),
      status: cdktf.stringToTerraform(this._status),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_server_url: {
        value: cdktf.stringToHclTerraform(this._backendServerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_url: {
        value: cdktf.stringToHclTerraform(this._externalUrl),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preauth: {
        value: cdktf.stringToHclTerraform(this._preauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relying_party: {
        value: cdktf.stringToHclTerraform(this._relyingParty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
