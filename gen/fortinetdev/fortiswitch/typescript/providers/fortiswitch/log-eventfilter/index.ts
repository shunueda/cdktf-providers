// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogEventfilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#event LogEventfilter#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#fos_legacy LogEventfilter#fos_legacy}
  */
  readonly fosLegacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#id LogEventfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#link LogEventfilter#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#poe LogEventfilter#poe}
  */
  readonly poe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#router LogEventfilter#router}
  */
  readonly router?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#spanning_tree LogEventfilter#spanning_tree}
  */
  readonly spanningTree?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#switch LogEventfilter#switch}
  */
  readonly switch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#switch_controller LogEventfilter#switch_controller}
  */
  readonly switchController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#system LogEventfilter#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#user LogEventfilter#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter fortiswitch_log_eventfilter}
*/
export class LogEventfilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_log_eventfilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogEventfilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogEventfilter to import
  * @param importFromId The id of the existing LogEventfilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogEventfilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_log_eventfilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/log_eventfilter fortiswitch_log_eventfilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogEventfilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogEventfilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_log_eventfilter',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._event = config.event;
    this._fosLegacy = config.fosLegacy;
    this._id = config.id;
    this._link = config.link;
    this._poe = config.poe;
    this._router = config.router;
    this._spanningTree = config.spanningTree;
    this._switch = config.switch;
    this._switchController = config.switchController;
    this._system = config.systemAttribute;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // fos_legacy - computed: true, optional: true, required: false
  private _fosLegacy?: string; 
  public get fosLegacy() {
    return this.getStringAttribute('fos_legacy');
  }
  public set fosLegacy(value: string) {
    this._fosLegacy = value;
  }
  public resetFosLegacy() {
    this._fosLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosLegacyInput() {
    return this._fosLegacy;
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

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // poe - computed: true, optional: true, required: false
  private _poe?: string; 
  public get poe() {
    return this.getStringAttribute('poe');
  }
  public set poe(value: string) {
    this._poe = value;
  }
  public resetPoe() {
    this._poe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeInput() {
    return this._poe;
  }

  // router - computed: true, optional: true, required: false
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // spanning_tree - computed: true, optional: true, required: false
  private _spanningTree?: string; 
  public get spanningTree() {
    return this.getStringAttribute('spanning_tree');
  }
  public set spanningTree(value: string) {
    this._spanningTree = value;
  }
  public resetSpanningTree() {
    this._spanningTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreeInput() {
    return this._spanningTree;
  }

  // switch - computed: true, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // switch_controller - computed: true, optional: true, required: false
  private _switchController?: string; 
  public get switchController() {
    return this.getStringAttribute('switch_controller');
  }
  public set switchController(value: string) {
    this._switchController = value;
  }
  public resetSwitchController() {
    this._switchController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerInput() {
    return this._switchController;
  }

  // system - computed: true, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // user - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event: cdktf.stringToTerraform(this._event),
      fos_legacy: cdktf.stringToTerraform(this._fosLegacy),
      id: cdktf.stringToTerraform(this._id),
      link: cdktf.stringToTerraform(this._link),
      poe: cdktf.stringToTerraform(this._poe),
      router: cdktf.stringToTerraform(this._router),
      spanning_tree: cdktf.stringToTerraform(this._spanningTree),
      switch: cdktf.stringToTerraform(this._switch),
      switch_controller: cdktf.stringToTerraform(this._switchController),
      system: cdktf.stringToTerraform(this._system),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event: {
        value: cdktf.stringToHclTerraform(this._event),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fos_legacy: {
        value: cdktf.stringToHclTerraform(this._fosLegacy),
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
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe: {
        value: cdktf.stringToHclTerraform(this._poe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router: {
        value: cdktf.stringToHclTerraform(this._router),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spanning_tree: {
        value: cdktf.stringToHclTerraform(this._spanningTree),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch: {
        value: cdktf.stringToHclTerraform(this._switch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller: {
        value: cdktf.stringToHclTerraform(this._switchController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.stringToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
