// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectGroupPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data FQDN prefix list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#data_fqdn_prefix_list_id ObjectGroupPolicyDefinition#data_fqdn_prefix_list_id}
  */
  readonly dataFqdnPrefixListId?: string;
  /**
  * Data FQDN prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#data_fqdn_prefix_list_version ObjectGroupPolicyDefinition#data_fqdn_prefix_list_version}
  */
  readonly dataFqdnPrefixListVersion?: number;
  /**
  * Data IPv4 prefix list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#data_ipv4_prefix_list_id ObjectGroupPolicyDefinition#data_ipv4_prefix_list_id}
  */
  readonly dataIpv4PrefixListId?: string;
  /**
  * Data IPv4 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#data_ipv4_prefix_list_version ObjectGroupPolicyDefinition#data_ipv4_prefix_list_version}
  */
  readonly dataIpv4PrefixListVersion?: number;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#description ObjectGroupPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * Fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#fqdn ObjectGroupPolicyDefinition#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Geo location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#geo_location ObjectGroupPolicyDefinition#geo_location}
  */
  readonly geoLocation?: string;
  /**
  * Geo location list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#geo_location_list_id ObjectGroupPolicyDefinition#geo_location_list_id}
  */
  readonly geoLocationListId?: string;
  /**
  * Geo location list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#geo_location_list_version ObjectGroupPolicyDefinition#geo_location_list_version}
  */
  readonly geoLocationListVersion?: number;
  /**
  * IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#ipv4_prefix ObjectGroupPolicyDefinition#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
  /**
  * IPv4 prefix variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#ipv4_prefix_variable ObjectGroupPolicyDefinition#ipv4_prefix_variable}
  */
  readonly ipv4PrefixVariable?: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#name ObjectGroupPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Port or range of ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#port ObjectGroupPolicyDefinition#port}
  */
  readonly port?: string;
  /**
  * Port list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#port_list_id ObjectGroupPolicyDefinition#port_list_id}
  */
  readonly portListId?: string;
  /**
  * Port list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#port_list_version ObjectGroupPolicyDefinition#port_list_version}
  */
  readonly portListVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition sdwan_object_group_policy_definition}
