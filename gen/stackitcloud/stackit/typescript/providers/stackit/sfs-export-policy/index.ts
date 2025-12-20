// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsExportPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the export policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#name SfsExportPolicy#name}
  */
  readonly name: string;
  /**
  * STACKIT project ID to which the export policy is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#project_id SfsExportPolicy#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#region SfsExportPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#rules SfsExportPolicy#rules}
  */
  readonly rules?: SfsExportPolicyRules[] | cdktf.IResolvable;
}
export interface SfsExportPolicyRules {
  /**
  * Description of the Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#description SfsExportPolicy#description}
  */
  readonly description?: string;
  /**
  * IP access control list; IPs must have a subnet mask (e.g. "172.16.0.0/24" for a range of IPs, or "172.16.0.250/32" for a specific IP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#ip_acl SfsExportPolicy#ip_acl}
  */
  readonly ipAcl: string[];
  /**
  * Order of the rule within a Share Export Policy. The order is used so that when a client IP matches multiple rules, the first rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#order SfsExportPolicy#order}
  */
  readonly order: number;
  /**
  * Flag to indicate if client IPs matching this rule can only mount the share in read only mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#read_only SfsExportPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Flag to honor set UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#set_uuid SfsExportPolicy#set_uuid}
  */
  readonly setUuid?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate if client IPs matching this rule have root access on the Share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#super_user SfsExportPolicy#super_user}
  */
  readonly superUser?: boolean | cdktf.IResolvable;
}

export function sfsExportPolicyRulesToTerraform(struct?: SfsExportPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ip_acl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAcl),
    order: cdktf.numberToTerraform(struct!.order),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    set_uuid: cdktf.booleanToTerraform(struct!.setUuid),
    super_user: cdktf.booleanToTerraform(struct!.superUser),
  }
}


export function sfsExportPolicyRulesToHclTerraform(struct?: SfsExportPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_acl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAcl),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_uuid: {
      value: cdktf.booleanToHclTerraform(struct!.setUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    super_user: {
      value: cdktf.booleanToHclTerraform(struct!.superUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfsExportPolicyRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SfsExportPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAcl = this._ipAcl;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._setUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.setUuid = this._setUuid;
    }
    if (this._superUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.superUser = this._superUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfsExportPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ipAcl = undefined;
      this._order = undefined;
      this._readOnly = undefined;
      this._setUuid = undefined;
      this._superUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ipAcl = value.ipAcl;
      this._order = value.order;
      this._readOnly = value.readOnly;
      this._setUuid = value.setUuid;
      this._superUser = value.superUser;
    }
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

  // ip_acl - computed: true, optional: false, required: true
  private _ipAcl?: string[]; 
  public get ipAcl() {
    return this.getListAttribute('ip_acl');
  }
  public set ipAcl(value: string[]) {
    this._ipAcl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAclInput() {
    return this._ipAcl;
  }

  // order - computed: true, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // set_uuid - computed: true, optional: true, required: false
  private _setUuid?: boolean | cdktf.IResolvable; 
  public get setUuid() {
    return this.getBooleanAttribute('set_uuid');
  }
  public set setUuid(value: boolean | cdktf.IResolvable) {
    this._setUuid = value;
  }
  public resetSetUuid() {
    this._setUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setUuidInput() {
    return this._setUuid;
  }

  // super_user - computed: true, optional: true, required: false
  private _superUser?: boolean | cdktf.IResolvable; 
  public get superUser() {
    return this.getBooleanAttribute('super_user');
  }
  public set superUser(value: boolean | cdktf.IResolvable) {
    this._superUser = value;
  }
  public resetSuperUser() {
    this._superUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superUserInput() {
    return this._superUser;
  }
}

export class SfsExportPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : SfsExportPolicyRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SfsExportPolicyRulesOutputReference {
    return new SfsExportPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy stackit_sfs_export_policy}
*/
export class SfsExportPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_sfs_export_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SfsExportPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SfsExportPolicy to import
  * @param importFromId The id of the existing SfsExportPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SfsExportPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_sfs_export_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_export_policy stackit_sfs_export_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsExportPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SfsExportPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_sfs_export_policy',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new SfsExportPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SfsExportPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      rules: cdktf.listMapper(sfsExportPolicyRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(sfsExportPolicyRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SfsExportPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
