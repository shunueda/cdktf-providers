// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAdaptivePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An ordered array of adaptive policy ACLs (each requires one unique attribute) that apply to this policy (default: [])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#acls OrganizationAdaptivePolicy#acls}
  */
  readonly acls?: OrganizationAdaptivePolicyAcls[] | cdktf.IResolvable;
  /**
  * The ID of the destination adaptive policy group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#destination_group_id OrganizationAdaptivePolicy#destination_group_id}
  */
  readonly destinationGroupId?: string;
  /**
  * The name of the destination adaptive policy group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#destination_group_name OrganizationAdaptivePolicy#destination_group_name}
  */
  readonly destinationGroupName?: string;
  /**
  * The SGT of the destination adaptive policy group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#destination_group_sgt OrganizationAdaptivePolicy#destination_group_sgt}
  */
  readonly destinationGroupSgt?: number;
  /**
  * The rule to apply if there is no matching ACL (default: 'default')
  *   - Choices: `allow`, `default`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#last_entry_rule OrganizationAdaptivePolicy#last_entry_rule}
  */
  readonly lastEntryRule?: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#organization_id OrganizationAdaptivePolicy#organization_id}
  */
  readonly organizationId: string;
  /**
  * The ID of the source adaptive policy group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#source_group_id OrganizationAdaptivePolicy#source_group_id}
  */
  readonly sourceGroupId?: string;
  /**
  * The name of the source adaptive policy group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#source_group_name OrganizationAdaptivePolicy#source_group_name}
  */
  readonly sourceGroupName?: string;
  /**
  * The SGT of the source adaptive policy group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#source_group_sgt OrganizationAdaptivePolicy#source_group_sgt}
  */
  readonly sourceGroupSgt?: number;
}
export interface OrganizationAdaptivePolicyAcls {
  /**
  * The ID of the adaptive policy ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#id OrganizationAdaptivePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the adaptive policy ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#name OrganizationAdaptivePolicy#name}
  */
  readonly name?: string;
}

