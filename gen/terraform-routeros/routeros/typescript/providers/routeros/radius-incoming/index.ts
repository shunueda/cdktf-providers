// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusIncomingConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming#___path___ RadiusIncoming#___path___}
  */
  readonly path?: string;
  /**
  * An option whether to accept the unsolicited messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming#accept RadiusIncoming#accept}
  */
  readonly accept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming#id RadiusIncoming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The port number to listen for the requests on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming#port RadiusIncoming#port}
  */
  readonly port?: number;
  /**
  * VRF on which service is listening for incoming connections. This option is available in RouterOS starting from version 7.4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming#vrf RadiusIncoming#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming routeros_radius_incoming}
*/
export class RadiusIncoming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_radius_incoming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RadiusIncoming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusIncoming to import
  * @param importFromId The id of the existing RadiusIncoming that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusIncoming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_radius_incoming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/radius_incoming routeros_radius_incoming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusIncomingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RadiusIncomingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_radius_incoming',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accept = config.accept;
    this._id = config.id;
    this._port = config.port;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accept - computed: false, optional: true, required: false
  private _accept?: boolean | cdktf.IResolvable; 
  public get accept() {
    return this.getBooleanAttribute('accept');
  }
  public set accept(value: boolean | cdktf.IResolvable) {
    this._accept = value;
  }
  public resetAccept() {
    this._accept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accept: cdktf.booleanToTerraform(this._accept),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accept: {
        value: cdktf.booleanToHclTerraform(this._accept),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
