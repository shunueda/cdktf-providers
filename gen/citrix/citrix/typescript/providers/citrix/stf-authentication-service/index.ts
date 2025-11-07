// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StfAuthenticationServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * StoreFront --- Authentication Service Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#auth_service_protocol StfAuthenticationService#auth_service_protocol}
  */
  readonly authServiceProtocol?: StfAuthenticationServiceAuthServiceProtocol;
  /**
  * The Citrix AG Basic Authentication options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#citrix_ag_basic_options StfAuthenticationService#citrix_ag_basic_options}
  */
  readonly citrixAgBasicOptions?: StfAuthenticationServiceCitrixAgBasicOptions;
  /**
  * The claims factory names to use for the StoreFront authentication services. Defaults to `standardClaimsFactory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#claims_factory_name StfAuthenticationService#claims_factory_name}
  */
  readonly claimsFactoryName?: string;
  /**
  * The friendly name the authentication service should be known as. Defaults to `Authentication Service`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#friendly_name StfAuthenticationService#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * The IIS site to configure the authentication service for. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#site_id StfAuthenticationService#site_id}
  */
  readonly siteId?: string;
  /**
  * The IIS virtual path to use for the authentication service. Defaults to `/Citrix/Authentication`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#virtual_path StfAuthenticationService#virtual_path}
  */
  readonly virtualPath?: string;
}
export interface StfAuthenticationServiceAuthServiceProtocol {
  /**
  * Names of the Authentication Service Protocol to be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#name StfAuthenticationService#name}
  */
  readonly name: string[];
}

export function stfAuthenticationServiceAuthServiceProtocolToTerraform(struct?: StfAuthenticationServiceAuthServiceProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
  }
}


export function stfAuthenticationServiceAuthServiceProtocolToHclTerraform(struct?: StfAuthenticationServiceAuthServiceProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfAuthenticationServiceAuthServiceProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfAuthenticationServiceAuthServiceProtocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StfAuthenticationServiceAuthServiceProtocol | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: false, required: true
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface StfAuthenticationServiceCitrixAgBasicOptions {
  /**
  * The credential validation mode for Citrix AG Basic Authentication. Possible values are `Auto`, `Kerberos`, and `Password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#credential_validation_mode StfAuthenticationService#credential_validation_mode}
  */
  readonly credentialValidationMode: string;
}

export function stfAuthenticationServiceCitrixAgBasicOptionsToTerraform(struct?: StfAuthenticationServiceCitrixAgBasicOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_validation_mode: cdktf.stringToTerraform(struct!.credentialValidationMode),
  }
}


export function stfAuthenticationServiceCitrixAgBasicOptionsToHclTerraform(struct?: StfAuthenticationServiceCitrixAgBasicOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_validation_mode: {
      value: cdktf.stringToHclTerraform(struct!.credentialValidationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfAuthenticationServiceCitrixAgBasicOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfAuthenticationServiceCitrixAgBasicOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialValidationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialValidationMode = this._credentialValidationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfAuthenticationServiceCitrixAgBasicOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialValidationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialValidationMode = value.credentialValidationMode;
    }
  }

  // credential_validation_mode - computed: false, optional: false, required: true
  private _credentialValidationMode?: string; 
  public get credentialValidationMode() {
    return this.getStringAttribute('credential_validation_mode');
  }
  public set credentialValidationMode(value: string) {
    this._credentialValidationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialValidationModeInput() {
    return this._credentialValidationMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service citrix_stf_authentication_service}
*/
export class StfAuthenticationService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_stf_authentication_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StfAuthenticationService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StfAuthenticationService to import
  * @param importFromId The id of the existing StfAuthenticationService that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StfAuthenticationService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_stf_authentication_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_authentication_service citrix_stf_authentication_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StfAuthenticationServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StfAuthenticationServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_stf_authentication_service',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authServiceProtocol.internalValue = config.authServiceProtocol;
    this._citrixAgBasicOptions.internalValue = config.citrixAgBasicOptions;
    this._claimsFactoryName = config.claimsFactoryName;
    this._friendlyName = config.friendlyName;
    this._siteId = config.siteId;
    this._virtualPath = config.virtualPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_service_protocol - computed: false, optional: true, required: false
  private _authServiceProtocol = new StfAuthenticationServiceAuthServiceProtocolOutputReference(this, "auth_service_protocol");
  public get authServiceProtocol() {
    return this._authServiceProtocol;
  }
  public putAuthServiceProtocol(value: StfAuthenticationServiceAuthServiceProtocol) {
    this._authServiceProtocol.internalValue = value;
  }
  public resetAuthServiceProtocol() {
    this._authServiceProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServiceProtocolInput() {
    return this._authServiceProtocol.internalValue;
  }

  // citrix_ag_basic_options - computed: false, optional: true, required: false
  private _citrixAgBasicOptions = new StfAuthenticationServiceCitrixAgBasicOptionsOutputReference(this, "citrix_ag_basic_options");
  public get citrixAgBasicOptions() {
    return this._citrixAgBasicOptions;
  }
  public putCitrixAgBasicOptions(value: StfAuthenticationServiceCitrixAgBasicOptions) {
    this._citrixAgBasicOptions.internalValue = value;
  }
  public resetCitrixAgBasicOptions() {
    this._citrixAgBasicOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get citrixAgBasicOptionsInput() {
    return this._citrixAgBasicOptions.internalValue;
  }

  // claims_factory_name - computed: true, optional: true, required: false
  private _claimsFactoryName?: string; 
  public get claimsFactoryName() {
    return this.getStringAttribute('claims_factory_name');
  }
  public set claimsFactoryName(value: string) {
    this._claimsFactoryName = value;
  }
  public resetClaimsFactoryName() {
    this._claimsFactoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsFactoryNameInput() {
    return this._claimsFactoryName;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // virtual_path - computed: true, optional: true, required: false
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  public resetVirtualPath() {
    this._virtualPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_service_protocol: stfAuthenticationServiceAuthServiceProtocolToTerraform(this._authServiceProtocol.internalValue),
      citrix_ag_basic_options: stfAuthenticationServiceCitrixAgBasicOptionsToTerraform(this._citrixAgBasicOptions.internalValue),
      claims_factory_name: cdktf.stringToTerraform(this._claimsFactoryName),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      site_id: cdktf.stringToTerraform(this._siteId),
      virtual_path: cdktf.stringToTerraform(this._virtualPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_service_protocol: {
        value: stfAuthenticationServiceAuthServiceProtocolToHclTerraform(this._authServiceProtocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfAuthenticationServiceAuthServiceProtocol",
      },
      citrix_ag_basic_options: {
        value: stfAuthenticationServiceCitrixAgBasicOptionsToHclTerraform(this._citrixAgBasicOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfAuthenticationServiceCitrixAgBasicOptions",
      },
      claims_factory_name: {
        value: cdktf.stringToHclTerraform(this._claimsFactoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_path: {
        value: cdktf.stringToHclTerraform(this._virtualPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
