// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pairs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLdapCorrelationAttributePairsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Correlated LDAP Data View
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pairs#correlated_ldap_data_view_name DataPingdirectoryLdapCorrelationAttributePairs#correlated_ldap_data_view_name}
  */
  readonly correlatedLdapDataViewName: string;
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pairs#filter DataPingdirectoryLdapCorrelationAttributePairs#filter}
  */
  readonly filter?: string;
  /**
  * Name of the parent SCIM Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pairs#scim_resource_type_name DataPingdirectoryLdapCorrelationAttributePairs#scim_resource_type_name}
  */
  readonly scimResourceTypeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pairs pingdirectory_ldap_correlation_attribute_pairs}
*/
export class DataPingdirectoryLdapCorrelationAttributePairs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_ldap_correlation_attribute_pairs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLdapCorrelationAttributePairs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLdapCorrelationAttributePairs to import
  * @param importFromId The id of the existing DataPingdirectoryLdapCorrelationAttributePairs that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pairs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLdapCorrelationAttributePairs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_ldap_correlation_attribute_pairs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_correlation_attribute_pairs pingdirectory_ldap_correlation_attribute_pairs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLdapCorrelationAttributePairsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLdapCorrelationAttributePairsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_ldap_correlation_attribute_pairs',
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
    this._filter = config.filter;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      correlated_ldap_data_view_name: cdktf.stringToTerraform(this._correlatedLdapDataViewName),
      filter: cdktf.stringToTerraform(this._filter),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
