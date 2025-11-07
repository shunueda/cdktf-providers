// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/object_group_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanObjectGroupPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/object_group_policy_definition#id DataSdwanObjectGroupPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/object_group_policy_definition sdwan_object_group_policy_definition}
*/
export class DataSdwanObjectGroupPolicyDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_object_group_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanObjectGroupPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanObjectGroupPolicyDefinition to import
  * @param importFromId The id of the existing DataSdwanObjectGroupPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/object_group_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanObjectGroupPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_object_group_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/object_group_policy_definition sdwan_object_group_policy_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanObjectGroupPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanObjectGroupPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_object_group_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_fqdn_prefix_list_id - computed: true, optional: false, required: false
  public get dataFqdnPrefixListId() {
    return this.getStringAttribute('data_fqdn_prefix_list_id');
  }

  // data_fqdn_prefix_list_version - computed: true, optional: false, required: false
  public get dataFqdnPrefixListVersion() {
    return this.getNumberAttribute('data_fqdn_prefix_list_version');
  }

  // data_ipv4_prefix_list_id - computed: true, optional: false, required: false
  public get dataIpv4PrefixListId() {
    return this.getStringAttribute('data_ipv4_prefix_list_id');
  }

  // data_ipv4_prefix_list_version - computed: true, optional: false, required: false
  public get dataIpv4PrefixListVersion() {
    return this.getNumberAttribute('data_ipv4_prefix_list_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // geo_location - computed: true, optional: false, required: false
  public get geoLocation() {
    return this.getStringAttribute('geo_location');
  }

  // geo_location_list_id - computed: true, optional: false, required: false
  public get geoLocationListId() {
    return this.getStringAttribute('geo_location_list_id');
  }

  // geo_location_list_version - computed: true, optional: false, required: false
  public get geoLocationListVersion() {
    return this.getNumberAttribute('geo_location_list_version');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipv4_prefix - computed: true, optional: false, required: false
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }

  // ipv4_prefix_variable - computed: true, optional: false, required: false
  public get ipv4PrefixVariable() {
    return this.getStringAttribute('ipv4_prefix_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // port_list_id - computed: true, optional: false, required: false
  public get portListId() {
    return this.getStringAttribute('port_list_id');
  }

  // port_list_version - computed: true, optional: false, required: false
  public get portListVersion() {
    return this.getNumberAttribute('port_list_version');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
