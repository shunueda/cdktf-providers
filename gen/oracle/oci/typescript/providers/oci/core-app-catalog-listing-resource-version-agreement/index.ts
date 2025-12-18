// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreAppCatalogListingResourceVersionAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#id CoreAppCatalogListingResourceVersionAgreement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_id CoreAppCatalogListingResourceVersionAgreement#listing_id}
  */
  readonly listingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#listing_resource_version CoreAppCatalogListingResourceVersionAgreement#listing_resource_version}
  */
  readonly listingResourceVersion: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#timeouts CoreAppCatalogListingResourceVersionAgreement#timeouts}
  */
  readonly timeouts?: CoreAppCatalogListingResourceVersionAgreementTimeouts;
}
export interface CoreAppCatalogListingResourceVersionAgreementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#create CoreAppCatalogListingResourceVersionAgreement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#delete CoreAppCatalogListingResourceVersionAgreement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#update CoreAppCatalogListingResourceVersionAgreement#update}
  */
  readonly update?: string;
}

export function coreAppCatalogListingResourceVersionAgreementTimeoutsToTerraform(struct?: CoreAppCatalogListingResourceVersionAgreementTimeouts | cdktf.IResolvable): any {
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


export function coreAppCatalogListingResourceVersionAgreementTimeoutsToHclTerraform(struct?: CoreAppCatalogListingResourceVersionAgreementTimeouts | cdktf.IResolvable): any {
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

export class CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreAppCatalogListingResourceVersionAgreementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreAppCatalogListingResourceVersionAgreementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement oci_core_app_catalog_listing_resource_version_agreement}
*/
export class CoreAppCatalogListingResourceVersionAgreement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_app_catalog_listing_resource_version_agreement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreAppCatalogListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreAppCatalogListingResourceVersionAgreement to import
  * @param importFromId The id of the existing CoreAppCatalogListingResourceVersionAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreAppCatalogListingResourceVersionAgreement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_app_catalog_listing_resource_version_agreement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_app_catalog_listing_resource_version_agreement oci_core_app_catalog_listing_resource_version_agreement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreAppCatalogListingResourceVersionAgreementConfig
  */
  public constructor(scope: Construct, id: string, config: CoreAppCatalogListingResourceVersionAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_listing_resource_version_agreement',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._listingId = config.listingId;
    this._listingResourceVersion = config.listingResourceVersion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eula_link - computed: true, optional: false, required: false
  public get eulaLink() {
    return this.getStringAttribute('eula_link');
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

  // listing_id - computed: false, optional: false, required: true
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // listing_resource_version - computed: false, optional: false, required: true
  private _listingResourceVersion?: string; 
  public get listingResourceVersion() {
    return this.getStringAttribute('listing_resource_version');
  }
  public set listingResourceVersion(value: string) {
    this._listingResourceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingResourceVersionInput() {
    return this._listingResourceVersion;
  }

  // oracle_terms_of_use_link - computed: true, optional: false, required: false
  public get oracleTermsOfUseLink() {
    return this.getStringAttribute('oracle_terms_of_use_link');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // time_retrieved - computed: true, optional: false, required: false
  public get timeRetrieved() {
    return this.getStringAttribute('time_retrieved');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreAppCatalogListingResourceVersionAgreementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreAppCatalogListingResourceVersionAgreementTimeouts) {
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
      listing_id: cdktf.stringToTerraform(this._listingId),
      listing_resource_version: cdktf.stringToTerraform(this._listingResourceVersion),
      timeouts: coreAppCatalogListingResourceVersionAgreementTimeoutsToTerraform(this._timeouts.internalValue),
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
      listing_id: {
        value: cdktf.stringToHclTerraform(this._listingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listing_resource_version: {
        value: cdktf.stringToHclTerraform(this._listingResourceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: coreAppCatalogListingResourceVersionAgreementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreAppCatalogListingResourceVersionAgreementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
