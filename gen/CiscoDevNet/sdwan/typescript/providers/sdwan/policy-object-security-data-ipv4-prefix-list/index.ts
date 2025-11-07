// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectSecurityDataIpv4PrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list#description PolicyObjectSecurityDataIpv4PrefixList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list#entries PolicyObjectSecurityDataIpv4PrefixList#entries}
  */
  readonly entries: PolicyObjectSecurityDataIpv4PrefixListEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list#feature_profile_id PolicyObjectSecurityDataIpv4PrefixList#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list#name PolicyObjectSecurityDataIpv4PrefixList#name}
  */
  readonly name: string;
}
export interface PolicyObjectSecurityDataIpv4PrefixListEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list#ip_prefix PolicyObjectSecurityDataIpv4PrefixList#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list#ip_prefix_variable PolicyObjectSecurityDataIpv4PrefixList#ip_prefix_variable}
  */
  readonly ipPrefixVariable?: string;
}

export function policyObjectSecurityDataIpv4PrefixListEntriesToTerraform(struct?: PolicyObjectSecurityDataIpv4PrefixListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_prefix: cdktf.stringToTerraform(struct!.ipPrefix),
    ip_prefix_variable: cdktf.stringToTerraform(struct!.ipPrefixVariable),
  }
}


export function policyObjectSecurityDataIpv4PrefixListEntriesToHclTerraform(struct?: PolicyObjectSecurityDataIpv4PrefixListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyObjectSecurityDataIpv4PrefixListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyObjectSecurityDataIpv4PrefixListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefix = this._ipPrefix;
    }
    if (this._ipPrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixVariable = this._ipPrefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyObjectSecurityDataIpv4PrefixListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPrefix = undefined;
      this._ipPrefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPrefix = value.ipPrefix;
      this._ipPrefixVariable = value.ipPrefixVariable;
    }
  }

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // ip_prefix_variable - computed: false, optional: true, required: false
  private _ipPrefixVariable?: string; 
  public get ipPrefixVariable() {
    return this.getStringAttribute('ip_prefix_variable');
  }
  public set ipPrefixVariable(value: string) {
    this._ipPrefixVariable = value;
  }
  public resetIpPrefixVariable() {
    this._ipPrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixVariableInput() {
    return this._ipPrefixVariable;
  }
}

export class PolicyObjectSecurityDataIpv4PrefixListEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyObjectSecurityDataIpv4PrefixListEntries[] | cdktf.IResolvable

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
  public get(index: number): PolicyObjectSecurityDataIpv4PrefixListEntriesOutputReference {
    return new PolicyObjectSecurityDataIpv4PrefixListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list sdwan_policy_object_security_data_ipv4_prefix_list}
*/
export class PolicyObjectSecurityDataIpv4PrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_security_data_ipv4_prefix_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectSecurityDataIpv4PrefixList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectSecurityDataIpv4PrefixList to import
  * @param importFromId The id of the existing PolicyObjectSecurityDataIpv4PrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectSecurityDataIpv4PrefixList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_security_data_ipv4_prefix_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_data_ipv4_prefix_list sdwan_policy_object_security_data_ipv4_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectSecurityDataIpv4PrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectSecurityDataIpv4PrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_security_data_ipv4_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._entries.internalValue = config.entries;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entries - computed: false, optional: false, required: true
  private _entries = new PolicyObjectSecurityDataIpv4PrefixListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: PolicyObjectSecurityDataIpv4PrefixListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(policyObjectSecurityDataIpv4PrefixListEntriesToTerraform, false)(this._entries.internalValue),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(policyObjectSecurityDataIpv4PrefixListEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyObjectSecurityDataIpv4PrefixListEntriesList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
