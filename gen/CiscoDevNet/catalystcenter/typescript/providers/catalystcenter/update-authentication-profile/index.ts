// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpdateAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * First authentication method
  *   - Choices: `dot1x`, `mac`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#authentication_order UpdateAuthenticationProfile#authentication_order}
  */
  readonly authenticationOrder: string;
  /**
  * The default host authentication template
  *   - Choices: `Open Authentication`, `Closed Authentication`, `Low Impact`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#authentication_profile_name UpdateAuthenticationProfile#authentication_profile_name}
  */
  readonly authenticationProfileName: string;
  /**
  * 802.1x Timeout
  *   - Range: `3`-`120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#dot1x_to_mab_fallback_timeout UpdateAuthenticationProfile#dot1x_to_mab_fallback_timeout}
  */
  readonly dot1XToMabFallbackTimeout: number;
  /**
  * ID of the fabric this authentication profile is assigned to. To update a global authentication profile, either remove this property or set its value to null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#fabric_id UpdateAuthenticationProfile#fabric_id}
  */
  readonly fabricId?: string;
  /**
  * Enable/disable BPDU Guard. Only applicable when authenticationProfileName is set to `Closed Authentication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#is_bpdu_guard_enabled UpdateAuthenticationProfile#is_bpdu_guard_enabled}
  */
  readonly isBpduGuardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of hosts
  *   - Choices: `Single`, `Unlimited`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#number_of_hosts UpdateAuthenticationProfile#number_of_hosts}
  */
  readonly numberOfHosts: string;
  /**
  * Access contract list schema. Omitting this property or setting it to null, will reset the property to its default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#pre_auth_acl_access_contracts UpdateAuthenticationProfile#pre_auth_acl_access_contracts}
  */
  readonly preAuthAclAccessContracts?: UpdateAuthenticationProfilePreAuthAclAccessContracts[] | cdktf.IResolvable;
  /**
  * Description of the Pre-Authentication ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#pre_auth_acl_description UpdateAuthenticationProfile#pre_auth_acl_description}
  */
  readonly preAuthAclDescription?: string;
  /**
  * Enable/disable Pre-Authentication ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#pre_auth_acl_enabled UpdateAuthenticationProfile#pre_auth_acl_enabled}
  */
  readonly preAuthAclEnabled?: boolean | cdktf.IResolvable;
  /**
  * Implicit behaviour unless overridden (defaults to `DENY`)
  *   - Choices: `PERMIT`, `DENY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#pre_auth_acl_implicit_action UpdateAuthenticationProfile#pre_auth_acl_implicit_action}
  */
  readonly preAuthAclImplicitAction?: string;
  /**
  * Wake on LAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#wake_on_lan UpdateAuthenticationProfile#wake_on_lan}
  */
  readonly wakeOnLan: boolean | cdktf.IResolvable;
}
export interface UpdateAuthenticationProfilePreAuthAclAccessContracts {
  /**
  * Contract behaviour
  *   - Choices: `PERMIT`, `DENY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#action UpdateAuthenticationProfile#action}
  */
  readonly action: string;
  /**
  * Port for the access contract. The port can only be used once in the Access Contract list. - domain - bootpc - bootps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#port UpdateAuthenticationProfile#port}
  */
  readonly port: string;
  /**
  * Protocol for the access contract - UDP - TCP - TCP_UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#protocol UpdateAuthenticationProfile#protocol}
  */
  readonly protocol: string;
}

