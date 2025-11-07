// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZitadelOrgsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A domain of the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs#domain DataZitadelOrgs#domain}
  */
  readonly domain?: string;
  /**
  * Method for querying orgs by domain, supported values: TEXT_QUERY_METHOD_EQUALS, TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE, TEXT_QUERY_METHOD_STARTS_WITH, TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE, TEXT_QUERY_METHOD_CONTAINS, TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE, TEXT_QUERY_METHOD_ENDS_WITH, TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs#domain_method DataZitadelOrgs#domain_method}
  */
  readonly domainMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs#id DataZitadelOrgs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs#name DataZitadelOrgs#name}
  */
  readonly name?: string;
  /**
  * Method for querying orgs by name, supported values: TEXT_QUERY_METHOD_EQUALS, TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE, TEXT_QUERY_METHOD_STARTS_WITH, TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE, TEXT_QUERY_METHOD_CONTAINS, TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE, TEXT_QUERY_METHOD_ENDS_WITH, TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs#name_method DataZitadelOrgs#name_method}
  */
  readonly nameMethod?: string;
  /**
  * State of the org, supported values: ORG_STATE_UNSPECIFIED, ORG_STATE_ACTIVE, ORG_STATE_INACTIVE, ORG_STATE_REMOVED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs#state DataZitadelOrgs#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs zitadel_orgs}
*/
export class DataZitadelOrgs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_orgs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZitadelOrgs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZitadelOrgs to import
  * @param importFromId The id of the existing DataZitadelOrgs that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZitadelOrgs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_orgs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/orgs zitadel_orgs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZitadelOrgsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZitadelOrgsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zitadel_orgs',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._domainMethod = config.domainMethod;
    this._id = config.id;
    this._name = config.name;
    this._nameMethod = config.nameMethod;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_method - computed: false, optional: true, required: false
  private _domainMethod?: string; 
  public get domainMethod() {
    return this.getStringAttribute('domain_method');
  }
  public set domainMethod(value: string) {
    this._domainMethod = value;
  }
  public resetDomainMethod() {
    this._domainMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMethodInput() {
    return this._domainMethod;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name - computed: false, optional: true, required: false
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

  // name_method - computed: false, optional: true, required: false
  private _nameMethod?: string; 
  public get nameMethod() {
    return this.getStringAttribute('name_method');
  }
  public set nameMethod(value: string) {
    this._nameMethod = value;
  }
  public resetNameMethod() {
    this._nameMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameMethodInput() {
    return this._nameMethod;
  }

  // primary_domain - computed: true, optional: false, required: false
  public get primaryDomain() {
    return this.getStringAttribute('primary_domain');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      domain_method: cdktf.stringToTerraform(this._domainMethod),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_method: cdktf.stringToTerraform(this._nameMethod),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_method: {
        value: cdktf.stringToHclTerraform(this._domainMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name_method: {
        value: cdktf.stringToHclTerraform(this._nameMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
