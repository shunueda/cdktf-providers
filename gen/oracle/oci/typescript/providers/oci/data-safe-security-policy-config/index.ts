// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSecurityPolicyConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#compartment_id DataSafeSecurityPolicyConfigA#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#defined_tags DataSafeSecurityPolicyConfigA#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#description DataSafeSecurityPolicyConfigA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#display_name DataSafeSecurityPolicyConfigA#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#freeform_tags DataSafeSecurityPolicyConfigA#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#id DataSafeSecurityPolicyConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#security_policy_id DataSafeSecurityPolicyConfigA#security_policy_id}
  */
  readonly securityPolicyId: string;
  /**
  * firewall_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#firewall_config DataSafeSecurityPolicyConfigA#firewall_config}
  */
  readonly firewallConfig?: DataSafeSecurityPolicyConfigFirewallConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#timeouts DataSafeSecurityPolicyConfigA#timeouts}
  */
  readonly timeouts?: DataSafeSecurityPolicyConfigTimeouts;
  /**
  * unified_audit_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#unified_audit_policy_config DataSafeSecurityPolicyConfigA#unified_audit_policy_config}
  */
  readonly unifiedAuditPolicyConfig?: DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfig;
}
export interface DataSafeSecurityPolicyConfigFirewallConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#exclude_job DataSafeSecurityPolicyConfigA#exclude_job}
  */
  readonly excludeJob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#status DataSafeSecurityPolicyConfigA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#violation_log_auto_purge DataSafeSecurityPolicyConfigA#violation_log_auto_purge}
  */
  readonly violationLogAutoPurge?: string;
}

export function dataSafeSecurityPolicyConfigFirewallConfigToTerraform(struct?: DataSafeSecurityPolicyConfigFirewallConfigOutputReference | DataSafeSecurityPolicyConfigFirewallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_job: cdktf.stringToTerraform(struct!.excludeJob),
    status: cdktf.stringToTerraform(struct!.status),
    violation_log_auto_purge: cdktf.stringToTerraform(struct!.violationLogAutoPurge),
  }
}


