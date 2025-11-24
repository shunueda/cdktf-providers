// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/tenant_restriction_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaTenantRestrictionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional information about the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/tenant_restriction_profile#description DataZiaTenantRestrictionProfile#description}
  */
  readonly description?: string;
  /**
  * The unique identifier for the tenant restriction profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/tenant_restriction_profile#id DataZiaTenantRestrictionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The tenant restriction profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/tenant_restriction_profile#name DataZiaTenantRestrictionProfile#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/tenant_restriction_profile zia_tenant_restriction_profile}
*/
export class DataZiaTenantRestrictionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_tenant_restriction_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaTenantRestrictionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaTenantRestrictionProfile to import
  * @param importFromId The id of the existing DataZiaTenantRestrictionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/tenant_restriction_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaTenantRestrictionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_tenant_restriction_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/tenant_restriction_profile zia_tenant_restriction_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaTenantRestrictionProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaTenantRestrictionProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_tenant_restriction_profile',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_gcp_cloud_storage_read - computed: true, optional: false, required: false
  public get allowGcpCloudStorageRead() {
    return this.getBooleanAttribute('allow_gcp_cloud_storage_read');
  }

  // allow_google_consumers - computed: true, optional: false, required: false
  public get allowGoogleConsumers() {
    return this.getBooleanAttribute('allow_google_consumers');
  }

  // allow_google_visitors - computed: true, optional: false, required: false
  public get allowGoogleVisitors() {
    return this.getBooleanAttribute('allow_google_visitors');
  }

  // app_type - computed: true, optional: false, required: false
  public get appType() {
    return this.getStringAttribute('app_type');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // item_data_primary - computed: true, optional: false, required: false
  public get itemDataPrimary() {
    return cdktf.Fn.tolist(this.getListAttribute('item_data_primary'));
  }

  // item_data_secondary - computed: true, optional: false, required: false
  public get itemDataSecondary() {
    return cdktf.Fn.tolist(this.getListAttribute('item_data_secondary'));
  }

  // item_type_primary - computed: true, optional: false, required: false
  public get itemTypePrimary() {
    return this.getStringAttribute('item_type_primary');
  }

  // item_type_secondary - computed: true, optional: false, required: false
  public get itemTypeSecondary() {
    return this.getStringAttribute('item_type_secondary');
  }

  // item_value - computed: true, optional: false, required: false
  public get itemValue() {
    return cdktf.Fn.tolist(this.getListAttribute('item_value'));
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // last_modified_user_id - computed: true, optional: false, required: false
  public get lastModifiedUserId() {
    return this.getNumberAttribute('last_modified_user_id');
  }

  // ms_login_services_tr_v2 - computed: true, optional: false, required: false
  public get msLoginServicesTrV2() {
    return this.getBooleanAttribute('ms_login_services_tr_v2');
  }

  // name - computed: true, optional: true, required: false
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

  // restrict_personal_o365_domains - computed: true, optional: false, required: false
  public get restrictPersonalO365Domains() {
    return this.getBooleanAttribute('restrict_personal_o365_domains');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
