// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationSchemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#digest_algo AuthenticationScheme#digest_algo}
  */
  readonly digestAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#digest_rfc2069 AuthenticationScheme#digest_rfc2069}
  */
  readonly digestRfc2069?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#domain_controller AuthenticationScheme#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#dynamic_sort_subtable AuthenticationScheme#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#external_idp AuthenticationScheme#external_idp}
  */
  readonly externalIdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#fsso_agent_for_ntlm AuthenticationScheme#fsso_agent_for_ntlm}
  */
  readonly fssoAgentForNtlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#fsso_guest AuthenticationScheme#fsso_guest}
  */
  readonly fssoGuest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#get_all_tables AuthenticationScheme#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#group_attr_type AuthenticationScheme#group_attr_type}
  */
  readonly groupAttrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#id AuthenticationScheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#kerberos_keytab AuthenticationScheme#kerberos_keytab}
  */
  readonly kerberosKeytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#method AuthenticationScheme#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#name AuthenticationScheme#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#negotiate_ntlm AuthenticationScheme#negotiate_ntlm}
  */
  readonly negotiateNtlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#require_tfa AuthenticationScheme#require_tfa}
  */
  readonly requireTfa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#saml_server AuthenticationScheme#saml_server}
  */
  readonly samlServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#saml_timeout AuthenticationScheme#saml_timeout}
  */
  readonly samlTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#ssh_ca AuthenticationScheme#ssh_ca}
  */
  readonly sshCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#user_cert AuthenticationScheme#user_cert}
  */
  readonly userCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#vdomparam AuthenticationScheme#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * user_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#user_database AuthenticationScheme#user_database}
  */
  readonly userDatabase?: AuthenticationSchemeUserDatabase[] | cdktf.IResolvable;
}
export interface AuthenticationSchemeUserDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#name AuthenticationScheme#name}
  */
  readonly name?: string;
}

