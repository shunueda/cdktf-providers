// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultConsentServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string or URI that identifies the Consent Service in the context of OAuth2 authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#audience DefaultConsentService#audience}
  */
  readonly audience?: string;
  /**
  * The base DN under which consent records are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#base_dn DefaultConsentService#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The DN of an internal service account used by the Consent Service to make internal LDAP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#bind_dn DefaultConsentService#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * If specified, the Identity Mapper(s) that may be used to map consent record subject and actor values to DNs. This is typically only needed if privileged API clients will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#consent_record_identity_mapper DefaultConsentService#consent_record_identity_mapper}
  */
  readonly consentRecordIdentityMapper?: string[];
  /**
  * Indicates whether the Consent Service is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#enabled DefaultConsentService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of a scope that must be present in an access token accepted by the Consent Service if the client is to be considered privileged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#privileged_consent_scope DefaultConsentService#privileged_consent_scope}
  */
  readonly privilegedConsentScope?: string;
  /**
  * The maximum number of consent resources that may be returned from a search request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#search_size_limit DefaultConsentService#search_size_limit}
  */
  readonly searchSizeLimit?: number;
  /**
  * The set of account DNs that the Consent Service will consider to be privileged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#service_account_dn DefaultConsentService#service_account_dn}
  */
  readonly serviceAccountDn?: string[];
  /**
  * The name of a scope that must be present in an access token accepted by the Consent Service for unprivileged clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#unprivileged_consent_scope DefaultConsentService#unprivileged_consent_scope}
  */
  readonly unprivilegedConsentScope?: string;
}
export interface DefaultConsentServiceRequiredActions {
}

export function defaultConsentServiceRequiredActionsToTerraform(struct?: DefaultConsentServiceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultConsentServiceRequiredActionsToHclTerraform(struct?: DefaultConsentServiceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultConsentServiceRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultConsentServiceRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultConsentServiceRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultConsentServiceRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultConsentServiceRequiredActionsOutputReference {
    return new DefaultConsentServiceRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service pingdirectory_default_consent_service}
*/
export class DefaultConsentService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_consent_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultConsentService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultConsentService to import
  * @param importFromId The id of the existing DefaultConsentService that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultConsentService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_consent_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_consent_service pingdirectory_default_consent_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultConsentServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultConsentServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_consent_service',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audience = config.audience;
    this._baseDn = config.baseDn;
    this._bindDn = config.bindDn;
    this._consentRecordIdentityMapper = config.consentRecordIdentityMapper;
    this._enabled = config.enabled;
    this._privilegedConsentScope = config.privilegedConsentScope;
    this._searchSizeLimit = config.searchSizeLimit;
    this._serviceAccountDn = config.serviceAccountDn;
    this._unprivilegedConsentScope = config.unprivilegedConsentScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_dn - computed: true, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // consent_record_identity_mapper - computed: true, optional: true, required: false
  private _consentRecordIdentityMapper?: string[]; 
  public get consentRecordIdentityMapper() {
    return cdktf.Fn.tolist(this.getListAttribute('consent_record_identity_mapper'));
  }
  public set consentRecordIdentityMapper(value: string[]) {
    this._consentRecordIdentityMapper = value;
  }
  public resetConsentRecordIdentityMapper() {
    this._consentRecordIdentityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRecordIdentityMapperInput() {
    return this._consentRecordIdentityMapper;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // privileged_consent_scope - computed: true, optional: true, required: false
  private _privilegedConsentScope?: string; 
  public get privilegedConsentScope() {
    return this.getStringAttribute('privileged_consent_scope');
  }
  public set privilegedConsentScope(value: string) {
    this._privilegedConsentScope = value;
  }
  public resetPrivilegedConsentScope() {
    this._privilegedConsentScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedConsentScopeInput() {
    return this._privilegedConsentScope;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultConsentServiceRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // search_size_limit - computed: true, optional: true, required: false
  private _searchSizeLimit?: number; 
  public get searchSizeLimit() {
    return this.getNumberAttribute('search_size_limit');
  }
  public set searchSizeLimit(value: number) {
    this._searchSizeLimit = value;
  }
  public resetSearchSizeLimit() {
    this._searchSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSizeLimitInput() {
    return this._searchSizeLimit;
  }

  // service_account_dn - computed: true, optional: true, required: false
  private _serviceAccountDn?: string[]; 
  public get serviceAccountDn() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_dn'));
  }
  public set serviceAccountDn(value: string[]) {
    this._serviceAccountDn = value;
  }
  public resetServiceAccountDn() {
    this._serviceAccountDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountDnInput() {
    return this._serviceAccountDn;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unprivileged_consent_scope - computed: true, optional: true, required: false
  private _unprivilegedConsentScope?: string; 
  public get unprivilegedConsentScope() {
    return this.getStringAttribute('unprivileged_consent_scope');
  }
  public set unprivilegedConsentScope(value: string) {
    this._unprivilegedConsentScope = value;
  }
  public resetUnprivilegedConsentScope() {
    this._unprivilegedConsentScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprivilegedConsentScopeInput() {
    return this._unprivilegedConsentScope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktf.stringToTerraform(this._audience),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      consent_record_identity_mapper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consentRecordIdentityMapper),
      enabled: cdktf.booleanToTerraform(this._enabled),
      privileged_consent_scope: cdktf.stringToTerraform(this._privilegedConsentScope),
      search_size_limit: cdktf.numberToTerraform(this._searchSizeLimit),
      service_account_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccountDn),
      unprivileged_consent_scope: cdktf.stringToTerraform(this._unprivilegedConsentScope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_dn: {
        value: cdktf.stringToHclTerraform(this._bindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consent_record_identity_mapper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consentRecordIdentityMapper),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      privileged_consent_scope: {
        value: cdktf.stringToHclTerraform(this._privilegedConsentScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_size_limit: {
        value: cdktf.numberToHclTerraform(this._searchSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_account_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceAccountDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unprivileged_consent_scope: {
        value: cdktf.stringToHclTerraform(this._unprivilegedConsentScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
