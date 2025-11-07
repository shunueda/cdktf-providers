// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_tag_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityTagDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_tag_default#tag_default_id DataOciIdentityTagDefault#tag_default_id}
  */
  readonly tagDefaultId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_tag_default oci_identity_tag_default}
*/
export class DataOciIdentityTagDefault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_tag_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityTagDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityTagDefault to import
  * @param importFromId The id of the existing DataOciIdentityTagDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_tag_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityTagDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_tag_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_tag_default oci_identity_tag_default} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityTagDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityTagDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tag_default',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._tagDefaultId = config.tagDefaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tag_default_id - computed: false, optional: false, required: true
  private _tagDefaultId?: string; 
  public get tagDefaultId() {
    return this.getStringAttribute('tag_default_id');
  }
  public set tagDefaultId(value: string) {
    this._tagDefaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagDefaultIdInput() {
    return this._tagDefaultId;
  }

  // tag_definition_id - computed: true, optional: false, required: false
  public get tagDefinitionId() {
    return this.getStringAttribute('tag_definition_id');
  }

  // tag_definition_name - computed: true, optional: false, required: false
  public get tagDefinitionName() {
    return this.getStringAttribute('tag_definition_name');
  }

  // tag_namespace_id - computed: true, optional: false, required: false
  public get tagNamespaceId() {
    return this.getStringAttribute('tag_namespace_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tag_default_id: cdktf.stringToTerraform(this._tagDefaultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tag_default_id: {
        value: cdktf.stringToHclTerraform(this._tagDefaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
