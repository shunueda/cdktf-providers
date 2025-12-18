// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * The tag's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag#key ServiceTag#key}
  */
  readonly key: string;
  /**
  * The id of the service that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag#service ServiceTag#service}
  */
  readonly service?: string;
  /**
  * The alias of the service that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag#service_alias ServiceTag#service_alias}
  */
  readonly serviceAlias?: string;
  /**
  * The tag's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag#value ServiceTag#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag opslevel_service_tag}
*/
export class ServiceTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_service_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceTag to import
  * @param importFromId The id of the existing ServiceTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_service_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_tag opslevel_service_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceTagConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceTagConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_service_tag',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._service = config.service;
    this._serviceAlias = config.serviceAlias;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_alias - computed: false, optional: true, required: false
  private _serviceAlias?: string; 
  public get serviceAlias() {
    return this.getStringAttribute('service_alias');
  }
  public set serviceAlias(value: string) {
    this._serviceAlias = value;
  }
  public resetServiceAlias() {
    this._serviceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAliasInput() {
    return this._serviceAlias;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      service: cdktf.stringToTerraform(this._service),
      service_alias: cdktf.stringToTerraform(this._serviceAlias),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_alias: {
        value: cdktf.stringToHclTerraform(this._serviceAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
