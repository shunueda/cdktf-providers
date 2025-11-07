// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesSslInitiationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Local certificate identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#client_certificate ServicesSslInitiationProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Custom cipher list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#custom_ciphers ServicesSslInitiationProfile#custom_ciphers}
  */
  readonly customCiphers?: string[];
  /**
  * Enable flow tracing for the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#enable_flow_tracing ServicesSslInitiationProfile#enable_flow_tracing}
  */
  readonly enableFlowTracing?: boolean | cdktf.IResolvable;
  /**
  * Enable SSL session cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#enable_session_cache ServicesSslInitiationProfile#enable_session_cache}
  */
  readonly enableSessionCache?: boolean | cdktf.IResolvable;
  /**
  * Profile name (Profile identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#name ServicesSslInitiationProfile#name}
  */
  readonly name: string;
  /**
  * Select preferred ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#preferred_ciphers ServicesSslInitiationProfile#preferred_ciphers}
  */
  readonly preferredCiphers?: string;
  /**
  * Protocol SSL version accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#protocol_version ServicesSslInitiationProfile#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * List of trusted certificate authority profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#trusted_ca ServicesSslInitiationProfile#trusted_ca}
  */
  readonly trustedCa?: string[];
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#actions ServicesSslInitiationProfile#actions}
  */
  readonly actions?: ServicesSslInitiationProfileActions;
}
export interface ServicesSslInitiationProfileActions {
  /**
  * Disable CRL validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#crl_disable ServicesSslInitiationProfile#crl_disable}
  */
  readonly crlDisable?: boolean | cdktf.IResolvable;
  /**
  * Action if CRL information is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#crl_if_not_present ServicesSslInitiationProfile#crl_if_not_present}
  */
  readonly crlIfNotPresent?: string;
  /**
  * Ignore 'Hold Instruction Code' present in the CRL entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#crl_ignore_hold_instruction_code ServicesSslInitiationProfile#crl_ignore_hold_instruction_code}
  */
  readonly crlIgnoreHoldInstructionCode?: boolean | cdktf.IResolvable;
  /**
  * Ignore server authentication failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#ignore_server_auth_failure ServicesSslInitiationProfile#ignore_server_auth_failure}
  */
  readonly ignoreServerAuthFailure?: boolean | cdktf.IResolvable;
}

export function servicesSslInitiationProfileActionsToTerraform(struct?: ServicesSslInitiationProfileActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_disable: cdktf.booleanToTerraform(struct!.crlDisable),
    crl_if_not_present: cdktf.stringToTerraform(struct!.crlIfNotPresent),
    crl_ignore_hold_instruction_code: cdktf.booleanToTerraform(struct!.crlIgnoreHoldInstructionCode),
    ignore_server_auth_failure: cdktf.booleanToTerraform(struct!.ignoreServerAuthFailure),
  }
}


