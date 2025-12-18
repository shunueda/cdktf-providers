// https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of certificate to use. Must have the `domain` specified in the certificate's Subject Alternative Names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation#certificate_id TlsActivation#certificate_id}
  */
  readonly certificateId: string;
  /**
  * ID of TLS configuration to be used to terminate TLS traffic, or use the default one if missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation#configuration_id TlsActivation#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Domain to enable TLS on. Must be assigned to an existing Fastly Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation#domain TlsActivation#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation#id TlsActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An alphanumeric string identifying a mutual authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation#mutual_authentication_id TlsActivation#mutual_authentication_id}
  */
  readonly mutualAuthenticationId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation fastly_tls_activation}
*/
export class TlsActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_tls_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsActivation to import
  * @param importFromId The id of the existing TlsActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_tls_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/tls_activation fastly_tls_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsActivationConfig
  */
  public constructor(scope: Construct, id: string, config: TlsActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_tls_activation',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._configurationId = config.configurationId;
    this._domain = config.domain;
    this._id = config.id;
    this._mutualAuthenticationId = config.mutualAuthenticationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // configuration_id - computed: true, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // mutual_authentication_id - computed: true, optional: true, required: false
  private _mutualAuthenticationId?: string; 
  public get mutualAuthenticationId() {
    return this.getStringAttribute('mutual_authentication_id');
  }
  public set mutualAuthenticationId(value: string) {
    this._mutualAuthenticationId = value;
  }
  public resetMutualAuthenticationId() {
    this._mutualAuthenticationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualAuthenticationIdInput() {
    return this._mutualAuthenticationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      mutual_authentication_id: cdktf.stringToTerraform(this._mutualAuthenticationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      mutual_authentication_id: {
        value: cdktf.stringToHclTerraform(this._mutualAuthenticationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
