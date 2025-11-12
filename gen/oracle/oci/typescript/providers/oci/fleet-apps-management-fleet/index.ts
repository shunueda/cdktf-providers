// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}
  */
  readonly environmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}
  */
  readonly isTargetAutoConfirm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#parent_fleet_id FleetAppsManagementFleet#parent_fleet_id}
  */
  readonly parentFleetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}
  */
  readonly products?: string[];
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#credentials FleetAppsManagementFleet#credentials}
  */
  readonly credentials?: FleetAppsManagementFleetCredentials[] | cdktf.IResolvable;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#details FleetAppsManagementFleet#details}
  */
  readonly details?: FleetAppsManagementFleetDetails;
  /**
  * notification_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#notification_preferences FleetAppsManagementFleet#notification_preferences}
  */
  readonly notificationPreferences?: FleetAppsManagementFleetNotificationPreferences[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#properties FleetAppsManagementFleet#properties}
  */
  readonly properties?: FleetAppsManagementFleetProperties[] | cdktf.IResolvable;
  /**
  * resource_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#resource_selection FleetAppsManagementFleet#resource_selection}
  */
  readonly resourceSelection: FleetAppsManagementFleetResourceSelection;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#resources FleetAppsManagementFleet#resources}
  */
  readonly resources?: FleetAppsManagementFleetResources[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#timeouts FleetAppsManagementFleet#timeouts}
  */
  readonly timeouts?: FleetAppsManagementFleetTimeouts;
}
export interface FleetAppsManagementFleetCredentialsEntitySpecificsVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#name FleetAppsManagementFleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#value FleetAppsManagementFleet#value}
  */
  readonly value?: string;
}

