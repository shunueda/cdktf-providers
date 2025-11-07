// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application#catalog CatalogApplication#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application#id CatalogApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application#name CatalogApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application#yamls CatalogApplication#yamls}
  */
  readonly yamls: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application nirmata_catalog_application}
*/
export class CatalogApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_catalog_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogApplication to import
  * @param importFromId The id of the existing CatalogApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_catalog_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/catalog_application nirmata_catalog_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_catalog_application',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalog = config.catalog;
    this._id = config.id;
    this._name = config.name;
    this._yamls = config.yamls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
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

  // release_name - computed: true, optional: false, required: false
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // yamls - computed: false, optional: false, required: true
  private _yamls?: string; 
  public get yamls() {
    return this.getStringAttribute('yamls');
  }
  public set yamls(value: string) {
    this._yamls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlsInput() {
    return this._yamls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog: cdktf.stringToTerraform(this._catalog),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      yamls: cdktf.stringToTerraform(this._yamls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
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
      yamls: {
        value: cdktf.stringToHclTerraform(this._yamls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
