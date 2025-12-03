// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyCommunicationsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group#communication_type_id DataRootlyCommunicationsGroup#communication_type_id}
  */
  readonly communicationTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group#condition_type DataRootlyCommunicationsGroup#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group#created_at DataRootlyCommunicationsGroup#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group#is_private DataRootlyCommunicationsGroup#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group#name DataRootlyCommunicationsGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group#slug DataRootlyCommunicationsGroup#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group rootly_communications_group}
*/
export class DataRootlyCommunicationsGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_communications_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyCommunicationsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyCommunicationsGroup to import
  * @param importFromId The id of the existing DataRootlyCommunicationsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyCommunicationsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_communications_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/data-sources/communications_group rootly_communications_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyCommunicationsGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyCommunicationsGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_communications_group',
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
    this._communicationTypeId = config.communicationTypeId;
    this._conditionType = config.conditionType;
    this._createdAt = config.createdAt;
    this._isPrivate = config.isPrivate;
    this._name = config.name;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
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

  // is_private - computed: true, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
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
      communication_type_id: cdktf.stringToTerraform(this._communicationTypeId),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communication_type_id: {
        value: cdktf.stringToHclTerraform(this._communicationTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
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
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
