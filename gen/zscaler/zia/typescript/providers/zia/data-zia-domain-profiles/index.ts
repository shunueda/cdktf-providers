// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/domain_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaDomainProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/domain_profiles#id DataZiaDomainProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Domain profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/domain_profiles#profile_id DataZiaDomainProfiles#profile_id}
  */
  readonly profileId?: number;
  /**
  * Domain profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/domain_profiles#profile_name DataZiaDomainProfiles#profile_name}
  */
  readonly profileName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/domain_profiles zia_domain_profiles}
*/
export class DataZiaDomainProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_domain_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaDomainProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaDomainProfiles to import
  * @param importFromId The id of the existing DataZiaDomainProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/domain_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaDomainProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_domain_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/domain_profiles zia_domain_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaDomainProfilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaDomainProfilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_domain_profiles',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
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
    this._profileId = config.profileId;
    this._profileName = config.profileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_domains - computed: true, optional: false, required: false
  public get customDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_domains'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // include_company_domains - computed: true, optional: false, required: false
  public get includeCompanyDomains() {
    return this.getBooleanAttribute('include_company_domains');
  }

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }

  // predefined_email_domains - computed: true, optional: false, required: false
  public get predefinedEmailDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('predefined_email_domains'));
  }

  // profile_id - computed: true, optional: true, required: false
  private _profileId?: number; 
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }
  public set profileId(value: number) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      profile_id: cdktf.numberToTerraform(this._profileId),
      profile_name: cdktf.stringToTerraform(this._profileName),
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
      profile_id: {
        value: cdktf.numberToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
