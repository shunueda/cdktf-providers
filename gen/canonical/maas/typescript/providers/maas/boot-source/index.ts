// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source#id BootSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The data on the keyring for the boot source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source#keyring_data BootSource#keyring_data}
  */
  readonly keyringData?: string;
  /**
  * The filename on the keyring for the boot source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source#keyring_filename BootSource#keyring_filename}
  */
  readonly keyringFilename?: string;
  /**
  * The URL of the boot source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source#url BootSource#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source maas_boot_source}
*/
export class BootSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_boot_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootSource to import
  * @param importFromId The id of the existing BootSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_boot_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/boot_source maas_boot_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootSourceConfig
  */
  public constructor(scope: Construct, id: string, config: BootSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_boot_source',
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
    this._id = config.id;
    this._keyringData = config.keyringData;
    this._keyringFilename = config.keyringFilename;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // keyring_data - computed: false, optional: true, required: false
  private _keyringData?: string; 
  public get keyringData() {
    return this.getStringAttribute('keyring_data');
  }
  public set keyringData(value: string) {
    this._keyringData = value;
  }
  public resetKeyringData() {
    this._keyringData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringDataInput() {
    return this._keyringData;
  }

  // keyring_filename - computed: false, optional: true, required: false
  private _keyringFilename?: string; 
  public get keyringFilename() {
    return this.getStringAttribute('keyring_filename');
  }
  public set keyringFilename(value: string) {
    this._keyringFilename = value;
  }
  public resetKeyringFilename() {
    this._keyringFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringFilenameInput() {
    return this._keyringFilename;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      keyring_data: cdktf.stringToTerraform(this._keyringData),
      keyring_filename: cdktf.stringToTerraform(this._keyringFilename),
      url: cdktf.stringToTerraform(this._url),
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
      keyring_data: {
        value: cdktf.stringToHclTerraform(this._keyringData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyring_filename: {
        value: cdktf.stringToHclTerraform(this._keyringFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
