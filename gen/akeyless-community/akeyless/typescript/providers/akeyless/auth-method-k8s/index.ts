// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodK8SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#access_expires AuthMethodK8S#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * The audience in the Kubernetes JWT that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#audience AuthMethodK8S#audience}
  */
  readonly audience?: string;
  /**
  * Subclaims to include in audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#audit_logs_claims AuthMethodK8S#audit_logs_claims}
  */
  readonly auditLogsClaims?: string[];
  /**
  * A CIDR whitelist with the IPs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#bound_ips AuthMethodK8S#bound_ips}
  */
  readonly boundIps?: string[];
  /**
  * A list of namespaces that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#bound_namespaces AuthMethodK8S#bound_namespaces}
  */
  readonly boundNamespaces?: string[];
  /**
  * A list of pod names that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#bound_pod_names AuthMethodK8S#bound_pod_names}
  */
  readonly boundPodNames?: string[];
  /**
  * A list of service account names that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#bound_sa_names AuthMethodK8S#bound_sa_names}
  */
  readonly boundSaNames?: string[];
  /**
  * Protection from accidental deletion of this auth method, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#delete_protection AuthMethodK8S#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * enforce role-association must include sub claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#force_sub_claims AuthMethodK8S#force_sub_claims}
  */
  readonly forceSubClaims?: boolean | cdktf.IResolvable;
  /**
  * If this flag is set to true, there is no need to manually provide a public key for the Kubernetes Auth Method, and instead, a key pair, will be generated as part of the command and the private part of the key will be returned (the private key is required for the K8S Auth Config in the Akeyless Gateway)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#gen_key AuthMethodK8S#gen_key}
  */
  readonly genKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#id AuthMethodK8S#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Creds expiration time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#jwt_ttl AuthMethodK8S#jwt_ttl}
  */
  readonly jwtTtl?: number;
  /**
  * Auth Method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#name AuthMethodK8S#name}
  */
  readonly name: string;
  /**
  * The generated public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#public_key AuthMethodK8S#public_key}
  */
  readonly publicKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s akeyless_auth_method_k8s}
*/
export class AuthMethodK8S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method_k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodK8S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodK8S to import
  * @param importFromId The id of the existing AuthMethodK8S that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodK8S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method_k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_k8s akeyless_auth_method_k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodK8SConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodK8SConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method_k8s',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessExpires = config.accessExpires;
    this._audience = config.audience;
    this._auditLogsClaims = config.auditLogsClaims;
    this._boundIps = config.boundIps;
    this._boundNamespaces = config.boundNamespaces;
    this._boundPodNames = config.boundPodNames;
    this._boundSaNames = config.boundSaNames;
    this._deleteProtection = config.deleteProtection;
    this._forceSubClaims = config.forceSubClaims;
    this._genKey = config.genKey;
    this._id = config.id;
    this._jwtTtl = config.jwtTtl;
    this._name = config.name;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_expires - computed: false, optional: true, required: false
  private _accessExpires?: number; 
  public get accessExpires() {
    return this.getNumberAttribute('access_expires');
  }
  public set accessExpires(value: number) {
    this._accessExpires = value;
  }
  public resetAccessExpires() {
    this._accessExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessExpiresInput() {
    return this._accessExpires;
  }

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // audience - computed: false, optional: true, required: false
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

  // audit_logs_claims - computed: false, optional: true, required: false
  private _auditLogsClaims?: string[]; 
  public get auditLogsClaims() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_logs_claims'));
  }
  public set auditLogsClaims(value: string[]) {
    this._auditLogsClaims = value;
  }
  public resetAuditLogsClaims() {
    this._auditLogsClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsClaimsInput() {
    return this._auditLogsClaims;
  }

  // bound_ips - computed: false, optional: true, required: false
  private _boundIps?: string[]; 
  public get boundIps() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_ips'));
  }
  public set boundIps(value: string[]) {
    this._boundIps = value;
  }
  public resetBoundIps() {
    this._boundIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIpsInput() {
    return this._boundIps;
  }

  // bound_namespaces - computed: false, optional: true, required: false
  private _boundNamespaces?: string[]; 
  public get boundNamespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_namespaces'));
  }
  public set boundNamespaces(value: string[]) {
    this._boundNamespaces = value;
  }
  public resetBoundNamespaces() {
    this._boundNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundNamespacesInput() {
    return this._boundNamespaces;
  }

  // bound_pod_names - computed: false, optional: true, required: false
  private _boundPodNames?: string[]; 
  public get boundPodNames() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_pod_names'));
  }
  public set boundPodNames(value: string[]) {
    this._boundPodNames = value;
  }
  public resetBoundPodNames() {
    this._boundPodNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundPodNamesInput() {
    return this._boundPodNames;
  }

  // bound_sa_names - computed: false, optional: true, required: false
  private _boundSaNames?: string[]; 
  public get boundSaNames() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_sa_names'));
  }
  public set boundSaNames(value: string[]) {
    this._boundSaNames = value;
  }
  public resetBoundSaNames() {
    this._boundSaNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSaNamesInput() {
    return this._boundSaNames;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // force_sub_claims - computed: false, optional: true, required: false
  private _forceSubClaims?: boolean | cdktf.IResolvable; 
  public get forceSubClaims() {
    return this.getBooleanAttribute('force_sub_claims');
  }
  public set forceSubClaims(value: boolean | cdktf.IResolvable) {
    this._forceSubClaims = value;
  }
  public resetForceSubClaims() {
    this._forceSubClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSubClaimsInput() {
    return this._forceSubClaims;
  }

  // gen_key - computed: false, optional: true, required: false
  private _genKey?: string; 
  public get genKey() {
    return this.getStringAttribute('gen_key');
  }
  public set genKey(value: string) {
    this._genKey = value;
  }
  public resetGenKey() {
    this._genKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genKeyInput() {
    return this._genKey;
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

  // jwt_ttl - computed: false, optional: true, required: false
  private _jwtTtl?: number; 
  public get jwtTtl() {
    return this.getNumberAttribute('jwt_ttl');
  }
  public set jwtTtl(value: number) {
    this._jwtTtl = value;
  }
  public resetJwtTtl() {
    this._jwtTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTtlInput() {
    return this._jwtTtl;
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

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_expires: cdktf.numberToTerraform(this._accessExpires),
      audience: cdktf.stringToTerraform(this._audience),
      audit_logs_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogsClaims),
      bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIps),
      bound_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundNamespaces),
      bound_pod_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundPodNames),
      bound_sa_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundSaNames),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      force_sub_claims: cdktf.booleanToTerraform(this._forceSubClaims),
      gen_key: cdktf.stringToTerraform(this._genKey),
      id: cdktf.stringToTerraform(this._id),
      jwt_ttl: cdktf.numberToTerraform(this._jwtTtl),
      name: cdktf.stringToTerraform(this._name),
      public_key: cdktf.stringToTerraform(this._publicKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_expires: {
        value: cdktf.numberToHclTerraform(this._accessExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_logs_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditLogsClaims),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundNamespaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_pod_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundPodNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_sa_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundSaNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_sub_claims: {
        value: cdktf.booleanToHclTerraform(this._forceSubClaims),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gen_key: {
        value: cdktf.stringToHclTerraform(this._genKey),
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
      jwt_ttl: {
        value: cdktf.numberToHclTerraform(this._jwtTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
