// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/rest_resource_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryRestResourceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/rest_resource_type#name DataPingdirectoryRestResourceType#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/rest_resource_type pingdirectory_rest_resource_type}
*/
export class DataPingdirectoryRestResourceType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_rest_resource_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryRestResourceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryRestResourceType to import
  * @param importFromId The id of the existing DataPingdirectoryRestResourceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/rest_resource_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryRestResourceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_rest_resource_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/rest_resource_type pingdirectory_rest_resource_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryRestResourceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryRestResourceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_rest_resource_type',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_ldap_objectclass - computed: true, optional: false, required: false
  public get auxiliaryLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_ldap_objectclass'));
  }

  // create_rdn_attribute_type - computed: true, optional: false, required: false
  public get createRdnAttributeType() {
    return this.getStringAttribute('create_rdn_attribute_type');
  }

  // delegated_admin_report_size_limit - computed: true, optional: false, required: false
  public get delegatedAdminReportSizeLimit() {
    return this.getNumberAttribute('delegated_admin_report_size_limit');
  }

  // delegated_admin_search_size_limit - computed: true, optional: false, required: false
  public get delegatedAdminSearchSizeLimit() {
    return this.getNumberAttribute('delegated_admin_search_size_limit');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filter - computed: true, optional: false, required: false
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }

  // members_column_name - computed: true, optional: false, required: false
  public get membersColumnName() {
    return this.getStringAttribute('members_column_name');
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

  // nonmembers_column_name - computed: true, optional: false, required: false
  public get nonmembersColumnName() {
    return this.getStringAttribute('nonmembers_column_name');
  }

  // parent_dn - computed: true, optional: false, required: false
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }

  // parent_resource_type - computed: true, optional: false, required: false
  public get parentResourceType() {
    return this.getStringAttribute('parent_resource_type');
  }

  // password_attribute_category - computed: true, optional: false, required: false
  public get passwordAttributeCategory() {
    return this.getStringAttribute('password_attribute_category');
  }

  // password_display_order_index - computed: true, optional: false, required: false
  public get passwordDisplayOrderIndex() {
    return this.getNumberAttribute('password_display_order_index');
  }

  // post_create_constructed_attribute - computed: true, optional: false, required: false
  public get postCreateConstructedAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('post_create_constructed_attribute'));
  }

  // primary_display_attribute_type - computed: true, optional: false, required: false
  public get primaryDisplayAttributeType() {
    return this.getStringAttribute('primary_display_attribute_type');
  }

  // relative_dn_from_parent_resource - computed: true, optional: false, required: false
  public get relativeDnFromParentResource() {
    return this.getStringAttribute('relative_dn_from_parent_resource');
  }

  // resource_endpoint - computed: true, optional: false, required: false
  public get resourceEndpoint() {
    return this.getStringAttribute('resource_endpoint');
  }

  // search_base_dn - computed: true, optional: false, required: false
  public get searchBaseDn() {
    return this.getStringAttribute('search_base_dn');
  }

  // search_filter_pattern - computed: true, optional: false, required: false
  public get searchFilterPattern() {
    return this.getStringAttribute('search_filter_pattern');
  }

  // structural_ldap_objectclass - computed: true, optional: false, required: false
  public get structuralLdapObjectclass() {
    return this.getStringAttribute('structural_ldap_objectclass');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_constructed_attribute - computed: true, optional: false, required: false
  public get updateConstructedAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('update_constructed_attribute'));
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
