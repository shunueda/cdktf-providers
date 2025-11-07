// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_cross_origin_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryHttpServletCrossOriginPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_cross_origin_policy#name DataPingdirectoryHttpServletCrossOriginPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_cross_origin_policy pingdirectory_http_servlet_cross_origin_policy}
*/
export class DataPingdirectoryHttpServletCrossOriginPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_http_servlet_cross_origin_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryHttpServletCrossOriginPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryHttpServletCrossOriginPolicy to import
  * @param importFromId The id of the existing DataPingdirectoryHttpServletCrossOriginPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_cross_origin_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryHttpServletCrossOriginPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_http_servlet_cross_origin_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_cross_origin_policy pingdirectory_http_servlet_cross_origin_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryHttpServletCrossOriginPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryHttpServletCrossOriginPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_http_servlet_cross_origin_policy',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cors_allow_credentials - computed: true, optional: false, required: false
  public get corsAllowCredentials() {
    return this.getBooleanAttribute('cors_allow_credentials');
  }

  // cors_allowed_headers - computed: true, optional: false, required: false
  public get corsAllowedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_allowed_headers'));
  }

  // cors_allowed_methods - computed: true, optional: false, required: false
  public get corsAllowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_allowed_methods'));
  }

  // cors_allowed_origins - computed: true, optional: false, required: false
  public get corsAllowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_allowed_origins'));
  }

  // cors_exposed_headers - computed: true, optional: false, required: false
  public get corsExposedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_exposed_headers'));
  }

  // cors_preflight_max_age - computed: true, optional: false, required: false
  public get corsPreflightMaxAge() {
    return this.getStringAttribute('cors_preflight_max_age');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
