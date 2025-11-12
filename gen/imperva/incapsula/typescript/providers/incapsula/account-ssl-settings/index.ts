// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountSslSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Numeric identifier of the account to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#account_id AccountSslSettings#account_id}
  */
  readonly accountId: string;
  /**
  * Add naked domain SAN on the Imperva generated certificate for newly created WWW sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#add_naked_domain_san_for_www_sites AccountSslSettings#add_naked_domain_san_for_www_sites}
  */
  readonly addNakedDomainSanForWwwSites?: boolean | cdktf.IResolvable;
  /**
  * Allow Imperva to prove ownership on the domains under the allowed_domains_for_cname_validation list on behalf of the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#allow_cname_validation AccountSslSettings#allow_cname_validation}
  */
  readonly allowCnameValidation?: boolean | cdktf.IResolvable;
  /**
  * When true, sites under the account or sub-accounts can allow support of old TLS versions traffic. This can be configured only on the parent account level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#allow_support_old_tls_versions AccountSslSettings#allow_support_old_tls_versions}
  */
  readonly allowSupportOldTlsVersions?: boolean | cdktf.IResolvable;
  /**
  * When true, enables HSTS support for newly created websites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#enable_hsts_for_new_sites AccountSslSettings#enable_hsts_for_new_sites}
  */
  readonly enableHstsForNewSites?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#id AccountSslSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Add wildcard SAN instead of FQDN SAN on the Imperva generated certificate for newly created sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#use_wild_card_san_instead_of_fqdn AccountSslSettings#use_wild_card_san_instead_of_fqdn}
  */
  readonly useWildCardSanInsteadOfFqdn?: boolean | cdktf.IResolvable;
  /**
  * allowed_domain_for_cname_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#allowed_domain_for_cname_validation AccountSslSettings#allowed_domain_for_cname_validation}
  */
  readonly allowedDomainForCnameValidation?: AccountSslSettingsAllowedDomainForCnameValidation[] | cdktf.IResolvable;
}
export interface AccountSslSettingsAllowedDomainForCnameValidation {
  /**
  * The domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#name AccountSslSettings#name}
  */
  readonly name: string;
}

