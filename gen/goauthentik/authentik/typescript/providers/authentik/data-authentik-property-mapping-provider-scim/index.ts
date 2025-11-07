// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthentikPropertyMappingProviderScimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim#id DataAuthentikPropertyMappingProviderScim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of ids when `managed_list` is set. Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim#ids DataAuthentikPropertyMappingProviderScim#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim#managed DataAuthentikPropertyMappingProviderScim#managed}
  */
  readonly managed?: string;
  /**
  * Retrieve multiple property mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim#managed_list DataAuthentikPropertyMappingProviderScim#managed_list}
  */
  readonly managedList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim#name DataAuthentikPropertyMappingProviderScim#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim authentik_property_mapping_provider_scim}
*/
export class DataAuthentikPropertyMappingProviderScim extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_property_mapping_provider_scim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthentikPropertyMappingProviderScim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthentikPropertyMappingProviderScim to import
  * @param importFromId The id of the existing DataAuthentikPropertyMappingProviderScim that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthentikPropertyMappingProviderScim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_property_mapping_provider_scim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/property_mapping_provider_scim authentik_property_mapping_provider_scim} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthentikPropertyMappingProviderScimConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuthentikPropertyMappingProviderScimConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'authentik_property_mapping_provider_scim',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
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
    this._ids = config.ids;
    this._managed = config.managed;
    this._managedList = config.managedList;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // managed_list - computed: false, optional: true, required: false
  private _managedList?: string[]; 
  public get managedList() {
    return this.getListAttribute('managed_list');
  }
  public set managedList(value: string[]) {
    this._managedList = value;
  }
  public resetManagedList() {
    this._managedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedListInput() {
    return this._managedList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      managed: cdktf.stringToTerraform(this._managed),
      managed_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedList),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      managed: {
        value: cdktf.stringToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
