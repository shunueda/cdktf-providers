// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointZtnaProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#allow_automatic_sign_on EndpointZtnaProfiles#allow_automatic_sign_on}
  */
  readonly allowAutomaticSignOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#connection_rules EndpointZtnaProfiles#connection_rules}
  */
  readonly connectionRules?: EndpointZtnaProfilesConnectionRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#entra_id EndpointZtnaProfiles#entra_id}
  */
  readonly entraId?: EndpointZtnaProfilesEntraId;
  /**
  * The primary key of the object. Can be found in the response from the get request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#primary_key EndpointZtnaProfiles#primary_key}
  */
  readonly primaryKey: string;
}
export interface EndpointZtnaProfilesConnectionRulesGateways {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#alias EndpointZtnaProfiles#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#private_app_count EndpointZtnaProfiles#private_app_count}
  */
  readonly privateAppCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#redirect EndpointZtnaProfiles#redirect}
  */
  readonly redirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#vip EndpointZtnaProfiles#vip}
  */
  readonly vip?: string;
}

export function endpointZtnaProfilesConnectionRulesGatewaysToTerraform(struct?: EndpointZtnaProfilesConnectionRulesGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    private_app_count: cdktf.numberToTerraform(struct!.privateAppCount),
    redirect: cdktf.stringToTerraform(struct!.redirect),
    vip: cdktf.stringToTerraform(struct!.vip),
  }
}


