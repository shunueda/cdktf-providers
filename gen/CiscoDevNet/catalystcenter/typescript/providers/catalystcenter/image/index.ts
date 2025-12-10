// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Third party image family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image#family Image#family}
  */
  readonly family?: string;
  /**
  * Whether the software image is from a third party.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image#is_third_party Image#is_third_party}
  */
  readonly isThirdParty?: boolean | cdktf.IResolvable;
  /**
  * File name that uniquely identifies the software image. It should not contain any path. Usually this can be specified as `basename(source_path)`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * Local path where the software image file resides. Supported file extensions are bin, img, tar, smu, pie, aes, iso, ova, tar_gz, qcow2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image#source_path Image#source_path}
  */
  readonly sourcePath: string;
  /**
  * Third party application type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image#third_party_application_type Image#third_party_application_type}
  */
  readonly thirdPartyApplicationType?: string;
  /**
  * Third party Vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image#third_party_vendor Image#third_party_vendor}
  */
  readonly thirdPartyVendor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image catalystcenter_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/image catalystcenter_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_image',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._family = config.family;
    this._isThirdParty = config.isThirdParty;
    this._name = config.name;
    this._sourcePath = config.sourcePath;
    this._thirdPartyApplicationType = config.thirdPartyApplicationType;
    this._thirdPartyVendor = config.thirdPartyVendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_third_party - computed: true, optional: true, required: false
  private _isThirdParty?: boolean | cdktf.IResolvable; 
  public get isThirdParty() {
    return this.getBooleanAttribute('is_third_party');
  }
  public set isThirdParty(value: boolean | cdktf.IResolvable) {
    this._isThirdParty = value;
  }
  public resetIsThirdParty() {
    this._isThirdParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isThirdPartyInput() {
    return this._isThirdParty;
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

  // source_path - computed: false, optional: false, required: true
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // third_party_application_type - computed: false, optional: true, required: false
  private _thirdPartyApplicationType?: string; 
  public get thirdPartyApplicationType() {
    return this.getStringAttribute('third_party_application_type');
  }
  public set thirdPartyApplicationType(value: string) {
    this._thirdPartyApplicationType = value;
  }
  public resetThirdPartyApplicationType() {
    this._thirdPartyApplicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyApplicationTypeInput() {
    return this._thirdPartyApplicationType;
  }

  // third_party_vendor - computed: false, optional: true, required: false
  private _thirdPartyVendor?: string; 
  public get thirdPartyVendor() {
    return this.getStringAttribute('third_party_vendor');
  }
  public set thirdPartyVendor(value: string) {
    this._thirdPartyVendor = value;
  }
  public resetThirdPartyVendor() {
    this._thirdPartyVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyVendorInput() {
    return this._thirdPartyVendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      family: cdktf.stringToTerraform(this._family),
      is_third_party: cdktf.booleanToTerraform(this._isThirdParty),
      name: cdktf.stringToTerraform(this._name),
      source_path: cdktf.stringToTerraform(this._sourcePath),
      third_party_application_type: cdktf.stringToTerraform(this._thirdPartyApplicationType),
      third_party_vendor: cdktf.stringToTerraform(this._thirdPartyVendor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_third_party: {
        value: cdktf.booleanToHclTerraform(this._isThirdParty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_path: {
        value: cdktf.stringToHclTerraform(this._sourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      third_party_application_type: {
        value: cdktf.stringToHclTerraform(this._thirdPartyApplicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      third_party_vendor: {
        value: cdktf.stringToHclTerraform(this._thirdPartyVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
