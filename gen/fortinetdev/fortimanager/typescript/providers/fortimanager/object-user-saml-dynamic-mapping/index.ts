// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserSamlDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#adfs_claim ObjectUserSamlDynamicMappingA#adfs_claim}
  */
  readonly adfsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#adom ObjectUserSamlDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#auth_url ObjectUserSamlDynamicMappingA#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#cert ObjectUserSamlDynamicMappingA#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#clock_tolerance ObjectUserSamlDynamicMappingA#clock_tolerance}
  */
  readonly clockTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#digest_method ObjectUserSamlDynamicMappingA#digest_method}
  */
  readonly digestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#dynamic_sort_subtable ObjectUserSamlDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#entity_id ObjectUserSamlDynamicMappingA#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#group_claim_type ObjectUserSamlDynamicMappingA#group_claim_type}
  */
  readonly groupClaimType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#group_name ObjectUserSamlDynamicMappingA#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#id ObjectUserSamlDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#idp_cert ObjectUserSamlDynamicMappingA#idp_cert}
  */
  readonly idpCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#idp_entity_id ObjectUserSamlDynamicMappingA#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#idp_single_logout_url ObjectUserSamlDynamicMappingA#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#idp_single_sign_on_url ObjectUserSamlDynamicMappingA#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#limit_relaystate ObjectUserSamlDynamicMappingA#limit_relaystate}
  */
  readonly limitRelaystate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#reauth ObjectUserSamlDynamicMappingA#reauth}
  */
  readonly reauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#saml ObjectUserSamlDynamicMappingA#saml}
  */
  readonly saml: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#scim_client ObjectUserSamlDynamicMappingA#scim_client}
  */
  readonly scimClient?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#scopetype ObjectUserSamlDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#single_logout_url ObjectUserSamlDynamicMappingA#single_logout_url}
  */
  readonly singleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#single_sign_on_url ObjectUserSamlDynamicMappingA#single_sign_on_url}
  */
  readonly singleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#user_claim_type ObjectUserSamlDynamicMappingA#user_claim_type}
  */
  readonly userClaimType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#user_name ObjectUserSamlDynamicMappingA#user_name}
  */
  readonly userName?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#_scope ObjectUserSamlDynamicMappingA#_scope}
  */
  readonly scope?: ObjectUserSamlDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectUserSamlDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#name ObjectUserSamlDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#vdom ObjectUserSamlDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectUserSamlDynamicMappingScopeAToTerraform(struct?: ObjectUserSamlDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectUserSamlDynamicMappingScopeAToHclTerraform(struct?: ObjectUserSamlDynamicMappingScopeA | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserSamlDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserSamlDynamicMappingScopeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserSamlDynamicMappingScopeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectUserSamlDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectUserSamlDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserSamlDynamicMappingScopeAOutputReference {
    return new ObjectUserSamlDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping fortimanager_object_user_saml_dynamic_mapping}