export function endpointZtnaProfilesConnectionRulesGatewaysToHclTerraform(struct?: EndpointZtnaProfilesConnectionRulesGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_app_count: {
      value: cdktf.numberToHclTerraform(struct!.privateAppCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect: {
      value: cdktf.stringToHclTerraform(struct!.redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointZtnaProfilesConnectionRulesGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointZtnaProfilesConnectionRulesGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._privateAppCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAppCount = this._privateAppCount;
    }
    if (this._redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointZtnaProfilesConnectionRulesGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._privateAppCount = undefined;
      this._redirect = undefined;
      this._vip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._privateAppCount = value.privateAppCount;
      this._redirect = value.redirect;
      this._vip = value.vip;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // private_app_count - computed: true, optional: true, required: false
  private _privateAppCount?: number; 
  public get privateAppCount() {
    return this.getNumberAttribute('private_app_count');
  }
  public set privateAppCount(value: number) {
    this._privateAppCount = value;
  }
  public resetPrivateAppCount() {
    this._privateAppCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAppCountInput() {
    return this._privateAppCount;
  }

  // redirect - computed: true, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // vip - computed: true, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }
}

export class EndpointZtnaProfilesConnectionRulesGatewaysList extends cdktf.ComplexList {
  public internalValue? : EndpointZtnaProfilesConnectionRulesGateways[] | cdktf.IResolvable

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
  public get(index: number): EndpointZtnaProfilesConnectionRulesGatewaysOutputReference {
    return new EndpointZtnaProfilesConnectionRulesGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointZtnaProfilesConnectionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#address EndpointZtnaProfiles#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#encryption EndpointZtnaProfiles#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#gateways EndpointZtnaProfiles#gateways}
  */
  readonly gateways?: EndpointZtnaProfilesConnectionRulesGateways[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#id EndpointZtnaProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#name EndpointZtnaProfiles#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#uid EndpointZtnaProfiles#uid}
  */
  readonly uid?: string;
}

export function endpointZtnaProfilesConnectionRulesToTerraform(struct?: EndpointZtnaProfilesConnectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    gateways: cdktf.listMapper(endpointZtnaProfilesConnectionRulesGatewaysToTerraform, false)(struct!.gateways),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function endpointZtnaProfilesConnectionRulesToHclTerraform(struct?: EndpointZtnaProfilesConnectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateways: {
      value: cdktf.listMapperHcl(endpointZtnaProfilesConnectionRulesGatewaysToHclTerraform, false)(struct!.gateways),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointZtnaProfilesConnectionRulesGatewaysList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointZtnaProfilesConnectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointZtnaProfilesConnectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointZtnaProfilesConnectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._encryption = undefined;
      this._gateways.internalValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._encryption = value.encryption;
      this._gateways.internalValue = value.gateways;
      this._id = value.id;
      this._name = value.name;
      this._uid = value.uid;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // gateways - computed: true, optional: true, required: false
  private _gateways = new EndpointZtnaProfilesConnectionRulesGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: EndpointZtnaProfilesConnectionRulesGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class EndpointZtnaProfilesConnectionRulesList extends cdktf.ComplexList {
  public internalValue? : EndpointZtnaProfilesConnectionRules[] | cdktf.IResolvable

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
  public get(index: number): EndpointZtnaProfilesConnectionRulesOutputReference {
    return new EndpointZtnaProfilesConnectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointZtnaProfilesEntraId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#application_id EndpointZtnaProfiles#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#domain_name EndpointZtnaProfiles#domain_name}
  */
  readonly domainName?: string;
}

export function endpointZtnaProfilesEntraIdToTerraform(struct?: EndpointZtnaProfilesEntraId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
  }
}


export function endpointZtnaProfilesEntraIdToHclTerraform(struct?: EndpointZtnaProfilesEntraId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointZtnaProfilesEntraIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointZtnaProfilesEntraId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointZtnaProfilesEntraId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._domainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._domainName = value.domainName;
    }
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles fortisase_endpoint_ztna_profiles}
*/
export class EndpointZtnaProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoint_ztna_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointZtnaProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointZtnaProfiles to import
  * @param importFromId The id of the existing EndpointZtnaProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointZtnaProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoint_ztna_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/endpoint_ztna_profiles fortisase_endpoint_ztna_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointZtnaProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointZtnaProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoint_ztna_profiles',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAutomaticSignOn = config.allowAutomaticSignOn;
    this._connectionRules.internalValue = config.connectionRules;
    this._entraId.internalValue = config.entraId;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_automatic_sign_on - computed: true, optional: true, required: false
  private _allowAutomaticSignOn?: string; 
  public get allowAutomaticSignOn() {
    return this.getStringAttribute('allow_automatic_sign_on');
  }
  public set allowAutomaticSignOn(value: string) {
    this._allowAutomaticSignOn = value;
  }
  public resetAllowAutomaticSignOn() {
    this._allowAutomaticSignOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutomaticSignOnInput() {
    return this._allowAutomaticSignOn;
  }

  // connection_rules - computed: true, optional: true, required: false
  private _connectionRules = new EndpointZtnaProfilesConnectionRulesList(this, "connection_rules", false);
  public get connectionRules() {
    return this._connectionRules;
  }
  public putConnectionRules(value: EndpointZtnaProfilesConnectionRules[] | cdktf.IResolvable) {
    this._connectionRules.internalValue = value;
  }
  public resetConnectionRules() {
    this._connectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRulesInput() {
    return this._connectionRules.internalValue;
  }

  // entra_id - computed: true, optional: true, required: false
  private _entraId = new EndpointZtnaProfilesEntraIdOutputReference(this, "entra_id");
  public get entraId() {
    return this._entraId;
  }
  public putEntraId(value: EndpointZtnaProfilesEntraId) {
    this._entraId.internalValue = value;
  }
  public resetEntraId() {
    this._entraId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entraIdInput() {
    return this._entraId.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_automatic_sign_on: cdktf.stringToTerraform(this._allowAutomaticSignOn),
      connection_rules: cdktf.listMapper(endpointZtnaProfilesConnectionRulesToTerraform, false)(this._connectionRules.internalValue),
      entra_id: endpointZtnaProfilesEntraIdToTerraform(this._entraId.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_automatic_sign_on: {
        value: cdktf.stringToHclTerraform(this._allowAutomaticSignOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_rules: {
        value: cdktf.listMapperHcl(endpointZtnaProfilesConnectionRulesToHclTerraform, false)(this._connectionRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointZtnaProfilesConnectionRulesList",
      },
      entra_id: {
        value: endpointZtnaProfilesEntraIdToHclTerraform(this._entraId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointZtnaProfilesEntraId",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
