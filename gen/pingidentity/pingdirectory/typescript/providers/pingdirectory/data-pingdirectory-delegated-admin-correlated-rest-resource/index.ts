// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDelegatedAdminCorrelatedRestResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resource#name DataPingdirectoryDelegatedAdminCorrelatedRestResource#name}
  */
  readonly name: string;
  /**
  * Name of the parent REST Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resource#rest_resource_type_name DataPingdirectoryDelegatedAdminCorrelatedRestResource#rest_resource_type_name}
  */
  readonly restResourceTypeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resource pingdirectory_delegated_admin_correlated_rest_resource}
*/
export class DataPingdirectoryDelegatedAdminCorrelatedRestResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_delegated_admin_correlated_rest_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDelegatedAdminCorrelatedRestResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDelegatedAdminCorrelatedRestResource to import
  * @param importFromId The id of the existing DataPingdirectoryDelegatedAdminCorrelatedRestResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDelegatedAdminCorrelatedRestResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_delegated_admin_correlated_rest_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/delegated_admin_correlated_rest_resource pingdirectory_delegated_admin_correlated_rest_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDelegatedAdminCorrelatedRestResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDelegatedAdminCorrelatedRestResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_delegated_admin_correlated_rest_resource',
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
    this._name = config.name;
    this._restResourceTypeName = config.restResourceTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // correlated_rest_resource - computed: true, optional: false, required: false
  public get correlatedRestResource() {
    return this.getStringAttribute('correlated_rest_resource');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // primary_rest_resource_correlation_attribute - computed: true, optional: false, required: false
  public get primaryRestResourceCorrelationAttribute() {
    return this.getStringAttribute('primary_rest_resource_correlation_attribute');
  }

  // rest_resource_type_name - computed: false, optional: false, required: true
  private _restResourceTypeName?: string; 
  public get restResourceTypeName() {
    return this.getStringAttribute('rest_resource_type_name');
  }
  public set restResourceTypeName(value: string) {
    this._restResourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restResourceTypeNameInput() {
    return this._restResourceTypeName;
  }

  // secondary_rest_resource_correlation_attribute - computed: true, optional: false, required: false
  public get secondaryRestResourceCorrelationAttribute() {
    return this.getStringAttribute('secondary_rest_resource_correlation_attribute');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_secondary_value_for_linking - computed: true, optional: false, required: false
  public get useSecondaryValueForLinking() {
    return this.getBooleanAttribute('use_secondary_value_for_linking');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      rest_resource_type_name: cdktf.stringToTerraform(this._restResourceTypeName),
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
      rest_resource_type_name: {
        value: cdktf.stringToHclTerraform(this._restResourceTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
