// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/cloud_account_log_profile_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAccountLogProfileAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/cloud_account_log_profile_association#csp_account_name CloudAccountLogProfileAssociation#csp_account_name}
  */
  readonly cspAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/cloud_account_log_profile_association#id CloudAccountLogProfileAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/cloud_account_log_profile_association#log_profile_id CloudAccountLogProfileAssociation#log_profile_id}
  */
  readonly logProfileId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/cloud_account_log_profile_association ciscomcd_cloud_account_log_profile_association}
*/
export class CloudAccountLogProfileAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_cloud_account_log_profile_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAccountLogProfileAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAccountLogProfileAssociation to import
  * @param importFromId The id of the existing CloudAccountLogProfileAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/cloud_account_log_profile_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAccountLogProfileAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_cloud_account_log_profile_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/cloud_account_log_profile_association ciscomcd_cloud_account_log_profile_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAccountLogProfileAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAccountLogProfileAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_cloud_account_log_profile_association',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cspAccountName = config.cspAccountName;
    this._id = config.id;
    this._logProfileId = config.logProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // csp_account_name - computed: false, optional: false, required: true
  private _cspAccountName?: string; 
  public get cspAccountName() {
    return this.getStringAttribute('csp_account_name');
  }
  public set cspAccountName(value: string) {
    this._cspAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountNameInput() {
    return this._cspAccountName;
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

  // log_profile_id - computed: false, optional: true, required: false
  private _logProfileId?: number; 
  public get logProfileId() {
    return this.getNumberAttribute('log_profile_id');
  }
  public set logProfileId(value: number) {
    this._logProfileId = value;
  }
  public resetLogProfileId() {
    this._logProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProfileIdInput() {
    return this._logProfileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      id: cdktf.stringToTerraform(this._id),
      log_profile_id: cdktf.numberToTerraform(this._logProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_profile_id: {
        value: cdktf.numberToHclTerraform(this._logProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
