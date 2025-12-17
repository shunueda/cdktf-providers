// https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformTenantIsolationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of tenants that are allowed to connect with your tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy#allowed_tenants PowerplatformTenantIsolationPolicy#allowed_tenants}
  */
  readonly allowedTenants: PowerplatformTenantIsolationPolicyAllowedTenants[] | cdktf.IResolvable;
  /**
  * Whether the tenant isolation policy is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy#is_disabled PowerplatformTenantIsolationPolicy#is_disabled}
  */
  readonly isDisabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy#timeouts PowerplatformTenantIsolationPolicy#timeouts}
  */
  readonly timeouts?: PowerplatformTenantIsolationPolicyTimeouts;
}
export interface PowerplatformTenantIsolationPolicyAllowedTenants {
  /**
  * Whether inbound connections from this tenant are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy#inbound PowerplatformTenantIsolationPolicy#inbound}
  */
  readonly inbound: boolean | cdktf.IResolvable;
  /**
  * Whether outbound connections to this tenant are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy#outbound PowerplatformTenantIsolationPolicy#outbound}
  */
  readonly outbound: boolean | cdktf.IResolvable;
  /**
  * ID of the tenant that is allowed to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy#tenant_id PowerplatformTenantIsolationPolicy#tenant_id}
  */
  readonly tenantId: string;
}

export function powerplatformTenantIsolationPolicyAllowedTenantsToTerraform(struct?: PowerplatformTenantIsolationPolicyAllowedTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.booleanToTerraform(struct!.inbound),
    outbound: cdktf.booleanToTerraform(struct!.outbound),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function powerplatformTenantIsolationPolicyAllowedTenantsToHclTerraform(struct?: PowerplatformTenantIsolationPolicyAllowedTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.booleanToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outbound: {
      value: cdktf.booleanToHclTerraform(struct!.outbound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformTenantIsolationPolicyAllowedTenantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformTenantIsolationPolicyAllowedTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._outbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantIsolationPolicyAllowedTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound = undefined;
      this._outbound = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound = value.inbound;
      this._outbound = value.outbound;
      this._tenantId = value.tenantId;
    }
  }

  // inbound - computed: false, optional: false, required: true
  private _inbound?: boolean | cdktf.IResolvable; 
  public get inbound() {
    return this.getBooleanAttribute('inbound');
  }
  public set inbound(value: boolean | cdktf.IResolvable) {
    this._inbound = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // outbound - computed: false, optional: false, required: true
  private _outbound?: boolean | cdktf.IResolvable; 
  public get outbound() {
    return this.getBooleanAttribute('outbound');
  }
  public set outbound(value: boolean | cdktf.IResolvable) {
    this._outbound = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class PowerplatformTenantIsolationPolicyAllowedTenantsList extends cdktf.ComplexList {
  public internalValue? : PowerplatformTenantIsolationPolicyAllowedTenants[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformTenantIsolationPolicyAllowedTenantsOutputReference {
    return new PowerplatformTenantIsolationPolicyAllowedTenantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformTenantIsolationPolicyTimeouts {
}

export function powerplatformTenantIsolationPolicyTimeoutsToTerraform(struct?: PowerplatformTenantIsolationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function powerplatformTenantIsolationPolicyTimeoutsToHclTerraform(struct?: PowerplatformTenantIsolationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PowerplatformTenantIsolationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformTenantIsolationPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformTenantIsolationPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy powerplatform_tenant_isolation_policy}
*/
export class PowerplatformTenantIsolationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_tenant_isolation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformTenantIsolationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformTenantIsolationPolicy to import
  * @param importFromId The id of the existing PowerplatformTenantIsolationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformTenantIsolationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_tenant_isolation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_tenant_isolation_policy powerplatform_tenant_isolation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformTenantIsolationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PowerplatformTenantIsolationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_tenant_isolation_policy',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '4.0.0',
        providerVersionConstraint: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedTenants.internalValue = config.allowedTenants;
    this._isDisabled = config.isDisabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tenants - computed: false, optional: false, required: true
  private _allowedTenants = new PowerplatformTenantIsolationPolicyAllowedTenantsList(this, "allowed_tenants", true);
  public get allowedTenants() {
    return this._allowedTenants;
  }
  public putAllowedTenants(value: PowerplatformTenantIsolationPolicyAllowedTenants[] | cdktf.IResolvable) {
    this._allowedTenants.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTenantsInput() {
    return this._allowedTenants.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: false, optional: false, required: true
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PowerplatformTenantIsolationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PowerplatformTenantIsolationPolicyTimeouts) {
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
      allowed_tenants: cdktf.listMapper(powerplatformTenantIsolationPolicyAllowedTenantsToTerraform, false)(this._allowedTenants.internalValue),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      timeouts: powerplatformTenantIsolationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_tenants: {
        value: cdktf.listMapperHcl(powerplatformTenantIsolationPolicyAllowedTenantsToHclTerraform, false)(this._allowedTenants.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PowerplatformTenantIsolationPolicyAllowedTenantsList",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: powerplatformTenantIsolationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformTenantIsolationPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
