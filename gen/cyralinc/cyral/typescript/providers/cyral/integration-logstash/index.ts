// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationLogstashConfig extends cdktf.TerraformMetaArguments {
  /**
  * The endpoint used to connect to Logstash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash#endpoint IntegrationLogstash#endpoint}
  */
  readonly endpoint: string;
  /**
  * Integration name that will be used internally in the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash#name IntegrationLogstash#name}
  */
  readonly name: string;
  /**
  * Logstash configured to use mutual authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash#use_mutual_authentication IntegrationLogstash#use_mutual_authentication}
  */
  readonly useMutualAuthentication: boolean | cdktf.IResolvable;
  /**
  * Logstash configured to use private certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash#use_private_certificate_chain IntegrationLogstash#use_private_certificate_chain}
  */
  readonly usePrivateCertificateChain: boolean | cdktf.IResolvable;
  /**
  * Logstash configured to use mutual TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash#use_tls IntegrationLogstash#use_tls}
  */
  readonly useTls: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash cyral_integration_logstash}
*/
export class IntegrationLogstash extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_logstash";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationLogstash resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationLogstash to import
  * @param importFromId The id of the existing IntegrationLogstash that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationLogstash to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_logstash", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logstash cyral_integration_logstash} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationLogstashConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationLogstashConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_logstash',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpoint = config.endpoint;
    this._name = config.name;
    this._useMutualAuthentication = config.useMutualAuthentication;
    this._usePrivateCertificateChain = config.usePrivateCertificateChain;
    this._useTls = config.useTls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // use_mutual_authentication - computed: false, optional: false, required: true
  private _useMutualAuthentication?: boolean | cdktf.IResolvable; 
  public get useMutualAuthentication() {
    return this.getBooleanAttribute('use_mutual_authentication');
  }
  public set useMutualAuthentication(value: boolean | cdktf.IResolvable) {
    this._useMutualAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useMutualAuthenticationInput() {
    return this._useMutualAuthentication;
  }

  // use_private_certificate_chain - computed: false, optional: false, required: true
  private _usePrivateCertificateChain?: boolean | cdktf.IResolvable; 
  public get usePrivateCertificateChain() {
    return this.getBooleanAttribute('use_private_certificate_chain');
  }
  public set usePrivateCertificateChain(value: boolean | cdktf.IResolvable) {
    this._usePrivateCertificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateCertificateChainInput() {
    return this._usePrivateCertificateChain;
  }

  // use_tls - computed: false, optional: false, required: true
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      name: cdktf.stringToTerraform(this._name),
      use_mutual_authentication: cdktf.booleanToTerraform(this._useMutualAuthentication),
      use_private_certificate_chain: cdktf.booleanToTerraform(this._usePrivateCertificateChain),
      use_tls: cdktf.booleanToTerraform(this._useTls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      use_mutual_authentication: {
        value: cdktf.booleanToHclTerraform(this._useMutualAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_private_certificate_chain: {
        value: cdktf.booleanToHclTerraform(this._usePrivateCertificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_tls: {
        value: cdktf.booleanToHclTerraform(this._useTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
