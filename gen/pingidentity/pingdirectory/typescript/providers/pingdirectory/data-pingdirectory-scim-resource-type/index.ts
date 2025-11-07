// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_resource_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryScimResourceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_resource_type#name DataPingdirectoryScimResourceType#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_resource_type pingdirectory_scim_resource_type}
*/
export class DataPingdirectoryScimResourceType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_scim_resource_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryScimResourceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryScimResourceType to import
  * @param importFromId The id of the existing DataPingdirectoryScimResourceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_resource_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryScimResourceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_scim_resource_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/scim_resource_type pingdirectory_scim_resource_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryScimResourceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryScimResourceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_scim_resource_type',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_ldap_objectclass - computed: true, optional: false, required: false
  public get auxiliaryLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_ldap_objectclass'));
  }

  // core_schema - computed: true, optional: false, required: false
  public get coreSchema() {
    return this.getStringAttribute('core_schema');
  }

  // create_dn_pattern - computed: true, optional: false, required: false
  public get createDnPattern() {
    return this.getStringAttribute('create_dn_pattern');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_attribute - computed: true, optional: false, required: false
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }

  // include_base_dn - computed: true, optional: false, required: false
  public get includeBaseDn() {
    return this.getStringAttribute('include_base_dn');
  }

  // include_filter - computed: true, optional: false, required: false
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }

  // include_operational_attribute - computed: true, optional: false, required: false
  public get includeOperationalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('include_operational_attribute'));
  }

  // lookthrough_limit - computed: true, optional: false, required: false
  public get lookthroughLimit() {
    return this.getNumberAttribute('lookthrough_limit');
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

  // optional_schema_extension - computed: true, optional: false, required: false
  public get optionalSchemaExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_schema_extension'));
  }

  // required_schema_extension - computed: true, optional: false, required: false
  public get requiredSchemaExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('required_schema_extension'));
  }

  // schema_checking_option - computed: true, optional: false, required: false
  public get schemaCheckingOption() {
    return cdktf.Fn.tolist(this.getListAttribute('schema_checking_option'));
  }

  // structural_ldap_objectclass - computed: true, optional: false, required: false
  public get structuralLdapObjectclass() {
    return this.getStringAttribute('structural_ldap_objectclass');
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