export function authenticationSchemeUserDatabaseToTerraform(struct?: AuthenticationSchemeUserDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationSchemeUserDatabaseToHclTerraform(struct?: AuthenticationSchemeUserDatabase | cdktf.IResolvable): any {
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

export class AuthenticationSchemeUserDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationSchemeUserDatabase | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthenticationSchemeUserDatabase | cdktf.IResolvable | undefined) {
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
}

export class AuthenticationSchemeUserDatabaseList extends cdktf.ComplexList {
  public internalValue? : AuthenticationSchemeUserDatabase[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationSchemeUserDatabaseOutputReference {
    return new AuthenticationSchemeUserDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme fortios_authentication_scheme}
*/
export class AuthenticationScheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_authentication_scheme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationScheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationScheme to import
  * @param importFromId The id of the existing AuthenticationScheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationScheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_authentication_scheme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_scheme fortios_authentication_scheme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationSchemeConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationSchemeConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_authentication_scheme',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digestAlgo = config.digestAlgo;
    this._digestRfc2069 = config.digestRfc2069;
    this._domainController = config.domainController;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._externalIdp = config.externalIdp;
    this._fssoAgentForNtlm = config.fssoAgentForNtlm;
    this._fssoGuest = config.fssoGuest;
    this._getAllTables = config.fetchAllTables;
    this._groupAttrType = config.groupAttrType;
    this._id = config.id;
    this._kerberosKeytab = config.kerberosKeytab;
    this._method = config.method;
    this._name = config.name;
    this._negotiateNtlm = config.negotiateNtlm;
    this._requireTfa = config.requireTfa;
    this._samlServer = config.samlServer;
    this._samlTimeout = config.samlTimeout;
    this._sshCa = config.sshCa;
    this._userCert = config.userCert;
    this._vdomparam = config.vdomparam;
    this._userDatabase.internalValue = config.userDatabase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest_algo - computed: true, optional: true, required: false
  private _digestAlgo?: string; 
  public get digestAlgo() {
    return this.getStringAttribute('digest_algo');
  }
  public set digestAlgo(value: string) {
    this._digestAlgo = value;
  }
  public resetDigestAlgo() {
    this._digestAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgoInput() {
    return this._digestAlgo;
  }

  // digest_rfc2069 - computed: true, optional: true, required: false
  private _digestRfc2069?: string; 
  public get digestRfc2069() {
    return this.getStringAttribute('digest_rfc2069');
  }
  public set digestRfc2069(value: string) {
    this._digestRfc2069 = value;
  }
  public resetDigestRfc2069() {
    this._digestRfc2069 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestRfc2069Input() {
    return this._digestRfc2069;
  }

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }
  public set domainController(value: string) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
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

  // external_idp - computed: false, optional: true, required: false
  private _externalIdp?: string; 
  public get externalIdp() {
    return this.getStringAttribute('external_idp');
  }
  public set externalIdp(value: string) {
    this._externalIdp = value;
  }
  public resetExternalIdp() {
    this._externalIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdpInput() {
    return this._externalIdp;
  }

  // fsso_agent_for_ntlm - computed: false, optional: true, required: false
  private _fssoAgentForNtlm?: string; 
  public get fssoAgentForNtlm() {
    return this.getStringAttribute('fsso_agent_for_ntlm');
  }
  public set fssoAgentForNtlm(value: string) {
    this._fssoAgentForNtlm = value;
  }
  public resetFssoAgentForNtlm() {
    this._fssoAgentForNtlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoAgentForNtlmInput() {
    return this._fssoAgentForNtlm;
  }

  // fsso_guest - computed: true, optional: true, required: false
  private _fssoGuest?: string; 
  public get fssoGuest() {
    return this.getStringAttribute('fsso_guest');
  }
  public set fssoGuest(value: string) {
    this._fssoGuest = value;
  }
  public resetFssoGuest() {
    this._fssoGuest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoGuestInput() {
    return this._fssoGuest;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // group_attr_type - computed: true, optional: true, required: false
  private _groupAttrType?: string; 
  public get groupAttrType() {
    return this.getStringAttribute('group_attr_type');
  }
  public set groupAttrType(value: string) {
    this._groupAttrType = value;
  }
  public resetGroupAttrType() {
    this._groupAttrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttrTypeInput() {
    return this._groupAttrType;
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

  // kerberos_keytab - computed: false, optional: true, required: false
  private _kerberosKeytab?: string; 
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }
  public set kerberosKeytab(value: string) {
    this._kerberosKeytab = value;
  }
  public resetKerberosKeytab() {
    this._kerberosKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabInput() {
    return this._kerberosKeytab;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // negotiate_ntlm - computed: true, optional: true, required: false
  private _negotiateNtlm?: string; 
  public get negotiateNtlm() {
    return this.getStringAttribute('negotiate_ntlm');
  }
  public set negotiateNtlm(value: string) {
    this._negotiateNtlm = value;
  }
  public resetNegotiateNtlm() {
    this._negotiateNtlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateNtlmInput() {
    return this._negotiateNtlm;
  }

  // require_tfa - computed: true, optional: true, required: false
  private _requireTfa?: string; 
  public get requireTfa() {
    return this.getStringAttribute('require_tfa');
  }
  public set requireTfa(value: string) {
    this._requireTfa = value;
  }
  public resetRequireTfa() {
    this._requireTfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTfaInput() {
    return this._requireTfa;
  }

  // saml_server - computed: false, optional: true, required: false
  private _samlServer?: string; 
  public get samlServer() {
    return this.getStringAttribute('saml_server');
  }
  public set samlServer(value: string) {
    this._samlServer = value;
  }
  public resetSamlServer() {
    this._samlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServerInput() {
    return this._samlServer;
  }

  // saml_timeout - computed: true, optional: true, required: false
  private _samlTimeout?: number; 
  public get samlTimeout() {
    return this.getNumberAttribute('saml_timeout');
  }
  public set samlTimeout(value: number) {
    this._samlTimeout = value;
  }
  public resetSamlTimeout() {
    this._samlTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlTimeoutInput() {
    return this._samlTimeout;
  }

  // ssh_ca - computed: false, optional: true, required: false
  private _sshCa?: string; 
  public get sshCa() {
    return this.getStringAttribute('ssh_ca');
  }
  public set sshCa(value: string) {
    this._sshCa = value;
  }
  public resetSshCa() {
    this._sshCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCaInput() {
    return this._sshCa;
  }

  // user_cert - computed: true, optional: true, required: false
  private _userCert?: string; 
  public get userCert() {
    return this.getStringAttribute('user_cert');
  }
  public set userCert(value: string) {
    this._userCert = value;
  }
  public resetUserCert() {
    this._userCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // user_database - computed: false, optional: true, required: false
  private _userDatabase = new AuthenticationSchemeUserDatabaseList(this, "user_database", true);
  public get userDatabase() {
    return this._userDatabase;
  }
  public putUserDatabase(value: AuthenticationSchemeUserDatabase[] | cdktf.IResolvable) {
    this._userDatabase.internalValue = value;
  }
  public resetUserDatabase() {
    this._userDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDatabaseInput() {
    return this._userDatabase.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digest_algo: cdktf.stringToTerraform(this._digestAlgo),
      digest_rfc2069: cdktf.stringToTerraform(this._digestRfc2069),
      domain_controller: cdktf.stringToTerraform(this._domainController),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      external_idp: cdktf.stringToTerraform(this._externalIdp),
      fsso_agent_for_ntlm: cdktf.stringToTerraform(this._fssoAgentForNtlm),
      fsso_guest: cdktf.stringToTerraform(this._fssoGuest),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      group_attr_type: cdktf.stringToTerraform(this._groupAttrType),
      id: cdktf.stringToTerraform(this._id),
      kerberos_keytab: cdktf.stringToTerraform(this._kerberosKeytab),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      negotiate_ntlm: cdktf.stringToTerraform(this._negotiateNtlm),
      require_tfa: cdktf.stringToTerraform(this._requireTfa),
      saml_server: cdktf.stringToTerraform(this._samlServer),
      saml_timeout: cdktf.numberToTerraform(this._samlTimeout),
      ssh_ca: cdktf.stringToTerraform(this._sshCa),
      user_cert: cdktf.stringToTerraform(this._userCert),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      user_database: cdktf.listMapper(authenticationSchemeUserDatabaseToTerraform, true)(this._userDatabase.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest_algo: {
        value: cdktf.stringToHclTerraform(this._digestAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_rfc2069: {
        value: cdktf.stringToHclTerraform(this._digestRfc2069),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_controller: {
        value: cdktf.stringToHclTerraform(this._domainController),
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
      external_idp: {
        value: cdktf.stringToHclTerraform(this._externalIdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso_agent_for_ntlm: {
        value: cdktf.stringToHclTerraform(this._fssoAgentForNtlm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso_guest: {
        value: cdktf.stringToHclTerraform(this._fssoGuest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_attr_type: {
        value: cdktf.stringToHclTerraform(this._groupAttrType),
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
      kerberos_keytab: {
        value: cdktf.stringToHclTerraform(this._kerberosKeytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      negotiate_ntlm: {
        value: cdktf.stringToHclTerraform(this._negotiateNtlm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_tfa: {
        value: cdktf.stringToHclTerraform(this._requireTfa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_server: {
        value: cdktf.stringToHclTerraform(this._samlServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_timeout: {
        value: cdktf.numberToHclTerraform(this._samlTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_ca: {
        value: cdktf.stringToHclTerraform(this._sshCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_cert: {
        value: cdktf.stringToHclTerraform(this._userCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_database: {
        value: cdktf.listMapperHcl(authenticationSchemeUserDatabaseToHclTerraform, true)(this._userDatabase.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationSchemeUserDatabaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
