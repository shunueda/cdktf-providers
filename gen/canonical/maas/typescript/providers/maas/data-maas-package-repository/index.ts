// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/package_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMaasPackageRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/package_repository#id DataMaasPackageRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The authentication key used with the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/package_repository#key DataMaasPackageRepository#key}
  */
  readonly key?: string;
  /**
  * The name of the package repository.
  * *Note*: the Name field for the Ubuntu Archive and Ubuntu Ports repos are `main_archive` and `ports_archive` respectively. As they are default resources, the MAAS UI shows a different name to their internal database name entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/package_repository#name DataMaasPackageRepository#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/package_repository maas_package_repository}
*/
export class DataMaasPackageRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_package_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMaasPackageRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMaasPackageRepository to import
  * @param importFromId The id of the existing DataMaasPackageRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/package_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMaasPackageRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_package_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/package_repository maas_package_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMaasPackageRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataMaasPackageRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_package_repository',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
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
    this._key = config.key;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arches - computed: true, optional: false, required: false
  public get arches() {
    return cdktf.Fn.tolist(this.getListAttribute('arches'));
  }

  // components - computed: true, optional: false, required: false
  public get components() {
    return cdktf.Fn.tolist(this.getListAttribute('components'));
  }

  // disable_sources - computed: true, optional: false, required: false
  public get disableSources() {
    return this.getBooleanAttribute('disable_sources');
  }

  // disabled_components - computed: true, optional: false, required: false
  public get disabledComponents() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_components'));
  }

  // disabled_pockets - computed: true, optional: false, required: false
  public get disabledPockets() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_pockets'));
  }

  // distributions - computed: true, optional: false, required: false
  public get distributions() {
    return cdktf.Fn.tolist(this.getListAttribute('distributions'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
