// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpRestrictionsRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of CIDR ranges for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule#cidrs IpRestrictionsRule#cidrs}
  */
  readonly cidrs: IpRestrictionsRuleCidrs[] | cdktf.IResolvable;
  /**
  * A description of the IP restriction rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule#description IpRestrictionsRule#description}
  */
  readonly description?: string;
  /**
  * The name of the IP restriction rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule#name IpRestrictionsRule#name}
  */
  readonly name: string;
  /**
  * Whether the IP restriction rule set is enabled or not. Important!: This value needs to be the same for all rules if multiple rules are defined. All rules must be active or inactive at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule#rule_set_enabled IpRestrictionsRule#rule_set_enabled}
  */
  readonly ruleSetEnabled: boolean | cdktf.IResolvable;
  /**
  * The type of the IP restriction rule (allow or deny)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule#type IpRestrictionsRule#type}
  */
  readonly type: string;
}
export interface IpRestrictionsRuleCidrs {
  /**
  * IP CIDR range (can be IPv4 or IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule#cidr IpRestrictionsRule#cidr}
  */
  readonly cidr?: string;
}

export function ipRestrictionsRuleCidrsToTerraform(struct?: IpRestrictionsRuleCidrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function ipRestrictionsRuleCidrsToHclTerraform(struct?: IpRestrictionsRuleCidrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpRestrictionsRuleCidrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpRestrictionsRuleCidrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpRestrictionsRuleCidrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_ipv6 - computed: true, optional: false, required: false
  public get cidrIpv6() {
    return this.getStringAttribute('cidr_ipv6');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_restriction_rule_id - computed: true, optional: false, required: false
  public get ipRestrictionRuleId() {
    return this.getNumberAttribute('ip_restriction_rule_id');
  }
}

export class IpRestrictionsRuleCidrsList extends cdktf.ComplexList {
  public internalValue? : IpRestrictionsRuleCidrs[] | cdktf.IResolvable

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
  public get(index: number): IpRestrictionsRuleCidrsOutputReference {
    return new IpRestrictionsRuleCidrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule dbtcloud_ip_restrictions_rule}
*/
export class IpRestrictionsRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_ip_restrictions_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpRestrictionsRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpRestrictionsRule to import
  * @param importFromId The id of the existing IpRestrictionsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpRestrictionsRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_ip_restrictions_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/ip_restrictions_rule dbtcloud_ip_restrictions_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpRestrictionsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IpRestrictionsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_ip_restrictions_rule',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrs.internalValue = config.cidrs;
    this._description = config.description;
    this._name = config.name;
    this._ruleSetEnabled = config.ruleSetEnabled;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidrs - computed: false, optional: false, required: true
  private _cidrs = new IpRestrictionsRuleCidrsList(this, "cidrs", true);
  public get cidrs() {
    return this._cidrs;
  }
  public putCidrs(value: IpRestrictionsRuleCidrs[] | cdktf.IResolvable) {
    this._cidrs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // rule_set_enabled - computed: false, optional: false, required: true
  private _ruleSetEnabled?: boolean | cdktf.IResolvable; 
  public get ruleSetEnabled() {
    return this.getBooleanAttribute('rule_set_enabled');
  }
  public set ruleSetEnabled(value: boolean | cdktf.IResolvable) {
    this._ruleSetEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetEnabledInput() {
    return this._ruleSetEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidrs: cdktf.listMapper(ipRestrictionsRuleCidrsToTerraform, false)(this._cidrs.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rule_set_enabled: cdktf.booleanToTerraform(this._ruleSetEnabled),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidrs: {
        value: cdktf.listMapperHcl(ipRestrictionsRuleCidrsToHclTerraform, false)(this._cidrs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpRestrictionsRuleCidrsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      rule_set_enabled: {
        value: cdktf.booleanToHclTerraform(this._ruleSetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
