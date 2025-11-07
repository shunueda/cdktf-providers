// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/marketplace_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGridscaleMarketplaceApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/marketplace_application#id DataGridscaleMarketplaceApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/marketplace_application#resource_id DataGridscaleMarketplaceApplication#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/marketplace_application gridscale_marketplace_application}
*/
export class DataGridscaleMarketplaceApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_marketplace_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGridscaleMarketplaceApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGridscaleMarketplaceApplication to import
  * @param importFromId The id of the existing DataGridscaleMarketplaceApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/marketplace_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGridscaleMarketplaceApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_marketplace_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/marketplace_application gridscale_marketplace_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGridscaleMarketplaceApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataGridscaleMarketplaceApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_marketplace_application',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
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
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // is_application_owner - computed: true, optional: false, required: false
  public get isApplicationOwner() {
    return this.getBooleanAttribute('is_application_owner');
  }

  // is_publish_global - computed: true, optional: false, required: false
  public get isPublishGlobal() {
    return this.getBooleanAttribute('is_publish_global');
  }

  // is_publish_global_requested - computed: true, optional: false, required: false
  public get isPublishGlobalRequested() {
    return this.getBooleanAttribute('is_publish_global_requested');
  }

  // is_publish_requested - computed: true, optional: false, required: false
  public get isPublishRequested() {
    return this.getBooleanAttribute('is_publish_requested');
  }

  // is_published - computed: true, optional: false, required: false
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }

  // meta_advices - computed: true, optional: false, required: false
  public get metaAdvices() {
    return this.getStringAttribute('meta_advices');
  }

  // meta_author - computed: true, optional: false, required: false
  public get metaAuthor() {
    return this.getStringAttribute('meta_author');
  }

  // meta_components - computed: true, optional: false, required: false
  public get metaComponents() {
    return cdktf.Fn.tolist(this.getListAttribute('meta_components'));
  }

  // meta_features - computed: true, optional: false, required: false
  public get metaFeatures() {
    return this.getStringAttribute('meta_features');
  }

  // meta_hints - computed: true, optional: false, required: false
  public get metaHints() {
    return this.getStringAttribute('meta_hints');
  }

  // meta_icon - computed: true, optional: false, required: false
  public get metaIcon() {
    return this.getStringAttribute('meta_icon');
  }

  // meta_license - computed: true, optional: false, required: false
  public get metaLicense() {
    return this.getStringAttribute('meta_license');
  }

  // meta_os - computed: true, optional: false, required: false
  public get metaOs() {
    return this.getStringAttribute('meta_os');
  }

  // meta_overview - computed: true, optional: false, required: false
  public get metaOverview() {
    return this.getStringAttribute('meta_overview');
  }

  // meta_terms_of_use - computed: true, optional: false, required: false
  public get metaTermsOfUse() {
    return this.getStringAttribute('meta_terms_of_use');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_storage_path - computed: true, optional: false, required: false
  public get objectStoragePath() {
    return this.getStringAttribute('object_storage_path');
  }

  // publish_global_requested_date - computed: true, optional: false, required: false
  public get publishGlobalRequestedDate() {
    return this.getStringAttribute('publish_global_requested_date');
  }

  // publish_requested_date - computed: true, optional: false, required: false
  public get publishRequestedDate() {
    return this.getStringAttribute('publish_requested_date');
  }

  // published_date - computed: true, optional: false, required: false
  public get publishedDate() {
    return this.getStringAttribute('published_date');
  }

  // published_global_date - computed: true, optional: false, required: false
  public get publishedGlobalDate() {
    return this.getStringAttribute('published_global_date');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // setup_cores - computed: true, optional: false, required: false
  public get setupCores() {
    return this.getNumberAttribute('setup_cores');
  }

  // setup_memory - computed: true, optional: false, required: false
  public get setupMemory() {
    return this.getNumberAttribute('setup_memory');
  }

  // setup_storage_capacity - computed: true, optional: false, required: false
  public get setupStorageCapacity() {
    return this.getNumberAttribute('setup_storage_capacity');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_hash - computed: true, optional: false, required: false
  public get uniqueHash() {
    return this.getStringAttribute('unique_hash');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
