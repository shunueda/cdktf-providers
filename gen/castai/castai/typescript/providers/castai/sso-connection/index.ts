// https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional email domains that will be allowed to sign in via the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#additional_email_domains SsoConnection#additional_email_domains}
  */
  readonly additionalEmailDomains?: string[];
  /**
  * Email domain of the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#email_domain SsoConnection#email_domain}
  */
  readonly emailDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#id SsoConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Connection name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#name SsoConnection#name}
  */
  readonly name: string;
  /**
  * aad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#aad SsoConnection#aad}
  */
  readonly aad?: SsoConnectionAad;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#okta SsoConnection#okta}
  */
  readonly okta?: SsoConnectionOkta;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#timeouts SsoConnection#timeouts}
  */
  readonly timeouts?: SsoConnectionTimeouts;
}
export interface SsoConnectionAad {
  /**
  * Azure AD domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#ad_domain SsoConnection#ad_domain}
  */
  readonly adDomain: string;
  /**
  * Azure AD client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#client_id SsoConnection#client_id}
  */
  readonly clientId: string;
  /**
  * Azure AD client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#client_secret SsoConnection#client_secret}
  */
  readonly clientSecret: string;
}

export function ssoConnectionAadToTerraform(struct?: SsoConnectionAadOutputReference | SsoConnectionAad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_domain: cdktf.stringToTerraform(struct!.adDomain),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function ssoConnectionAadToHclTerraform(struct?: SsoConnectionAadOutputReference | SsoConnectionAad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_domain: {
      value: cdktf.stringToHclTerraform(struct!.adDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoConnectionAadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoConnectionAad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomain = this._adDomain;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoConnectionAad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adDomain = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adDomain = value.adDomain;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // ad_domain - computed: false, optional: false, required: true
  private _adDomain?: string; 
  public get adDomain() {
    return this.getStringAttribute('ad_domain');
  }
  public set adDomain(value: string) {
    this._adDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainInput() {
    return this._adDomain;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}
export interface SsoConnectionOkta {
  /**
  * Okta client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#client_id SsoConnection#client_id}
  */
  readonly clientId: string;
  /**
  * Okta client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#client_secret SsoConnection#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Okta domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#okta_domain SsoConnection#okta_domain}
  */
  readonly oktaDomain: string;
}

export function ssoConnectionOktaToTerraform(struct?: SsoConnectionOktaOutputReference | SsoConnectionOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    okta_domain: cdktf.stringToTerraform(struct!.oktaDomain),
  }
}


export function ssoConnectionOktaToHclTerraform(struct?: SsoConnectionOktaOutputReference | SsoConnectionOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okta_domain: {
      value: cdktf.stringToHclTerraform(struct!.oktaDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoConnectionOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoConnectionOkta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oktaDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaDomain = this._oktaDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoConnectionOkta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oktaDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oktaDomain = value.oktaDomain;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // okta_domain - computed: false, optional: false, required: true
  private _oktaDomain?: string; 
  public get oktaDomain() {
    return this.getStringAttribute('okta_domain');
  }
  public set oktaDomain(value: string) {
    this._oktaDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaDomainInput() {
    return this._oktaDomain;
  }
}
export interface SsoConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#create SsoConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#delete SsoConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#update SsoConnection#update}
  */
  readonly update?: string;
}

export function ssoConnectionTimeoutsToTerraform(struct?: SsoConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ssoConnectionTimeoutsToHclTerraform(struct?: SsoConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection castai_sso_connection}
*/
export class SsoConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_sso_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoConnection to import
  * @param importFromId The id of the existing SsoConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_sso_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.5.0/docs/resources/sso_connection castai_sso_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SsoConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_sso_connection',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.5.0',
        providerVersionConstraint: '8.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalEmailDomains = config.additionalEmailDomains;
    this._emailDomain = config.emailDomain;
    this._id = config.id;
    this._name = config.name;
    this._aad.internalValue = config.aad;
    this._okta.internalValue = config.okta;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_email_domains - computed: false, optional: true, required: false
  private _additionalEmailDomains?: string[]; 
  public get additionalEmailDomains() {
    return this.getListAttribute('additional_email_domains');
  }
  public set additionalEmailDomains(value: string[]) {
    this._additionalEmailDomains = value;
  }
  public resetAdditionalEmailDomains() {
    this._additionalEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEmailDomainsInput() {
    return this._additionalEmailDomains;
  }

  // email_domain - computed: false, optional: false, required: true
  private _emailDomain?: string; 
  public get emailDomain() {
    return this.getStringAttribute('email_domain');
  }
  public set emailDomain(value: string) {
    this._emailDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain;
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

  // aad - computed: false, optional: true, required: false
  private _aad = new SsoConnectionAadOutputReference(this, "aad");
  public get aad() {
    return this._aad;
  }
  public putAad(value: SsoConnectionAad) {
    this._aad.internalValue = value;
  }
  public resetAad() {
    this._aad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadInput() {
    return this._aad.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new SsoConnectionOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: SsoConnectionOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SsoConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SsoConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_email_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalEmailDomains),
      email_domain: cdktf.stringToTerraform(this._emailDomain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      aad: ssoConnectionAadToTerraform(this._aad.internalValue),
      okta: ssoConnectionOktaToTerraform(this._okta.internalValue),
      timeouts: ssoConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_email_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalEmailDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email_domain: {
        value: cdktf.stringToHclTerraform(this._emailDomain),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aad: {
        value: ssoConnectionAadToHclTerraform(this._aad.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoConnectionAadList",
      },
      okta: {
        value: ssoConnectionOktaToHclTerraform(this._okta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoConnectionOktaList",
      },
      timeouts: {
        value: ssoConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsoConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
