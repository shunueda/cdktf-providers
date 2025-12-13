// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudscaleCustomImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image#firmware_type DataCloudscaleCustomImage#firmware_type}
  */
  readonly firmwareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image#id DataCloudscaleCustomImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image#name DataCloudscaleCustomImage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image#slug DataCloudscaleCustomImage#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image#tags DataCloudscaleCustomImage#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image cloudscale_custom_image}
*/
export class DataCloudscaleCustomImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale_custom_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudscaleCustomImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudscaleCustomImage to import
  * @param importFromId The id of the existing DataCloudscaleCustomImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudscaleCustomImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale_custom_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/custom_image cloudscale_custom_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudscaleCustomImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudscaleCustomImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudscale_custom_image',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firmwareType = config.firmwareType;
    this._id = config.id;
    this._name = config.name;
    this._slug = config.slug;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksums - computed: true, optional: false, required: false
  private _checksums = new cdktf.StringMap(this, "checksums");
  public get checksums() {
    return this._checksums;
  }

  // firmware_type - computed: true, optional: true, required: false
  private _firmwareType?: string; 
  public get firmwareType() {
    return this.getStringAttribute('firmware_type');
  }
  public set firmwareType(value: string) {
    this._firmwareType = value;
  }
  public resetFirmwareType() {
    this._firmwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareTypeInput() {
    return this._firmwareType;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: false, optional: true, required: false
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

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }

  // slug - computed: false, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data_handling - computed: true, optional: false, required: false
  public get userDataHandling() {
    return this.getStringAttribute('user_data_handling');
  }

  // zone_slugs - computed: true, optional: false, required: false
  public get zoneSlugs() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_slugs'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firmware_type: cdktf.stringToTerraform(this._firmwareType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firmware_type: {
        value: cdktf.stringToHclTerraform(this._firmwareType),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
