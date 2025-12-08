// https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplaceApplicationImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import#id MarketplaceApplicationImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Hash of a specific marketplace application that you want to import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import#import_unique_hash MarketplaceApplicationImport#import_unique_hash}
  */
  readonly importUniqueHash: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import#timeouts MarketplaceApplicationImport#timeouts}
  */
  readonly timeouts?: MarketplaceApplicationImportTimeouts;
}
export interface MarketplaceApplicationImportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import#create MarketplaceApplicationImport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import#delete MarketplaceApplicationImport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import#update MarketplaceApplicationImport#update}
  */
  readonly update?: string;
}

export function marketplaceApplicationImportTimeoutsToTerraform(struct?: MarketplaceApplicationImportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function marketplaceApplicationImportTimeoutsToHclTerraform(struct?: MarketplaceApplicationImportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceApplicationImportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MarketplaceApplicationImportTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceApplicationImportTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import gridscale_marketplace_application_import}
*/
export class MarketplaceApplicationImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_marketplace_application_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MarketplaceApplicationImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MarketplaceApplicationImport to import
  * @param importFromId The id of the existing MarketplaceApplicationImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MarketplaceApplicationImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_marketplace_application_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/marketplace_application_import gridscale_marketplace_application_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplaceApplicationImportConfig
  */
  public constructor(scope: Construct, id: string, config: MarketplaceApplicationImportConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_marketplace_application_import',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
    this._importUniqueHash = config.importUniqueHash;
    this._timeouts.internalValue = config.timeouts;
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

  // import_unique_hash - computed: false, optional: false, required: true
  private _importUniqueHash?: string; 
  public get importUniqueHash() {
    return this.getStringAttribute('import_unique_hash');
  }
  public set importUniqueHash(value: string) {
    this._importUniqueHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importUniqueHashInput() {
    return this._importUniqueHash;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MarketplaceApplicationImportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MarketplaceApplicationImportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      import_unique_hash: cdktf.stringToTerraform(this._importUniqueHash),
      timeouts: marketplaceApplicationImportTimeoutsToTerraform(this._timeouts.internalValue),
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
      import_unique_hash: {
        value: cdktf.stringToHclTerraform(this._importUniqueHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: marketplaceApplicationImportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MarketplaceApplicationImportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
