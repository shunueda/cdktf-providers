// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesAuthenticationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#active_auth_method PackagesAuthenticationRule#active_auth_method}
  */
  readonly activeAuthMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#adom PackagesAuthenticationRule#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#cert_auth_cookie PackagesAuthenticationRule#cert_auth_cookie}
  */
  readonly certAuthCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#comments PackagesAuthenticationRule#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#cors_depth PackagesAuthenticationRule#cors_depth}
  */
  readonly corsDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#cors_stateful PackagesAuthenticationRule#cors_stateful}
  */
  readonly corsStateful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#dstaddr PackagesAuthenticationRule#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#dstaddr6 PackagesAuthenticationRule#dstaddr6}
  */
  readonly dstaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#id PackagesAuthenticationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#ip_based PackagesAuthenticationRule#ip_based}
  */
  readonly ipBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#name PackagesAuthenticationRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#pkg PackagesAuthenticationRule#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#pkg_folder_path PackagesAuthenticationRule#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#protocol PackagesAuthenticationRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#scopetype PackagesAuthenticationRule#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#srcaddr PackagesAuthenticationRule#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#srcaddr6 PackagesAuthenticationRule#srcaddr6}
  */
  readonly srcaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#srcintf PackagesAuthenticationRule#srcintf}
  */
  readonly srcintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#sso_auth_method PackagesAuthenticationRule#sso_auth_method}
  */
  readonly ssoAuthMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#status PackagesAuthenticationRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#transaction_based PackagesAuthenticationRule#transaction_based}
  */
  readonly transactionBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#web_auth_cookie PackagesAuthenticationRule#web_auth_cookie}
  */
  readonly webAuthCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#web_portal PackagesAuthenticationRule#web_portal}
  */
  readonly webPortal?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule fortimanager_packages_authentication_rule}
