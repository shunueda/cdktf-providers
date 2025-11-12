// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_xenapp_default_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StfXenappDefaultStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Site ID of the StoreFront Default Store for XenApp Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_xenapp_default_store#store_site_id StfXenappDefaultStore#store_site_id}
  */
  readonly storeSiteId: string;
  /**
  * The Virtual Path of the StoreFront Default Store for XenApp Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_xenapp_default_store#store_virtual_path StfXenappDefaultStore#store_virtual_path}
  */
  readonly storeVirtualPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_xenapp_default_store citrix_stf_xenapp_default_store}
*/
export class StfXenappDefaultStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_stf_xenapp_default_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StfXenappDefaultStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StfXenappDefaultStore to import
  * @param importFromId The id of the existing StfXenappDefaultStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_xenapp_default_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StfXenappDefaultStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_stf_xenapp_default_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_xenapp_default_store citrix_stf_xenapp_default_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StfXenappDefaultStoreConfig
  */
  public constructor(scope: Construct, id: string, config: StfXenappDefaultStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_stf_xenapp_default_store',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._storeSiteId = config.storeSiteId;
    this._storeVirtualPath = config.storeVirtualPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // store_site_id - computed: false, optional: false, required: true
  private _storeSiteId?: string; 
  public get storeSiteId() {
    return this.getStringAttribute('store_site_id');
  }
  public set storeSiteId(value: string) {
    this._storeSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeSiteIdInput() {
    return this._storeSiteId;
  }

  // store_virtual_path - computed: false, optional: false, required: true
  private _storeVirtualPath?: string; 
  public get storeVirtualPath() {
    return this.getStringAttribute('store_virtual_path');
  }
  public set storeVirtualPath(value: string) {
    this._storeVirtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeVirtualPathInput() {
    return this._storeVirtualPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      store_site_id: cdktf.stringToTerraform(this._storeSiteId),
      store_virtual_path: cdktf.stringToTerraform(this._storeVirtualPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      store_site_id: {
        value: cdktf.stringToHclTerraform(this._storeSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_virtual_path: {
        value: cdktf.stringToHclTerraform(this._storeVirtualPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
