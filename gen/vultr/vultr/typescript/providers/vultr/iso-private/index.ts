// https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/iso_private
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsoPrivateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/iso_private#id IsoPrivate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/iso_private#url IsoPrivate#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/iso_private vultr_iso_private}
*/
export class IsoPrivate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_iso_private";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IsoPrivate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IsoPrivate to import
  * @param importFromId The id of the existing IsoPrivate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/iso_private#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IsoPrivate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_iso_private", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/iso_private vultr_iso_private} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsoPrivateConfig
  */
  public constructor(scope: Construct, id: string, config: IsoPrivateConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_iso_private',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.27.1'
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
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
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

  // md5sum - computed: true, optional: false, required: false
  public get md5Sum() {
    return this.getStringAttribute('md5sum');
  }

  // sha512sum - computed: true, optional: false, required: false
  public get sha512Sum() {
    return this.getStringAttribute('sha512sum');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
