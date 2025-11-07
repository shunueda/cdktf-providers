// https://registry.terraform.io/providers/paloaltonetworks/prismasdwan/0.1.0/docs/data-sources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismasdwanSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The site whose config should be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasdwan/0.1.0/docs/data-sources/site#site_name DataPrismasdwanSite#site_name}
  */
  readonly siteName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismasdwan/0.1.0/docs/data-sources/site prismasdwan_site}
*/
export class DataPrismasdwanSite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismasdwan_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismasdwanSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismasdwanSite to import
  * @param importFromId The id of the existing DataPrismasdwanSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismasdwan/0.1.0/docs/data-sources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismasdwanSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismasdwan_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismasdwan/0.1.0/docs/data-sources/site prismasdwan_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismasdwanSiteConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrismasdwanSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'prismasdwan_site',
      terraformGeneratorMetadata: {
        providerName: 'prismasdwan',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._siteName = config.siteName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      site_name: cdktf.stringToTerraform(this._siteName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
