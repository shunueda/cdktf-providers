// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#environment_name TargetServer#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#host TargetServer#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#id TargetServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#is_enabled TargetServer#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#name TargetServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#port TargetServer#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#protocols TargetServer#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#ssl_client_auth_enabled TargetServer#ssl_client_auth_enabled}
  */
  readonly sslClientAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#ssl_enabled TargetServer#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#ssl_ignore_validation_errors TargetServer#ssl_ignore_validation_errors}
  */
  readonly sslIgnoreValidationErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#ssl_keyalias TargetServer#ssl_keyalias}
  */
  readonly sslKeyalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#ssl_keystore TargetServer#ssl_keystore}
  */
  readonly sslKeystore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#ssl_truststore TargetServer#ssl_truststore}
  */
  readonly sslTruststore?: string;
  /**
  * ssl_common_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#ssl_common_name TargetServer#ssl_common_name}
  */
  readonly sslCommonName?: TargetServerSslCommonName;
}
export interface TargetServerSslCommonName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#value TargetServer#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#wildcard_match TargetServer#wildcard_match}
  */
  readonly wildcardMatch?: boolean | cdktf.IResolvable;
}

export function targetServerSslCommonNameToTerraform(struct?: TargetServerSslCommonNameOutputReference | TargetServerSslCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    wildcard_match: cdktf.booleanToTerraform(struct!.wildcardMatch),
  }
}


export function targetServerSslCommonNameToHclTerraform(struct?: TargetServerSslCommonNameOutputReference | TargetServerSslCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard_match: {
      value: cdktf.booleanToHclTerraform(struct!.wildcardMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetServerSslCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetServerSslCommonName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._wildcardMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardMatch = this._wildcardMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetServerSslCommonName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._wildcardMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._wildcardMatch = value.wildcardMatch;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // wildcard_match - computed: false, optional: true, required: false
  private _wildcardMatch?: boolean | cdktf.IResolvable; 
  public get wildcardMatch() {
    return this.getBooleanAttribute('wildcard_match');
  }
  public set wildcardMatch(value: boolean | cdktf.IResolvable) {
    this._wildcardMatch = value;
  }
  public resetWildcardMatch() {
    this._wildcardMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardMatchInput() {
    return this._wildcardMatch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server apigee_target_server}
*/
export class TargetServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_target_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetServer to import
  * @param importFromId The id of the existing TargetServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_target_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/target_server apigee_target_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetServerConfig
  */
  public constructor(scope: Construct, id: string, config: TargetServerConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_target_server',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentName = config.environmentName;
    this._host = config.host;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._port = config.port;
    this._protocols = config.protocols;
    this._sslClientAuthEnabled = config.sslClientAuthEnabled;
    this._sslEnabled = config.sslEnabled;
    this._sslIgnoreValidationErrors = config.sslIgnoreValidationErrors;
    this._sslKeyalias = config.sslKeyalias;
    this._sslKeystore = config.sslKeystore;
    this._sslTruststore = config.sslTruststore;
    this._sslCommonName.internalValue = config.sslCommonName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // ssl_client_auth_enabled - computed: false, optional: true, required: false
  private _sslClientAuthEnabled?: boolean | cdktf.IResolvable; 
  public get sslClientAuthEnabled() {
    return this.getBooleanAttribute('ssl_client_auth_enabled');
  }
  public set sslClientAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._sslClientAuthEnabled = value;
  }
  public resetSslClientAuthEnabled() {
    this._sslClientAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientAuthEnabledInput() {
    return this._sslClientAuthEnabled;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // ssl_ignore_validation_errors - computed: false, optional: true, required: false
  private _sslIgnoreValidationErrors?: boolean | cdktf.IResolvable; 
  public get sslIgnoreValidationErrors() {
    return this.getBooleanAttribute('ssl_ignore_validation_errors');
  }
  public set sslIgnoreValidationErrors(value: boolean | cdktf.IResolvable) {
    this._sslIgnoreValidationErrors = value;
  }
  public resetSslIgnoreValidationErrors() {
    this._sslIgnoreValidationErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslIgnoreValidationErrorsInput() {
    return this._sslIgnoreValidationErrors;
  }

  // ssl_keyalias - computed: false, optional: true, required: false
  private _sslKeyalias?: string; 
  public get sslKeyalias() {
    return this.getStringAttribute('ssl_keyalias');
  }
  public set sslKeyalias(value: string) {
    this._sslKeyalias = value;
  }
  public resetSslKeyalias() {
    this._sslKeyalias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyaliasInput() {
    return this._sslKeyalias;
  }

  // ssl_keystore - computed: false, optional: true, required: false
  private _sslKeystore?: string; 
  public get sslKeystore() {
    return this.getStringAttribute('ssl_keystore');
  }
  public set sslKeystore(value: string) {
    this._sslKeystore = value;
  }
  public resetSslKeystore() {
    this._sslKeystore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeystoreInput() {
    return this._sslKeystore;
  }

  // ssl_truststore - computed: false, optional: true, required: false
  private _sslTruststore?: string; 
  public get sslTruststore() {
    return this.getStringAttribute('ssl_truststore');
  }
  public set sslTruststore(value: string) {
    this._sslTruststore = value;
  }
  public resetSslTruststore() {
    this._sslTruststore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTruststoreInput() {
    return this._sslTruststore;
  }

  // ssl_common_name - computed: false, optional: true, required: false
  private _sslCommonName = new TargetServerSslCommonNameOutputReference(this, "ssl_common_name");
  public get sslCommonName() {
    return this._sslCommonName;
  }
  public putSslCommonName(value: TargetServerSslCommonName) {
    this._sslCommonName.internalValue = value;
  }
  public resetSslCommonName() {
    this._sslCommonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCommonNameInput() {
    return this._sslCommonName.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_name: cdktf.stringToTerraform(this._environmentName),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      ssl_client_auth_enabled: cdktf.booleanToTerraform(this._sslClientAuthEnabled),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      ssl_ignore_validation_errors: cdktf.booleanToTerraform(this._sslIgnoreValidationErrors),
      ssl_keyalias: cdktf.stringToTerraform(this._sslKeyalias),
      ssl_keystore: cdktf.stringToTerraform(this._sslKeystore),
      ssl_truststore: cdktf.stringToTerraform(this._sslTruststore),
      ssl_common_name: targetServerSslCommonNameToTerraform(this._sslCommonName.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_client_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslClientAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_ignore_validation_errors: {
        value: cdktf.booleanToHclTerraform(this._sslIgnoreValidationErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_keyalias: {
        value: cdktf.stringToHclTerraform(this._sslKeyalias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_keystore: {
        value: cdktf.stringToHclTerraform(this._sslKeystore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_truststore: {
        value: cdktf.stringToHclTerraform(this._sslTruststore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_common_name: {
        value: targetServerSslCommonNameToHclTerraform(this._sslCommonName.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TargetServerSslCommonNameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
