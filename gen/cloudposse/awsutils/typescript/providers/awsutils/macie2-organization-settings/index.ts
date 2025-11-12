// https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/macie2_organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2OrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of AWS Organization member accounts to associate with the Macie2 Administrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/macie2_organization_settings#member_accounts Macie2OrganizationSettings#member_accounts}
  */
  readonly memberAccounts: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/macie2_organization_settings awsutils_macie2_organization_settings}
*/
export class Macie2OrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsutils_macie2_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Macie2OrganizationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Macie2OrganizationSettings to import
  * @param importFromId The id of the existing Macie2OrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/macie2_organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Macie2OrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsutils_macie2_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/macie2_organization_settings awsutils_macie2_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2OrganizationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2OrganizationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'awsutils_macie2_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'awsutils',
        providerVersion: '0.20.1',
        providerVersionConstraint: '0.20.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._memberAccounts = config.memberAccounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_accounts - computed: false, optional: false, required: true
  private _memberAccounts?: string[]; 
  public get memberAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('member_accounts'));
  }
  public set memberAccounts(value: string[]) {
    this._memberAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccountsInput() {
    return this._memberAccounts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      member_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberAccounts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      member_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
