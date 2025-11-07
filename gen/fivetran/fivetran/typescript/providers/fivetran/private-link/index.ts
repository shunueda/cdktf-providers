// https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration.
  * 
  * #### Possible values  
  * -- `connection_service_name` (String): The name of your connection service.
  * -- `account_url` (String): The URL of your account.
  * -- `vpce_id` (String): The ID of your Virtual Private Cloud Endpoint.
  * -- `aws_account_id` (String): The ID of your AWS account.
  * -- `cluster_identifier` (String): The cluster identifier.
  * -- `connection_service_id` (String): The ID of your connection service.
  * -- `workspace_url` (String): The URL of your workspace.
  * -- `pls_id` (String): The ID of your Azure Private Link service.
  * -- `sub_resource_name` (String): The name of subresource.
  * -- `private_dns_regions` (String): Private DNS Regions.
  * -- `private_connection_service_id` (String): The ID of your connection service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link#config_map PrivateLink#config_map}
  */
  readonly configMap: { [key: string]: string };
  /**
  * The private link name within the account. The name must start with a letter or underscore and can only contain letters, numbers, or underscores. Maximum size of name is 23 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link#name PrivateLink#name}
  */
  readonly name: string;
  /**
  * Data processing location. This is where Fivetran will operate and run computation on data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link#region PrivateLink#region}
  */
  readonly region: string;
  /**
  * Service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link#service PrivateLink#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link fivetran_private_link}
*/
export class PrivateLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_private_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateLink to import
  * @param importFromId The id of the existing PrivateLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_private_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/private_link fivetran_private_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateLinkConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_private_link',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configMap = config.configMap;
    this._name = config.name;
    this._region = config.region;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // config_map - computed: false, optional: false, required: true
  private _configMap?: { [key: string]: string }; 
  public get configMap() {
    return this.getStringMapAttribute('config_map');
  }
  public set configMap(value: { [key: string]: string }) {
    this._configMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_summary - computed: true, optional: false, required: false
  public get stateSummary() {
    return this.getStringAttribute('state_summary');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._configMap),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
