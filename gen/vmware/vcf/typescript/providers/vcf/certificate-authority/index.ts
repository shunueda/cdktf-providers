// https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#id CertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * microsoft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#microsoft CertificateAuthority#microsoft}
  */
  readonly microsoft?: CertificateAuthorityMicrosoft;
  /**
  * open_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#open_ssl CertificateAuthority#open_ssl}
  */
  readonly openSsl?: CertificateAuthorityOpenSsl;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#timeouts CertificateAuthority#timeouts}
  */
  readonly timeouts?: CertificateAuthorityTimeouts;
}
export interface CertificateAuthorityMicrosoft {
  /**
  * Microsoft CA server password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#secret CertificateAuthority#secret}
  */
  readonly secret: string;
  /**
  * Microsoft CA server URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#server_url CertificateAuthority#server_url}
  */
  readonly serverUrl: string;
  /**
  * Microsoft CA server template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#template_name CertificateAuthority#template_name}
  */
  readonly templateName: string;
  /**
  * Microsoft CA server username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#username CertificateAuthority#username}
  */
  readonly username: string;
}

export function certificateAuthorityMicrosoftToTerraform(struct?: CertificateAuthorityMicrosoftOutputReference | CertificateAuthorityMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function certificateAuthorityMicrosoftToHclTerraform(struct?: CertificateAuthorityMicrosoftOutputReference | CertificateAuthorityMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktf.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateAuthorityMicrosoftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateAuthorityMicrosoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateAuthorityMicrosoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._serverUrl = undefined;
      this._templateName = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._serverUrl = value.serverUrl;
      this._templateName = value.templateName;
      this._username = value.username;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CertificateAuthorityOpenSsl {
  /**
  * OpenSSL CA domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#common_name CertificateAuthority#common_name}
  */
  readonly commonName: string;
  /**
  * ISO 3166 country code where company is legally registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#country CertificateAuthority#country}
  */
  readonly country: string;
  /**
  * The city or locality where company is legally registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#locality CertificateAuthority#locality}
  */
  readonly locality: string;
  /**
  * The name under which your company is known. The listed organization must be the legal registrant of the domain name in the certificate request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#organization CertificateAuthority#organization}
  */
  readonly organization: string;
  /**
  * Organization with which the certificate is associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#organization_unit CertificateAuthority#organization_unit}
  */
  readonly organizationUnit: string;
  /**
  * Full name (do not abbreviate) of the state, province, region, or territory where your company is legally registered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#state CertificateAuthority#state}
  */
  readonly state: string;
}

export function certificateAuthorityOpenSslToTerraform(struct?: CertificateAuthorityOpenSslOutputReference | CertificateAuthorityOpenSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organization_unit: cdktf.stringToTerraform(struct!.organizationUnit),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function certificateAuthorityOpenSslToHclTerraform(struct?: CertificateAuthorityOpenSslOutputReference | CertificateAuthorityOpenSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateAuthorityOpenSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateAuthorityOpenSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUnit = this._organizationUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateAuthorityOpenSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonName = undefined;
      this._country = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationUnit = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonName = value.commonName;
      this._country = value.country;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationUnit = value.organizationUnit;
      this._state = value.state;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // locality - computed: false, optional: false, required: true
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_unit - computed: false, optional: false, required: true
  private _organizationUnit?: string; 
  public get organizationUnit() {
    return this.getStringAttribute('organization_unit');
  }
  public set organizationUnit(value: string) {
    this._organizationUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface CertificateAuthorityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#create CertificateAuthority#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#delete CertificateAuthority#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#read CertificateAuthority#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#update CertificateAuthority#update}
  */
  readonly update?: string;
}

export function certificateAuthorityTimeoutsToTerraform(struct?: CertificateAuthorityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function certificateAuthorityTimeoutsToHclTerraform(struct?: CertificateAuthorityTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class CertificateAuthorityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateAuthorityTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateAuthorityTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority vcf_certificate_authority}
*/
export class CertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcf_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateAuthority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateAuthority to import
  * @param importFromId The id of the existing CertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcf_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/certificate_authority vcf_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateAuthorityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CertificateAuthorityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcf_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'vcf',
        providerVersion: '0.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._microsoft.internalValue = config.microsoft;
    this._openSsl.internalValue = config.openSsl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // microsoft - computed: false, optional: true, required: false
  private _microsoft = new CertificateAuthorityMicrosoftOutputReference(this, "microsoft");
  public get microsoft() {
    return this._microsoft;
  }
  public putMicrosoft(value: CertificateAuthorityMicrosoft) {
    this._microsoft.internalValue = value;
  }
  public resetMicrosoft() {
    this._microsoft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftInput() {
    return this._microsoft.internalValue;
  }

  // open_ssl - computed: false, optional: true, required: false
  private _openSsl = new CertificateAuthorityOpenSslOutputReference(this, "open_ssl");
  public get openSsl() {
    return this._openSsl;
  }
  public putOpenSsl(value: CertificateAuthorityOpenSsl) {
    this._openSsl.internalValue = value;
  }
  public resetOpenSsl() {
    this._openSsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSslInput() {
    return this._openSsl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificateAuthorityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificateAuthorityTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      microsoft: certificateAuthorityMicrosoftToTerraform(this._microsoft.internalValue),
      open_ssl: certificateAuthorityOpenSslToTerraform(this._openSsl.internalValue),
      timeouts: certificateAuthorityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microsoft: {
        value: certificateAuthorityMicrosoftToHclTerraform(this._microsoft.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateAuthorityMicrosoftList",
      },
      open_ssl: {
        value: certificateAuthorityOpenSslToHclTerraform(this._openSsl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateAuthorityOpenSslList",
      },
      timeouts: {
        value: certificateAuthorityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateAuthorityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
