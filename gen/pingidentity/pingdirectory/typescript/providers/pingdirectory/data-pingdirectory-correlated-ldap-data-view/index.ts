// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/correlated_ldap_data_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryCorrelatedLdapDataViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/correlated_ldap_data_view#name DataPingdirectoryCorrelatedLdapDataView#name}
  */
  readonly name: string;
  /**
  * Name of the parent SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/correlated_ldap_data_view#scim_resource_type_name DataPingdirectoryCorrelatedLdapDataView#scim_resource_type_name}
  */
  readonly scimResourceTypeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/correlated_ldap_data_view pingdirectory_correlated_ldap_data_view}
*/
export class DataPingdirectoryCorrelatedLdapDataView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_correlated_ldap_data_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryCorrelatedLdapDataView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryCorrelatedLdapDataView to import
  * @param importFromId The id of the existing DataPingdirectoryCorrelatedLdapDataView that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/correlated_ldap_data_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryCorrelatedLdapDataView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_correlated_ldap_data_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/correlated_ldap_data_view pingdirectory_correlated_ldap_data_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryCorrelatedLdapDataViewConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryCorrelatedLdapDataViewConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_correlated_ldap_data_view',
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

  // auxiliary_ldap_objectclass - computed: true, optional: false, required: false
  public get auxiliaryLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_ldap_objectclass'));
  }

  // create_dn_pattern - computed: true, optional: false, required: false
  public get createDnPattern() {
    return this.getStringAttribute('create_dn_pattern');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // primary_correlation_attribute - computed: true, optional: false, required: false
  public get primaryCorrelationAttribute() {
    return this.getStringAttribute('primary_correlation_attribute');
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

  // secondary_correlation_attribute - computed: true, optional: false, required: false
  public get secondaryCorrelationAttribute() {
    return this.getStringAttribute('secondary_correlation_attribute');
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
