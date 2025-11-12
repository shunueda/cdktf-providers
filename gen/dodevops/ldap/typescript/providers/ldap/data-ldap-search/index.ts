// https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLdapSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Any additional attributes to request, such as constructed or operational attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search#additional_attributes DataLdapSearch#additional_attributes}
  */
  readonly additionalAttributes?: string[];
  /**
  * Base DN to use to search for LDAP objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search#base_dn DataLdapSearch#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Filter to search for LDAP objects with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search#filter DataLdapSearch#filter}
  */
  readonly filter?: string;
  /**
  * Scope to use to search for LDAP objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search#scope DataLdapSearch#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search ldap_search}
*/
export class DataLdapSearch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLdapSearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLdapSearch to import
  * @param importFromId The id of the existing DataLdapSearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLdapSearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/search ldap_search} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLdapSearchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLdapSearchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ldap_search',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalAttributes = config.additionalAttributes;
    this._baseDn = config.baseDn;
    this._filter = config.filter;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes?: string[]; 
  public get additionalAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_attributes'));
  }
  public set additionalAttributes(value: string[]) {
    this._additionalAttributes = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes;
  }

  // base_dn - computed: false, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
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

  // results - computed: true, optional: false, required: false
  private _results = new cdktf.StringListMapList(this, "results", false);
  public get results() {
    return this._results;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalAttributes),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      filter: cdktf.stringToTerraform(this._filter),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
