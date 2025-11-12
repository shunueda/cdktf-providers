// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoSnmpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure SNMP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#communities CiscoSnmpFeatureTemplate#communities}
  */
  readonly communities?: CiscoSnmpFeatureTemplateCommunities[] | cdktf.IResolvable;
  /**
  * Set the contact for this managed node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#contact CiscoSnmpFeatureTemplate#contact}
  */
  readonly contact?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#contact_variable CiscoSnmpFeatureTemplate#contact_variable}
  */
  readonly contactVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#description CiscoSnmpFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#device_types CiscoSnmpFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Configure an SNMP group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#groups CiscoSnmpFeatureTemplate#groups}
  */
  readonly groups?: CiscoSnmpFeatureTemplateGroups[] | cdktf.IResolvable;
  /**
  * Set the physical location of this managed node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#location CiscoSnmpFeatureTemplate#location}
  */
  readonly location?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#location_variable CiscoSnmpFeatureTemplate#location_variable}
  */
  readonly locationVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#name CiscoSnmpFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Enable or disable SNMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#shutdown CiscoSnmpFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#shutdown_variable CiscoSnmpFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Configure SNMP server to receive SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#trap_targets CiscoSnmpFeatureTemplate#trap_targets}
  */
  readonly trapTargets?: CiscoSnmpFeatureTemplateTrapTargets[] | cdktf.IResolvable;
  /**
  * Configure an SNMP user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#users CiscoSnmpFeatureTemplate#users}
  */
  readonly users?: CiscoSnmpFeatureTemplateUsers[] | cdktf.IResolvable;
  /**
  * Configure a view record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#views CiscoSnmpFeatureTemplate#views}
  */
  readonly views?: CiscoSnmpFeatureTemplateViews[] | cdktf.IResolvable;
}
export interface CiscoSnmpFeatureTemplateCommunities {
  /**
  * Configure access permissions
  *   - Choices: `read-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#authorization CiscoSnmpFeatureTemplate#authorization}
  */
  readonly authorization?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#authorization_variable CiscoSnmpFeatureTemplate#authorization_variable}
  */
  readonly authorizationVariable?: string;
  /**
  * Set name of the SNMP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#name CiscoSnmpFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#optional CiscoSnmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set name of the SNMP view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#view CiscoSnmpFeatureTemplate#view}
  */
  readonly view?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#view_variable CiscoSnmpFeatureTemplate#view_variable}
  */
  readonly viewVariable?: string;
}

export function ciscoSnmpFeatureTemplateCommunitiesToTerraform(struct?: CiscoSnmpFeatureTemplateCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
    authorization_variable: cdktf.stringToTerraform(struct!.authorizationVariable),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    view: cdktf.stringToTerraform(struct!.view),
    view_variable: cdktf.stringToTerraform(struct!.viewVariable),
  }
}