*/
export class PackagesAuthenticationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_authentication_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesAuthenticationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesAuthenticationRule to import
  * @param importFromId The id of the existing PackagesAuthenticationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesAuthenticationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_authentication_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_rule fortimanager_packages_authentication_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesAuthenticationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesAuthenticationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_authentication_rule',
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
    this._activeAuthMethod = config.activeAuthMethod;
    this._adom = config.adom;
    this._certAuthCookie = config.certAuthCookie;
    this._comments = config.comments;
    this._corsDepth = config.corsDepth;
    this._corsStateful = config.corsStateful;
    this._dstaddr = config.dstaddr;
    this._dstaddr6 = config.dstaddr6;
    this._id = config.id;
    this._ipBased = config.ipBased;
    this._name = config.name;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._protocol = config.protocol;
    this._scopetype = config.scopetype;
    this._srcaddr = config.srcaddr;
    this._srcaddr6 = config.srcaddr6;
    this._srcintf = config.srcintf;
    this._ssoAuthMethod = config.ssoAuthMethod;
    this._status = config.status;
    this._transactionBased = config.transactionBased;
    this._webAuthCookie = config.webAuthCookie;
    this._webPortal = config.webPortal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_auth_method - computed: false, optional: true, required: false
  private _activeAuthMethod?: string; 
  public get activeAuthMethod() {
    return this.getStringAttribute('active_auth_method');
  }
  public set activeAuthMethod(value: string) {
    this._activeAuthMethod = value;
  }
  public resetActiveAuthMethod() {
    this._activeAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAuthMethodInput() {
    return this._activeAuthMethod;
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

  // cert_auth_cookie - computed: true, optional: true, required: false
  private _certAuthCookie?: string; 
  public get certAuthCookie() {
    return this.getStringAttribute('cert_auth_cookie');
  }
  public set certAuthCookie(value: string) {
    this._certAuthCookie = value;
  }
  public resetCertAuthCookie() {
    this._certAuthCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthCookieInput() {
    return this._certAuthCookie;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // cors_depth - computed: true, optional: true, required: false
  private _corsDepth?: number; 
  public get corsDepth() {
    return this.getNumberAttribute('cors_depth');
  }
  public set corsDepth(value: number) {
    this._corsDepth = value;
  }
  public resetCorsDepth() {
    this._corsDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsDepthInput() {
    return this._corsDepth;
  }

  // cors_stateful - computed: true, optional: true, required: false
  private _corsStateful?: string; 
  public get corsStateful() {
    return this.getStringAttribute('cors_stateful');
  }
  public set corsStateful(value: string) {
    this._corsStateful = value;
  }
  public resetCorsStateful() {
    this._corsStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsStatefulInput() {
    return this._corsStateful;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstaddr6 - computed: true, optional: true, required: false
  private _dstaddr6?: string[]; 
  public get dstaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr6'));
  }
  public set dstaddr6(value: string[]) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
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

  // ip_based - computed: true, optional: true, required: false
  private _ipBased?: string; 
  public get ipBased() {
    return this.getStringAttribute('ip_based');
  }
  public set ipBased(value: string) {
    this._ipBased = value;
  }
  public resetIpBased() {
    this._ipBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBasedInput() {
    return this._ipBased;
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

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: true, optional: true, required: false
  private _srcaddr6?: string[]; 
  public get srcaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr6'));
  }
  public set srcaddr6(value: string[]) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string[]; 
  public get srcintf() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf'));
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // sso_auth_method - computed: false, optional: true, required: false
  private _ssoAuthMethod?: string; 
  public get ssoAuthMethod() {
    return this.getStringAttribute('sso_auth_method');
  }
  public set ssoAuthMethod(value: string) {
    this._ssoAuthMethod = value;
  }
  public resetSsoAuthMethod() {
    this._ssoAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAuthMethodInput() {
    return this._ssoAuthMethod;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // transaction_based - computed: false, optional: true, required: false
  private _transactionBased?: string; 
  public get transactionBased() {
    return this.getStringAttribute('transaction_based');
  }
  public set transactionBased(value: string) {
    this._transactionBased = value;
  }
  public resetTransactionBased() {
    this._transactionBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionBasedInput() {
    return this._transactionBased;
  }

  // web_auth_cookie - computed: false, optional: true, required: false
  private _webAuthCookie?: string; 
  public get webAuthCookie() {
    return this.getStringAttribute('web_auth_cookie');
  }
  public set webAuthCookie(value: string) {
    this._webAuthCookie = value;
  }
  public resetWebAuthCookie() {
    this._webAuthCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthCookieInput() {
    return this._webAuthCookie;
  }

  // web_portal - computed: false, optional: true, required: false
  private _webPortal?: string; 
  public get webPortal() {
    return this.getStringAttribute('web_portal');
  }
  public set webPortal(value: string) {
    this._webPortal = value;
  }
  public resetWebPortal() {
    this._webPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPortalInput() {
    return this._webPortal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_auth_method: cdktf.stringToTerraform(this._activeAuthMethod),
      adom: cdktf.stringToTerraform(this._adom),
      cert_auth_cookie: cdktf.stringToTerraform(this._certAuthCookie),
      comments: cdktf.stringToTerraform(this._comments),
      cors_depth: cdktf.numberToTerraform(this._corsDepth),
      cors_stateful: cdktf.stringToTerraform(this._corsStateful),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr6),
      id: cdktf.stringToTerraform(this._id),
      ip_based: cdktf.stringToTerraform(this._ipBased),
      name: cdktf.stringToTerraform(this._name),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      protocol: cdktf.stringToTerraform(this._protocol),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr6),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      sso_auth_method: cdktf.stringToTerraform(this._ssoAuthMethod),
      status: cdktf.stringToTerraform(this._status),
      transaction_based: cdktf.stringToTerraform(this._transactionBased),
      web_auth_cookie: cdktf.stringToTerraform(this._webAuthCookie),
      web_portal: cdktf.stringToTerraform(this._webPortal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_auth_method: {
        value: cdktf.stringToHclTerraform(this._activeAuthMethod),
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
      cert_auth_cookie: {
        value: cdktf.stringToHclTerraform(this._certAuthCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_depth: {
        value: cdktf.numberToHclTerraform(this._corsDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cors_stateful: {
        value: cdktf.stringToHclTerraform(this._corsStateful),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dstaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_based: {
        value: cdktf.stringToHclTerraform(this._ipBased),
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
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sso_auth_method: {
        value: cdktf.stringToHclTerraform(this._ssoAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transaction_based: {
        value: cdktf.stringToHclTerraform(this._transactionBased),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_auth_cookie: {
        value: cdktf.stringToHclTerraform(this._webAuthCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_portal: {
        value: cdktf.stringToHclTerraform(this._webPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