export function dataSafeSecurityPolicyConfigFirewallConfigToHclTerraform(struct?: DataSafeSecurityPolicyConfigFirewallConfigOutputReference | DataSafeSecurityPolicyConfigFirewallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_job: {
      value: cdktf.stringToHclTerraform(struct!.excludeJob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violation_log_auto_purge: {
      value: cdktf.stringToHclTerraform(struct!.violationLogAutoPurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSecurityPolicyConfigFirewallConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeSecurityPolicyConfigFirewallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeJob !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeJob = this._excludeJob;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._violationLogAutoPurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationLogAutoPurge = this._violationLogAutoPurge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityPolicyConfigFirewallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeJob = undefined;
      this._status = undefined;
      this._violationLogAutoPurge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeJob = value.excludeJob;
      this._status = value.status;
      this._violationLogAutoPurge = value.violationLogAutoPurge;
    }
  }

  // exclude_job - computed: true, optional: true, required: false
  private _excludeJob?: string; 
  public get excludeJob() {
    return this.getStringAttribute('exclude_job');
  }
  public set excludeJob(value: string) {
    this._excludeJob = value;
  }
  public resetExcludeJob() {
    this._excludeJob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeJobInput() {
    return this._excludeJob;
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

  // time_status_updated - computed: true, optional: false, required: false
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }

  // violation_log_auto_purge - computed: true, optional: true, required: false
  private _violationLogAutoPurge?: string; 
  public get violationLogAutoPurge() {
    return this.getStringAttribute('violation_log_auto_purge');
  }
  public set violationLogAutoPurge(value: string) {
    this._violationLogAutoPurge = value;
  }
  public resetViolationLogAutoPurge() {
    this._violationLogAutoPurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationLogAutoPurgeInput() {
    return this._violationLogAutoPurge;
  }
}
export interface DataSafeSecurityPolicyConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#create DataSafeSecurityPolicyConfigA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#delete DataSafeSecurityPolicyConfigA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#update DataSafeSecurityPolicyConfigA#update}
  */
  readonly update?: string;
}

export function dataSafeSecurityPolicyConfigTimeoutsToTerraform(struct?: DataSafeSecurityPolicyConfigTimeouts | cdktf.IResolvable): any {
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


export function dataSafeSecurityPolicyConfigTimeoutsToHclTerraform(struct?: DataSafeSecurityPolicyConfigTimeouts | cdktf.IResolvable): any {
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

export class DataSafeSecurityPolicyConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSecurityPolicyConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeSecurityPolicyConfigTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#exclude_datasafe_user DataSafeSecurityPolicyConfigA#exclude_datasafe_user}
  */
  readonly excludeDatasafeUser?: string;
}

export function dataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigToTerraform(struct?: DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigOutputReference | DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_datasafe_user: cdktf.stringToTerraform(struct!.excludeDatasafeUser),
  }
}


export function dataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigToHclTerraform(struct?: DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigOutputReference | DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_datasafe_user: {
      value: cdktf.stringToHclTerraform(struct!.excludeDatasafeUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeDatasafeUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDatasafeUser = this._excludeDatasafeUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeDatasafeUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeDatasafeUser = value.excludeDatasafeUser;
    }
  }

  // exclude_datasafe_user - computed: true, optional: true, required: false
  private _excludeDatasafeUser?: string; 
  public get excludeDatasafeUser() {
    return this.getStringAttribute('exclude_datasafe_user');
  }
  public set excludeDatasafeUser(value: string) {
    this._excludeDatasafeUser = value;
  }
  public resetExcludeDatasafeUser() {
    this._excludeDatasafeUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDatasafeUserInput() {
    return this._excludeDatasafeUser;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config oci_data_safe_security_policy_config}
*/
export class DataSafeSecurityPolicyConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_policy_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSecurityPolicyConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSecurityPolicyConfigA to import
  * @param importFromId The id of the existing DataSafeSecurityPolicyConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSecurityPolicyConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_policy_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_security_policy_config oci_data_safe_security_policy_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSecurityPolicyConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSecurityPolicyConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_policy_config',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
    this._firewallConfig.internalValue = config.firewallConfig;
    this._timeouts.internalValue = config.timeouts;
    this._unifiedAuditPolicyConfig.internalValue = config.unifiedAuditPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // firewall_config - computed: false, optional: true, required: false
  private _firewallConfig = new DataSafeSecurityPolicyConfigFirewallConfigOutputReference(this, "firewall_config");
  public get firewallConfig() {
    return this._firewallConfig;
  }
  public putFirewallConfig(value: DataSafeSecurityPolicyConfigFirewallConfig) {
    this._firewallConfig.internalValue = value;
  }
  public resetFirewallConfig() {
    this._firewallConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallConfigInput() {
    return this._firewallConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSecurityPolicyConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSecurityPolicyConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // unified_audit_policy_config - computed: false, optional: true, required: false
  private _unifiedAuditPolicyConfig = new DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigOutputReference(this, "unified_audit_policy_config");
  public get unifiedAuditPolicyConfig() {
    return this._unifiedAuditPolicyConfig;
  }
  public putUnifiedAuditPolicyConfig(value: DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfig) {
    this._unifiedAuditPolicyConfig.internalValue = value;
  }
  public resetUnifiedAuditPolicyConfig() {
    this._unifiedAuditPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAuditPolicyConfigInput() {
    return this._unifiedAuditPolicyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      firewall_config: dataSafeSecurityPolicyConfigFirewallConfigToTerraform(this._firewallConfig.internalValue),
      timeouts: dataSafeSecurityPolicyConfigTimeoutsToTerraform(this._timeouts.internalValue),
      unified_audit_policy_config: dataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigToTerraform(this._unifiedAuditPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_config: {
        value: dataSafeSecurityPolicyConfigFirewallConfigToHclTerraform(this._firewallConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeSecurityPolicyConfigFirewallConfigList",
      },
      timeouts: {
        value: dataSafeSecurityPolicyConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSecurityPolicyConfigTimeouts",
      },
      unified_audit_policy_config: {
        value: dataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigToHclTerraform(this._unifiedAuditPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeSecurityPolicyConfigUnifiedAuditPolicyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