export function fleetAppsManagementFleetCredentialsEntitySpecificsVariablesToTerraform(struct?: FleetAppsManagementFleetCredentialsEntitySpecificsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fleetAppsManagementFleetCredentialsEntitySpecificsVariablesToHclTerraform(struct?: FleetAppsManagementFleetCredentialsEntitySpecificsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetCredentialsEntitySpecificsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementFleetCredentialsEntitySpecificsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetCredentialsEntitySpecificsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FleetAppsManagementFleetCredentialsEntitySpecificsVariablesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetCredentialsEntitySpecificsVariables[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementFleetCredentialsEntitySpecificsVariablesOutputReference {
    return new FleetAppsManagementFleetCredentialsEntitySpecificsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetCredentialsEntitySpecifics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#credential_level FleetAppsManagementFleet#credential_level}
  */
  readonly credentialLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#resource_id FleetAppsManagementFleet#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#target FleetAppsManagementFleet#target}
  */
  readonly target?: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#variables FleetAppsManagementFleet#variables}
  */
  readonly variables?: FleetAppsManagementFleetCredentialsEntitySpecificsVariables[] | cdktf.IResolvable;
}

export function fleetAppsManagementFleetCredentialsEntitySpecificsToTerraform(struct?: FleetAppsManagementFleetCredentialsEntitySpecificsOutputReference | FleetAppsManagementFleetCredentialsEntitySpecifics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_level: cdktf.stringToTerraform(struct!.credentialLevel),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    target: cdktf.stringToTerraform(struct!.target),
    variables: cdktf.listMapper(fleetAppsManagementFleetCredentialsEntitySpecificsVariablesToTerraform, true)(struct!.variables),
  }
}


export function fleetAppsManagementFleetCredentialsEntitySpecificsToHclTerraform(struct?: FleetAppsManagementFleetCredentialsEntitySpecificsOutputReference | FleetAppsManagementFleetCredentialsEntitySpecifics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_level: {
      value: cdktf.stringToHclTerraform(struct!.credentialLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(fleetAppsManagementFleetCredentialsEntitySpecificsVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetCredentialsEntitySpecificsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetCredentialsEntitySpecificsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetCredentialsEntitySpecifics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialLevel = this._credentialLevel;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetCredentialsEntitySpecifics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialLevel = undefined;
      this._resourceId = undefined;
      this._target = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialLevel = value.credentialLevel;
      this._resourceId = value.resourceId;
      this._target = value.target;
      this._variables.internalValue = value.variables;
    }
  }

  // credential_level - computed: false, optional: false, required: true
  private _credentialLevel?: string; 
  public get credentialLevel() {
    return this.getStringAttribute('credential_level');
  }
  public set credentialLevel(value: string) {
    this._credentialLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialLevelInput() {
    return this._credentialLevel;
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new FleetAppsManagementFleetCredentialsEntitySpecificsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: FleetAppsManagementFleetCredentialsEntitySpecificsVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface FleetAppsManagementFleetCredentialsPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#credential_type FleetAppsManagementFleet#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#key_id FleetAppsManagementFleet#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#key_version FleetAppsManagementFleet#key_version}
  */
  readonly keyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#secret_id FleetAppsManagementFleet#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#secret_version FleetAppsManagementFleet#secret_version}
  */
  readonly secretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#value FleetAppsManagementFleet#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#vault_id FleetAppsManagementFleet#vault_id}
  */
  readonly vaultId?: string;
}

export function fleetAppsManagementFleetCredentialsPasswordToTerraform(struct?: FleetAppsManagementFleetCredentialsPasswordOutputReference | FleetAppsManagementFleetCredentialsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_version: cdktf.stringToTerraform(struct!.keyVersion),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
    value: cdktf.stringToTerraform(struct!.value),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function fleetAppsManagementFleetCredentialsPasswordToHclTerraform(struct?: FleetAppsManagementFleetCredentialsPasswordOutputReference | FleetAppsManagementFleetCredentialsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_version: {
      value: cdktf.stringToHclTerraform(struct!.keyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetCredentialsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetCredentialsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVersion = this._keyVersion;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetCredentialsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialType = undefined;
      this._keyId = undefined;
      this._keyVersion = undefined;
      this._secretId = undefined;
      this._secretVersion = undefined;
      this._value = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialType = value.credentialType;
      this._keyId = value.keyId;
      this._keyVersion = value.keyVersion;
      this._secretId = value.secretId;
      this._secretVersion = value.secretVersion;
      this._value = value.value;
      this._vaultId = value.vaultId;
    }
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_version - computed: true, optional: true, required: false
  private _keyVersion?: string; 
  public get keyVersion() {
    return this.getStringAttribute('key_version');
  }
  public set keyVersion(value: string) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_version - computed: true, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface FleetAppsManagementFleetCredentialsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#credential_type FleetAppsManagementFleet#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#key_id FleetAppsManagementFleet#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#key_version FleetAppsManagementFleet#key_version}
  */
  readonly keyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#secret_id FleetAppsManagementFleet#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#secret_version FleetAppsManagementFleet#secret_version}
  */
  readonly secretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#value FleetAppsManagementFleet#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#vault_id FleetAppsManagementFleet#vault_id}
  */
  readonly vaultId?: string;
}

export function fleetAppsManagementFleetCredentialsUserToTerraform(struct?: FleetAppsManagementFleetCredentialsUserOutputReference | FleetAppsManagementFleetCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_version: cdktf.stringToTerraform(struct!.keyVersion),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
    value: cdktf.stringToTerraform(struct!.value),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function fleetAppsManagementFleetCredentialsUserToHclTerraform(struct?: FleetAppsManagementFleetCredentialsUserOutputReference | FleetAppsManagementFleetCredentialsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_version: {
      value: cdktf.stringToHclTerraform(struct!.keyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetCredentialsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetCredentialsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVersion = this._keyVersion;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetCredentialsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialType = undefined;
      this._keyId = undefined;
      this._keyVersion = undefined;
      this._secretId = undefined;
      this._secretVersion = undefined;
      this._value = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialType = value.credentialType;
      this._keyId = value.keyId;
      this._keyVersion = value.keyVersion;
      this._secretId = value.secretId;
      this._secretVersion = value.secretVersion;
      this._value = value.value;
      this._vaultId = value.vaultId;
    }
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_version - computed: true, optional: true, required: false
  private _keyVersion?: string; 
  public get keyVersion() {
    return this.getStringAttribute('key_version');
  }
  public set keyVersion(value: string) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_version - computed: true, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface FleetAppsManagementFleetCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}
  */
  readonly displayName: string;
  /**
  * entity_specifics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#entity_specifics FleetAppsManagementFleet#entity_specifics}
  */
  readonly entitySpecifics: FleetAppsManagementFleetCredentialsEntitySpecifics;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#password FleetAppsManagementFleet#password}
  */
  readonly password: FleetAppsManagementFleetCredentialsPassword;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#user FleetAppsManagementFleet#user}
  */
  readonly user: FleetAppsManagementFleetCredentialsUser;
}

export function fleetAppsManagementFleetCredentialsToTerraform(struct?: FleetAppsManagementFleetCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    entity_specifics: fleetAppsManagementFleetCredentialsEntitySpecificsToTerraform(struct!.entitySpecifics),
    password: fleetAppsManagementFleetCredentialsPasswordToTerraform(struct!.password),
    user: fleetAppsManagementFleetCredentialsUserToTerraform(struct!.user),
  }
}


export function fleetAppsManagementFleetCredentialsToHclTerraform(struct?: FleetAppsManagementFleetCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_specifics: {
      value: fleetAppsManagementFleetCredentialsEntitySpecificsToHclTerraform(struct!.entitySpecifics),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetCredentialsEntitySpecificsList",
    },
    password: {
      value: fleetAppsManagementFleetCredentialsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetCredentialsPasswordList",
    },
    user: {
      value: fleetAppsManagementFleetCredentialsUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetCredentialsUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementFleetCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._entitySpecifics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySpecifics = this._entitySpecifics?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._displayName = undefined;
      this._entitySpecifics.internalValue = undefined;
      this._password.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._displayName = value.displayName;
      this._entitySpecifics.internalValue = value.entitySpecifics;
      this._password.internalValue = value.password;
      this._user.internalValue = value.user;
    }
  }

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // entity_specifics - computed: false, optional: false, required: true
  private _entitySpecifics = new FleetAppsManagementFleetCredentialsEntitySpecificsOutputReference(this, "entity_specifics");
  public get entitySpecifics() {
    return this._entitySpecifics;
  }
  public putEntitySpecifics(value: FleetAppsManagementFleetCredentialsEntitySpecifics) {
    this._entitySpecifics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySpecificsInput() {
    return this._entitySpecifics.internalValue;
  }

  // password - computed: false, optional: false, required: true
  private _password = new FleetAppsManagementFleetCredentialsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: FleetAppsManagementFleetCredentialsPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user = new FleetAppsManagementFleetCredentialsUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: FleetAppsManagementFleetCredentialsUser) {
    this._user.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

export class FleetAppsManagementFleetCredentialsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetCredentials[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementFleetCredentialsOutputReference {
    return new FleetAppsManagementFleetCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}
  */
  readonly fleetType?: string;
}

export function fleetAppsManagementFleetDetailsToTerraform(struct?: FleetAppsManagementFleetDetailsOutputReference | FleetAppsManagementFleetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_type: cdktf.stringToTerraform(struct!.fleetType),
  }
}


export function fleetAppsManagementFleetDetailsToHclTerraform(struct?: FleetAppsManagementFleetDetailsOutputReference | FleetAppsManagementFleetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fleet_type: {
      value: cdktf.stringToHclTerraform(struct!.fleetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetType = this._fleetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fleetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fleetType = value.fleetType;
    }
  }

  // fleet_type - computed: true, optional: true, required: false
  private _fleetType?: string; 
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType;
  }
}
export interface FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#notify_before FleetAppsManagementFleet#notify_before}
  */
  readonly notifyBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}
  */
  readonly onUpcomingSchedule?: boolean | cdktf.IResolvable;
}

export function fleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleToTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleOutputReference | FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_before: cdktf.stringToTerraform(struct!.notifyBefore),
    on_upcoming_schedule: cdktf.booleanToTerraform(struct!.onUpcomingSchedule),
  }
}


export function fleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleToHclTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleOutputReference | FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_before: {
      value: cdktf.stringToHclTerraform(struct!.notifyBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_upcoming_schedule: {
      value: cdktf.booleanToHclTerraform(struct!.onUpcomingSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyBefore = this._notifyBefore;
    }
    if (this._onUpcomingSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUpcomingSchedule = this._onUpcomingSchedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifyBefore = undefined;
      this._onUpcomingSchedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifyBefore = value.notifyBefore;
      this._onUpcomingSchedule = value.onUpcomingSchedule;
    }
  }

  // notify_before - computed: true, optional: true, required: false
  private _notifyBefore?: string; 
  public get notifyBefore() {
    return this.getStringAttribute('notify_before');
  }
  public set notifyBefore(value: string) {
    this._notifyBefore = value;
  }
  public resetNotifyBefore() {
    this._notifyBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyBeforeInput() {
    return this._notifyBefore;
  }

  // on_upcoming_schedule - computed: true, optional: true, required: false
  private _onUpcomingSchedule?: boolean | cdktf.IResolvable; 
  public get onUpcomingSchedule() {
    return this.getBooleanAttribute('on_upcoming_schedule');
  }
  public set onUpcomingSchedule(value: boolean | cdktf.IResolvable) {
    this._onUpcomingSchedule = value;
  }
  public resetOnUpcomingSchedule() {
    this._onUpcomingSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpcomingScheduleInput() {
    return this._onUpcomingSchedule;
  }
}
export interface FleetAppsManagementFleetNotificationPreferencesPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}
  */
  readonly onJobFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_resource_non_compliance FleetAppsManagementFleet#on_resource_non_compliance}
  */
  readonly onResourceNonCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_runbook_newer_version FleetAppsManagementFleet#on_runbook_newer_version}
  */
  readonly onRunbookNewerVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_task_failure FleetAppsManagementFleet#on_task_failure}
  */
  readonly onTaskFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_task_pause FleetAppsManagementFleet#on_task_pause}
  */
  readonly onTaskPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_task_success FleetAppsManagementFleet#on_task_success}
  */
  readonly onTaskSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}
  */
  readonly onTopologyModification?: boolean | cdktf.IResolvable;
  /**
  * upcoming_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#upcoming_schedule FleetAppsManagementFleet#upcoming_schedule}
  */
  readonly upcomingSchedule?: FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingSchedule;
}

export function fleetAppsManagementFleetNotificationPreferencesPreferencesToTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference | FleetAppsManagementFleetNotificationPreferencesPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_job_failure: cdktf.booleanToTerraform(struct!.onJobFailure),
    on_resource_non_compliance: cdktf.booleanToTerraform(struct!.onResourceNonCompliance),
    on_runbook_newer_version: cdktf.booleanToTerraform(struct!.onRunbookNewerVersion),
    on_task_failure: cdktf.booleanToTerraform(struct!.onTaskFailure),
    on_task_pause: cdktf.booleanToTerraform(struct!.onTaskPause),
    on_task_success: cdktf.booleanToTerraform(struct!.onTaskSuccess),
    on_topology_modification: cdktf.booleanToTerraform(struct!.onTopologyModification),
    upcoming_schedule: fleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleToTerraform(struct!.upcomingSchedule),
  }
}


