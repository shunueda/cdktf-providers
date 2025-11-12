// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMaasBootSourceSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The boot source database ID this resource is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection#boot_source DataMaasBootSourceSelection#boot_source}
  */
  readonly bootSource: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection#id DataMaasBootSourceSelection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The operating system for this selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection#os DataMaasBootSourceSelection#os}
  */
  readonly os: string;
  /**
  * The specific release of the operating system for this selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection#release DataMaasBootSourceSelection#release}
  */
  readonly release: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection maas_boot_source_selection}
*/
export class DataMaasBootSourceSelection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_boot_source_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMaasBootSourceSelection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMaasBootSourceSelection to import
  * @param importFromId The id of the existing DataMaasBootSourceSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMaasBootSourceSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_boot_source_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/boot_source_selection maas_boot_source_selection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMaasBootSourceSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataMaasBootSourceSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_boot_source_selection',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootSource = config.bootSource;
    this._id = config.id;
    this._os = config.os;
    this._release = config.release;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arches - computed: true, optional: false, required: false
  public get arches() {
    return cdktf.Fn.tolist(this.getListAttribute('arches'));
  }

  // boot_source - computed: false, optional: false, required: true
  private _bootSource?: number; 
  public get bootSource() {
    return this.getNumberAttribute('boot_source');
  }
  public set bootSource(value: number) {
    this._bootSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootSourceInput() {
    return this._bootSource;
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

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // release - computed: false, optional: false, required: true
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // subarches - computed: true, optional: false, required: false
  public get subarches() {
    return cdktf.Fn.tolist(this.getListAttribute('subarches'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_source: cdktf.numberToTerraform(this._bootSource),
      id: cdktf.stringToTerraform(this._id),
      os: cdktf.stringToTerraform(this._os),
      release: cdktf.stringToTerraform(this._release),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_source: {
        value: cdktf.numberToHclTerraform(this._bootSource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.stringToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
