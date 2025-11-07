// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/config_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetboxConfigContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/config_context#id DataNetboxConfigContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/config_context#name DataNetboxConfigContext#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/config_context netbox_config_context}
*/
export class DataNetboxConfigContext extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_config_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetboxConfigContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetboxConfigContext to import
  * @param importFromId The id of the existing DataNetboxConfigContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/config_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetboxConfigContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_config_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/config_context netbox_config_context} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetboxConfigContextConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetboxConfigContextConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_config_context',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_groups - computed: true, optional: false, required: false
  public get clusterGroups() {
    return this.getNumberListAttribute('cluster_groups');
  }

  // cluster_types - computed: true, optional: false, required: false
  public get clusterTypes() {
    return this.getNumberListAttribute('cluster_types');
  }

  // clusters - computed: true, optional: false, required: false
  public get clusters() {
    return this.getNumberListAttribute('clusters');
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return this.getNumberListAttribute('device_types');
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

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getNumberListAttribute('locations');
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

  // platforms - computed: true, optional: false, required: false
  public get platforms() {
    return this.getNumberListAttribute('platforms');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getNumberListAttribute('regions');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getNumberListAttribute('roles');
  }

  // site_groups - computed: true, optional: false, required: false
  public get siteGroups() {
    return this.getNumberListAttribute('site_groups');
  }

  // sites - computed: true, optional: false, required: false
  public get sites() {
    return this.getNumberListAttribute('sites');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // tenant_groups - computed: true, optional: false, required: false
  public get tenantGroups() {
    return this.getNumberListAttribute('tenant_groups');
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return this.getNumberListAttribute('tenants');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
