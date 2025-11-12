// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerCheckoutSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The duration in seconds for the checkout. If the checkout is enabled, the duration is the maximum time a user can access the resource before the checkout expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings#checkout_duration_in_seconds ServerCheckoutSettings#checkout_duration_in_seconds}
  */
  readonly checkoutDurationInSeconds: number;
  /**
  * Indicates whether a checkout is mandatory for accessing resources within the project. If `true`, checkout is enforced for all applicable resources by default. If `false`, checkout is not required, and resources are accessible without it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings#checkout_required ServerCheckoutSettings#checkout_required}
  */
  readonly checkoutRequired: boolean | cdktf.IResolvable;
  /**
  * If provided, only the account identifiers listed are excluded from the checkout requirement. This list is only considered if `checkout_required` is set to `true`. Only one of `include_list` and `exclude_list` can be specified in a request since they are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings#exclude_list ServerCheckoutSettings#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * If provided, only the account identifiers listed are required to perform a checkout to access the resource. This list is only considered if `checkout_required` is set to `true`. Only one of `include_list` and `exclude_list` can be specified in a request since they are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings#include_list ServerCheckoutSettings#include_list}
  */
  readonly includeList?: string[];
  /**
  * The UUID of a Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings#project ServerCheckoutSettings#project}
  */
  readonly project: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings#resource_group ServerCheckoutSettings#resource_group}
  */
  readonly resourceGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings oktapam_server_checkout_settings}
*/
export class ServerCheckoutSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_server_checkout_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerCheckoutSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerCheckoutSettings to import
  * @param importFromId The id of the existing ServerCheckoutSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerCheckoutSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_server_checkout_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/server_checkout_settings oktapam_server_checkout_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerCheckoutSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ServerCheckoutSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_server_checkout_settings',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkoutDurationInSeconds = config.checkoutDurationInSeconds;
    this._checkoutRequired = config.checkoutRequired;
    this._excludeList = config.excludeList;
    this._includeList = config.includeList;
    this._project = config.project;
    this._resourceGroup = config.resourceGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkout_duration_in_seconds - computed: false, optional: false, required: true
  private _checkoutDurationInSeconds?: number; 
  public get checkoutDurationInSeconds() {
    return this.getNumberAttribute('checkout_duration_in_seconds');
  }
  public set checkoutDurationInSeconds(value: number) {
    this._checkoutDurationInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkoutDurationInSecondsInput() {
    return this._checkoutDurationInSeconds;
  }

  // checkout_required - computed: false, optional: false, required: true
  private _checkoutRequired?: boolean | cdktf.IResolvable; 
  public get checkoutRequired() {
    return this.getBooleanAttribute('checkout_required');
  }
  public set checkoutRequired(value: boolean | cdktf.IResolvable) {
    this._checkoutRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkoutRequiredInput() {
    return this._checkoutRequired;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return this.getListAttribute('exclude_list');
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checkout_duration_in_seconds: cdktf.numberToTerraform(this._checkoutDurationInSeconds),
      checkout_required: cdktf.booleanToTerraform(this._checkoutRequired),
      exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeList),
      include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeList),
      project: cdktf.stringToTerraform(this._project),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checkout_duration_in_seconds: {
        value: cdktf.numberToHclTerraform(this._checkoutDurationInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      checkout_required: {
        value: cdktf.booleanToHclTerraform(this._checkoutRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
