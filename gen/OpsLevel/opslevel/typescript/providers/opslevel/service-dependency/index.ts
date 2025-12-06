// https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/service_dependency
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDependencyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or alias of the service that is depended upon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/service_dependency#depends_upon ServiceDependency#depends_upon}
  */
  readonly dependsUpon: string;
  /**
  * Notes for service dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/service_dependency#note ServiceDependency#note}
  */
  readonly note?: string;
  /**
  * The ID or alias of the service with the dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/service_dependency#service ServiceDependency#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/service_dependency opslevel_service_dependency}
*/
export class ServiceDependency extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_service_dependency";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDependency resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDependency to import
  * @param importFromId The id of the existing ServiceDependency that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/service_dependency#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDependency to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_service_dependency", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/service_dependency opslevel_service_dependency} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDependencyConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDependencyConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_service_dependency',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dependsUpon = config.dependsUpon;
    this._note = config.note;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // depends_upon - computed: false, optional: false, required: true
  private _dependsUpon?: string; 
  public get dependsUpon() {
    return this.getStringAttribute('depends_upon');
  }
  public set dependsUpon(value: string) {
    this._dependsUpon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsUponInput() {
    return this._dependsUpon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      depends_upon: cdktf.stringToTerraform(this._dependsUpon),
      note: cdktf.stringToTerraform(this._note),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      depends_upon: {
        value: cdktf.stringToHclTerraform(this._dependsUpon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
