// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutpostConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON format expected. Use `jsonencode()` to pass objects. Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost#config Outpost#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost#id Outpost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost#name Outpost#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost#protocol_providers Outpost#protocol_providers}
  */
  readonly protocolProviders: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost#service_connection Outpost#service_connection}
  */
  readonly serviceConnection?: string;
  /**
  * Allowed values:
  *   - `proxy`
  *   - `ldap`
  *   - `radius`
  *   - `rac`
  *  Defaults to `proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost#type Outpost#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost authentik_outpost}
*/
export class Outpost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_outpost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Outpost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Outpost to import
  * @param importFromId The id of the existing Outpost that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Outpost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_outpost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/outpost authentik_outpost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutpostConfig
  */
  public constructor(scope: Construct, id: string, config: OutpostConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_outpost',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._id = config.id;
    this._name = config.name;
    this._protocolProviders = config.protocolProviders;
    this._serviceConnection = config.serviceConnection;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // protocol_providers - computed: false, optional: false, required: true
  private _protocolProviders?: number[]; 
  public get protocolProviders() {
    return this.getNumberListAttribute('protocol_providers');
  }
  public set protocolProviders(value: number[]) {
    this._protocolProviders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolProvidersInput() {
    return this._protocolProviders;
  }

  // service_connection - computed: false, optional: true, required: false
  private _serviceConnection?: string; 
  public get serviceConnection() {
    return this.getStringAttribute('service_connection');
  }
  public set serviceConnection(value: string) {
    this._serviceConnection = value;
  }
  public resetServiceConnection() {
    this._serviceConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectionInput() {
    return this._serviceConnection;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol_providers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._protocolProviders),
      service_connection: cdktf.stringToTerraform(this._serviceConnection),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_providers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._protocolProviders),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      service_connection: {
        value: cdktf.stringToHclTerraform(this._serviceConnection),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
