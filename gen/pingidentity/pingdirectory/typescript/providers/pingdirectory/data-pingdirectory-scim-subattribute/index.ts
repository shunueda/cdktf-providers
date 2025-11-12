// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryScimSubattributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattribute#name DataPingdirectoryScimSubattribute#name}
  */
  readonly name: string;
  /**
  * Name of the parent SCIM Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattribute#scim_attribute_name DataPingdirectoryScimSubattribute#scim_attribute_name}
  */
  readonly scimAttributeName: string;
  /**
  * Name of the parent SCIM Schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattribute#scim_schema_name DataPingdirectoryScimSubattribute#scim_schema_name}
  */
  readonly scimSchemaName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattribute pingdirectory_scim_subattribute}
*/
export class DataPingdirectoryScimSubattribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_scim_subattribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryScimSubattribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryScimSubattribute to import
  * @param importFromId The id of the existing DataPingdirectoryScimSubattribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryScimSubattribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_scim_subattribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_subattribute pingdirectory_scim_subattribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryScimSubattributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryScimSubattributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_scim_subattribute',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._scimAttributeName = config.scimAttributeName;
    this._scimSchemaName = config.scimSchemaName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_value - computed: true, optional: false, required: false
  public get canonicalValue() {
    return cdktf.Fn.tolist(this.getListAttribute('canonical_value'));
  }

  // case_exact - computed: true, optional: false, required: false
  public get caseExact() {
    return this.getBooleanAttribute('case_exact');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // mutability - computed: true, optional: false, required: false
  public get mutability() {
    return this.getStringAttribute('mutability');
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

  // reference_type - computed: true, optional: false, required: false
  public get referenceType() {
    return cdktf.Fn.tolist(this.getListAttribute('reference_type'));
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // returned - computed: true, optional: false, required: false
  public get returned() {
    return this.getStringAttribute('returned');
  }

  // scim_attribute_name - computed: false, optional: false, required: true
  private _scimAttributeName?: string; 
  public get scimAttributeName() {
    return this.getStringAttribute('scim_attribute_name');
  }
  public set scimAttributeName(value: string) {
    this._scimAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimAttributeNameInput() {
    return this._scimAttributeName;
  }

  // scim_schema_name - computed: false, optional: false, required: true
  private _scimSchemaName?: string; 
  public get scimSchemaName() {
    return this.getStringAttribute('scim_schema_name');
  }
  public set scimSchemaName(value: string) {
    this._scimSchemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimSchemaNameInput() {
    return this._scimSchemaName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      scim_attribute_name: cdktf.stringToTerraform(this._scimAttributeName),
      scim_schema_name: cdktf.stringToTerraform(this._scimSchemaName),
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
      scim_attribute_name: {
        value: cdktf.stringToHclTerraform(this._scimAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_schema_name: {
        value: cdktf.stringToHclTerraform(this._scimSchemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
