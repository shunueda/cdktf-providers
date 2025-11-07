// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_attribute_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryScimAttributeMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_attribute_mapping#name DataPingdirectoryScimAttributeMapping#name}
  */
  readonly name: string;
  /**
  * Name of the parent SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_attribute_mapping#scim_resource_type_name DataPingdirectoryScimAttributeMapping#scim_resource_type_name}
  */
  readonly scimResourceTypeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_attribute_mapping pingdirectory_scim_attribute_mapping}
*/
export class DataPingdirectoryScimAttributeMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_scim_attribute_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryScimAttributeMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryScimAttributeMapping to import
  * @param importFromId The id of the existing DataPingdirectoryScimAttributeMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_attribute_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryScimAttributeMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_scim_attribute_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_attribute_mapping pingdirectory_scim_attribute_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryScimAttributeMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryScimAttributeMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_scim_attribute_mapping',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._scimResourceTypeName = config.scimResourceTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authoritative - computed: true, optional: false, required: false
  public get authoritative() {
    return this.getBooleanAttribute('authoritative');
  }

  // correlated_ldap_data_view - computed: true, optional: false, required: false
  public get correlatedLdapDataView() {
    return this.getStringAttribute('correlated_ldap_data_view');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_attribute - computed: true, optional: false, required: false
  public get ldapAttribute() {
    return this.getStringAttribute('ldap_attribute');
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

  // readable - computed: true, optional: false, required: false
  public get readable() {
    return this.getBooleanAttribute('readable');
  }

  // scim_resource_type_attribute - computed: true, optional: false, required: false
  public get scimResourceTypeAttribute() {
    return this.getStringAttribute('scim_resource_type_attribute');
  }

  // scim_resource_type_name - computed: false, optional: false, required: true
  private _scimResourceTypeName?: string; 
  public get scimResourceTypeName() {
    return this.getStringAttribute('scim_resource_type_name');
  }
  public set scimResourceTypeName(value: string) {
    this._scimResourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimResourceTypeNameInput() {
    return this._scimResourceTypeName;
  }

  // searchable - computed: true, optional: false, required: false
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // writable - computed: true, optional: false, required: false
  public get writable() {
    return this.getBooleanAttribute('writable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      scim_resource_type_name: cdktf.stringToTerraform(this._scimResourceTypeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_resource_type_name: {
        value: cdktf.stringToHclTerraform(this._scimResourceTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
