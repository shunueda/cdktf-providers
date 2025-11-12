// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLdapIdentitySourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional domains to be directed to this identity source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#alternative_domain_names PolicyLdapIdentitySource#alternative_domain_names}
  */
  readonly alternativeDomainNames?: string[];
  /**
  * DN of subtree for user and group searches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#base_dn PolicyLdapIdentitySource#base_dn}
  */
  readonly baseDn: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#description PolicyLdapIdentitySource#description}
  */
  readonly description?: string;
  /**
  * Authentication domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#domain_name PolicyLdapIdentitySource#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#id PolicyLdapIdentitySource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#nsx_id PolicyLdapIdentitySource#nsx_id}
  */
  readonly nsxId: string;
  /**
  * Indicates the type of LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#type PolicyLdapIdentitySource#type}
  */
  readonly type: string;
  /**
  * ldap_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#ldap_server PolicyLdapIdentitySource#ldap_server}
  */
  readonly ldapServer: PolicyLdapIdentitySourceLdapServer;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#tag PolicyLdapIdentitySource#tag}
  */
  readonly tag?: PolicyLdapIdentitySourceTag[] | cdktf.IResolvable;
}
export interface PolicyLdapIdentitySourceLdapServer {
  /**
  * Username or DN for LDAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#bind_identity PolicyLdapIdentitySource#bind_identity}
  */
  readonly bindIdentity?: string;
  /**
  * TLS certificate(s) for LDAP server(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#certificates PolicyLdapIdentitySource#certificates}
  */
  readonly certificates?: string[];
  /**
  * If true, this LDAP server is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#enabled PolicyLdapIdentitySource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The authentication password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#password PolicyLdapIdentitySource#password}
  */
  readonly password?: string;
  /**
  * The URL for the LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#url PolicyLdapIdentitySource#url}
  */
  readonly url: string;
  /**
  * Enable/disable StartTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#use_starttls PolicyLdapIdentitySource#use_starttls}
  */
  readonly useStarttls?: boolean | cdktf.IResolvable;
}

export function policyLdapIdentitySourceLdapServerToTerraform(struct?: PolicyLdapIdentitySourceLdapServerOutputReference | PolicyLdapIdentitySourceLdapServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_identity: cdktf.stringToTerraform(struct!.bindIdentity),
    certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificates),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    use_starttls: cdktf.booleanToTerraform(struct!.useStarttls),
  }
}


export function policyLdapIdentitySourceLdapServerToHclTerraform(struct?: PolicyLdapIdentitySourceLdapServerOutputReference | PolicyLdapIdentitySourceLdapServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_identity: {
      value: cdktf.stringToHclTerraform(struct!.bindIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_starttls: {
      value: cdktf.booleanToHclTerraform(struct!.useStarttls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLdapIdentitySourceLdapServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLdapIdentitySourceLdapServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindIdentity = this._bindIdentity;
    }
    if (this._certificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useStarttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStarttls = this._useStarttls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLdapIdentitySourceLdapServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindIdentity = undefined;
      this._certificates = undefined;
      this._enabled = undefined;
      this._password = undefined;
      this._url = undefined;
      this._useStarttls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindIdentity = value.bindIdentity;
      this._certificates = value.certificates;
      this._enabled = value.enabled;
      this._password = value.password;
      this._url = value.url;
      this._useStarttls = value.useStarttls;
    }
  }

  // bind_identity - computed: false, optional: true, required: false
  private _bindIdentity?: string; 
  public get bindIdentity() {
    return this.getStringAttribute('bind_identity');
  }
  public set bindIdentity(value: string) {
    this._bindIdentity = value;
  }
  public resetBindIdentity() {
    this._bindIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindIdentityInput() {
    return this._bindIdentity;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // enabled - computed: false, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_starttls - computed: false, optional: true, required: false
  private _useStarttls?: boolean | cdktf.IResolvable; 
  public get useStarttls() {
    return this.getBooleanAttribute('use_starttls');
  }
  public set useStarttls(value: boolean | cdktf.IResolvable) {
    this._useStarttls = value;
  }
  public resetUseStarttls() {
    this._useStarttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStarttlsInput() {
    return this._useStarttls;
  }
}
export interface PolicyLdapIdentitySourceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#scope PolicyLdapIdentitySource#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#tag PolicyLdapIdentitySource#tag}
  */
  readonly tag?: string;
}

export function policyLdapIdentitySourceTagToTerraform(struct?: PolicyLdapIdentitySourceTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLdapIdentitySourceTagToHclTerraform(struct?: PolicyLdapIdentitySourceTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLdapIdentitySourceTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLdapIdentitySourceTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLdapIdentitySourceTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyLdapIdentitySourceTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLdapIdentitySourceTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLdapIdentitySourceTagOutputReference {
    return new PolicyLdapIdentitySourceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source nsxt_policy_ldap_identity_source}
*/
export class PolicyLdapIdentitySource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ldap_identity_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLdapIdentitySource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLdapIdentitySource to import
  * @param importFromId The id of the existing PolicyLdapIdentitySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLdapIdentitySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ldap_identity_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ldap_identity_source nsxt_policy_ldap_identity_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLdapIdentitySourceConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLdapIdentitySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ldap_identity_source',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternativeDomainNames = config.alternativeDomainNames;
    this._baseDn = config.baseDn;
    this._description = config.description;
    this._domainName = config.domainName;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._type = config.type;
    this._ldapServer.internalValue = config.ldapServer;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_domain_names - computed: false, optional: true, required: false
  private _alternativeDomainNames?: string[]; 
  public get alternativeDomainNames() {
    return this.getListAttribute('alternative_domain_names');
  }
  public set alternativeDomainNames(value: string[]) {
    this._alternativeDomainNames = value;
  }
  public resetAlternativeDomainNames() {
    this._alternativeDomainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeDomainNamesInput() {
    return this._alternativeDomainNames;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
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

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // nsx_id - computed: false, optional: false, required: true
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // ldap_server - computed: false, optional: false, required: true
  private _ldapServer = new PolicyLdapIdentitySourceLdapServerOutputReference(this, "ldap_server");
  public get ldapServer() {
    return this._ldapServer;
  }
  public putLdapServer(value: PolicyLdapIdentitySourceLdapServer) {
    this._ldapServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyLdapIdentitySourceTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLdapIdentitySourceTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternative_domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alternativeDomainNames),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      description: cdktf.stringToTerraform(this._description),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      type: cdktf.stringToTerraform(this._type),
      ldap_server: policyLdapIdentitySourceLdapServerToTerraform(this._ldapServer.internalValue),
      tag: cdktf.listMapper(policyLdapIdentitySourceTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternative_domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alternativeDomainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
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
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_server: {
        value: policyLdapIdentitySourceLdapServerToHclTerraform(this._ldapServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLdapIdentitySourceLdapServerList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyLdapIdentitySourceTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLdapIdentitySourceTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
