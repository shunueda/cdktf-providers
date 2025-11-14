// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpGenericConfig extends cdktf.TerraformMetaArguments {
  /**
  * PEM or DER encoded public X.509 certificates for SAML signature validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#certificates IdpGeneric#certificates}
  */
  readonly certificates: string[];
  /**
  * True if Generic provider is disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#disabled IdpGeneric#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * True if the Genesys Cloud authentication request should be compressed. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#endpoint_compression IdpGeneric#endpoint_compression}
  */
  readonly endpointCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#id IdpGeneric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Issuer URI provided by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#issuer_uri IdpGeneric#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * Base64 encoded SVG image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#logo_image_data IdpGeneric#logo_image_data}
  */
  readonly logoImageData?: string;
  /**
  * Name of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#name IdpGeneric#name}
  */
  readonly name: string;
  /**
  * SAML name identifier format. (urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified | urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress | urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName | urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName | urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos | urn:oasis:names:tc:SAML:2.0:nameid-format:entity | urn:oasis:names:tc:SAML:2.0:nameid-format:persistent | urn:oasis:names:tc:SAML:2.0:nameid-format:transient) Defaults to `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#name_identifier_format IdpGeneric#name_identifier_format}
  */
  readonly nameIdentifierFormat?: string;
  /**
  * String used to identify Genesys Cloud to the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#relying_party_identifier IdpGeneric#relying_party_identifier}
  */
  readonly relyingPartyIdentifier?: string;
  /**
  * Valid values: HTTP Redirect, HTTP Post
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#slo_binding IdpGeneric#slo_binding}
  */
  readonly sloBinding?: string;
  /**
  * Provided on app creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#slo_uri IdpGeneric#slo_uri}
  */
  readonly sloUri?: string;
  /**
  * Target URI provided by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#target_uri IdpGeneric#target_uri}
  */
  readonly targetUri?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#timeouts IdpGeneric#timeouts}
  */
  readonly timeouts?: IdpGenericTimeouts;
}
export interface IdpGenericTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#read IdpGeneric#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#update IdpGeneric#update}
  */
  readonly update?: string;
}

export function idpGenericTimeoutsToTerraform(struct?: IdpGenericTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function idpGenericTimeoutsToHclTerraform(struct?: IdpGenericTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdpGenericTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpGenericTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: IdpGenericTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._read = value.read;
      this._update = value.update;
    }
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
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic genesyscloud_idp_generic}
*/
export class IdpGeneric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_idp_generic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpGeneric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpGeneric to import
  * @param importFromId The id of the existing IdpGeneric that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpGeneric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_idp_generic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/idp_generic genesyscloud_idp_generic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpGenericConfig
  */
  public constructor(scope: Construct, id: string, config: IdpGenericConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_idp_generic',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificates = config.certificates;
    this._disabled = config.disabled;
    this._endpointCompression = config.endpointCompression;
    this._id = config.id;
    this._issuerUri = config.issuerUri;
    this._logoImageData = config.logoImageData;
    this._name = config.name;
    this._nameIdentifierFormat = config.nameIdentifierFormat;
    this._relyingPartyIdentifier = config.relyingPartyIdentifier;
    this._sloBinding = config.sloBinding;
    this._sloUri = config.sloUri;
    this._targetUri = config.targetUri;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: false, optional: false, required: true
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // endpoint_compression - computed: false, optional: true, required: false
  private _endpointCompression?: boolean | cdktf.IResolvable; 
  public get endpointCompression() {
    return this.getBooleanAttribute('endpoint_compression');
  }
  public set endpointCompression(value: boolean | cdktf.IResolvable) {
    this._endpointCompression = value;
  }
  public resetEndpointCompression() {
    this._endpointCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointCompressionInput() {
    return this._endpointCompression;
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

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // logo_image_data - computed: false, optional: true, required: false
  private _logoImageData?: string; 
  public get logoImageData() {
    return this.getStringAttribute('logo_image_data');
  }
  public set logoImageData(value: string) {
    this._logoImageData = value;
  }
  public resetLogoImageData() {
    this._logoImageData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoImageDataInput() {
    return this._logoImageData;
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

  // name_identifier_format - computed: false, optional: true, required: false
  private _nameIdentifierFormat?: string; 
  public get nameIdentifierFormat() {
    return this.getStringAttribute('name_identifier_format');
  }
  public set nameIdentifierFormat(value: string) {
    this._nameIdentifierFormat = value;
  }
  public resetNameIdentifierFormat() {
    this._nameIdentifierFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdentifierFormatInput() {
    return this._nameIdentifierFormat;
  }

  // relying_party_identifier - computed: true, optional: true, required: false
  private _relyingPartyIdentifier?: string; 
  public get relyingPartyIdentifier() {
    return this.getStringAttribute('relying_party_identifier');
  }
  public set relyingPartyIdentifier(value: string) {
    this._relyingPartyIdentifier = value;
  }
  public resetRelyingPartyIdentifier() {
    this._relyingPartyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyIdentifierInput() {
    return this._relyingPartyIdentifier;
  }

  // slo_binding - computed: false, optional: true, required: false
  private _sloBinding?: string; 
  public get sloBinding() {
    return this.getStringAttribute('slo_binding');
  }
  public set sloBinding(value: string) {
    this._sloBinding = value;
  }
  public resetSloBinding() {
    this._sloBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloBindingInput() {
    return this._sloBinding;
  }

  // slo_uri - computed: false, optional: true, required: false
  private _sloUri?: string; 
  public get sloUri() {
    return this.getStringAttribute('slo_uri');
  }
  public set sloUri(value: string) {
    this._sloUri = value;
  }
  public resetSloUri() {
    this._sloUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloUriInput() {
    return this._sloUri;
  }

  // target_uri - computed: false, optional: true, required: false
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  public resetTargetUri() {
    this._targetUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdpGenericTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdpGenericTimeouts) {
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
      certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificates),
      disabled: cdktf.booleanToTerraform(this._disabled),
      endpoint_compression: cdktf.booleanToTerraform(this._endpointCompression),
      id: cdktf.stringToTerraform(this._id),
      issuer_uri: cdktf.stringToTerraform(this._issuerUri),
      logo_image_data: cdktf.stringToTerraform(this._logoImageData),
      name: cdktf.stringToTerraform(this._name),
      name_identifier_format: cdktf.stringToTerraform(this._nameIdentifierFormat),
      relying_party_identifier: cdktf.stringToTerraform(this._relyingPartyIdentifier),
      slo_binding: cdktf.stringToTerraform(this._sloBinding),
      slo_uri: cdktf.stringToTerraform(this._sloUri),
      target_uri: cdktf.stringToTerraform(this._targetUri),
      timeouts: idpGenericTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_compression: {
        value: cdktf.booleanToHclTerraform(this._endpointCompression),
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
      issuer_uri: {
        value: cdktf.stringToHclTerraform(this._issuerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_image_data: {
        value: cdktf.stringToHclTerraform(this._logoImageData),
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
      name_identifier_format: {
        value: cdktf.stringToHclTerraform(this._nameIdentifierFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relying_party_identifier: {
        value: cdktf.stringToHclTerraform(this._relyingPartyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slo_binding: {
        value: cdktf.stringToHclTerraform(this._sloBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slo_uri: {
        value: cdktf.stringToHclTerraform(this._sloUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_uri: {
        value: cdktf.stringToHclTerraform(this._targetUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: idpGenericTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpGenericTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