export function accountSslSettingsAllowedDomainForCnameValidationToTerraform(struct?: AccountSslSettingsAllowedDomainForCnameValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function accountSslSettingsAllowedDomainForCnameValidationToHclTerraform(struct?: AccountSslSettingsAllowedDomainForCnameValidation | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountSslSettingsAllowedDomainForCnameValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountSslSettingsAllowedDomainForCnameValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountSslSettingsAllowedDomainForCnameValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // cname_record_host - computed: true, optional: false, required: false
  public get cnameRecordHost() {
    return this.getStringAttribute('cname_record_host');
  }

  // cname_record_value - computed: true, optional: false, required: false
  public get cnameRecordValue() {
    return this.getStringAttribute('cname_record_value');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_status_check - computed: true, optional: false, required: false
  public get lastStatusCheck() {
    return this.getNumberAttribute('last_status_check');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_since - computed: true, optional: false, required: false
  public get statusSince() {
    return this.getNumberAttribute('status_since');
  }
}

export class AccountSslSettingsAllowedDomainForCnameValidationList extends cdktf.ComplexList {
  public internalValue? : AccountSslSettingsAllowedDomainForCnameValidation[] | cdktf.IResolvable

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
  public get(index: number): AccountSslSettingsAllowedDomainForCnameValidationOutputReference {
    return new AccountSslSettingsAllowedDomainForCnameValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings incapsula_account_ssl_settings}
*/
export class AccountSslSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_account_ssl_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountSslSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountSslSettings to import
  * @param importFromId The id of the existing AccountSslSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountSslSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_account_ssl_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/account_ssl_settings incapsula_account_ssl_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountSslSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AccountSslSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_account_ssl_settings',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._addNakedDomainSanForWwwSites = config.addNakedDomainSanForWwwSites;
    this._allowCnameValidation = config.allowCnameValidation;
    this._allowSupportOldTlsVersions = config.allowSupportOldTlsVersions;
    this._enableHstsForNewSites = config.enableHstsForNewSites;
    this._id = config.id;
    this._useWildCardSanInsteadOfFqdn = config.useWildCardSanInsteadOfFqdn;
    this._allowedDomainForCnameValidation.internalValue = config.allowedDomainForCnameValidation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // add_naked_domain_san_for_www_sites - computed: false, optional: true, required: false
  private _addNakedDomainSanForWwwSites?: boolean | cdktf.IResolvable; 
  public get addNakedDomainSanForWwwSites() {
    return this.getBooleanAttribute('add_naked_domain_san_for_www_sites');
  }
  public set addNakedDomainSanForWwwSites(value: boolean | cdktf.IResolvable) {
    this._addNakedDomainSanForWwwSites = value;
  }
  public resetAddNakedDomainSanForWwwSites() {
    this._addNakedDomainSanForWwwSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNakedDomainSanForWwwSitesInput() {
    return this._addNakedDomainSanForWwwSites;
  }

  // allow_cname_validation - computed: false, optional: true, required: false
  private _allowCnameValidation?: boolean | cdktf.IResolvable; 
  public get allowCnameValidation() {
    return this.getBooleanAttribute('allow_cname_validation');
  }
  public set allowCnameValidation(value: boolean | cdktf.IResolvable) {
    this._allowCnameValidation = value;
  }
  public resetAllowCnameValidation() {
    this._allowCnameValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCnameValidationInput() {
    return this._allowCnameValidation;
  }

  // allow_support_old_tls_versions - computed: true, optional: true, required: false
  private _allowSupportOldTlsVersions?: boolean | cdktf.IResolvable; 
  public get allowSupportOldTlsVersions() {
    return this.getBooleanAttribute('allow_support_old_tls_versions');
  }
  public set allowSupportOldTlsVersions(value: boolean | cdktf.IResolvable) {
    this._allowSupportOldTlsVersions = value;
  }
  public resetAllowSupportOldTlsVersions() {
    this._allowSupportOldTlsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSupportOldTlsVersionsInput() {
    return this._allowSupportOldTlsVersions;
  }

  // enable_hsts_for_new_sites - computed: false, optional: true, required: false
  private _enableHstsForNewSites?: boolean | cdktf.IResolvable; 
  public get enableHstsForNewSites() {
    return this.getBooleanAttribute('enable_hsts_for_new_sites');
  }
  public set enableHstsForNewSites(value: boolean | cdktf.IResolvable) {
    this._enableHstsForNewSites = value;
  }
  public resetEnableHstsForNewSites() {
    this._enableHstsForNewSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHstsForNewSitesInput() {
    return this._enableHstsForNewSites;
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

  // use_wild_card_san_instead_of_fqdn - computed: false, optional: true, required: false
  private _useWildCardSanInsteadOfFqdn?: boolean | cdktf.IResolvable; 
  public get useWildCardSanInsteadOfFqdn() {
    return this.getBooleanAttribute('use_wild_card_san_instead_of_fqdn');
  }
  public set useWildCardSanInsteadOfFqdn(value: boolean | cdktf.IResolvable) {
    this._useWildCardSanInsteadOfFqdn = value;
  }
  public resetUseWildCardSanInsteadOfFqdn() {
    this._useWildCardSanInsteadOfFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWildCardSanInsteadOfFqdnInput() {
    return this._useWildCardSanInsteadOfFqdn;
  }

  // allowed_domain_for_cname_validation - computed: false, optional: true, required: false
  private _allowedDomainForCnameValidation = new AccountSslSettingsAllowedDomainForCnameValidationList(this, "allowed_domain_for_cname_validation", true);
  public get allowedDomainForCnameValidation() {
    return this._allowedDomainForCnameValidation;
  }
  public putAllowedDomainForCnameValidation(value: AccountSslSettingsAllowedDomainForCnameValidation[] | cdktf.IResolvable) {
    this._allowedDomainForCnameValidation.internalValue = value;
  }
  public resetAllowedDomainForCnameValidation() {
    this._allowedDomainForCnameValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainForCnameValidationInput() {
    return this._allowedDomainForCnameValidation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      add_naked_domain_san_for_www_sites: cdktf.booleanToTerraform(this._addNakedDomainSanForWwwSites),
      allow_cname_validation: cdktf.booleanToTerraform(this._allowCnameValidation),
      allow_support_old_tls_versions: cdktf.booleanToTerraform(this._allowSupportOldTlsVersions),
      enable_hsts_for_new_sites: cdktf.booleanToTerraform(this._enableHstsForNewSites),
      id: cdktf.stringToTerraform(this._id),
      use_wild_card_san_instead_of_fqdn: cdktf.booleanToTerraform(this._useWildCardSanInsteadOfFqdn),
      allowed_domain_for_cname_validation: cdktf.listMapper(accountSslSettingsAllowedDomainForCnameValidationToTerraform, true)(this._allowedDomainForCnameValidation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_naked_domain_san_for_www_sites: {
        value: cdktf.booleanToHclTerraform(this._addNakedDomainSanForWwwSites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_cname_validation: {
        value: cdktf.booleanToHclTerraform(this._allowCnameValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_support_old_tls_versions: {
        value: cdktf.booleanToHclTerraform(this._allowSupportOldTlsVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_hsts_for_new_sites: {
        value: cdktf.booleanToHclTerraform(this._enableHstsForNewSites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_wild_card_san_instead_of_fqdn: {
        value: cdktf.booleanToHclTerraform(this._useWildCardSanInsteadOfFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_domain_for_cname_validation: {
        value: cdktf.listMapperHcl(accountSslSettingsAllowedDomainForCnameValidationToHclTerraform, true)(this._allowedDomainForCnameValidation.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccountSslSettingsAllowedDomainForCnameValidationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
