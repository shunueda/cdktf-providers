// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application-set to be included in the set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set#application_set ApplicationSet#application_set}
  */
  readonly applicationSet?: string[];
  /**
  * Application to be included in the set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set#applications ApplicationSet#applications}
  */
  readonly applications?: string[];
  /**
  * Description for application-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set#description ApplicationSet#description}
  */
  readonly description?: string;
  /**
  * Application set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set junos_application_set}
*/
export class ApplicationSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_application_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSet to import
  * @param importFromId The id of the existing ApplicationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_application_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/application_set junos_application_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSetConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_application_set',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationSet = config.applicationSet;
    this._applications = config.applications;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_set - computed: false, optional: true, required: false
  private _applicationSet?: string[]; 
  public get applicationSet() {
    return this.getListAttribute('application_set');
  }
  public set applicationSet(value: string[]) {
    this._applicationSet = value;
  }
  public resetApplicationSet() {
    this._applicationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSetInput() {
    return this._applicationSet;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationSet),
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationSet),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
