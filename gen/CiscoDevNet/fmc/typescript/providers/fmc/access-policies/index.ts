// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default action for this resource, "BLOCK", "TRUST", "PERMIT", "NETWORK_DISCOVERY" or "INHERIT_FROM_PARENT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#default_action AccessPolicies#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Default action base policy ID to inherit from for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#default_action_base_intrusion_policy_id AccessPolicies#default_action_base_intrusion_policy_id}
  */
  readonly defaultActionBaseIntrusionPolicyId?: string;
  /**
  * Enable logging at the beginning of the connection for this resource, "true" or "false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#default_action_log_begin AccessPolicies#default_action_log_begin}
  */
  readonly defaultActionLogBegin?: boolean | cdktf.IResolvable;
  /**
  * Enable logging at the end of the connection for this resource, "true" or "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#default_action_log_end AccessPolicies#default_action_log_end}
  */
  readonly defaultActionLogEnd?: boolean | cdktf.IResolvable;
  /**
  * Enable sending events to FMC for this resource, "true" or "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#default_action_send_events_to_fmc AccessPolicies#default_action_send_events_to_fmc}
  */
  readonly defaultActionSendEventsToFmc?: boolean | cdktf.IResolvable;
  /**
  * Syslog configuration ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#default_action_syslog_config_id AccessPolicies#default_action_syslog_config_id}
  */
  readonly defaultActionSyslogConfigId?: string;
  /**
  * The description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#description AccessPolicies#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#id AccessPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#name AccessPolicies#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies fmc_access_policies}
*/
export class AccessPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_access_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessPolicies to import
  * @param importFromId The id of the existing AccessPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_access_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/access_policies fmc_access_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_access_policies',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._defaultActionBaseIntrusionPolicyId = config.defaultActionBaseIntrusionPolicyId;
    this._defaultActionLogBegin = config.defaultActionLogBegin;
    this._defaultActionLogEnd = config.defaultActionLogEnd;
    this._defaultActionSendEventsToFmc = config.defaultActionSendEventsToFmc;
    this._defaultActionSyslogConfigId = config.defaultActionSyslogConfigId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // default_action_base_intrusion_policy_id - computed: false, optional: true, required: false
  private _defaultActionBaseIntrusionPolicyId?: string; 
  public get defaultActionBaseIntrusionPolicyId() {
    return this.getStringAttribute('default_action_base_intrusion_policy_id');
  }
  public set defaultActionBaseIntrusionPolicyId(value: string) {
    this._defaultActionBaseIntrusionPolicyId = value;
  }
  public resetDefaultActionBaseIntrusionPolicyId() {
    this._defaultActionBaseIntrusionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionBaseIntrusionPolicyIdInput() {
    return this._defaultActionBaseIntrusionPolicyId;
  }

  // default_action_id - computed: true, optional: false, required: false
  public get defaultActionId() {
    return this.getStringAttribute('default_action_id');
  }

  // default_action_log_begin - computed: false, optional: true, required: false
  private _defaultActionLogBegin?: boolean | cdktf.IResolvable; 
  public get defaultActionLogBegin() {
    return this.getBooleanAttribute('default_action_log_begin');
  }
  public set defaultActionLogBegin(value: boolean | cdktf.IResolvable) {
    this._defaultActionLogBegin = value;
  }
  public resetDefaultActionLogBegin() {
    this._defaultActionLogBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionLogBeginInput() {
    return this._defaultActionLogBegin;
  }

  // default_action_log_end - computed: false, optional: true, required: false
  private _defaultActionLogEnd?: boolean | cdktf.IResolvable; 
  public get defaultActionLogEnd() {
    return this.getBooleanAttribute('default_action_log_end');
  }
  public set defaultActionLogEnd(value: boolean | cdktf.IResolvable) {
    this._defaultActionLogEnd = value;
  }
  public resetDefaultActionLogEnd() {
    this._defaultActionLogEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionLogEndInput() {
    return this._defaultActionLogEnd;
  }

  // default_action_send_events_to_fmc - computed: false, optional: true, required: false
  private _defaultActionSendEventsToFmc?: boolean | cdktf.IResolvable; 
  public get defaultActionSendEventsToFmc() {
    return this.getBooleanAttribute('default_action_send_events_to_fmc');
  }
  public set defaultActionSendEventsToFmc(value: boolean | cdktf.IResolvable) {
    this._defaultActionSendEventsToFmc = value;
  }
  public resetDefaultActionSendEventsToFmc() {
    this._defaultActionSendEventsToFmc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionSendEventsToFmcInput() {
    return this._defaultActionSendEventsToFmc;
  }

  // default_action_syslog_config_id - computed: false, optional: true, required: false
  private _defaultActionSyslogConfigId?: string; 
  public get defaultActionSyslogConfigId() {
    return this.getStringAttribute('default_action_syslog_config_id');
  }
  public set defaultActionSyslogConfigId(value: string) {
    this._defaultActionSyslogConfigId = value;
  }
  public resetDefaultActionSyslogConfigId() {
    this._defaultActionSyslogConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionSyslogConfigIdInput() {
    return this._defaultActionSyslogConfigId;
  }

  // default_action_type - computed: true, optional: false, required: false
  public get defaultActionType() {
    return this.getStringAttribute('default_action_type');
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktf.stringToTerraform(this._defaultAction),
      default_action_base_intrusion_policy_id: cdktf.stringToTerraform(this._defaultActionBaseIntrusionPolicyId),
      default_action_log_begin: cdktf.booleanToTerraform(this._defaultActionLogBegin),
      default_action_log_end: cdktf.booleanToTerraform(this._defaultActionLogEnd),
      default_action_send_events_to_fmc: cdktf.booleanToTerraform(this._defaultActionSendEventsToFmc),
      default_action_syslog_config_id: cdktf.stringToTerraform(this._defaultActionSyslogConfigId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action_base_intrusion_policy_id: {
        value: cdktf.stringToHclTerraform(this._defaultActionBaseIntrusionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action_log_begin: {
        value: cdktf.booleanToHclTerraform(this._defaultActionLogBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_action_log_end: {
        value: cdktf.booleanToHclTerraform(this._defaultActionLogEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_action_send_events_to_fmc: {
        value: cdktf.booleanToHclTerraform(this._defaultActionSendEventsToFmc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_action_syslog_config_id: {
        value: cdktf.stringToHclTerraform(this._defaultActionSyslogConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