export function servicesSslInitiationProfileActionsToHclTerraform(struct?: ServicesSslInitiationProfileActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_disable: {
      value: cdktf.booleanToHclTerraform(struct!.crlDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_if_not_present: {
      value: cdktf.stringToHclTerraform(struct!.crlIfNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_ignore_hold_instruction_code: {
      value: cdktf.booleanToHclTerraform(struct!.crlIgnoreHoldInstructionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_server_auth_failure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreServerAuthFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesSslInitiationProfileActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesSslInitiationProfileActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlDisable = this._crlDisable;
    }
    if (this._crlIfNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlIfNotPresent = this._crlIfNotPresent;
    }
    if (this._crlIgnoreHoldInstructionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlIgnoreHoldInstructionCode = this._crlIgnoreHoldInstructionCode;
    }
    if (this._ignoreServerAuthFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreServerAuthFailure = this._ignoreServerAuthFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesSslInitiationProfileActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlDisable = undefined;
      this._crlIfNotPresent = undefined;
      this._crlIgnoreHoldInstructionCode = undefined;
      this._ignoreServerAuthFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crlDisable = value.crlDisable;
      this._crlIfNotPresent = value.crlIfNotPresent;
      this._crlIgnoreHoldInstructionCode = value.crlIgnoreHoldInstructionCode;
      this._ignoreServerAuthFailure = value.ignoreServerAuthFailure;
    }
  }

  // crl_disable - computed: false, optional: true, required: false
  private _crlDisable?: boolean | cdktf.IResolvable; 
  public get crlDisable() {
    return this.getBooleanAttribute('crl_disable');
  }
  public set crlDisable(value: boolean | cdktf.IResolvable) {
    this._crlDisable = value;
  }
  public resetCrlDisable() {
    this._crlDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlDisableInput() {
    return this._crlDisable;
  }

  // crl_if_not_present - computed: false, optional: true, required: false
  private _crlIfNotPresent?: string; 
  public get crlIfNotPresent() {
    return this.getStringAttribute('crl_if_not_present');
  }
  public set crlIfNotPresent(value: string) {
    this._crlIfNotPresent = value;
  }
  public resetCrlIfNotPresent() {
    this._crlIfNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlIfNotPresentInput() {
    return this._crlIfNotPresent;
  }

  // crl_ignore_hold_instruction_code - computed: false, optional: true, required: false
  private _crlIgnoreHoldInstructionCode?: boolean | cdktf.IResolvable; 
  public get crlIgnoreHoldInstructionCode() {
    return this.getBooleanAttribute('crl_ignore_hold_instruction_code');
  }
  public set crlIgnoreHoldInstructionCode(value: boolean | cdktf.IResolvable) {
    this._crlIgnoreHoldInstructionCode = value;
  }
  public resetCrlIgnoreHoldInstructionCode() {
    this._crlIgnoreHoldInstructionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlIgnoreHoldInstructionCodeInput() {
    return this._crlIgnoreHoldInstructionCode;
  }

  // ignore_server_auth_failure - computed: false, optional: true, required: false
  private _ignoreServerAuthFailure?: boolean | cdktf.IResolvable; 
  public get ignoreServerAuthFailure() {
    return this.getBooleanAttribute('ignore_server_auth_failure');
  }
  public set ignoreServerAuthFailure(value: boolean | cdktf.IResolvable) {
    this._ignoreServerAuthFailure = value;
  }
  public resetIgnoreServerAuthFailure() {
    this._ignoreServerAuthFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreServerAuthFailureInput() {
    return this._ignoreServerAuthFailure;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile junos_services_ssl_initiation_profile}
*/
export class ServicesSslInitiationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services_ssl_initiation_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicesSslInitiationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicesSslInitiationProfile to import
  * @param importFromId The id of the existing ServicesSslInitiationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicesSslInitiationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services_ssl_initiation_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_ssl_initiation_profile junos_services_ssl_initiation_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesSslInitiationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesSslInitiationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_services_ssl_initiation_profile',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientCertificate = config.clientCertificate;
    this._customCiphers = config.customCiphers;
    this._enableFlowTracing = config.enableFlowTracing;
    this._enableSessionCache = config.enableSessionCache;
    this._name = config.name;
    this._preferredCiphers = config.preferredCiphers;
    this._protocolVersion = config.protocolVersion;
    this._trustedCa = config.trustedCa;
    this._actions.internalValue = config.actions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // custom_ciphers - computed: false, optional: true, required: false
  private _customCiphers?: string[]; 
  public get customCiphers() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_ciphers'));
  }
  public set customCiphers(value: string[]) {
    this._customCiphers = value;
  }
  public resetCustomCiphers() {
    this._customCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCiphersInput() {
    return this._customCiphers;
  }

  // enable_flow_tracing - computed: false, optional: true, required: false
  private _enableFlowTracing?: boolean | cdktf.IResolvable; 
  public get enableFlowTracing() {
    return this.getBooleanAttribute('enable_flow_tracing');
  }
  public set enableFlowTracing(value: boolean | cdktf.IResolvable) {
    this._enableFlowTracing = value;
  }
  public resetEnableFlowTracing() {
    this._enableFlowTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlowTracingInput() {
    return this._enableFlowTracing;
  }

  // enable_session_cache - computed: false, optional: true, required: false
  private _enableSessionCache?: boolean | cdktf.IResolvable; 
  public get enableSessionCache() {
    return this.getBooleanAttribute('enable_session_cache');
  }
  public set enableSessionCache(value: boolean | cdktf.IResolvable) {
    this._enableSessionCache = value;
  }
  public resetEnableSessionCache() {
    this._enableSessionCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionCacheInput() {
    return this._enableSessionCache;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // preferred_ciphers - computed: false, optional: true, required: false
  private _preferredCiphers?: string; 
  public get preferredCiphers() {
    return this.getStringAttribute('preferred_ciphers');
  }
  public set preferredCiphers(value: string) {
    this._preferredCiphers = value;
  }
  public resetPreferredCiphers() {
    this._preferredCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCiphersInput() {
    return this._preferredCiphers;
  }

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string[]; 
  public get trustedCa() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_ca'));
  }
  public set trustedCa(value: string[]) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new ServicesSslInitiationProfileActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: ServicesSslInitiationProfileActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      custom_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customCiphers),
      enable_flow_tracing: cdktf.booleanToTerraform(this._enableFlowTracing),
      enable_session_cache: cdktf.booleanToTerraform(this._enableSessionCache),
      name: cdktf.stringToTerraform(this._name),
      preferred_ciphers: cdktf.stringToTerraform(this._preferredCiphers),
      protocol_version: cdktf.stringToTerraform(this._protocolVersion),
      trusted_ca: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustedCa),
      actions: servicesSslInitiationProfileActionsToTerraform(this._actions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_ciphers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customCiphers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_flow_tracing: {
        value: cdktf.booleanToHclTerraform(this._enableFlowTracing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_session_cache: {
        value: cdktf.booleanToHclTerraform(this._enableSessionCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_ciphers: {
        value: cdktf.stringToHclTerraform(this._preferredCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_version: {
        value: cdktf.stringToHclTerraform(this._protocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_ca: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustedCa),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      actions: {
        value: servicesSslInitiationProfileActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesSslInitiationProfileActions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
