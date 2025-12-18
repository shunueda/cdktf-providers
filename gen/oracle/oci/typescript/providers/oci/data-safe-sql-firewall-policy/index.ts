// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSqlFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}
  */
  readonly allowedClientIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}
  */
  readonly allowedClientOsUsernames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}
  */
  readonly allowedClientPrograms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}
  */
  readonly enforcementScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}
  */
  readonly sqlFirewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}
  */
  readonly violationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}
  */
  readonly violationAudit?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#timeouts DataSafeSqlFirewallPolicy#timeouts}
  */
  readonly timeouts?: DataSafeSqlFirewallPolicyTimeouts;
}
export interface DataSafeSqlFirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#create DataSafeSqlFirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#delete DataSafeSqlFirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#update DataSafeSqlFirewallPolicy#update}
  */
  readonly update?: string;
}

export function dataSafeSqlFirewallPolicyTimeoutsToTerraform(struct?: DataSafeSqlFirewallPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataSafeSqlFirewallPolicyTimeoutsToHclTerraform(struct?: DataSafeSqlFirewallPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSqlFirewallPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSqlFirewallPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSqlFirewallPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy oci_data_safe_sql_firewall_policy}
*/
export class DataSafeSqlFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sql_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSqlFirewallPolicy to import
  * @param importFromId The id of the existing DataSafeSqlFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSqlFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sql_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sql_firewall_policy oci_data_safe_sql_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSqlFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSqlFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sql_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedClientIps = config.allowedClientIps;
    this._allowedClientOsUsernames = config.allowedClientOsUsernames;
    this._allowedClientPrograms = config.allowedClientPrograms;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enforcementScope = config.enforcementScope;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._sqlFirewallPolicyId = config.sqlFirewallPolicyId;
    this._status = config.status;
    this._violationAction = config.violationAction;
    this._violationAudit = config.violationAudit;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_client_ips - computed: true, optional: true, required: false
  private _allowedClientIps?: string[]; 
  public get allowedClientIps() {
    return this.getListAttribute('allowed_client_ips');
  }
  public set allowedClientIps(value: string[]) {
    this._allowedClientIps = value;
  }
  public resetAllowedClientIps() {
    this._allowedClientIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientIpsInput() {
    return this._allowedClientIps;
  }

  // allowed_client_os_usernames - computed: true, optional: true, required: false
  private _allowedClientOsUsernames?: string[]; 
  public get allowedClientOsUsernames() {
    return this.getListAttribute('allowed_client_os_usernames');
  }
  public set allowedClientOsUsernames(value: string[]) {
    this._allowedClientOsUsernames = value;
  }
  public resetAllowedClientOsUsernames() {
    this._allowedClientOsUsernames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientOsUsernamesInput() {
    return this._allowedClientOsUsernames;
  }

  // allowed_client_programs - computed: true, optional: true, required: false
  private _allowedClientPrograms?: string[]; 
  public get allowedClientPrograms() {
    return this.getListAttribute('allowed_client_programs');
  }
  public set allowedClientPrograms(value: string[]) {
    this._allowedClientPrograms = value;
  }
  public resetAllowedClientPrograms() {
    this._allowedClientPrograms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientProgramsInput() {
    return this._allowedClientPrograms;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // db_user_name - computed: true, optional: false, required: false
  public get dbUserName() {
    return this.getStringAttribute('db_user_name');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enforcement_scope - computed: true, optional: true, required: false
  private _enforcementScope?: string; 
  public get enforcementScope() {
    return this.getStringAttribute('enforcement_scope');
  }
  public set enforcementScope(value: string) {
    this._enforcementScope = value;
  }
  public resetEnforcementScope() {
    this._enforcementScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementScopeInput() {
    return this._enforcementScope;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // security_policy_id - computed: true, optional: false, required: false
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }

  // sql_firewall_policy_id - computed: false, optional: false, required: true
  private _sqlFirewallPolicyId?: string; 
  public get sqlFirewallPolicyId() {
    return this.getStringAttribute('sql_firewall_policy_id');
  }
  public set sqlFirewallPolicyId(value: string) {
    this._sqlFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFirewallPolicyIdInput() {
    return this._sqlFirewallPolicyId;
  }

  // sql_level - computed: true, optional: false, required: false
  public get sqlLevel() {
    return this.getStringAttribute('sql_level');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // violation_action - computed: true, optional: true, required: false
  private _violationAction?: string; 
  public get violationAction() {
    return this.getStringAttribute('violation_action');
  }
  public set violationAction(value: string) {
    this._violationAction = value;
  }
  public resetViolationAction() {
    this._violationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationActionInput() {
    return this._violationAction;
  }

  // violation_audit - computed: true, optional: true, required: false
  private _violationAudit?: string; 
  public get violationAudit() {
    return this.getStringAttribute('violation_audit');
  }
  public set violationAudit(value: string) {
    this._violationAudit = value;
  }
  public resetViolationAudit() {
    this._violationAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationAuditInput() {
    return this._violationAudit;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSqlFirewallPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSqlFirewallPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_client_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedClientIps),
      allowed_client_os_usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedClientOsUsernames),
      allowed_client_programs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedClientPrograms),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enforcement_scope: cdktf.stringToTerraform(this._enforcementScope),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      sql_firewall_policy_id: cdktf.stringToTerraform(this._sqlFirewallPolicyId),
      status: cdktf.stringToTerraform(this._status),
      violation_action: cdktf.stringToTerraform(this._violationAction),
      violation_audit: cdktf.stringToTerraform(this._violationAudit),
      timeouts: dataSafeSqlFirewallPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_client_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedClientIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_client_os_usernames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedClientOsUsernames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_client_programs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedClientPrograms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_scope: {
        value: cdktf.stringToHclTerraform(this._enforcementScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._sqlFirewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violation_action: {
        value: cdktf.stringToHclTerraform(this._violationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violation_audit: {
        value: cdktf.stringToHclTerraform(this._violationAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeSqlFirewallPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSqlFirewallPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
