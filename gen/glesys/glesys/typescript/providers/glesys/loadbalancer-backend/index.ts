// https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection timeout to backend target. `milliseconds`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#connecttimeout LoadbalancerBackend#connecttimeout}
  */
  readonly connecttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#id LoadbalancerBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LoadBalancer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#loadbalancerid LoadbalancerBackend#loadbalancerid}
  */
  readonly loadbalancerid: string;
  /**
  * Backend mode. `TCP`, `HTTP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#mode LoadbalancerBackend#mode}
  */
  readonly mode?: string;
  /**
  * Backend name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#name LoadbalancerBackend#name}
  */
  readonly name: string;
  /**
  * Connection response timeout. `milliseconds`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#responsetimeout LoadbalancerBackend#responsetimeout}
  */
  readonly responsetimeout?: number;
  /**
  * Enable backend sticky sessions. `true`, `false`, `yes`, `no`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#stickysessions LoadbalancerBackend#stickysessions}
  */
  readonly stickysessions?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend glesys_loadbalancer_backend}
*/
export class LoadbalancerBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_loadbalancer_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerBackend to import
  * @param importFromId The id of the existing LoadbalancerBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_loadbalancer_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer_backend glesys_loadbalancer_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerBackendConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_loadbalancer_backend',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connecttimeout = config.connecttimeout;
    this._id = config.id;
    this._loadbalancerid = config.loadbalancerid;
    this._mode = config.mode;
    this._name = config.name;
    this._responsetimeout = config.responsetimeout;
    this._stickysessions = config.stickysessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connecttimeout - computed: true, optional: true, required: false
  private _connecttimeout?: number; 
  public get connecttimeout() {
    return this.getNumberAttribute('connecttimeout');
  }
  public set connecttimeout(value: number) {
    this._connecttimeout = value;
  }
  public resetConnecttimeout() {
    this._connecttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connecttimeoutInput() {
    return this._connecttimeout;
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

  // loadbalancerid - computed: false, optional: false, required: true
  private _loadbalancerid?: string; 
  public get loadbalancerid() {
    return this.getStringAttribute('loadbalancerid');
  }
  public set loadbalancerid(value: string) {
    this._loadbalancerid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalanceridInput() {
    return this._loadbalancerid;
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

  // responsetimeout - computed: true, optional: true, required: false
  private _responsetimeout?: number; 
  public get responsetimeout() {
    return this.getNumberAttribute('responsetimeout');
  }
  public set responsetimeout(value: number) {
    this._responsetimeout = value;
  }
  public resetResponsetimeout() {
    this._responsetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsetimeoutInput() {
    return this._responsetimeout;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stickysessions - computed: false, optional: true, required: false
  private _stickysessions?: string; 
  public get stickysessions() {
    return this.getStringAttribute('stickysessions');
  }
  public set stickysessions(value: string) {
    this._stickysessions = value;
  }
  public resetStickysessions() {
    this._stickysessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickysessionsInput() {
    return this._stickysessions;
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.getListAttribute('targets');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connecttimeout: cdktf.numberToTerraform(this._connecttimeout),
      id: cdktf.stringToTerraform(this._id),
      loadbalancerid: cdktf.stringToTerraform(this._loadbalancerid),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      responsetimeout: cdktf.numberToTerraform(this._responsetimeout),
      stickysessions: cdktf.stringToTerraform(this._stickysessions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connecttimeout: {
        value: cdktf.numberToHclTerraform(this._connecttimeout),
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
      loadbalancerid: {
        value: cdktf.stringToHclTerraform(this._loadbalancerid),
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
      responsetimeout: {
        value: cdktf.numberToHclTerraform(this._responsetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stickysessions: {
        value: cdktf.stringToHclTerraform(this._stickysessions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
