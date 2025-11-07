// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerFrontendConfig extends cdktf.TerraformMetaArguments {
  /**
  * LoadBalancer Backend name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#backend LoadbalancerFrontend#backend}
  */
  readonly backend: string;
  /**
  * Client connection timeout. `milliseconds`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#clienttimeout LoadbalancerFrontend#clienttimeout}
  */
  readonly clienttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LoadBalancer to associate the Frontend to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#loadbalancerid LoadbalancerFrontend#loadbalancerid}
  */
  readonly loadbalancerid: string;
  /**
  * Maximum number of connections allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#maxconnections LoadbalancerFrontend#maxconnections}
  */
  readonly maxconnections?: number;
  /**
  * Frontend name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}
  */
  readonly name: string;
  /**
  * Listen port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}
  */
  readonly port: number;
  /**
  * Certificate bundle to use for terminating TLS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#sslcertificate LoadbalancerFrontend#sslcertificate}
  */
  readonly sslcertificate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend glesys_loadbalancer_frontend}
*/
export class LoadbalancerFrontend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_loadbalancer_frontend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerFrontend to import
  * @param importFromId The id of the existing LoadbalancerFrontend that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerFrontend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_loadbalancer_frontend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/loadbalancer_frontend glesys_loadbalancer_frontend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerFrontendConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerFrontendConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_loadbalancer_frontend',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._clienttimeout = config.clienttimeout;
    this._id = config.id;
    this._loadbalancerid = config.loadbalancerid;
    this._maxconnections = config.maxconnections;
    this._name = config.name;
    this._port = config.port;
    this._sslcertificate = config.sslcertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // clienttimeout - computed: true, optional: true, required: false
  private _clienttimeout?: number; 
  public get clienttimeout() {
    return this.getNumberAttribute('clienttimeout');
  }
  public set clienttimeout(value: number) {
    this._clienttimeout = value;
  }
  public resetClienttimeout() {
    this._clienttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clienttimeoutInput() {
    return this._clienttimeout;
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

  // maxconnections - computed: true, optional: true, required: false
  private _maxconnections?: number; 
  public get maxconnections() {
    return this.getNumberAttribute('maxconnections');
  }
  public set maxconnections(value: number) {
    this._maxconnections = value;
  }
  public resetMaxconnections() {
    this._maxconnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxconnectionsInput() {
    return this._maxconnections;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sslcertificate - computed: false, optional: true, required: false
  private _sslcertificate?: string; 
  public get sslcertificate() {
    return this.getStringAttribute('sslcertificate');
  }
  public set sslcertificate(value: string) {
    this._sslcertificate = value;
  }
  public resetSslcertificate() {
    this._sslcertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcertificateInput() {
    return this._sslcertificate;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      clienttimeout: cdktf.numberToTerraform(this._clienttimeout),
      id: cdktf.stringToTerraform(this._id),
      loadbalancerid: cdktf.stringToTerraform(this._loadbalancerid),
      maxconnections: cdktf.numberToTerraform(this._maxconnections),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      sslcertificate: cdktf.stringToTerraform(this._sslcertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clienttimeout: {
        value: cdktf.numberToHclTerraform(this._clienttimeout),
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
      maxconnections: {
        value: cdktf.numberToHclTerraform(this._maxconnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslcertificate: {
        value: cdktf.stringToHclTerraform(this._sslcertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
