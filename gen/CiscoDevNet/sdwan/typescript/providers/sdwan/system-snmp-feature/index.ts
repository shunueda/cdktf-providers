// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSnmpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure SNMP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#communities SystemSnmpFeature#communities}
  */
  readonly communities?: SystemSnmpFeatureCommunities[] | cdktf.IResolvable;
  /**
  * Set the contact for this managed node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#contact_person SystemSnmpFeature#contact_person}
  */
  readonly contactPerson?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#contact_person_variable SystemSnmpFeature#contact_person_variable}
  */
  readonly contactPersonVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#description SystemSnmpFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#feature_profile_id SystemSnmpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Configure an SNMP group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#groups SystemSnmpFeature#groups}
  */
  readonly groups?: SystemSnmpFeatureGroups[] | cdktf.IResolvable;
  /**
  * Set the physical location of this managed node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#location_of_device SystemSnmpFeature#location_of_device}
  */
  readonly locationOfDevice?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#location_of_device_variable SystemSnmpFeature#location_of_device_variable}
  */
  readonly locationOfDeviceVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#name SystemSnmpFeature#name}
  */
  readonly name: string;
  /**
  * Enable or disable SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#shutdown SystemSnmpFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#shutdown_variable SystemSnmpFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Configure SNMP server to receive SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#trap_target_servers SystemSnmpFeature#trap_target_servers}
  */
  readonly trapTargetServers?: SystemSnmpFeatureTrapTargetServers[] | cdktf.IResolvable;
  /**
  * Configure an SNMP user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#users SystemSnmpFeature#users}
  */
  readonly users?: SystemSnmpFeatureUsers[] | cdktf.IResolvable;
  /**
  * Configure a view record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#views SystemSnmpFeature#views}
  */
  readonly views?: SystemSnmpFeatureViews[] | cdktf.IResolvable;
}
export interface SystemSnmpFeatureCommunities {
  /**
  * Configure access permissions
  *   - Choices: `read-only`, `read-write`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#authorization SystemSnmpFeature#authorization}
  */
  readonly authorization?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#authorization_variable SystemSnmpFeature#authorization_variable}
  */
  readonly authorizationVariable?: string;
  /**
  * Set name of the SNMP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#name SystemSnmpFeature#name}
  */
  readonly name?: string;
  /**
  * Set user label of the SNMP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#user_label SystemSnmpFeature#user_label}
  */
  readonly userLabel?: string;
  /**
  * Set name of the SNMP view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#view SystemSnmpFeature#view}
  */
  readonly view?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#view_variable SystemSnmpFeature#view_variable}
  */
  readonly viewVariable?: string;
}

export function systemSnmpFeatureCommunitiesToTerraform(struct?: SystemSnmpFeatureCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
    authorization_variable: cdktf.stringToTerraform(struct!.authorizationVariable),
    name: cdktf.stringToTerraform(struct!.name),
    user_label: cdktf.stringToTerraform(struct!.userLabel),
    view: cdktf.stringToTerraform(struct!.view),
    view_variable: cdktf.stringToTerraform(struct!.viewVariable),
  }
}


