// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceOrganizationSecurityIntrusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets a list of specific SNORT signatures to allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion#allowed_rules ApplianceOrganizationSecurityIntrusion#allowed_rules}
  */
  readonly allowedRules: ApplianceOrganizationSecurityIntrusionAllowedRules[] | cdktf.IResolvable;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion#organization_id ApplianceOrganizationSecurityIntrusion#organization_id}
  */
  readonly organizationId: string;
}
export interface ApplianceOrganizationSecurityIntrusionAllowedRules {
  /**
  * Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion#message ApplianceOrganizationSecurityIntrusion#message}
  */
  readonly message?: string;
  /**
  * A rule identifier of the format meraki:intrusion/snort/GID//SID/. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion#rule_id ApplianceOrganizationSecurityIntrusion#rule_id}
  */
  readonly ruleId: string;
}

export function applianceOrganizationSecurityIntrusionAllowedRulesToTerraform(struct?: ApplianceOrganizationSecurityIntrusionAllowedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
  }
}


export function applianceOrganizationSecurityIntrusionAllowedRulesToHclTerraform(struct?: ApplianceOrganizationSecurityIntrusionAllowedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceOrganizationSecurityIntrusionAllowedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceOrganizationSecurityIntrusionAllowedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceOrganizationSecurityIntrusionAllowedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._ruleId = value.ruleId;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class ApplianceOrganizationSecurityIntrusionAllowedRulesList extends cdktf.ComplexList {
  public internalValue? : ApplianceOrganizationSecurityIntrusionAllowedRules[] | cdktf.IResolvable

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
  public get(index: number): ApplianceOrganizationSecurityIntrusionAllowedRulesOutputReference {
    return new ApplianceOrganizationSecurityIntrusionAllowedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion meraki_appliance_organization_security_intrusion}
*/
export class ApplianceOrganizationSecurityIntrusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_organization_security_intrusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceOrganizationSecurityIntrusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceOrganizationSecurityIntrusion to import
  * @param importFromId The id of the existing ApplianceOrganizationSecurityIntrusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceOrganizationSecurityIntrusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_organization_security_intrusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_organization_security_intrusion meraki_appliance_organization_security_intrusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceOrganizationSecurityIntrusionConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceOrganizationSecurityIntrusionConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_organization_security_intrusion',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedRules.internalValue = config.allowedRules;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_rules - computed: false, optional: false, required: true
  private _allowedRules = new ApplianceOrganizationSecurityIntrusionAllowedRulesList(this, "allowed_rules", false);
  public get allowedRules() {
    return this._allowedRules;
  }
  public putAllowedRules(value: ApplianceOrganizationSecurityIntrusionAllowedRules[] | cdktf.IResolvable) {
    this._allowedRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRulesInput() {
    return this._allowedRules.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_rules: cdktf.listMapper(applianceOrganizationSecurityIntrusionAllowedRulesToTerraform, false)(this._allowedRules.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_rules: {
        value: cdktf.listMapperHcl(applianceOrganizationSecurityIntrusionAllowedRulesToHclTerraform, false)(this._allowedRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceOrganizationSecurityIntrusionAllowedRulesList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
