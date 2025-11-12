// https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of a defined filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#consumer_filter_id Policies#consumer_filter_id}
  */
  readonly consumerFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#id Policies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Values can be ALLOW or DENY: means whether we should allow or drop traffic from consumer to provider on the given service port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#policy_action Policies#policy_action}
  */
  readonly policyAction: string;
  /**
  * Used to sort policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#priority Policies#priority}
  */
  readonly priority?: number;
  /**
  * ID of a defined filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#provider_filter_id Policies#provider_filter_id}
  */
  readonly providerFilterId: string;
  /**
  * Values can be DEFAULT, ABSOLUTE or CATCHALL for ranking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#rank Policies#rank}
  */
  readonly rank?: string;
  /**
  * Indicates the version of the workspace the cluster will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#version Policies#version}
  */
  readonly version?: string;
  /**
  * ID of the needed workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#workspace_id Policies#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies secureworkload_policies}
*/
export class Policies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secureworkload_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policies to import
  * @param importFromId The id of the existing Policies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secureworkload_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/policies secureworkload_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: PoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'secureworkload_policies',
      terraformGeneratorMetadata: {
        providerName: 'secureworkload',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerFilterId = config.consumerFilterId;
    this._id = config.id;
    this._policyAction = config.policyAction;
    this._priority = config.priority;
    this._providerFilterId = config.providerFilterId;
    this._rank = config.rank;
    this._version = config.version;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_filter_id - computed: false, optional: false, required: true
  private _consumerFilterId?: string; 
  public get consumerFilterId() {
    return this.getStringAttribute('consumer_filter_id');
  }
  public set consumerFilterId(value: string) {
    this._consumerFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFilterIdInput() {
    return this._consumerFilterId;
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

  // policy_action - computed: false, optional: false, required: true
  private _policyAction?: string; 
  public get policyAction() {
    return this.getStringAttribute('policy_action');
  }
  public set policyAction(value: string) {
    this._policyAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyActionInput() {
    return this._policyAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // provider_filter_id - computed: false, optional: false, required: true
  private _providerFilterId?: string; 
  public get providerFilterId() {
    return this.getStringAttribute('provider_filter_id');
  }
  public set providerFilterId(value: string) {
    this._providerFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerFilterIdInput() {
    return this._providerFilterId;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: string; 
  public get rank() {
    return this.getStringAttribute('rank');
  }
  public set rank(value: string) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_filter_id: cdktf.stringToTerraform(this._consumerFilterId),
      id: cdktf.stringToTerraform(this._id),
      policy_action: cdktf.stringToTerraform(this._policyAction),
      priority: cdktf.numberToTerraform(this._priority),
      provider_filter_id: cdktf.stringToTerraform(this._providerFilterId),
      rank: cdktf.stringToTerraform(this._rank),
      version: cdktf.stringToTerraform(this._version),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_filter_id: {
        value: cdktf.stringToHclTerraform(this._consumerFilterId),
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
      policy_action: {
        value: cdktf.stringToHclTerraform(this._policyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_filter_id: {
        value: cdktf.stringToHclTerraform(this._providerFilterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rank: {
        value: cdktf.stringToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