export function organizationAdaptivePolicyAclsToTerraform(struct?: OrganizationAdaptivePolicyAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function organizationAdaptivePolicyAclsToHclTerraform(struct?: OrganizationAdaptivePolicyAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationAdaptivePolicyAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationAdaptivePolicyAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationAdaptivePolicyAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class OrganizationAdaptivePolicyAclsList extends cdktf.ComplexList {
  public internalValue? : OrganizationAdaptivePolicyAcls[] | cdktf.IResolvable

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
  public get(index: number): OrganizationAdaptivePolicyAclsOutputReference {
    return new OrganizationAdaptivePolicyAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy meraki_organization_adaptive_policy}
*/
export class OrganizationAdaptivePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_adaptive_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationAdaptivePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationAdaptivePolicy to import
  * @param importFromId The id of the existing OrganizationAdaptivePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationAdaptivePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_adaptive_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy meraki_organization_adaptive_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationAdaptivePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationAdaptivePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_adaptive_policy',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
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
    this._acls.internalValue = config.acls;
    this._destinationGroupId = config.destinationGroupId;
    this._destinationGroupName = config.destinationGroupName;
    this._destinationGroupSgt = config.destinationGroupSgt;
    this._lastEntryRule = config.lastEntryRule;
    this._organizationId = config.organizationId;
    this._sourceGroupId = config.sourceGroupId;
    this._sourceGroupName = config.sourceGroupName;
    this._sourceGroupSgt = config.sourceGroupSgt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acls - computed: false, optional: true, required: false
  private _acls = new OrganizationAdaptivePolicyAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: OrganizationAdaptivePolicyAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // destination_group_id - computed: false, optional: true, required: false
  private _destinationGroupId?: string; 
  public get destinationGroupId() {
    return this.getStringAttribute('destination_group_id');
  }
  public set destinationGroupId(value: string) {
    this._destinationGroupId = value;
  }
  public resetDestinationGroupId() {
    this._destinationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupIdInput() {
    return this._destinationGroupId;
  }

  // destination_group_name - computed: false, optional: true, required: false
  private _destinationGroupName?: string; 
  public get destinationGroupName() {
    return this.getStringAttribute('destination_group_name');
  }
  public set destinationGroupName(value: string) {
    this._destinationGroupName = value;
  }
  public resetDestinationGroupName() {
    this._destinationGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupNameInput() {
    return this._destinationGroupName;
  }

  // destination_group_sgt - computed: false, optional: true, required: false
  private _destinationGroupSgt?: number; 
  public get destinationGroupSgt() {
    return this.getNumberAttribute('destination_group_sgt');
  }
  public set destinationGroupSgt(value: number) {
    this._destinationGroupSgt = value;
  }
  public resetDestinationGroupSgt() {
    this._destinationGroupSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupSgtInput() {
    return this._destinationGroupSgt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_entry_rule - computed: false, optional: true, required: false
  private _lastEntryRule?: string; 
  public get lastEntryRule() {
    return this.getStringAttribute('last_entry_rule');
  }
  public set lastEntryRule(value: string) {
    this._lastEntryRule = value;
  }
  public resetLastEntryRule() {
    this._lastEntryRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastEntryRuleInput() {
    return this._lastEntryRule;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // source_group_id - computed: false, optional: true, required: false
  private _sourceGroupId?: string; 
  public get sourceGroupId() {
    return this.getStringAttribute('source_group_id');
  }
  public set sourceGroupId(value: string) {
    this._sourceGroupId = value;
  }
  public resetSourceGroupId() {
    this._sourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupIdInput() {
    return this._sourceGroupId;
  }

  // source_group_name - computed: false, optional: true, required: false
  private _sourceGroupName?: string; 
  public get sourceGroupName() {
    return this.getStringAttribute('source_group_name');
  }
  public set sourceGroupName(value: string) {
    this._sourceGroupName = value;
  }
  public resetSourceGroupName() {
    this._sourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupNameInput() {
    return this._sourceGroupName;
  }

  // source_group_sgt - computed: false, optional: true, required: false
  private _sourceGroupSgt?: number; 
  public get sourceGroupSgt() {
    return this.getNumberAttribute('source_group_sgt');
  }
  public set sourceGroupSgt(value: number) {
    this._sourceGroupSgt = value;
  }
  public resetSourceGroupSgt() {
    this._sourceGroupSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupSgtInput() {
    return this._sourceGroupSgt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acls: cdktf.listMapper(organizationAdaptivePolicyAclsToTerraform, false)(this._acls.internalValue),
      destination_group_id: cdktf.stringToTerraform(this._destinationGroupId),
      destination_group_name: cdktf.stringToTerraform(this._destinationGroupName),
      destination_group_sgt: cdktf.numberToTerraform(this._destinationGroupSgt),
      last_entry_rule: cdktf.stringToTerraform(this._lastEntryRule),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      source_group_id: cdktf.stringToTerraform(this._sourceGroupId),
      source_group_name: cdktf.stringToTerraform(this._sourceGroupName),
      source_group_sgt: cdktf.numberToTerraform(this._sourceGroupSgt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acls: {
        value: cdktf.listMapperHcl(organizationAdaptivePolicyAclsToHclTerraform, false)(this._acls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationAdaptivePolicyAclsList",
      },
      destination_group_id: {
        value: cdktf.stringToHclTerraform(this._destinationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_group_name: {
        value: cdktf.stringToHclTerraform(this._destinationGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_group_sgt: {
        value: cdktf.numberToHclTerraform(this._destinationGroupSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_entry_rule: {
        value: cdktf.stringToHclTerraform(this._lastEntryRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_group_id: {
        value: cdktf.stringToHclTerraform(this._sourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_group_name: {
        value: cdktf.stringToHclTerraform(this._sourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_group_sgt: {
        value: cdktf.numberToHclTerraform(this._sourceGroupSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