export function systemSnmpFeatureCommunitiesToHclTerraform(struct?: SystemSnmpFeatureCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_variable: {
      value: cdktf.stringToHclTerraform(struct!.authorizationVariable),
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
    user_label: {
      value: cdktf.stringToHclTerraform(struct!.userLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_variable: {
      value: cdktf.stringToHclTerraform(struct!.viewVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpFeatureCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpFeatureCommunities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._authorizationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationVariable = this._authorizationVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLabel = this._userLabel;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    if (this._viewVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewVariable = this._viewVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpFeatureCommunities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
      this._authorizationVariable = undefined;
      this._name = undefined;
      this._userLabel = undefined;
      this._view = undefined;
      this._viewVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
      this._authorizationVariable = value.authorizationVariable;
      this._name = value.name;
      this._userLabel = value.userLabel;
      this._view = value.view;
      this._viewVariable = value.viewVariable;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // authorization_variable - computed: false, optional: true, required: false
  private _authorizationVariable?: string; 
  public get authorizationVariable() {
    return this.getStringAttribute('authorization_variable');
  }
  public set authorizationVariable(value: string) {
    this._authorizationVariable = value;
  }
  public resetAuthorizationVariable() {
    this._authorizationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationVariableInput() {
    return this._authorizationVariable;
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

  // user_label - computed: false, optional: true, required: false
  private _userLabel?: string; 
  public get userLabel() {
    return this.getStringAttribute('user_label');
  }
  public set userLabel(value: string) {
    this._userLabel = value;
  }
  public resetUserLabel() {
    this._userLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelInput() {
    return this._userLabel;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // view_variable - computed: false, optional: true, required: false
  private _viewVariable?: string; 
  public get viewVariable() {
    return this.getStringAttribute('view_variable');
  }
  public set viewVariable(value: string) {
    this._viewVariable = value;
  }
  public resetViewVariable() {
    this._viewVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewVariableInput() {
    return this._viewVariable;
  }
}

export class SystemSnmpFeatureCommunitiesList extends cdktf.ComplexList {
  public internalValue? : SystemSnmpFeatureCommunities[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpFeatureCommunitiesOutputReference {
    return new SystemSnmpFeatureCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSnmpFeatureGroups {
  /**
  * Name of the SNMP group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#name SystemSnmpFeature#name}
  */
  readonly name?: string;
  /**
  * Configure security level
  *   - Choices: `no-auth-no-priv`, `auth-no-priv`, `auth-priv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#security_level SystemSnmpFeature#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Name of the SNMP view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#view SystemSnmpFeature#view}
  */
  readonly view?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#view_variable SystemSnmpFeature#view_variable}
  */
  readonly viewVariable?: string;
}

export function systemSnmpFeatureGroupsToTerraform(struct?: SystemSnmpFeatureGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    view: cdktf.stringToTerraform(struct!.view),
    view_variable: cdktf.stringToTerraform(struct!.viewVariable),
  }
}


export function systemSnmpFeatureGroupsToHclTerraform(struct?: SystemSnmpFeatureGroups | cdktf.IResolvable): any {
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
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_variable: {
      value: cdktf.stringToHclTerraform(struct!.viewVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpFeatureGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpFeatureGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    if (this._viewVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewVariable = this._viewVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpFeatureGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._securityLevel = undefined;
      this._view = undefined;
      this._viewVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._securityLevel = value.securityLevel;
      this._view = value.view;
      this._viewVariable = value.viewVariable;
    }
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

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // view_variable - computed: false, optional: true, required: false
  private _viewVariable?: string; 
  public get viewVariable() {
    return this.getStringAttribute('view_variable');
  }
  public set viewVariable(value: string) {
    this._viewVariable = value;
  }
  public resetViewVariable() {
    this._viewVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewVariableInput() {
    return this._viewVariable;
  }
}

export class SystemSnmpFeatureGroupsList extends cdktf.ComplexList {
  public internalValue? : SystemSnmpFeatureGroups[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpFeatureGroupsOutputReference {
    return new SystemSnmpFeatureGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSnmpFeatureTrapTargetServers {
  /**
  * Set IPv4/IPv6 address of SNMP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#ip SystemSnmpFeature#ip}
  */
  readonly ip?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#ip_variable SystemSnmpFeature#ip_variable}
  */
  readonly ipVariable?: string;
  /**
  * Set UDP port number to connect to SNMP server
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#port SystemSnmpFeature#port}
  */
  readonly port?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#port_variable SystemSnmpFeature#port_variable}
  */
  readonly portVariable?: string;
  /**
  * Source interface for outgoing SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#source_interface SystemSnmpFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#source_interface_variable SystemSnmpFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set name of the SNMP user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#user SystemSnmpFeature#user}
  */
  readonly user?: string;
  /**
  * Set user label of the SNMP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#user_label SystemSnmpFeature#user_label}
  */
  readonly userLabel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#user_variable SystemSnmpFeature#user_variable}
  */
  readonly userVariable?: string;
  /**
  * Set VPN in which SNMP server is located
  *   - Range: `0`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#vpn_id SystemSnmpFeature#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#vpn_id_variable SystemSnmpFeature#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function systemSnmpFeatureTrapTargetServersToTerraform(struct?: SystemSnmpFeatureTrapTargetServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_variable: cdktf.stringToTerraform(struct!.ipVariable),
    port: cdktf.numberToTerraform(struct!.port),
    port_variable: cdktf.stringToTerraform(struct!.portVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    user: cdktf.stringToTerraform(struct!.user),
    user_label: cdktf.stringToTerraform(struct!.userLabel),
    user_variable: cdktf.stringToTerraform(struct!.userVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function systemSnmpFeatureTrapTargetServersToHclTerraform(struct?: SystemSnmpFeatureTrapTargetServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_variable: {
      value: cdktf.stringToHclTerraform(struct!.portVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_label: {
      value: cdktf.stringToHclTerraform(struct!.userLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_variable: {
      value: cdktf.stringToHclTerraform(struct!.userVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpFeatureTrapTargetServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpFeatureTrapTargetServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVariable = this._ipVariable;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portVariable = this._portVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._userLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLabel = this._userLabel;
    }
    if (this._userVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVariable = this._userVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpFeatureTrapTargetServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ipVariable = undefined;
      this._port = undefined;
      this._portVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._user = undefined;
      this._userLabel = undefined;
      this._userVariable = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._ipVariable = value.ipVariable;
      this._port = value.port;
      this._portVariable = value.portVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._user = value.user;
      this._userLabel = value.userLabel;
      this._userVariable = value.userVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_variable - computed: false, optional: true, required: false
  private _ipVariable?: string; 
  public get ipVariable() {
    return this.getStringAttribute('ip_variable');
  }
  public set ipVariable(value: string) {
    this._ipVariable = value;
  }
  public resetIpVariable() {
    this._ipVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVariableInput() {
    return this._ipVariable;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_variable - computed: false, optional: true, required: false
  private _portVariable?: string; 
  public get portVariable() {
    return this.getStringAttribute('port_variable');
  }
  public set portVariable(value: string) {
    this._portVariable = value;
  }
  public resetPortVariable() {
    this._portVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portVariableInput() {
    return this._portVariable;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_label - computed: false, optional: true, required: false
  private _userLabel?: string; 
  public get userLabel() {
    return this.getStringAttribute('user_label');
  }
  public set userLabel(value: string) {
    this._userLabel = value;
  }
  public resetUserLabel() {
    this._userLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelInput() {
    return this._userLabel;
  }

  // user_variable - computed: false, optional: true, required: false
  private _userVariable?: string; 
  public get userVariable() {
    return this.getStringAttribute('user_variable');
  }
  public set userVariable(value: string) {
    this._userVariable = value;
  }
  public resetUserVariable() {
    this._userVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVariableInput() {
    return this._userVariable;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class SystemSnmpFeatureTrapTargetServersList extends cdktf.ComplexList {
  public internalValue? : SystemSnmpFeatureTrapTargetServers[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpFeatureTrapTargetServersOutputReference {
    return new SystemSnmpFeatureTrapTargetServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSnmpFeatureUsers {
  /**
  * Specify authentication protocol password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#authentication_password SystemSnmpFeature#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#authentication_password_variable SystemSnmpFeature#authentication_password_variable}
  */
  readonly authenticationPasswordVariable?: string;
  /**
  * Configure authentication protocol
  *   - Choices: `sha`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#authentication_protocol SystemSnmpFeature#authentication_protocol}
  */
  readonly authenticationProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#authentication_protocol_variable SystemSnmpFeature#authentication_protocol_variable}
  */
  readonly authenticationProtocolVariable?: string;
  /**
  * Name of the SNMP group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#group SystemSnmpFeature#group}
  */
  readonly group?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#group_variable SystemSnmpFeature#group_variable}
  */
  readonly groupVariable?: string;
  /**
  * Name of the SNMP user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#name SystemSnmpFeature#name}
  */
  readonly name?: string;
  /**
  * Specify privacy protocol password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#privacy_password SystemSnmpFeature#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#privacy_password_variable SystemSnmpFeature#privacy_password_variable}
  */
  readonly privacyPasswordVariable?: string;
  /**
  * Configure privacy protocol
  *   - Choices: `aes-cfb-128`, `aes-256-cfb-128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#privacy_protocol SystemSnmpFeature#privacy_protocol}
  */
  readonly privacyProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#privacy_protocol_variable SystemSnmpFeature#privacy_protocol_variable}
  */
  readonly privacyProtocolVariable?: string;
}

export function systemSnmpFeatureUsersToTerraform(struct?: SystemSnmpFeatureUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_password: cdktf.stringToTerraform(struct!.authenticationPassword),
    authentication_password_variable: cdktf.stringToTerraform(struct!.authenticationPasswordVariable),
    authentication_protocol: cdktf.stringToTerraform(struct!.authenticationProtocol),
    authentication_protocol_variable: cdktf.stringToTerraform(struct!.authenticationProtocolVariable),
    group: cdktf.stringToTerraform(struct!.group),
    group_variable: cdktf.stringToTerraform(struct!.groupVariable),
    name: cdktf.stringToTerraform(struct!.name),
    privacy_password: cdktf.stringToTerraform(struct!.privacyPassword),
    privacy_password_variable: cdktf.stringToTerraform(struct!.privacyPasswordVariable),
    privacy_protocol: cdktf.stringToTerraform(struct!.privacyProtocol),
    privacy_protocol_variable: cdktf.stringToTerraform(struct!.privacyProtocolVariable),
  }
}


export function systemSnmpFeatureUsersToHclTerraform(struct?: SystemSnmpFeatureUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_password: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_password_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPasswordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_protocol: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProtocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_variable: {
      value: cdktf.stringToHclTerraform(struct!.groupVariable),
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
    privacy_password: {
      value: cdktf.stringToHclTerraform(struct!.privacyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_password_variable: {
      value: cdktf.stringToHclTerraform(struct!.privacyPasswordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.privacyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.privacyProtocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpFeatureUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpFeatureUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPassword = this._authenticationPassword;
    }
    if (this._authenticationPasswordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPasswordVariable = this._authenticationPasswordVariable;
    }
    if (this._authenticationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProtocol = this._authenticationProtocol;
    }
    if (this._authenticationProtocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProtocolVariable = this._authenticationProtocolVariable;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._groupVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupVariable = this._groupVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privacyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPassword = this._privacyPassword;
    }
    if (this._privacyPasswordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPasswordVariable = this._privacyPasswordVariable;
    }
    if (this._privacyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyProtocol = this._privacyProtocol;
    }
    if (this._privacyProtocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyProtocolVariable = this._privacyProtocolVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpFeatureUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationPassword = undefined;
      this._authenticationPasswordVariable = undefined;
      this._authenticationProtocol = undefined;
      this._authenticationProtocolVariable = undefined;
      this._group = undefined;
      this._groupVariable = undefined;
      this._name = undefined;
      this._privacyPassword = undefined;
      this._privacyPasswordVariable = undefined;
      this._privacyProtocol = undefined;
      this._privacyProtocolVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationPassword = value.authenticationPassword;
      this._authenticationPasswordVariable = value.authenticationPasswordVariable;
      this._authenticationProtocol = value.authenticationProtocol;
      this._authenticationProtocolVariable = value.authenticationProtocolVariable;
      this._group = value.group;
      this._groupVariable = value.groupVariable;
      this._name = value.name;
      this._privacyPassword = value.privacyPassword;
      this._privacyPasswordVariable = value.privacyPasswordVariable;
      this._privacyProtocol = value.privacyProtocol;
      this._privacyProtocolVariable = value.privacyProtocolVariable;
    }
  }

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // authentication_password_variable - computed: false, optional: true, required: false
  private _authenticationPasswordVariable?: string; 
  public get authenticationPasswordVariable() {
    return this.getStringAttribute('authentication_password_variable');
  }
  public set authenticationPasswordVariable(value: string) {
    this._authenticationPasswordVariable = value;
  }
  public resetAuthenticationPasswordVariable() {
    this._authenticationPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordVariableInput() {
    return this._authenticationPasswordVariable;
  }

  // authentication_protocol - computed: false, optional: true, required: false
  private _authenticationProtocol?: string; 
  public get authenticationProtocol() {
    return this.getStringAttribute('authentication_protocol');
  }
  public set authenticationProtocol(value: string) {
    this._authenticationProtocol = value;
  }
  public resetAuthenticationProtocol() {
    this._authenticationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProtocolInput() {
    return this._authenticationProtocol;
  }

  // authentication_protocol_variable - computed: false, optional: true, required: false
  private _authenticationProtocolVariable?: string; 
  public get authenticationProtocolVariable() {
    return this.getStringAttribute('authentication_protocol_variable');
  }
  public set authenticationProtocolVariable(value: string) {
    this._authenticationProtocolVariable = value;
  }
  public resetAuthenticationProtocolVariable() {
    this._authenticationProtocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProtocolVariableInput() {
    return this._authenticationProtocolVariable;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_variable - computed: false, optional: true, required: false
  private _groupVariable?: string; 
  public get groupVariable() {
    return this.getStringAttribute('group_variable');
  }
  public set groupVariable(value: string) {
    this._groupVariable = value;
  }
  public resetGroupVariable() {
    this._groupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupVariableInput() {
    return this._groupVariable;
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

  // privacy_password - computed: false, optional: true, required: false
  private _privacyPassword?: string; 
  public get privacyPassword() {
    return this.getStringAttribute('privacy_password');
  }
  public set privacyPassword(value: string) {
    this._privacyPassword = value;
  }
  public resetPrivacyPassword() {
    this._privacyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPasswordInput() {
    return this._privacyPassword;
  }

  // privacy_password_variable - computed: false, optional: true, required: false
  private _privacyPasswordVariable?: string; 
  public get privacyPasswordVariable() {
    return this.getStringAttribute('privacy_password_variable');
  }
  public set privacyPasswordVariable(value: string) {
    this._privacyPasswordVariable = value;
  }
  public resetPrivacyPasswordVariable() {
    this._privacyPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPasswordVariableInput() {
    return this._privacyPasswordVariable;
  }

  // privacy_protocol - computed: false, optional: true, required: false
  private _privacyProtocol?: string; 
  public get privacyProtocol() {
    return this.getStringAttribute('privacy_protocol');
  }
  public set privacyProtocol(value: string) {
    this._privacyProtocol = value;
  }
  public resetPrivacyProtocol() {
    this._privacyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolInput() {
    return this._privacyProtocol;
  }

  // privacy_protocol_variable - computed: false, optional: true, required: false
  private _privacyProtocolVariable?: string; 
  public get privacyProtocolVariable() {
    return this.getStringAttribute('privacy_protocol_variable');
  }
  public set privacyProtocolVariable(value: string) {
    this._privacyProtocolVariable = value;
  }
  public resetPrivacyProtocolVariable() {
    this._privacyProtocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolVariableInput() {
    return this._privacyProtocolVariable;
  }
}

export class SystemSnmpFeatureUsersList extends cdktf.ComplexList {
  public internalValue? : SystemSnmpFeatureUsers[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpFeatureUsersOutputReference {
    return new SystemSnmpFeatureUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSnmpFeatureViewsOids {
  /**
  * Exclude the OID
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#exclude SystemSnmpFeature#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#exclude_variable SystemSnmpFeature#exclude_variable}
  */
  readonly excludeVariable?: string;
  /**
  * Configure identifier of subtree of MIB objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#id SystemSnmpFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#id_variable SystemSnmpFeature#id_variable}
  */
  readonly idVariable?: string;
}

export function systemSnmpFeatureViewsOidsToTerraform(struct?: SystemSnmpFeatureViewsOids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    exclude_variable: cdktf.stringToTerraform(struct!.excludeVariable),
    id: cdktf.stringToTerraform(struct!.id),
    id_variable: cdktf.stringToTerraform(struct!.idVariable),
  }
}


export function systemSnmpFeatureViewsOidsToHclTerraform(struct?: SystemSnmpFeatureViewsOids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_variable: {
      value: cdktf.stringToHclTerraform(struct!.excludeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_variable: {
      value: cdktf.stringToHclTerraform(struct!.idVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpFeatureViewsOidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpFeatureViewsOids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._excludeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVariable = this._excludeVariable;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.idVariable = this._idVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpFeatureViewsOids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._excludeVariable = undefined;
      this._id = undefined;
      this._idVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._excludeVariable = value.excludeVariable;
      this._id = value.id;
      this._idVariable = value.idVariable;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // exclude_variable - computed: false, optional: true, required: false
  private _excludeVariable?: string; 
  public get excludeVariable() {
    return this.getStringAttribute('exclude_variable');
  }
  public set excludeVariable(value: string) {
    this._excludeVariable = value;
  }
  public resetExcludeVariable() {
    this._excludeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVariableInput() {
    return this._excludeVariable;
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

  // id_variable - computed: false, optional: true, required: false
  private _idVariable?: string; 
  public get idVariable() {
    return this.getStringAttribute('id_variable');
  }
  public set idVariable(value: string) {
    this._idVariable = value;
  }
  public resetIdVariable() {
    this._idVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idVariableInput() {
    return this._idVariable;
  }
}

export class SystemSnmpFeatureViewsOidsList extends cdktf.ComplexList {
  public internalValue? : SystemSnmpFeatureViewsOids[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpFeatureViewsOidsOutputReference {
    return new SystemSnmpFeatureViewsOidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSnmpFeatureViews {
  /**
  * Set the name of the SNMP view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#name SystemSnmpFeature#name}
  */
  readonly name?: string;
  /**
  * Configure SNMP object identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#oids SystemSnmpFeature#oids}
  */
  readonly oids?: SystemSnmpFeatureViewsOids[] | cdktf.IResolvable;
}

export function systemSnmpFeatureViewsToTerraform(struct?: SystemSnmpFeatureViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    oids: cdktf.listMapper(systemSnmpFeatureViewsOidsToTerraform, false)(struct!.oids),
  }
}


export function systemSnmpFeatureViewsToHclTerraform(struct?: SystemSnmpFeatureViews | cdktf.IResolvable): any {
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
    oids: {
      value: cdktf.listMapperHcl(systemSnmpFeatureViewsOidsToHclTerraform, false)(struct!.oids),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSnmpFeatureViewsOidsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpFeatureViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpFeatureViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oids = this._oids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpFeatureViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._oids.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._oids.internalValue = value.oids;
    }
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

  // oids - computed: false, optional: true, required: false
  private _oids = new SystemSnmpFeatureViewsOidsList(this, "oids", false);
  public get oids() {
    return this._oids;
  }
  public putOids(value: SystemSnmpFeatureViewsOids[] | cdktf.IResolvable) {
    this._oids.internalValue = value;
  }
  public resetOids() {
    this._oids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidsInput() {
    return this._oids.internalValue;
  }
}

export class SystemSnmpFeatureViewsList extends cdktf.ComplexList {
  public internalValue? : SystemSnmpFeatureViews[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpFeatureViewsOutputReference {
    return new SystemSnmpFeatureViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature sdwan_system_snmp_feature}
*/
export class SystemSnmpFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_snmp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSnmpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSnmpFeature to import
  * @param importFromId The id of the existing SystemSnmpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSnmpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_snmp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_snmp_feature sdwan_system_snmp_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSnmpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSnmpFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_snmp_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communities.internalValue = config.communities;
    this._contactPerson = config.contactPerson;
    this._contactPersonVariable = config.contactPersonVariable;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._groups.internalValue = config.groups;
    this._locationOfDevice = config.locationOfDevice;
    this._locationOfDeviceVariable = config.locationOfDeviceVariable;
    this._name = config.name;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._trapTargetServers.internalValue = config.trapTargetServers;
    this._users.internalValue = config.users;
    this._views.internalValue = config.views;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communities - computed: false, optional: true, required: false
  private _communities = new SystemSnmpFeatureCommunitiesList(this, "communities", false);
  public get communities() {
    return this._communities;
  }
  public putCommunities(value: SystemSnmpFeatureCommunities[] | cdktf.IResolvable) {
    this._communities.internalValue = value;
  }
  public resetCommunities() {
    this._communities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities.internalValue;
  }

  // contact_person - computed: false, optional: true, required: false
  private _contactPerson?: string; 
  public get contactPerson() {
    return this.getStringAttribute('contact_person');
  }
  public set contactPerson(value: string) {
    this._contactPerson = value;
  }
  public resetContactPerson() {
    this._contactPerson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPersonInput() {
    return this._contactPerson;
  }

  // contact_person_variable - computed: false, optional: true, required: false
  private _contactPersonVariable?: string; 
  public get contactPersonVariable() {
    return this.getStringAttribute('contact_person_variable');
  }
  public set contactPersonVariable(value: string) {
    this._contactPersonVariable = value;
  }
  public resetContactPersonVariable() {
    this._contactPersonVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPersonVariableInput() {
    return this._contactPersonVariable;
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

  // groups - computed: false, optional: true, required: false
  private _groups = new SystemSnmpFeatureGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: SystemSnmpFeatureGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_of_device - computed: false, optional: true, required: false
  private _locationOfDevice?: string; 
  public get locationOfDevice() {
    return this.getStringAttribute('location_of_device');
  }
  public set locationOfDevice(value: string) {
    this._locationOfDevice = value;
  }
  public resetLocationOfDevice() {
    this._locationOfDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationOfDeviceInput() {
    return this._locationOfDevice;
  }

  // location_of_device_variable - computed: false, optional: true, required: false
  private _locationOfDeviceVariable?: string; 
  public get locationOfDeviceVariable() {
    return this.getStringAttribute('location_of_device_variable');
  }
  public set locationOfDeviceVariable(value: string) {
    this._locationOfDeviceVariable = value;
  }
  public resetLocationOfDeviceVariable() {
    this._locationOfDeviceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationOfDeviceVariableInput() {
    return this._locationOfDeviceVariable;
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

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // trap_target_servers - computed: false, optional: true, required: false
  private _trapTargetServers = new SystemSnmpFeatureTrapTargetServersList(this, "trap_target_servers", false);
  public get trapTargetServers() {
    return this._trapTargetServers;
  }
  public putTrapTargetServers(value: SystemSnmpFeatureTrapTargetServers[] | cdktf.IResolvable) {
    this._trapTargetServers.internalValue = value;
  }
  public resetTrapTargetServers() {
    this._trapTargetServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapTargetServersInput() {
    return this._trapTargetServers.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new SystemSnmpFeatureUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: SystemSnmpFeatureUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // views - computed: false, optional: true, required: false
  private _views = new SystemSnmpFeatureViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
  public putViews(value: SystemSnmpFeatureViews[] | cdktf.IResolvable) {
    this._views.internalValue = value;
  }
  public resetViews() {
    this._views.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communities: cdktf.listMapper(systemSnmpFeatureCommunitiesToTerraform, false)(this._communities.internalValue),
      contact_person: cdktf.stringToTerraform(this._contactPerson),
      contact_person_variable: cdktf.stringToTerraform(this._contactPersonVariable),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      groups: cdktf.listMapper(systemSnmpFeatureGroupsToTerraform, false)(this._groups.internalValue),
      location_of_device: cdktf.stringToTerraform(this._locationOfDevice),
      location_of_device_variable: cdktf.stringToTerraform(this._locationOfDeviceVariable),
      name: cdktf.stringToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      trap_target_servers: cdktf.listMapper(systemSnmpFeatureTrapTargetServersToTerraform, false)(this._trapTargetServers.internalValue),
      users: cdktf.listMapper(systemSnmpFeatureUsersToTerraform, false)(this._users.internalValue),
      views: cdktf.listMapper(systemSnmpFeatureViewsToTerraform, false)(this._views.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communities: {
        value: cdktf.listMapperHcl(systemSnmpFeatureCommunitiesToHclTerraform, false)(this._communities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSnmpFeatureCommunitiesList",
      },
      contact_person: {
        value: cdktf.stringToHclTerraform(this._contactPerson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_person_variable: {
        value: cdktf.stringToHclTerraform(this._contactPersonVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(systemSnmpFeatureGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSnmpFeatureGroupsList",
      },
      location_of_device: {
        value: cdktf.stringToHclTerraform(this._locationOfDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_of_device_variable: {
        value: cdktf.stringToHclTerraform(this._locationOfDeviceVariable),
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
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_target_servers: {
        value: cdktf.listMapperHcl(systemSnmpFeatureTrapTargetServersToHclTerraform, false)(this._trapTargetServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSnmpFeatureTrapTargetServersList",
      },
      users: {
        value: cdktf.listMapperHcl(systemSnmpFeatureUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSnmpFeatureUsersList",
      },
      views: {
        value: cdktf.listMapperHcl(systemSnmpFeatureViewsToHclTerraform, false)(this._views.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSnmpFeatureViewsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
