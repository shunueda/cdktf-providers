// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_setting_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestSettingOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The internal identifier for this resource, required by Terraform to track state. This field does not exist in the Okta API response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_setting_organization#id RequestSettingOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Whether a customer has acknowledged Access Requests subprocessors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_setting_organization#subprocessors_acknowledged RequestSettingOrganization#subprocessors_acknowledged}
  */
  readonly subprocessorsAcknowledged?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_setting_organization okta_request_setting_organization}
*/
export class RequestSettingOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_request_setting_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RequestSettingOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RequestSettingOrganization to import
  * @param importFromId The id of the existing RequestSettingOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_setting_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RequestSettingOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_request_setting_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/request_setting_organization okta_request_setting_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestSettingOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: RequestSettingOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_request_setting_organization',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
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
    this._subprocessorsAcknowledged = config.subprocessorsAcknowledged;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // subprocessors_acknowledged - computed: true, optional: true, required: false
  private _subprocessorsAcknowledged?: boolean | cdktf.IResolvable; 
  public get subprocessorsAcknowledged() {
    return this.getBooleanAttribute('subprocessors_acknowledged');
  }
  public set subprocessorsAcknowledged(value: boolean | cdktf.IResolvable) {
    this._subprocessorsAcknowledged = value;
  }
  public resetSubprocessorsAcknowledged() {
    this._subprocessorsAcknowledged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subprocessorsAcknowledgedInput() {
    return this._subprocessorsAcknowledged;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      subprocessors_acknowledged: cdktf.booleanToTerraform(this._subprocessorsAcknowledged),
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
      subprocessors_acknowledged: {
        value: cdktf.booleanToHclTerraform(this._subprocessorsAcknowledged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
