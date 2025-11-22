// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/audit_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Audit Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/audit_context#description AuditContext#description}
  */
  readonly description?: string;
  /**
  * Name of the Audit Context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/audit_context#name AuditContext#name}
  */
  readonly name: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/audit_context#tags AuditContext#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/audit_context cpln_audit_context}
*/
export class AuditContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_audit_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditContext to import
  * @param importFromId The id of the existing AuditContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/audit_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_audit_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/audit_context cpln_audit_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditContextConfig
  */
  public constructor(scope: Construct, id: string, config: AuditContextConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_audit_context',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.15',
        providerVersionConstraint: '1.2.15'
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
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: true, required: false
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

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
