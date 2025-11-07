// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VdcGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default Policy Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#default_policy_status VdcGroup#default_policy_status}
  */
  readonly defaultPolicyStatus?: boolean | cdktf.IResolvable;
  /**
  * VDC group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#description VdcGroup#description}
  */
  readonly description?: string;
  /**
  * Distributed firewall status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#dfw_enabled VdcGroup#dfw_enabled}
  */
  readonly dfwEnabled?: boolean | cdktf.IResolvable;
  /**
  * Forces deletion of VDC Group during destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#force_delete VdcGroup#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#id VdcGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of VDC group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#name VdcGroup#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#org VdcGroup#org}
  */
  readonly org?: string;
  /**
  * Participating VDC IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#participating_vdc_ids VdcGroup#participating_vdc_ids}
  */
  readonly participatingVdcIds: string[];
  /**
  * A flag to remove default firewall rule when DFW and Default Policy are both enabled 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#remove_default_firewall_rule VdcGroup#remove_default_firewall_rule}
  */
  readonly removeDefaultFirewallRule?: boolean | cdktf.IResolvable;
  /**
  * Starting VDC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#starting_vdc_id VdcGroup#starting_vdc_id}
  */
  readonly startingVdcId: string;
}
export interface VdcGroupParticipatingOrgVdcs {
}

export function vdcGroupParticipatingOrgVdcsToTerraform(struct?: VdcGroupParticipatingOrgVdcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vdcGroupParticipatingOrgVdcsToHclTerraform(struct?: VdcGroupParticipatingOrgVdcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VdcGroupParticipatingOrgVdcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VdcGroupParticipatingOrgVdcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdcGroupParticipatingOrgVdcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fault_domain_tag - computed: true, optional: false, required: false
  public get faultDomainTag() {
    return this.getStringAttribute('fault_domain_tag');
  }

  // is_remote_org - computed: true, optional: false, required: false
  public get isRemoteOrg() {
    return this.getBooleanAttribute('is_remote_org');
  }

  // network_provider_scope - computed: true, optional: false, required: false
  public get networkProviderScope() {
    return this.getStringAttribute('network_provider_scope');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vdc_id - computed: true, optional: false, required: false
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }

  // vdc_name - computed: true, optional: false, required: false
  public get vdcName() {
    return this.getStringAttribute('vdc_name');
  }
}

export class VdcGroupParticipatingOrgVdcsList extends cdktf.ComplexList {

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
  public get(index: number): VdcGroupParticipatingOrgVdcsOutputReference {
    return new VdcGroupParticipatingOrgVdcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group vcd_vdc_group}
*/
export class VdcGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vdc_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VdcGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VdcGroup to import
  * @param importFromId The id of the existing VdcGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VdcGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vdc_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vdc_group vcd_vdc_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VdcGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VdcGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vdc_group',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultPolicyStatus = config.defaultPolicyStatus;
    this._description = config.description;
    this._dfwEnabled = config.dfwEnabled;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._name = config.name;
    this._org = config.org;
    this._participatingVdcIds = config.participatingVdcIds;
    this._removeDefaultFirewallRule = config.removeDefaultFirewallRule;
    this._startingVdcId = config.startingVdcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_policy_status - computed: true, optional: true, required: false
  private _defaultPolicyStatus?: boolean | cdktf.IResolvable; 
  public get defaultPolicyStatus() {
    return this.getBooleanAttribute('default_policy_status');
  }
  public set defaultPolicyStatus(value: boolean | cdktf.IResolvable) {
    this._defaultPolicyStatus = value;
  }
  public resetDefaultPolicyStatus() {
    this._defaultPolicyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyStatusInput() {
    return this._defaultPolicyStatus;
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

  // dfw_enabled - computed: true, optional: true, required: false
  private _dfwEnabled?: boolean | cdktf.IResolvable; 
  public get dfwEnabled() {
    return this.getBooleanAttribute('dfw_enabled');
  }
  public set dfwEnabled(value: boolean | cdktf.IResolvable) {
    this._dfwEnabled = value;
  }
  public resetDfwEnabled() {
    this._dfwEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfwEnabledInput() {
    return this._dfwEnabled;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // local_egress - computed: true, optional: false, required: false
  public get localEgress() {
    return this.getBooleanAttribute('local_egress');
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

  // network_pool_id - computed: true, optional: false, required: false
  public get networkPoolId() {
    return this.getStringAttribute('network_pool_id');
  }

  // network_pool_universal_id - computed: true, optional: false, required: false
  public get networkPoolUniversalId() {
    return this.getStringAttribute('network_pool_universal_id');
  }

  // network_provider_type - computed: true, optional: false, required: false
  public get networkProviderType() {
    return this.getStringAttribute('network_provider_type');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // participating_org_vdcs - computed: true, optional: false, required: false
  private _participatingOrgVdcs = new VdcGroupParticipatingOrgVdcsList(this, "participating_org_vdcs", true);
  public get participatingOrgVdcs() {
    return this._participatingOrgVdcs;
  }

  // participating_vdc_ids - computed: false, optional: false, required: true
  private _participatingVdcIds?: string[]; 
  public get participatingVdcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('participating_vdc_ids'));
  }
  public set participatingVdcIds(value: string[]) {
    this._participatingVdcIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get participatingVdcIdsInput() {
    return this._participatingVdcIds;
  }

  // remove_default_firewall_rule - computed: false, optional: true, required: false
  private _removeDefaultFirewallRule?: boolean | cdktf.IResolvable; 
  public get removeDefaultFirewallRule() {
    return this.getBooleanAttribute('remove_default_firewall_rule');
  }
  public set removeDefaultFirewallRule(value: boolean | cdktf.IResolvable) {
    this._removeDefaultFirewallRule = value;
  }
  public resetRemoveDefaultFirewallRule() {
    this._removeDefaultFirewallRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDefaultFirewallRuleInput() {
    return this._removeDefaultFirewallRule;
  }

  // starting_vdc_id - computed: false, optional: false, required: true
  private _startingVdcId?: string; 
  public get startingVdcId() {
    return this.getStringAttribute('starting_vdc_id');
  }
  public set startingVdcId(value: string) {
    this._startingVdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingVdcIdInput() {
    return this._startingVdcId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // universal_networking_enabled - computed: true, optional: false, required: false
  public get universalNetworkingEnabled() {
    return this.getBooleanAttribute('universal_networking_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_policy_status: cdktf.booleanToTerraform(this._defaultPolicyStatus),
      description: cdktf.stringToTerraform(this._description),
      dfw_enabled: cdktf.booleanToTerraform(this._dfwEnabled),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      participating_vdc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._participatingVdcIds),
      remove_default_firewall_rule: cdktf.booleanToTerraform(this._removeDefaultFirewallRule),
      starting_vdc_id: cdktf.stringToTerraform(this._startingVdcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_policy_status: {
        value: cdktf.booleanToHclTerraform(this._defaultPolicyStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfw_enabled: {
        value: cdktf.booleanToHclTerraform(this._dfwEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      participating_vdc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._participatingVdcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remove_default_firewall_rule: {
        value: cdktf.booleanToHclTerraform(this._removeDefaultFirewallRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      starting_vdc_id: {
        value: cdktf.stringToHclTerraform(this._startingVdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
