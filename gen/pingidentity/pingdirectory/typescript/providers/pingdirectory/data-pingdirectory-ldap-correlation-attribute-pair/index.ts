// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLdapCorrelationAttributePairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Correlated LDAP Data View
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pair#correlated_ldap_data_view_name DataPingdirectoryLdapCorrelationAttributePair#correlated_ldap_data_view_name}
  */
  readonly correlatedLdapDataViewName: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pair#name DataPingdirectoryLdapCorrelationAttributePair#name}
  */
  readonly name: string;
  /**
  * Name of the parent SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pair#scim_resource_type_name DataPingdirectoryLdapCorrelationAttributePair#scim_resource_type_name}
  */
  readonly scimResourceTypeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pair pingdirectory_ldap_correlation_attribute_pair}
*/
export class DataPingdirectoryLdapCorrelationAttributePair extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_ldap_correlation_attribute_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLdapCorrelationAttributePair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLdapCorrelationAttributePair to import
  * @param importFromId The id of the existing DataPingdirectoryLdapCorrelationAttributePair that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLdapCorrelationAttributePair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_ldap_correlation_attribute_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pair pingdirectory_ldap_correlation_attribute_pair} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLdapCorrelationAttributePairConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLdapCorrelationAttributePairConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_ldap_correlation_attribute_pair',
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
    this._correlatedLdapDataViewName = config.correlatedLdapDataViewName;
    this._name = config.name;
    this._scimResourceTypeName = config.scimResourceTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // correlated_ldap_data_view_name - computed: false, optional: false, required: true
  private _correlatedLdapDataViewName?: string; 
  public get correlatedLdapDataViewName() {
    return this.getStringAttribute('correlated_ldap_data_view_name');
  }
  public set correlatedLdapDataViewName(value: string) {
    this._correlatedLdapDataViewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedLdapDataViewNameInput() {
    return this._correlatedLdapDataViewName;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      correlated_ldap_data_view_name: cdktf.stringToTerraform(this._correlatedLdapDataViewName),
      name: cdktf.stringToTerraform(this._name),
      scim_resource_type_name: cdktf.stringToTerraform(this._scimResourceTypeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      correlated_ldap_data_view_name: {
        value: cdktf.stringToHclTerraform(this._correlatedLdapDataViewName),
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
