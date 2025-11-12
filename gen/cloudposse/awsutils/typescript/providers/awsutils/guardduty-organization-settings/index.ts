// https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/guardduty_organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyOrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/guardduty_organization_settings#detector_id GuarddutyOrganizationSettings#detector_id}
  */
  readonly detectorId: string;
  /**
  * A list of AWS Organization member accounts to associate with the GuardDuty Administrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/guardduty_organization_settings#member_accounts GuarddutyOrganizationSettings#member_accounts}
  */
  readonly memberAccounts: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/guardduty_organization_settings awsutils_guardduty_organization_settings}
*/
export class GuarddutyOrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsutils_guardduty_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuarddutyOrganizationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuarddutyOrganizationSettings to import
  * @param importFromId The id of the existing GuarddutyOrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/guardduty_organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuarddutyOrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsutils_guardduty_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/guardduty_organization_settings awsutils_guardduty_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyOrganizationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'awsutils_guardduty_organization_settings',
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
    this._detectorId = config.detectorId;
    this._memberAccounts = config.memberAccounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
  }

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
      detector_id: cdktf.stringToTerraform(this._detectorId),
      member_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberAccounts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detector_id: {
        value: cdktf.stringToHclTerraform(this._detectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
