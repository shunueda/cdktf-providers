// https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDmeSecondaryDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns#folder_id DataDmeSecondaryDns#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns#id DataDmeSecondaryDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns#ipset_id DataDmeSecondaryDns#ipset_id}
  */
  readonly ipsetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns#name DataDmeSecondaryDns#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns dme_secondary_dns}
*/
export class DataDmeSecondaryDns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dme_secondary_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDmeSecondaryDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDmeSecondaryDns to import
  * @param importFromId The id of the existing DataDmeSecondaryDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDmeSecondaryDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dme_secondary_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/secondary_dns dme_secondary_dns} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDmeSecondaryDnsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDmeSecondaryDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'dme_secondary_dns',
      terraformGeneratorMetadata: {
        providerName: 'dme',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folderId = config.folderId;
    this._id = config.id;
    this._ipsetId = config.ipsetId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // ipset_id - computed: true, optional: true, required: false
  private _ipsetId?: string; 
  public get ipsetId() {
    return this.getStringAttribute('ipset_id');
  }
  public set ipsetId(value: string) {
    this._ipsetId = value;
  }
  public resetIpsetId() {
    this._ipsetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetIdInput() {
    return this._ipsetId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      ipset_id: cdktf.stringToTerraform(this._ipsetId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      ipset_id: {
        value: cdktf.stringToHclTerraform(this._ipsetId),
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
