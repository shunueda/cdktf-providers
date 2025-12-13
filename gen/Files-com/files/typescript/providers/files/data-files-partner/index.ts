// https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/partner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesPartnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the Partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/partner#id DataFilesPartner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/partner files_partner}
*/
export class DataFilesPartner extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_partner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesPartner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesPartner to import
  * @param importFromId The id of the existing DataFilesPartner that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/partner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesPartner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_partner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/partner files_partner} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesPartnerConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesPartnerConfig) {
    super(scope, id, {
      terraformResourceType: 'files_partner',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.412',
        providerVersionConstraint: '0.1.412'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_bypassing_2fa_policies - computed: true, optional: false, required: false
  public get allowBypassing2FaPolicies() {
    return this.getBooleanAttribute('allow_bypassing_2fa_policies');
  }

  // allow_credential_changes - computed: true, optional: false, required: false
  public get allowCredentialChanges() {
    return this.getBooleanAttribute('allow_credential_changes');
  }

  // allow_providing_gpg_keys - computed: true, optional: false, required: false
  public get allowProvidingGpgKeys() {
    return this.getBooleanAttribute('allow_providing_gpg_keys');
  }

  // allow_user_creation - computed: true, optional: false, required: false
  public get allowUserCreation() {
    return this.getBooleanAttribute('allow_user_creation');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // partner_admin_ids - computed: true, optional: false, required: false
  public get partnerAdminIds() {
    return this.getNumberListAttribute('partner_admin_ids');
  }

  // root_folder - computed: true, optional: false, required: false
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getNumberListAttribute('user_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