export function updateAuthenticationProfilePreAuthAclAccessContractsToTerraform(struct?: UpdateAuthenticationProfilePreAuthAclAccessContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function updateAuthenticationProfilePreAuthAclAccessContractsToHclTerraform(struct?: UpdateAuthenticationProfilePreAuthAclAccessContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpdateAuthenticationProfilePreAuthAclAccessContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpdateAuthenticationProfilePreAuthAclAccessContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpdateAuthenticationProfilePreAuthAclAccessContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class UpdateAuthenticationProfilePreAuthAclAccessContractsList extends cdktf.ComplexList {
  public internalValue? : UpdateAuthenticationProfilePreAuthAclAccessContracts[] | cdktf.IResolvable

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
  public get(index: number): UpdateAuthenticationProfilePreAuthAclAccessContractsOutputReference {
    return new UpdateAuthenticationProfilePreAuthAclAccessContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile catalystcenter_update_authentication_profile}
*/
export class UpdateAuthenticationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_update_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpdateAuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpdateAuthenticationProfile to import
  * @param importFromId The id of the existing UpdateAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpdateAuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_update_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/update_authentication_profile catalystcenter_update_authentication_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpdateAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: UpdateAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_update_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationOrder = config.authenticationOrder;
    this._authenticationProfileName = config.authenticationProfileName;
    this._dot1XToMabFallbackTimeout = config.dot1XToMabFallbackTimeout;
    this._fabricId = config.fabricId;
    this._isBpduGuardEnabled = config.isBpduGuardEnabled;
    this._numberOfHosts = config.numberOfHosts;
    this._preAuthAclAccessContracts.internalValue = config.preAuthAclAccessContracts;
    this._preAuthAclDescription = config.preAuthAclDescription;
    this._preAuthAclEnabled = config.preAuthAclEnabled;
    this._preAuthAclImplicitAction = config.preAuthAclImplicitAction;
    this._wakeOnLan = config.wakeOnLan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_order - computed: false, optional: false, required: true
  private _authenticationOrder?: string; 
  public get authenticationOrder() {
    return this.getStringAttribute('authentication_order');
  }
  public set authenticationOrder(value: string) {
    this._authenticationOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderInput() {
    return this._authenticationOrder;
  }

  // authentication_profile_name - computed: false, optional: false, required: true
  private _authenticationProfileName?: string; 
  public get authenticationProfileName() {
    return this.getStringAttribute('authentication_profile_name');
  }
  public set authenticationProfileName(value: string) {
    this._authenticationProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileNameInput() {
    return this._authenticationProfileName;
  }

  // dot1x_to_mab_fallback_timeout - computed: false, optional: false, required: true
  private _dot1XToMabFallbackTimeout?: number; 
  public get dot1XToMabFallbackTimeout() {
    return this.getNumberAttribute('dot1x_to_mab_fallback_timeout');
  }
  public set dot1XToMabFallbackTimeout(value: number) {
    this._dot1XToMabFallbackTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XToMabFallbackTimeoutInput() {
    return this._dot1XToMabFallbackTimeout;
  }

  // fabric_id - computed: false, optional: true, required: false
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  public resetFabricId() {
    this._fabricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_bpdu_guard_enabled - computed: false, optional: true, required: false
  private _isBpduGuardEnabled?: boolean | cdktf.IResolvable; 
  public get isBpduGuardEnabled() {
    return this.getBooleanAttribute('is_bpdu_guard_enabled');
  }
  public set isBpduGuardEnabled(value: boolean | cdktf.IResolvable) {
    this._isBpduGuardEnabled = value;
  }
  public resetIsBpduGuardEnabled() {
    this._isBpduGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBpduGuardEnabledInput() {
    return this._isBpduGuardEnabled;
  }

  // number_of_hosts - computed: false, optional: false, required: true
  private _numberOfHosts?: string; 
  public get numberOfHosts() {
    return this.getStringAttribute('number_of_hosts');
  }
  public set numberOfHosts(value: string) {
    this._numberOfHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfHostsInput() {
    return this._numberOfHosts;
  }

  // pre_auth_acl_access_contracts - computed: false, optional: true, required: false
  private _preAuthAclAccessContracts = new UpdateAuthenticationProfilePreAuthAclAccessContractsList(this, "pre_auth_acl_access_contracts", true);
  public get preAuthAclAccessContracts() {
    return this._preAuthAclAccessContracts;
  }
  public putPreAuthAclAccessContracts(value: UpdateAuthenticationProfilePreAuthAclAccessContracts[] | cdktf.IResolvable) {
    this._preAuthAclAccessContracts.internalValue = value;
  }
  public resetPreAuthAclAccessContracts() {
    this._preAuthAclAccessContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthAclAccessContractsInput() {
    return this._preAuthAclAccessContracts.internalValue;
  }

  // pre_auth_acl_description - computed: false, optional: true, required: false
  private _preAuthAclDescription?: string; 
  public get preAuthAclDescription() {
    return this.getStringAttribute('pre_auth_acl_description');
  }
  public set preAuthAclDescription(value: string) {
    this._preAuthAclDescription = value;
  }
  public resetPreAuthAclDescription() {
    this._preAuthAclDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthAclDescriptionInput() {
    return this._preAuthAclDescription;
  }

  // pre_auth_acl_enabled - computed: false, optional: true, required: false
  private _preAuthAclEnabled?: boolean | cdktf.IResolvable; 
  public get preAuthAclEnabled() {
    return this.getBooleanAttribute('pre_auth_acl_enabled');
  }
  public set preAuthAclEnabled(value: boolean | cdktf.IResolvable) {
    this._preAuthAclEnabled = value;
  }
  public resetPreAuthAclEnabled() {
    this._preAuthAclEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthAclEnabledInput() {
    return this._preAuthAclEnabled;
  }

  // pre_auth_acl_implicit_action - computed: false, optional: true, required: false
  private _preAuthAclImplicitAction?: string; 
  public get preAuthAclImplicitAction() {
    return this.getStringAttribute('pre_auth_acl_implicit_action');
  }
  public set preAuthAclImplicitAction(value: string) {
    this._preAuthAclImplicitAction = value;
  }
  public resetPreAuthAclImplicitAction() {
    this._preAuthAclImplicitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthAclImplicitActionInput() {
    return this._preAuthAclImplicitAction;
  }

  // wake_on_lan - computed: false, optional: false, required: true
  private _wakeOnLan?: boolean | cdktf.IResolvable; 
  public get wakeOnLan() {
    return this.getBooleanAttribute('wake_on_lan');
  }
  public set wakeOnLan(value: boolean | cdktf.IResolvable) {
    this._wakeOnLan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wakeOnLanInput() {
    return this._wakeOnLan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_order: cdktf.stringToTerraform(this._authenticationOrder),
      authentication_profile_name: cdktf.stringToTerraform(this._authenticationProfileName),
      dot1x_to_mab_fallback_timeout: cdktf.numberToTerraform(this._dot1XToMabFallbackTimeout),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      is_bpdu_guard_enabled: cdktf.booleanToTerraform(this._isBpduGuardEnabled),
      number_of_hosts: cdktf.stringToTerraform(this._numberOfHosts),
      pre_auth_acl_access_contracts: cdktf.listMapper(updateAuthenticationProfilePreAuthAclAccessContractsToTerraform, false)(this._preAuthAclAccessContracts.internalValue),
      pre_auth_acl_description: cdktf.stringToTerraform(this._preAuthAclDescription),
      pre_auth_acl_enabled: cdktf.booleanToTerraform(this._preAuthAclEnabled),
      pre_auth_acl_implicit_action: cdktf.stringToTerraform(this._preAuthAclImplicitAction),
      wake_on_lan: cdktf.booleanToTerraform(this._wakeOnLan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_order: {
        value: cdktf.stringToHclTerraform(this._authenticationOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_profile_name: {
        value: cdktf.stringToHclTerraform(this._authenticationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_to_mab_fallback_timeout: {
        value: cdktf.numberToHclTerraform(this._dot1XToMabFallbackTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_bpdu_guard_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBpduGuardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      number_of_hosts: {
        value: cdktf.stringToHclTerraform(this._numberOfHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_auth_acl_access_contracts: {
        value: cdktf.listMapperHcl(updateAuthenticationProfilePreAuthAclAccessContractsToHclTerraform, false)(this._preAuthAclAccessContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpdateAuthenticationProfilePreAuthAclAccessContractsList",
      },
      pre_auth_acl_description: {
        value: cdktf.stringToHclTerraform(this._preAuthAclDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_auth_acl_enabled: {
        value: cdktf.booleanToHclTerraform(this._preAuthAclEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pre_auth_acl_implicit_action: {
        value: cdktf.stringToHclTerraform(this._preAuthAclImplicitAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wake_on_lan: {
        value: cdktf.booleanToHclTerraform(this._wakeOnLan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
