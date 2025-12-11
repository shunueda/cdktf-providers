// https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-provided description for the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * User-provided name for the template. Must only consist of lower- and uppercase letters, numbers, dash, underscore and dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * oVirt ID of the VM the template is based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/template#vm_id Template#vm_id}
  */
  readonly vmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/template ovirt_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/template ovirt_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_template',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.2.0',
        providerVersionConstraint: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      vm_id: cdktf.stringToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