export function fleetAppsManagementFleetNotificationPreferencesPreferencesToHclTerraform(struct?: FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference | FleetAppsManagementFleetNotificationPreferencesPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_job_failure: {
      value: cdktf.booleanToHclTerraform(struct!.onJobFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_resource_non_compliance: {
      value: cdktf.booleanToHclTerraform(struct!.onResourceNonCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_runbook_newer_version: {
      value: cdktf.booleanToHclTerraform(struct!.onRunbookNewerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_task_failure: {
      value: cdktf.booleanToHclTerraform(struct!.onTaskFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_task_pause: {
      value: cdktf.booleanToHclTerraform(struct!.onTaskPause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_task_success: {
      value: cdktf.booleanToHclTerraform(struct!.onTaskSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_topology_modification: {
      value: cdktf.booleanToHclTerraform(struct!.onTopologyModification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upcoming_schedule: {
      value: fleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleToHclTerraform(struct!.upcomingSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetNotificationPreferencesPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onJobFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onJobFailure = this._onJobFailure;
    }
    if (this._onResourceNonCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.onResourceNonCompliance = this._onResourceNonCompliance;
    }
    if (this._onRunbookNewerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.onRunbookNewerVersion = this._onRunbookNewerVersion;
    }
    if (this._onTaskFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTaskFailure = this._onTaskFailure;
    }
    if (this._onTaskPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTaskPause = this._onTaskPause;
    }
    if (this._onTaskSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTaskSuccess = this._onTaskSuccess;
    }
    if (this._onTopologyModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTopologyModification = this._onTopologyModification;
    }
    if (this._upcomingSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upcomingSchedule = this._upcomingSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetNotificationPreferencesPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onJobFailure = undefined;
      this._onResourceNonCompliance = undefined;
      this._onRunbookNewerVersion = undefined;
      this._onTaskFailure = undefined;
      this._onTaskPause = undefined;
      this._onTaskSuccess = undefined;
      this._onTopologyModification = undefined;
      this._upcomingSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onJobFailure = value.onJobFailure;
      this._onResourceNonCompliance = value.onResourceNonCompliance;
      this._onRunbookNewerVersion = value.onRunbookNewerVersion;
      this._onTaskFailure = value.onTaskFailure;
      this._onTaskPause = value.onTaskPause;
      this._onTaskSuccess = value.onTaskSuccess;
      this._onTopologyModification = value.onTopologyModification;
      this._upcomingSchedule.internalValue = value.upcomingSchedule;
    }
  }

  // on_job_failure - computed: true, optional: true, required: false
  private _onJobFailure?: boolean | cdktf.IResolvable; 
  public get onJobFailure() {
    return this.getBooleanAttribute('on_job_failure');
  }
  public set onJobFailure(value: boolean | cdktf.IResolvable) {
    this._onJobFailure = value;
  }
  public resetOnJobFailure() {
    this._onJobFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onJobFailureInput() {
    return this._onJobFailure;
  }

  // on_resource_non_compliance - computed: true, optional: true, required: false
  private _onResourceNonCompliance?: boolean | cdktf.IResolvable; 
  public get onResourceNonCompliance() {
    return this.getBooleanAttribute('on_resource_non_compliance');
  }
  public set onResourceNonCompliance(value: boolean | cdktf.IResolvable) {
    this._onResourceNonCompliance = value;
  }
  public resetOnResourceNonCompliance() {
    this._onResourceNonCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onResourceNonComplianceInput() {
    return this._onResourceNonCompliance;
  }

  // on_runbook_newer_version - computed: true, optional: true, required: false
  private _onRunbookNewerVersion?: boolean | cdktf.IResolvable; 
  public get onRunbookNewerVersion() {
    return this.getBooleanAttribute('on_runbook_newer_version');
  }
  public set onRunbookNewerVersion(value: boolean | cdktf.IResolvable) {
    this._onRunbookNewerVersion = value;
  }
  public resetOnRunbookNewerVersion() {
    this._onRunbookNewerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRunbookNewerVersionInput() {
    return this._onRunbookNewerVersion;
  }

  // on_task_failure - computed: true, optional: true, required: false
  private _onTaskFailure?: boolean | cdktf.IResolvable; 
  public get onTaskFailure() {
    return this.getBooleanAttribute('on_task_failure');
  }
  public set onTaskFailure(value: boolean | cdktf.IResolvable) {
    this._onTaskFailure = value;
  }
  public resetOnTaskFailure() {
    this._onTaskFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTaskFailureInput() {
    return this._onTaskFailure;
  }

  // on_task_pause - computed: true, optional: true, required: false
  private _onTaskPause?: boolean | cdktf.IResolvable; 
  public get onTaskPause() {
    return this.getBooleanAttribute('on_task_pause');
  }
  public set onTaskPause(value: boolean | cdktf.IResolvable) {
    this._onTaskPause = value;
  }
  public resetOnTaskPause() {
    this._onTaskPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTaskPauseInput() {
    return this._onTaskPause;
  }

  // on_task_success - computed: true, optional: true, required: false
  private _onTaskSuccess?: boolean | cdktf.IResolvable; 
  public get onTaskSuccess() {
    return this.getBooleanAttribute('on_task_success');
  }
  public set onTaskSuccess(value: boolean | cdktf.IResolvable) {
    this._onTaskSuccess = value;
  }
  public resetOnTaskSuccess() {
    this._onTaskSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTaskSuccessInput() {
    return this._onTaskSuccess;
  }

  // on_topology_modification - computed: true, optional: true, required: false
  private _onTopologyModification?: boolean | cdktf.IResolvable; 
  public get onTopologyModification() {
    return this.getBooleanAttribute('on_topology_modification');
  }
  public set onTopologyModification(value: boolean | cdktf.IResolvable) {
    this._onTopologyModification = value;
  }
  public resetOnTopologyModification() {
    this._onTopologyModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTopologyModificationInput() {
    return this._onTopologyModification;
  }

  // upcoming_schedule - computed: false, optional: true, required: false
  private _upcomingSchedule = new FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingScheduleOutputReference(this, "upcoming_schedule");
  public get upcomingSchedule() {
    return this._upcomingSchedule;
  }
  public putUpcomingSchedule(value: FleetAppsManagementFleetNotificationPreferencesPreferencesUpcomingSchedule) {
    this._upcomingSchedule.internalValue = value;
  }
  public resetUpcomingSchedule() {
    this._upcomingSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upcomingScheduleInput() {
    return this._upcomingSchedule.internalValue;
  }
}
export interface FleetAppsManagementFleetNotificationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}
  */
  readonly topicId: string;
  /**
  * preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#preferences FleetAppsManagementFleet#preferences}
  */
  readonly preferences?: FleetAppsManagementFleetNotificationPreferencesPreferences;
}

export function fleetAppsManagementFleetNotificationPreferencesToTerraform(struct?: FleetAppsManagementFleetNotificationPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
    preferences: fleetAppsManagementFleetNotificationPreferencesPreferencesToTerraform(struct!.preferences),
  }
}


export function fleetAppsManagementFleetNotificationPreferencesToHclTerraform(struct?: FleetAppsManagementFleetNotificationPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferences: {
      value: fleetAppsManagementFleetNotificationPreferencesPreferencesToHclTerraform(struct!.preferences),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetNotificationPreferencesPreferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetNotificationPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementFleetNotificationPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    if (this._preferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferences = this._preferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetNotificationPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._topicId = undefined;
      this._preferences.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._topicId = value.topicId;
      this._preferences.internalValue = value.preferences;
    }
  }

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

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // preferences - computed: false, optional: true, required: false
  private _preferences = new FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference(this, "preferences");
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: FleetAppsManagementFleetNotificationPreferencesPreferences) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }
}

export class FleetAppsManagementFleetNotificationPreferencesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetNotificationPreferences[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementFleetNotificationPreferencesOutputReference {
    return new FleetAppsManagementFleetNotificationPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#fleet_property_type FleetAppsManagementFleet#fleet_property_type}
  */
  readonly fleetPropertyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#is_required FleetAppsManagementFleet#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#value FleetAppsManagementFleet#value}
  */
  readonly value?: string;
}

export function fleetAppsManagementFleetPropertiesToTerraform(struct?: FleetAppsManagementFleetProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    fleet_property_type: cdktf.stringToTerraform(struct!.fleetPropertyType),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fleetAppsManagementFleetPropertiesToHclTerraform(struct?: FleetAppsManagementFleetProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fleet_property_type: {
      value: cdktf.stringToHclTerraform(struct!.fleetPropertyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementFleetProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fleetPropertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetPropertyType = this._fleetPropertyType;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._displayName = undefined;
      this._fleetPropertyType = undefined;
      this._isRequired = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._displayName = value.displayName;
      this._fleetPropertyType = value.fleetPropertyType;
      this._isRequired = value.isRequired;
      this._value = value.value;
    }
  }

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

  // fleet_property_type - computed: false, optional: false, required: true
  private _fleetPropertyType?: string; 
  public get fleetPropertyType() {
    return this.getStringAttribute('fleet_property_type');
  }
  public set fleetPropertyType(value: string) {
    this._fleetPropertyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetPropertyTypeInput() {
    return this._fleetPropertyType;
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FleetAppsManagementFleetPropertiesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetProperties[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementFleetPropertiesOutputReference {
    return new FleetAppsManagementFleetPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}
  */
  readonly attrGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}
  */
  readonly attrKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}
  */
  readonly attrValue?: string;
}

export function fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsToTerraform(struct?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr_group: cdktf.stringToTerraform(struct!.attrGroup),
    attr_key: cdktf.stringToTerraform(struct!.attrKey),
    attr_value: cdktf.stringToTerraform(struct!.attrValue),
  }
}


export function fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsToHclTerraform(struct?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr_group: {
      value: cdktf.stringToHclTerraform(struct!.attrGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_key: {
      value: cdktf.stringToHclTerraform(struct!.attrKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_value: {
      value: cdktf.stringToHclTerraform(struct!.attrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrGroup = this._attrGroup;
    }
    if (this._attrKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrKey = this._attrKey;
    }
    if (this._attrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrValue = this._attrValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrGroup = undefined;
      this._attrKey = undefined;
      this._attrValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrGroup = value.attrGroup;
      this._attrKey = value.attrKey;
      this._attrValue = value.attrValue;
    }
  }

  // attr_group - computed: true, optional: true, required: false
  private _attrGroup?: string; 
  public get attrGroup() {
    return this.getStringAttribute('attr_group');
  }
  public set attrGroup(value: string) {
    this._attrGroup = value;
  }
  public resetAttrGroup() {
    this._attrGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrGroupInput() {
    return this._attrGroup;
  }

  // attr_key - computed: true, optional: true, required: false
  private _attrKey?: string; 
  public get attrKey() {
    return this.getStringAttribute('attr_key');
  }
  public set attrKey(value: string) {
    this._attrKey = value;
  }
  public resetAttrKey() {
    this._attrKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrKeyInput() {
    return this._attrKey;
  }

  // attr_value - computed: true, optional: true, required: false
  private _attrValue?: string; 
  public get attrValue() {
    return this.getStringAttribute('attr_value');
  }
  public set attrValue(value: string) {
    this._attrValue = value;
  }
  public resetAttrValue() {
    this._attrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrValueInput() {
    return this._attrValue;
  }
}

export class FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsOutputReference {
    return new FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}
  */
  readonly basis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}
  */
  readonly resourceCompartmentId?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#conditions FleetAppsManagementFleet#conditions}
  */
  readonly conditions?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions[] | cdktf.IResolvable;
}

export function fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesToTerraform(struct?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basis: cdktf.stringToTerraform(struct!.basis),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    resource_compartment_id: cdktf.stringToTerraform(struct!.resourceCompartmentId),
    conditions: cdktf.listMapper(fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesToHclTerraform(struct?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basis: {
      value: cdktf.stringToHclTerraform(struct!.basis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basis !== undefined) {
      hasAnyValues = true;
      internalValueResult.basis = this._basis;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._resourceCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceCompartmentId = this._resourceCompartmentId;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basis = undefined;
      this._compartmentId = undefined;
      this._resourceCompartmentId = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basis = value.basis;
      this._compartmentId = value.compartmentId;
      this._resourceCompartmentId = value.resourceCompartmentId;
      this._conditions.internalValue = value.conditions;
    }
  }

  // basis - computed: true, optional: true, required: false
  private _basis?: string; 
  public get basis() {
    return this.getStringAttribute('basis');
  }
  public set basis(value: string) {
    this._basis = value;
  }
  public resetBasis() {
    this._basis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basisInput() {
    return this._basis;
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

  // resource_compartment_id - computed: true, optional: true, required: false
  private _resourceCompartmentId?: string; 
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }
  public set resourceCompartmentId(value: string) {
    this._resourceCompartmentId = value;
  }
  public resetResourceCompartmentId() {
    this._resourceCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCompartmentIdInput() {
    return this._resourceCompartmentId;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesOutputReference {
    return new FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetResourceSelectionRuleSelectionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}
  */
  readonly matchCondition?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#rules FleetAppsManagementFleet#rules}
  */
  readonly rules?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules[] | cdktf.IResolvable;
}

export function fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaToTerraform(struct?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaOutputReference | FleetAppsManagementFleetResourceSelectionRuleSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_condition: cdktf.stringToTerraform(struct!.matchCondition),
    rules: cdktf.listMapper(fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesToTerraform, true)(struct!.rules),
  }
}


export function fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaToHclTerraform(struct?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaOutputReference | FleetAppsManagementFleetResourceSelectionRuleSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_condition: {
      value: cdktf.stringToHclTerraform(struct!.matchCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetResourceSelectionRuleSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCondition = this._matchCondition;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchCondition = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchCondition = value.matchCondition;
      this._rules.internalValue = value.rules;
    }
  }

  // match_condition - computed: true, optional: true, required: false
  private _matchCondition?: string; 
  public get matchCondition() {
    return this.getStringAttribute('match_condition');
  }
  public set matchCondition(value: string) {
    this._matchCondition = value;
  }
  public resetMatchCondition() {
    this._matchCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionInput() {
    return this._matchCondition;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface FleetAppsManagementFleetResourceSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}
  */
  readonly resourceSelectionType: string;
  /**
  * rule_selection_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#rule_selection_criteria FleetAppsManagementFleet#rule_selection_criteria}
  */
  readonly ruleSelectionCriteria?: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteria;
}

export function fleetAppsManagementFleetResourceSelectionToTerraform(struct?: FleetAppsManagementFleetResourceSelectionOutputReference | FleetAppsManagementFleetResourceSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_selection_type: cdktf.stringToTerraform(struct!.resourceSelectionType),
    rule_selection_criteria: fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaToTerraform(struct!.ruleSelectionCriteria),
  }
}


export function fleetAppsManagementFleetResourceSelectionToHclTerraform(struct?: FleetAppsManagementFleetResourceSelectionOutputReference | FleetAppsManagementFleetResourceSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_selection_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceSelectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_selection_criteria: {
      value: fleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaToHclTerraform(struct!.ruleSelectionCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetResourceSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementFleetResourceSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceSelectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelectionType = this._resourceSelectionType;
    }
    if (this._ruleSelectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSelectionCriteria = this._ruleSelectionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetResourceSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceSelectionType = undefined;
      this._ruleSelectionCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceSelectionType = value.resourceSelectionType;
      this._ruleSelectionCriteria.internalValue = value.ruleSelectionCriteria;
    }
  }

  // resource_selection_type - computed: false, optional: false, required: true
  private _resourceSelectionType?: string; 
  public get resourceSelectionType() {
    return this.getStringAttribute('resource_selection_type');
  }
  public set resourceSelectionType(value: string) {
    this._resourceSelectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectionTypeInput() {
    return this._resourceSelectionType;
  }

  // rule_selection_criteria - computed: false, optional: true, required: false
  private _ruleSelectionCriteria = new FleetAppsManagementFleetResourceSelectionRuleSelectionCriteriaOutputReference(this, "rule_selection_criteria");
  public get ruleSelectionCriteria() {
    return this._ruleSelectionCriteria;
  }
  public putRuleSelectionCriteria(value: FleetAppsManagementFleetResourceSelectionRuleSelectionCriteria) {
    this._ruleSelectionCriteria.internalValue = value;
  }
  public resetRuleSelectionCriteria() {
    this._ruleSelectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSelectionCriteriaInput() {
    return this._ruleSelectionCriteria.internalValue;
  }
}
export interface FleetAppsManagementFleetResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#fleet_resource_type FleetAppsManagementFleet#fleet_resource_type}
  */
  readonly fleetResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#resource_id FleetAppsManagementFleet#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#tenancy_id FleetAppsManagementFleet#tenancy_id}
  */
  readonly tenancyId: string;
}

export function fleetAppsManagementFleetResourcesToTerraform(struct?: FleetAppsManagementFleetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    fleet_resource_type: cdktf.stringToTerraform(struct!.fleetResourceType),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    tenancy_id: cdktf.stringToTerraform(struct!.tenancyId),
  }
}


export function fleetAppsManagementFleetResourcesToHclTerraform(struct?: FleetAppsManagementFleetResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fleet_resource_type: {
      value: cdktf.stringToHclTerraform(struct!.fleetResourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_id: {
      value: cdktf.stringToHclTerraform(struct!.tenancyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementFleetResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementFleetResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._fleetResourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetResourceType = this._fleetResourceType;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._tenancyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyId = this._tenancyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementFleetResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._fleetResourceType = undefined;
      this._resourceId = undefined;
      this._tenancyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._fleetResourceType = value.fleetResourceType;
      this._resourceId = value.resourceId;
      this._tenancyId = value.tenancyId;
    }
  }

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

  // fleet_resource_type - computed: true, optional: true, required: false
  private _fleetResourceType?: string; 
  public get fleetResourceType() {
    return this.getStringAttribute('fleet_resource_type');
  }
  public set fleetResourceType(value: string) {
    this._fleetResourceType = value;
  }
  public resetFleetResourceType() {
    this._fleetResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetResourceTypeInput() {
    return this._fleetResourceType;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }
}

export class FleetAppsManagementFleetResourcesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementFleetResources[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementFleetResourcesOutputReference {
    return new FleetAppsManagementFleetResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementFleetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementFleetTimeoutsToTerraform(struct?: FleetAppsManagementFleetTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementFleetTimeoutsToHclTerraform(struct?: FleetAppsManagementFleetTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementFleetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementFleetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementFleetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet oci_fleet_apps_management_fleet}
*/
export class FleetAppsManagementFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementFleet to import
  * @param importFromId The id of the existing FleetAppsManagementFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_fleet oci_fleet_apps_management_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementFleetConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_fleet',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._environmentType = config.environmentType;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isTargetAutoConfirm = config.isTargetAutoConfirm;
    this._parentFleetId = config.parentFleetId;
    this._products = config.products;
    this._credentials.internalValue = config.credentials;
    this._details.internalValue = config.details;
    this._notificationPreferences.internalValue = config.notificationPreferences;
    this._properties.internalValue = config.properties;
    this._resourceSelection.internalValue = config.resourceSelection;
    this._resources.internalValue = config.resources;
    this._timeouts.internalValue = config.timeouts;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // environment_type - computed: true, optional: true, required: false
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  public resetEnvironmentType() {
    this._environmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
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

  // is_target_auto_confirm - computed: true, optional: true, required: false
  private _isTargetAutoConfirm?: boolean | cdktf.IResolvable; 
  public get isTargetAutoConfirm() {
    return this.getBooleanAttribute('is_target_auto_confirm');
  }
  public set isTargetAutoConfirm(value: boolean | cdktf.IResolvable) {
    this._isTargetAutoConfirm = value;
  }
  public resetIsTargetAutoConfirm() {
    this._isTargetAutoConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTargetAutoConfirmInput() {
    return this._isTargetAutoConfirm;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // parent_fleet_id - computed: true, optional: true, required: false
  private _parentFleetId?: string; 
  public get parentFleetId() {
    return this.getStringAttribute('parent_fleet_id');
  }
  public set parentFleetId(value: string) {
    this._parentFleetId = value;
  }
  public resetParentFleetId() {
    this._parentFleetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFleetIdInput() {
    return this._parentFleetId;
  }

  // products - computed: true, optional: true, required: false
  private _products?: string[]; 
  public get products() {
    return this.getListAttribute('products');
  }
  public set products(value: string[]) {
    this._products = value;
  }
  public resetProducts() {
    this._products = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
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

  // credentials - computed: false, optional: true, required: false
  private _credentials = new FleetAppsManagementFleetCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: FleetAppsManagementFleetCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // details - computed: false, optional: true, required: false
  private _details = new FleetAppsManagementFleetDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: FleetAppsManagementFleetDetails) {
    this._details.internalValue = value;
  }
  public resetDetails() {
    this._details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // notification_preferences - computed: false, optional: true, required: false
  private _notificationPreferences = new FleetAppsManagementFleetNotificationPreferencesList(this, "notification_preferences", false);
  public get notificationPreferences() {
    return this._notificationPreferences;
  }
  public putNotificationPreferences(value: FleetAppsManagementFleetNotificationPreferences[] | cdktf.IResolvable) {
    this._notificationPreferences.internalValue = value;
  }
  public resetNotificationPreferences() {
    this._notificationPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPreferencesInput() {
    return this._notificationPreferences.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new FleetAppsManagementFleetPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: FleetAppsManagementFleetProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // resource_selection - computed: false, optional: false, required: true
  private _resourceSelection = new FleetAppsManagementFleetResourceSelectionOutputReference(this, "resource_selection");
  public get resourceSelection() {
    return this._resourceSelection;
  }
  public putResourceSelection(value: FleetAppsManagementFleetResourceSelection) {
    this._resourceSelection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectionInput() {
    return this._resourceSelection.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new FleetAppsManagementFleetResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: FleetAppsManagementFleetResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementFleetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementFleetTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_type: cdktf.stringToTerraform(this._environmentType),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_target_auto_confirm: cdktf.booleanToTerraform(this._isTargetAutoConfirm),
      parent_fleet_id: cdktf.stringToTerraform(this._parentFleetId),
      products: cdktf.listMapper(cdktf.stringToTerraform, false)(this._products),
      credentials: cdktf.listMapper(fleetAppsManagementFleetCredentialsToTerraform, true)(this._credentials.internalValue),
      details: fleetAppsManagementFleetDetailsToTerraform(this._details.internalValue),
      notification_preferences: cdktf.listMapper(fleetAppsManagementFleetNotificationPreferencesToTerraform, true)(this._notificationPreferences.internalValue),
      properties: cdktf.listMapper(fleetAppsManagementFleetPropertiesToTerraform, true)(this._properties.internalValue),
      resource_selection: fleetAppsManagementFleetResourceSelectionToTerraform(this._resourceSelection.internalValue),
      resources: cdktf.listMapper(fleetAppsManagementFleetResourcesToTerraform, true)(this._resources.internalValue),
      timeouts: fleetAppsManagementFleetTimeoutsToTerraform(this._timeouts.internalValue),
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
      environment_type: {
        value: cdktf.stringToHclTerraform(this._environmentType),
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
      is_target_auto_confirm: {
        value: cdktf.booleanToHclTerraform(this._isTargetAutoConfirm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parent_fleet_id: {
        value: cdktf.stringToHclTerraform(this._parentFleetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._products),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      credentials: {
        value: cdktf.listMapperHcl(fleetAppsManagementFleetCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetCredentialsList",
      },
      details: {
        value: fleetAppsManagementFleetDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetDetailsList",
      },
      notification_preferences: {
        value: cdktf.listMapperHcl(fleetAppsManagementFleetNotificationPreferencesToHclTerraform, true)(this._notificationPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetNotificationPreferencesList",
      },
      properties: {
        value: cdktf.listMapperHcl(fleetAppsManagementFleetPropertiesToHclTerraform, true)(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetPropertiesList",
      },
      resource_selection: {
        value: fleetAppsManagementFleetResourceSelectionToHclTerraform(this._resourceSelection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetResourceSelectionList",
      },
      resources: {
        value: cdktf.listMapperHcl(fleetAppsManagementFleetResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementFleetResourcesList",
      },
      timeouts: {
        value: fleetAppsManagementFleetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementFleetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