*/
export class ObjectGroupPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_object_group_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectGroupPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectGroupPolicyDefinition to import
  * @param importFromId The id of the existing ObjectGroupPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectGroupPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_object_group_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/object_group_policy_definition sdwan_object_group_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectGroupPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectGroupPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_object_group_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataFqdnPrefixListId = config.dataFqdnPrefixListId;
    this._dataFqdnPrefixListVersion = config.dataFqdnPrefixListVersion;
    this._dataIpv4PrefixListId = config.dataIpv4PrefixListId;
    this._dataIpv4PrefixListVersion = config.dataIpv4PrefixListVersion;
    this._description = config.description;
    this._fqdn = config.fqdn;
    this._geoLocation = config.geoLocation;
    this._geoLocationListId = config.geoLocationListId;
    this._geoLocationListVersion = config.geoLocationListVersion;
    this._ipv4Prefix = config.ipv4Prefix;
    this._ipv4PrefixVariable = config.ipv4PrefixVariable;
    this._name = config.name;
    this._port = config.port;
    this._portListId = config.portListId;
    this._portListVersion = config.portListVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_fqdn_prefix_list_id - computed: false, optional: true, required: false
  private _dataFqdnPrefixListId?: string; 
  public get dataFqdnPrefixListId() {
    return this.getStringAttribute('data_fqdn_prefix_list_id');
  }
  public set dataFqdnPrefixListId(value: string) {
    this._dataFqdnPrefixListId = value;
  }
  public resetDataFqdnPrefixListId() {
    this._dataFqdnPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFqdnPrefixListIdInput() {
    return this._dataFqdnPrefixListId;
  }

  // data_fqdn_prefix_list_version - computed: false, optional: true, required: false
  private _dataFqdnPrefixListVersion?: number; 
  public get dataFqdnPrefixListVersion() {
    return this.getNumberAttribute('data_fqdn_prefix_list_version');
  }
  public set dataFqdnPrefixListVersion(value: number) {
    this._dataFqdnPrefixListVersion = value;
  }
  public resetDataFqdnPrefixListVersion() {
    this._dataFqdnPrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFqdnPrefixListVersionInput() {
    return this._dataFqdnPrefixListVersion;
  }

  // data_ipv4_prefix_list_id - computed: false, optional: true, required: false
  private _dataIpv4PrefixListId?: string; 
  public get dataIpv4PrefixListId() {
    return this.getStringAttribute('data_ipv4_prefix_list_id');
  }
  public set dataIpv4PrefixListId(value: string) {
    this._dataIpv4PrefixListId = value;
  }
  public resetDataIpv4PrefixListId() {
    this._dataIpv4PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIpv4PrefixListIdInput() {
    return this._dataIpv4PrefixListId;
  }

  // data_ipv4_prefix_list_version - computed: false, optional: true, required: false
  private _dataIpv4PrefixListVersion?: number; 
  public get dataIpv4PrefixListVersion() {
    return this.getNumberAttribute('data_ipv4_prefix_list_version');
  }
  public set dataIpv4PrefixListVersion(value: number) {
    this._dataIpv4PrefixListVersion = value;
  }
  public resetDataIpv4PrefixListVersion() {
    this._dataIpv4PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIpv4PrefixListVersionInput() {
    return this._dataIpv4PrefixListVersion;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation?: string; 
  public get geoLocation() {
    return this.getStringAttribute('geo_location');
  }
  public set geoLocation(value: string) {
    this._geoLocation = value;
  }
  public resetGeoLocation() {
    this._geoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation;
  }

  // geo_location_list_id - computed: false, optional: true, required: false
  private _geoLocationListId?: string; 
  public get geoLocationListId() {
    return this.getStringAttribute('geo_location_list_id');
  }
  public set geoLocationListId(value: string) {
    this._geoLocationListId = value;
  }
  public resetGeoLocationListId() {
    this._geoLocationListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationListIdInput() {
    return this._geoLocationListId;
  }

  // geo_location_list_version - computed: false, optional: true, required: false
  private _geoLocationListVersion?: number; 
  public get geoLocationListVersion() {
    return this.getNumberAttribute('geo_location_list_version');
  }
  public set geoLocationListVersion(value: number) {
    this._geoLocationListVersion = value;
  }
  public resetGeoLocationListVersion() {
    this._geoLocationListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationListVersionInput() {
    return this._geoLocationListVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }

  // ipv4_prefix_variable - computed: false, optional: true, required: false
  private _ipv4PrefixVariable?: string; 
  public get ipv4PrefixVariable() {
    return this.getStringAttribute('ipv4_prefix_variable');
  }
  public set ipv4PrefixVariable(value: string) {
    this._ipv4PrefixVariable = value;
  }
  public resetIpv4PrefixVariable() {
    this._ipv4PrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixVariableInput() {
    return this._ipv4PrefixVariable;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_list_id - computed: false, optional: true, required: false
  private _portListId?: string; 
  public get portListId() {
    return this.getStringAttribute('port_list_id');
  }
  public set portListId(value: string) {
    this._portListId = value;
  }
  public resetPortListId() {
    this._portListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListIdInput() {
    return this._portListId;
  }

  // port_list_version - computed: false, optional: true, required: false
  private _portListVersion?: number; 
  public get portListVersion() {
    return this.getNumberAttribute('port_list_version');
  }
  public set portListVersion(value: number) {
    this._portListVersion = value;
  }
  public resetPortListVersion() {
    this._portListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListVersionInput() {
    return this._portListVersion;
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
      data_fqdn_prefix_list_id: cdktf.stringToTerraform(this._dataFqdnPrefixListId),
      data_fqdn_prefix_list_version: cdktf.numberToTerraform(this._dataFqdnPrefixListVersion),
      data_ipv4_prefix_list_id: cdktf.stringToTerraform(this._dataIpv4PrefixListId),
      data_ipv4_prefix_list_version: cdktf.numberToTerraform(this._dataIpv4PrefixListVersion),
      description: cdktf.stringToTerraform(this._description),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      geo_location: cdktf.stringToTerraform(this._geoLocation),
      geo_location_list_id: cdktf.stringToTerraform(this._geoLocationListId),
      geo_location_list_version: cdktf.numberToTerraform(this._geoLocationListVersion),
      ipv4_prefix: cdktf.stringToTerraform(this._ipv4Prefix),
      ipv4_prefix_variable: cdktf.stringToTerraform(this._ipv4PrefixVariable),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.stringToTerraform(this._port),
      port_list_id: cdktf.stringToTerraform(this._portListId),
      port_list_version: cdktf.numberToTerraform(this._portListVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_fqdn_prefix_list_id: {
        value: cdktf.stringToHclTerraform(this._dataFqdnPrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_fqdn_prefix_list_version: {
        value: cdktf.numberToHclTerraform(this._dataFqdnPrefixListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_ipv4_prefix_list_id: {
        value: cdktf.stringToHclTerraform(this._dataIpv4PrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_ipv4_prefix_list_version: {
        value: cdktf.numberToHclTerraform(this._dataIpv4PrefixListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_location: {
        value: cdktf.stringToHclTerraform(this._geoLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_location_list_id: {
        value: cdktf.stringToHclTerraform(this._geoLocationListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_location_list_version: {
        value: cdktf.numberToHclTerraform(this._geoLocationListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_prefix_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4PrefixVariable),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_list_id: {
        value: cdktf.stringToHclTerraform(this._portListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_list_version: {
        value: cdktf.numberToHclTerraform(this._portListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
