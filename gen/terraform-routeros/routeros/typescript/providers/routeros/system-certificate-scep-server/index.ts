// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCertificateScepServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the CA certificate to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#ca_cert SystemCertificateScepServer#ca_cert}
  */
  readonly caCert: string;
  /**
  * The number of days to sign certificates for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#days_valid SystemCertificateScepServer#days_valid}
  */
  readonly daysValid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#disabled SystemCertificateScepServer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#id SystemCertificateScepServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the next CA certificate or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#next_ca_cert SystemCertificateScepServer#next_ca_cert}
  */
  readonly nextCaCert?: string;
  /**
  * HTTP path starting with `/scep/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#path SystemCertificateScepServer#path}
  */
  readonly path: string;
  /**
  * Request lifetime (5m minimum).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#request_lifetime SystemCertificateScepServer#request_lifetime}
  */
  readonly requestLifetime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server routeros_system_certificate_scep_server}
*/
export class SystemCertificateScepServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_certificate_scep_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCertificateScepServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCertificateScepServer to import
  * @param importFromId The id of the existing SystemCertificateScepServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCertificateScepServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_certificate_scep_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/system_certificate_scep_server routeros_system_certificate_scep_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCertificateScepServerConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCertificateScepServerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_certificate_scep_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCert = config.caCert;
    this._daysValid = config.daysValid;
    this._disabled = config.disabled;
    this._id = config.id;
    this._nextCaCert = config.nextCaCert;
    this._path = config.path;
    this._requestLifetime = config.requestLifetime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: false, optional: false, required: true
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // days_valid - computed: false, optional: true, required: false
  private _daysValid?: number; 
  public get daysValid() {
    return this.getNumberAttribute('days_valid');
  }
  public set daysValid(value: number) {
    this._daysValid = value;
  }
  public resetDaysValid() {
    this._daysValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysValidInput() {
    return this._daysValid;
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

  // next_ca_cert - computed: false, optional: true, required: false
  private _nextCaCert?: string; 
  public get nextCaCert() {
    return this.getStringAttribute('next_ca_cert');
  }
  public set nextCaCert(value: string) {
    this._nextCaCert = value;
  }
  public resetNextCaCert() {
    this._nextCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextCaCertInput() {
    return this._nextCaCert;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // request_lifetime - computed: false, optional: true, required: false
  private _requestLifetime?: string; 
  public get requestLifetime() {
    return this.getStringAttribute('request_lifetime');
  }
  public set requestLifetime(value: string) {
    this._requestLifetime = value;
  }
  public resetRequestLifetime() {
    this._requestLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLifetimeInput() {
    return this._requestLifetime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert: cdktf.stringToTerraform(this._caCert),
      days_valid: cdktf.numberToTerraform(this._daysValid),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      next_ca_cert: cdktf.stringToTerraform(this._nextCaCert),
      path: cdktf.stringToTerraform(this._path),
      request_lifetime: cdktf.stringToTerraform(this._requestLifetime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days_valid: {
        value: cdktf.numberToHclTerraform(this._daysValid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      next_ca_cert: {
        value: cdktf.stringToHclTerraform(this._nextCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_lifetime: {
        value: cdktf.stringToHclTerraform(this._requestLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