export function ciscoSnmpFeatureTemplateCommunitiesToHclTerraform(struct?: CiscoSnmpFeatureTemplateCommunities | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CiscoSnmpFeatureTemplateCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSnmpFeatureTemplateCommunities | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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

  public set internalValue(value: CiscoSnmpFeatureTemplateCommunities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
      this._authorizationVariable = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CiscoSnmpFeatureTemplateCommunitiesList extends cdktf.ComplexList {
  public internalValue? : CiscoSnmpFeatureTemplateCommunities[] | cdktf.IResolvable

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
  public get(index: number): CiscoSnmpFeatureTemplateCommunitiesOutputReference {
    return new CiscoSnmpFeatureTemplateCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSnmpFeatureTemplateGroups {
  /**
  * Name of the SNMP group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#name CiscoSnmpFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#optional CiscoSnmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure security level
  *   - Choices: `no-auth-no-priv`, `auth-no-priv`, `auth-priv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#security_level CiscoSnmpFeatureTemplate#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Name of the SNMP view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#view CiscoSnmpFeatureTemplate#view}
  */
  readonly view?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#view_variable CiscoSnmpFeatureTemplate#view_variable}
  */
  readonly viewVariable?: string;
}

export function ciscoSnmpFeatureTemplateGroupsToTerraform(struct?: CiscoSnmpFeatureTemplateGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    view: cdktf.stringToTerraform(struct!.view),
    view_variable: cdktf.stringToTerraform(struct!.viewVariable),
  }
}


export function ciscoSnmpFeatureTemplateGroupsToHclTerraform(struct?: CiscoSnmpFeatureTemplateGroups | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CiscoSnmpFeatureTemplateGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSnmpFeatureTemplateGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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

  public set internalValue(value: CiscoSnmpFeatureTemplateGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CiscoSnmpFeatureTemplateGroupsList extends cdktf.ComplexList {
  public internalValue? : CiscoSnmpFeatureTemplateGroups[] | cdktf.IResolvable

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
  public get(index: number): CiscoSnmpFeatureTemplateGroupsOutputReference {
    return new CiscoSnmpFeatureTemplateGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSnmpFeatureTemplateTrapTargets {
  /**
  * Set name of the SNMP community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#community_name CiscoSnmpFeatureTemplate#community_name}
  */
  readonly communityName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#community_name_variable CiscoSnmpFeatureTemplate#community_name_variable}
  */
  readonly communityNameVariable?: string;
  /**
  * Set IPv4/IPv6 address of SNMP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#ip CiscoSnmpFeatureTemplate#ip}
  */
  readonly ip?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#ip_variable CiscoSnmpFeatureTemplate#ip_variable}
  */
  readonly ipVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#optional CiscoSnmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Source interface for outgoing SNMP traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#source_interface CiscoSnmpFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#source_interface_variable CiscoSnmpFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set UDP port number to connect to SNMP server
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#udp_port CiscoSnmpFeatureTemplate#udp_port}
  */
  readonly udpPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#udp_port_variable CiscoSnmpFeatureTemplate#udp_port_variable}
  */
  readonly udpPortVariable?: string;
  /**
  * Set name of the SNMP user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#user CiscoSnmpFeatureTemplate#user}
  */
  readonly user?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#user_variable CiscoSnmpFeatureTemplate#user_variable}
  */
  readonly userVariable?: string;
  /**
  * Set VPN in which SNMP server is located
  *   - Range: `0`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#vpn_id CiscoSnmpFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#vpn_id_variable CiscoSnmpFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoSnmpFeatureTemplateTrapTargetsToTerraform(struct?: CiscoSnmpFeatureTemplateTrapTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_name: cdktf.stringToTerraform(struct!.communityName),
    community_name_variable: cdktf.stringToTerraform(struct!.communityNameVariable),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_variable: cdktf.stringToTerraform(struct!.ipVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    udp_port: cdktf.numberToTerraform(struct!.udpPort),
    udp_port_variable: cdktf.stringToTerraform(struct!.udpPortVariable),
    user: cdktf.stringToTerraform(struct!.user),
    user_variable: cdktf.stringToTerraform(struct!.userVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoSnmpFeatureTemplateTrapTargetsToHclTerraform(struct?: CiscoSnmpFeatureTemplateTrapTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_name: {
      value: cdktf.stringToHclTerraform(struct!.communityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.communityNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    udp_port: {
      value: cdktf.numberToHclTerraform(struct!.udpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.udpPortVariable),
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

export class CiscoSnmpFeatureTemplateTrapTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSnmpFeatureTemplateTrapTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityName = this._communityName;
    }
    if (this._communityNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityNameVariable = this._communityNameVariable;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVariable = this._ipVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._udpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPort = this._udpPort;
    }
    if (this._udpPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortVariable = this._udpPortVariable;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
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

  public set internalValue(value: CiscoSnmpFeatureTemplateTrapTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._communityName = undefined;
      this._communityNameVariable = undefined;
      this._ip = undefined;
      this._ipVariable = undefined;
      this._optional = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._udpPort = undefined;
      this._udpPortVariable = undefined;
      this._user = undefined;
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
      this._communityName = value.communityName;
      this._communityNameVariable = value.communityNameVariable;
      this._ip = value.ip;
      this._ipVariable = value.ipVariable;
      this._optional = value.optional;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._udpPort = value.udpPort;
      this._udpPortVariable = value.udpPortVariable;
      this._user = value.user;
      this._userVariable = value.userVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // community_name - computed: false, optional: true, required: false
  private _communityName?: string; 
  public get communityName() {
    return this.getStringAttribute('community_name');
  }
  public set communityName(value: string) {
    this._communityName = value;
  }
  public resetCommunityName() {
    this._communityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityNameInput() {
    return this._communityName;
  }

  // community_name_variable - computed: false, optional: true, required: false
  private _communityNameVariable?: string; 
  public get communityNameVariable() {
    return this.getStringAttribute('community_name_variable');
  }
  public set communityNameVariable(value: string) {
    this._communityNameVariable = value;
  }
  public resetCommunityNameVariable() {
    this._communityNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityNameVariableInput() {
    return this._communityNameVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // udp_port - computed: false, optional: true, required: false
  private _udpPort?: number; 
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }
  public set udpPort(value: number) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
  }

  // udp_port_variable - computed: false, optional: true, required: false
  private _udpPortVariable?: string; 
  public get udpPortVariable() {
    return this.getStringAttribute('udp_port_variable');
  }
  public set udpPortVariable(value: string) {
    this._udpPortVariable = value;
  }
  public resetUdpPortVariable() {
    this._udpPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortVariableInput() {
    return this._udpPortVariable;
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

export class CiscoSnmpFeatureTemplateTrapTargetsList extends cdktf.ComplexList {
  public internalValue? : CiscoSnmpFeatureTemplateTrapTargets[] | cdktf.IResolvable

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
  public get(index: number): CiscoSnmpFeatureTemplateTrapTargetsOutputReference {
    return new CiscoSnmpFeatureTemplateTrapTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSnmpFeatureTemplateUsers {
  /**
  * Specify authentication protocol password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#authentication_password CiscoSnmpFeatureTemplate#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#authentication_password_variable CiscoSnmpFeatureTemplate#authentication_password_variable}
  */
  readonly authenticationPasswordVariable?: string;
  /**
  * Configure authentication protocol
  *   - Choices: `md5`, `sha`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#authentication_protocol CiscoSnmpFeatureTemplate#authentication_protocol}
  */
  readonly authenticationProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#authentication_protocol_variable CiscoSnmpFeatureTemplate#authentication_protocol_variable}
  */
  readonly authenticationProtocolVariable?: string;
  /**
  * Name of the SNMP group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#group CiscoSnmpFeatureTemplate#group}
  */
  readonly group?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#group_variable CiscoSnmpFeatureTemplate#group_variable}
  */
  readonly groupVariable?: string;
  /**
  * Name of the SNMP user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#name CiscoSnmpFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#optional CiscoSnmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Specify privacy protocol password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#privacy_password CiscoSnmpFeatureTemplate#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#privacy_password_variable CiscoSnmpFeatureTemplate#privacy_password_variable}
  */
  readonly privacyPasswordVariable?: string;
  /**
  * Configure privacy protocol
  *   - Choices: `aes-cfb-128`, `aes-256-cfb-128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#privacy_protocol CiscoSnmpFeatureTemplate#privacy_protocol}
  */
  readonly privacyProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#privacy_protocol_variable CiscoSnmpFeatureTemplate#privacy_protocol_variable}
  */
  readonly privacyProtocolVariable?: string;
}

export function ciscoSnmpFeatureTemplateUsersToTerraform(struct?: CiscoSnmpFeatureTemplateUsers | cdktf.IResolvable): any {
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
    optional: cdktf.booleanToTerraform(struct!.optional),
    privacy_password: cdktf.stringToTerraform(struct!.privacyPassword),
    privacy_password_variable: cdktf.stringToTerraform(struct!.privacyPasswordVariable),
    privacy_protocol: cdktf.stringToTerraform(struct!.privacyProtocol),
    privacy_protocol_variable: cdktf.stringToTerraform(struct!.privacyProtocolVariable),
  }
}


export function ciscoSnmpFeatureTemplateUsersToHclTerraform(struct?: CiscoSnmpFeatureTemplateUsers | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CiscoSnmpFeatureTemplateUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSnmpFeatureTemplateUsers | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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

  public set internalValue(value: CiscoSnmpFeatureTemplateUsers | cdktf.IResolvable | undefined) {
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
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CiscoSnmpFeatureTemplateUsersList extends cdktf.ComplexList {
  public internalValue? : CiscoSnmpFeatureTemplateUsers[] | cdktf.IResolvable

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
  public get(index: number): CiscoSnmpFeatureTemplateUsersOutputReference {
    return new CiscoSnmpFeatureTemplateUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSnmpFeatureTemplateViewsObjectIdentifiers {
  /**
  * Exclude the OID
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#exclude CiscoSnmpFeatureTemplate#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#exclude_variable CiscoSnmpFeatureTemplate#exclude_variable}
  */
  readonly excludeVariable?: string;
  /**
  * Configure identifier of subtree of MIB objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#id CiscoSnmpFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#id_variable CiscoSnmpFeatureTemplate#id_variable}
  */
  readonly idVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#optional CiscoSnmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoSnmpFeatureTemplateViewsObjectIdentifiersToTerraform(struct?: CiscoSnmpFeatureTemplateViewsObjectIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    exclude_variable: cdktf.stringToTerraform(struct!.excludeVariable),
    id: cdktf.stringToTerraform(struct!.id),
    id_variable: cdktf.stringToTerraform(struct!.idVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoSnmpFeatureTemplateViewsObjectIdentifiersToHclTerraform(struct?: CiscoSnmpFeatureTemplateViewsObjectIdentifiers | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSnmpFeatureTemplateViewsObjectIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSnmpFeatureTemplateViewsObjectIdentifiers | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSnmpFeatureTemplateViewsObjectIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._excludeVariable = undefined;
      this._id = undefined;
      this._idVariable = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoSnmpFeatureTemplateViewsObjectIdentifiersList extends cdktf.ComplexList {
  public internalValue? : CiscoSnmpFeatureTemplateViewsObjectIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): CiscoSnmpFeatureTemplateViewsObjectIdentifiersOutputReference {
    return new CiscoSnmpFeatureTemplateViewsObjectIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSnmpFeatureTemplateViews {
  /**
  * Set the name of the SNMP view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#name CiscoSnmpFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Configure SNMP object identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#object_identifiers CiscoSnmpFeatureTemplate#object_identifiers}
  */
  readonly objectIdentifiers?: CiscoSnmpFeatureTemplateViewsObjectIdentifiers[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#optional CiscoSnmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoSnmpFeatureTemplateViewsToTerraform(struct?: CiscoSnmpFeatureTemplateViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    object_identifiers: cdktf.listMapper(ciscoSnmpFeatureTemplateViewsObjectIdentifiersToTerraform, false)(struct!.objectIdentifiers),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoSnmpFeatureTemplateViewsToHclTerraform(struct?: CiscoSnmpFeatureTemplateViews | cdktf.IResolvable): any {
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
    object_identifiers: {
      value: cdktf.listMapperHcl(ciscoSnmpFeatureTemplateViewsObjectIdentifiersToHclTerraform, false)(struct!.objectIdentifiers),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoSnmpFeatureTemplateViewsObjectIdentifiersList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSnmpFeatureTemplateViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSnmpFeatureTemplateViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectIdentifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifiers = this._objectIdentifiers?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSnmpFeatureTemplateViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._objectIdentifiers.internalValue = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._objectIdentifiers.internalValue = value.objectIdentifiers;
      this._optional = value.optional;
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

  // object_identifiers - computed: false, optional: true, required: false
  private _objectIdentifiers = new CiscoSnmpFeatureTemplateViewsObjectIdentifiersList(this, "object_identifiers", false);
  public get objectIdentifiers() {
    return this._objectIdentifiers;
  }
  public putObjectIdentifiers(value: CiscoSnmpFeatureTemplateViewsObjectIdentifiers[] | cdktf.IResolvable) {
    this._objectIdentifiers.internalValue = value;
  }
  public resetObjectIdentifiers() {
    this._objectIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifiersInput() {
    return this._objectIdentifiers.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoSnmpFeatureTemplateViewsList extends cdktf.ComplexList {
  public internalValue? : CiscoSnmpFeatureTemplateViews[] | cdktf.IResolvable

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
  public get(index: number): CiscoSnmpFeatureTemplateViewsOutputReference {
    return new CiscoSnmpFeatureTemplateViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template sdwan_cisco_snmp_feature_template}
*/
export class CiscoSnmpFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_snmp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoSnmpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoSnmpFeatureTemplate to import
  * @param importFromId The id of the existing CiscoSnmpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoSnmpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_snmp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_snmp_feature_template sdwan_cisco_snmp_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoSnmpFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoSnmpFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_snmp_feature_template',
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
    this._contact = config.contact;
    this._contactVariable = config.contactVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._groups.internalValue = config.groups;
    this._location = config.location;
    this._locationVariable = config.locationVariable;
    this._name = config.name;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._trapTargets.internalValue = config.trapTargets;
    this._users.internalValue = config.users;
    this._views.internalValue = config.views;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communities - computed: false, optional: true, required: false
  private _communities = new CiscoSnmpFeatureTemplateCommunitiesList(this, "communities", false);
  public get communities() {
    return this._communities;
  }
  public putCommunities(value: CiscoSnmpFeatureTemplateCommunities[] | cdktf.IResolvable) {
    this._communities.internalValue = value;
  }
  public resetCommunities() {
    this._communities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitiesInput() {
    return this._communities.internalValue;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // contact_variable - computed: false, optional: true, required: false
  private _contactVariable?: string; 
  public get contactVariable() {
    return this.getStringAttribute('contact_variable');
  }
  public set contactVariable(value: string) {
    this._contactVariable = value;
  }
  public resetContactVariable() {
    this._contactVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactVariableInput() {
    return this._contactVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new CiscoSnmpFeatureTemplateGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: CiscoSnmpFeatureTemplateGroups[] | cdktf.IResolvable) {
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_variable - computed: false, optional: true, required: false
  private _locationVariable?: string; 
  public get locationVariable() {
    return this.getStringAttribute('location_variable');
  }
  public set locationVariable(value: string) {
    this._locationVariable = value;
  }
  public resetLocationVariable() {
    this._locationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationVariableInput() {
    return this._locationVariable;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // trap_targets - computed: false, optional: true, required: false
  private _trapTargets = new CiscoSnmpFeatureTemplateTrapTargetsList(this, "trap_targets", false);
  public get trapTargets() {
    return this._trapTargets;
  }
  public putTrapTargets(value: CiscoSnmpFeatureTemplateTrapTargets[] | cdktf.IResolvable) {
    this._trapTargets.internalValue = value;
  }
  public resetTrapTargets() {
    this._trapTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapTargetsInput() {
    return this._trapTargets.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new CiscoSnmpFeatureTemplateUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: CiscoSnmpFeatureTemplateUsers[] | cdktf.IResolvable) {
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
  private _views = new CiscoSnmpFeatureTemplateViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
  public putViews(value: CiscoSnmpFeatureTemplateViews[] | cdktf.IResolvable) {
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
      communities: cdktf.listMapper(ciscoSnmpFeatureTemplateCommunitiesToTerraform, false)(this._communities.internalValue),
      contact: cdktf.stringToTerraform(this._contact),
      contact_variable: cdktf.stringToTerraform(this._contactVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      groups: cdktf.listMapper(ciscoSnmpFeatureTemplateGroupsToTerraform, false)(this._groups.internalValue),
      location: cdktf.stringToTerraform(this._location),
      location_variable: cdktf.stringToTerraform(this._locationVariable),
      name: cdktf.stringToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      trap_targets: cdktf.listMapper(ciscoSnmpFeatureTemplateTrapTargetsToTerraform, false)(this._trapTargets.internalValue),
      users: cdktf.listMapper(ciscoSnmpFeatureTemplateUsersToTerraform, false)(this._users.internalValue),
      views: cdktf.listMapper(ciscoSnmpFeatureTemplateViewsToTerraform, false)(this._views.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communities: {
        value: cdktf.listMapperHcl(ciscoSnmpFeatureTemplateCommunitiesToHclTerraform, false)(this._communities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSnmpFeatureTemplateCommunitiesList",
      },
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_variable: {
        value: cdktf.stringToHclTerraform(this._contactVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      groups: {
        value: cdktf.listMapperHcl(ciscoSnmpFeatureTemplateGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSnmpFeatureTemplateGroupsList",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_variable: {
        value: cdktf.stringToHclTerraform(this._locationVariable),
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
      trap_targets: {
        value: cdktf.listMapperHcl(ciscoSnmpFeatureTemplateTrapTargetsToHclTerraform, false)(this._trapTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSnmpFeatureTemplateTrapTargetsList",
      },
      users: {
        value: cdktf.listMapperHcl(ciscoSnmpFeatureTemplateUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSnmpFeatureTemplateUsersList",
      },
      views: {
        value: cdktf.listMapperHcl(ciscoSnmpFeatureTemplateViewsToHclTerraform, false)(this._views.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSnmpFeatureTemplateViewsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