*/
export class ObjectUserSamlDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_saml_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserSamlDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserSamlDynamicMappingA to import
  * @param importFromId The id of the existing ObjectUserSamlDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserSamlDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_saml_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_saml_dynamic_mapping fortimanager_object_user_saml_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserSamlDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectUserSamlDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_saml_dynamic_mapping',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adfsClaim = config.adfsClaim;
    this._adom = config.adom;
    this._authUrl = config.authUrl;
    this._cert = config.cert;
    this._clockTolerance = config.clockTolerance;
    this._digestMethod = config.digestMethod;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._entityId = config.entityId;
    this._groupClaimType = config.groupClaimType;
    this._groupName = config.groupName;
    this._id = config.id;
    this._idpCert = config.idpCert;
    this._idpEntityId = config.idpEntityId;
    this._idpSingleLogoutUrl = config.idpSingleLogoutUrl;
    this._idpSingleSignOnUrl = config.idpSingleSignOnUrl;
    this._limitRelaystate = config.limitRelaystate;
    this._reauth = config.reauth;
    this._saml = config.saml;
    this._scimClient = config.scimClient;
    this._scopetype = config.scopetype;
    this._singleLogoutUrl = config.singleLogoutUrl;
    this._singleSignOnUrl = config.singleSignOnUrl;
    this._userClaimType = config.userClaimType;
    this._userName = config.userName;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adfs_claim - computed: true, optional: true, required: false
  private _adfsClaim?: string; 
  public get adfsClaim() {
    return this.getStringAttribute('adfs_claim');
  }
  public set adfsClaim(value: string) {
    this._adfsClaim = value;
  }
  public resetAdfsClaim() {
    this._adfsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsClaimInput() {
    return this._adfsClaim;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // clock_tolerance - computed: true, optional: true, required: false
  private _clockTolerance?: number; 
  public get clockTolerance() {
    return this.getNumberAttribute('clock_tolerance');
  }
  public set clockTolerance(value: number) {
    this._clockTolerance = value;
  }
  public resetClockTolerance() {
    this._clockTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockToleranceInput() {
    return this._clockTolerance;
  }

  // digest_method - computed: true, optional: true, required: false
  private _digestMethod?: string; 
  public get digestMethod() {
    return this.getStringAttribute('digest_method');
  }
  public set digestMethod(value: string) {
    this._digestMethod = value;
  }
  public resetDigestMethod() {
    this._digestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestMethodInput() {
    return this._digestMethod;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // group_claim_type - computed: false, optional: true, required: false
  private _groupClaimType?: string; 
  public get groupClaimType() {
    return this.getStringAttribute('group_claim_type');
  }
  public set groupClaimType(value: string) {
    this._groupClaimType = value;
  }
  public resetGroupClaimType() {
    this._groupClaimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimTypeInput() {
    return this._groupClaimType;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // idp_cert - computed: false, optional: true, required: false
  private _idpCert?: string; 
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }
  public set idpCert(value: string) {
    this._idpCert = value;
  }
  public resetIdpCert() {
    this._idpCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertInput() {
    return this._idpCert;
  }

  // idp_entity_id - computed: false, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_single_logout_url - computed: false, optional: true, required: false
  private _idpSingleLogoutUrl?: string; 
  public get idpSingleLogoutUrl() {
    return this.getStringAttribute('idp_single_logout_url');
  }
  public set idpSingleLogoutUrl(value: string) {
    this._idpSingleLogoutUrl = value;
  }
  public resetIdpSingleLogoutUrl() {
    this._idpSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleLogoutUrlInput() {
    return this._idpSingleLogoutUrl;
  }

  // idp_single_sign_on_url - computed: false, optional: true, required: false
  private _idpSingleSignOnUrl?: string; 
  public get idpSingleSignOnUrl() {
    return this.getStringAttribute('idp_single_sign_on_url');
  }
  public set idpSingleSignOnUrl(value: string) {
    this._idpSingleSignOnUrl = value;
  }
  public resetIdpSingleSignOnUrl() {
    this._idpSingleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleSignOnUrlInput() {
    return this._idpSingleSignOnUrl;
  }

  // limit_relaystate - computed: true, optional: true, required: false
  private _limitRelaystate?: string; 
  public get limitRelaystate() {
    return this.getStringAttribute('limit_relaystate');
  }
  public set limitRelaystate(value: string) {
    this._limitRelaystate = value;
  }
  public resetLimitRelaystate() {
    this._limitRelaystate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRelaystateInput() {
    return this._limitRelaystate;
  }

  // reauth - computed: true, optional: true, required: false
  private _reauth?: string; 
  public get reauth() {
    return this.getStringAttribute('reauth');
  }
  public set reauth(value: string) {
    this._reauth = value;
  }
  public resetReauth() {
    this._reauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthInput() {
    return this._reauth;
  }

  // saml - computed: false, optional: false, required: true
  private _saml?: string; 
  public get saml() {
    return this.getStringAttribute('saml');
  }
  public set saml(value: string) {
    this._saml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml;
  }

  // scim_client - computed: true, optional: true, required: false
  private _scimClient?: string[]; 
  public get scimClient() {
    return cdktf.Fn.tolist(this.getListAttribute('scim_client'));
  }
  public set scimClient(value: string[]) {
    this._scimClient = value;
  }
  public resetScimClient() {
    this._scimClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimClientInput() {
    return this._scimClient;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // single_logout_url - computed: false, optional: true, required: false
  private _singleLogoutUrl?: string; 
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }
  public set singleLogoutUrl(value: string) {
    this._singleLogoutUrl = value;
  }
  public resetSingleLogoutUrl() {
    this._singleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutUrlInput() {
    return this._singleLogoutUrl;
  }

  // single_sign_on_url - computed: false, optional: true, required: false
  private _singleSignOnUrl?: string; 
  public get singleSignOnUrl() {
    return this.getStringAttribute('single_sign_on_url');
  }
  public set singleSignOnUrl(value: string) {
    this._singleSignOnUrl = value;
  }
  public resetSingleSignOnUrl() {
    this._singleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUrlInput() {
    return this._singleSignOnUrl;
  }

  // user_claim_type - computed: false, optional: true, required: false
  private _userClaimType?: string; 
  public get userClaimType() {
    return this.getStringAttribute('user_claim_type');
  }
  public set userClaimType(value: string) {
    this._userClaimType = value;
  }
  public resetUserClaimType() {
    this._userClaimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClaimTypeInput() {
    return this._userClaimType;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectUserSamlDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectUserSamlDynamicMappingScopeA[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adfs_claim: cdktf.stringToTerraform(this._adfsClaim),
      adom: cdktf.stringToTerraform(this._adom),
      auth_url: cdktf.stringToTerraform(this._authUrl),
      cert: cdktf.stringToTerraform(this._cert),
      clock_tolerance: cdktf.numberToTerraform(this._clockTolerance),
      digest_method: cdktf.stringToTerraform(this._digestMethod),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      entity_id: cdktf.stringToTerraform(this._entityId),
      group_claim_type: cdktf.stringToTerraform(this._groupClaimType),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      idp_cert: cdktf.stringToTerraform(this._idpCert),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_single_logout_url: cdktf.stringToTerraform(this._idpSingleLogoutUrl),
      idp_single_sign_on_url: cdktf.stringToTerraform(this._idpSingleSignOnUrl),
      limit_relaystate: cdktf.stringToTerraform(this._limitRelaystate),
      reauth: cdktf.stringToTerraform(this._reauth),
      saml: cdktf.stringToTerraform(this._saml),
      scim_client: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scimClient),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      single_logout_url: cdktf.stringToTerraform(this._singleLogoutUrl),
      single_sign_on_url: cdktf.stringToTerraform(this._singleSignOnUrl),
      user_claim_type: cdktf.stringToTerraform(this._userClaimType),
      user_name: cdktf.stringToTerraform(this._userName),
      _scope: cdktf.listMapper(objectUserSamlDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adfs_claim: {
        value: cdktf.stringToHclTerraform(this._adfsClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_tolerance: {
        value: cdktf.numberToHclTerraform(this._clockTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      digest_method: {
        value: cdktf.stringToHclTerraform(this._digestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_claim_type: {
        value: cdktf.stringToHclTerraform(this._groupClaimType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_cert: {
        value: cdktf.stringToHclTerraform(this._idpCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_entity_id: {
        value: cdktf.stringToHclTerraform(this._idpEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_logout_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_relaystate: {
        value: cdktf.stringToHclTerraform(this._limitRelaystate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauth: {
        value: cdktf.stringToHclTerraform(this._reauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml: {
        value: cdktf.stringToHclTerraform(this._saml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_client: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scimClient),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_logout_url: {
        value: cdktf.stringToHclTerraform(this._singleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._singleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_claim_type: {
        value: cdktf.stringToHclTerraform(this._userClaimType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectUserSamlDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserSamlDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
