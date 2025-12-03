// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyCommunicationsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template#communication_type DataRootlyCommunicationsTemplate#communication_type}
  */
  readonly communicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template#communication_type_id DataRootlyCommunicationsTemplate#communication_type_id}
  */
  readonly communicationTypeId?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template#created_at DataRootlyCommunicationsTemplate#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template#name DataRootlyCommunicationsTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template#slug DataRootlyCommunicationsTemplate#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template rootly_communications_template}
*/
export class DataRootlyCommunicationsTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_communications_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyCommunicationsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyCommunicationsTemplate to import
  * @param importFromId The id of the existing DataRootlyCommunicationsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyCommunicationsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_communications_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_template rootly_communications_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyCommunicationsTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyCommunicationsTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_communications_template',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communicationType = config.communicationType;
    this._communicationTypeId = config.communicationTypeId;
    this._createdAt = config.createdAt;
    this._name = config.name;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communication_type - computed: true, optional: true, required: false
  private _communicationType?: string; 
  public get communicationType() {
    return this.getStringAttribute('communication_type');
  }
  public set communicationType(value: string) {
    this._communicationType = value;
  }
  public resetCommunicationType() {
    this._communicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTypeInput() {
    return this._communicationType;
  }

  // communication_type_id - computed: true, optional: true, required: false
  private _communicationTypeId?: string; 
  public get communicationTypeId() {
    return this.getStringAttribute('communication_type_id');
  }
  public set communicationTypeId(value: string) {
    this._communicationTypeId = value;
  }
  public resetCommunicationTypeId() {
    this._communicationTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTypeIdInput() {
    return this._communicationTypeId;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communication_type: cdktf.stringToTerraform(this._communicationType),
      communication_type_id: cdktf.stringToTerraform(this._communicationTypeId),
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communication_type: {
        value: cdktf.stringToHclTerraform(this._communicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_type_id: {
        value: cdktf.stringToHclTerraform(this._communicationTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
