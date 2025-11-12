// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityDosDosProtectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#http_access_limit SecurityDosDosProtectionProfile#http_access_limit}
  */
  readonly httpAccessLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#http_conn_limit SecurityDosDosProtectionProfile#http_conn_limit}
  */
  readonly httpConnLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#http_req_limit SecurityDosDosProtectionProfile#http_req_limit}
  */
  readonly httpReqLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#id SecurityDosDosProtectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#mkey SecurityDosDosProtectionProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#tcp_conn_limit SecurityDosDosProtectionProfile#tcp_conn_limit}
  */
  readonly tcpConnLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#tcp_slow_data_limit SecurityDosDosProtectionProfile#tcp_slow_data_limit}
  */
  readonly tcpSlowDataLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#vdom SecurityDosDosProtectionProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile fortiadc_security_dos_dos_protection_profile}
*/
export class SecurityDosDosProtectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_dos_dos_protection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityDosDosProtectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityDosDosProtectionProfile to import
  * @param importFromId The id of the existing SecurityDosDosProtectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityDosDosProtectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_dos_dos_protection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_dos_dos_protection_profile fortiadc_security_dos_dos_protection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityDosDosProtectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityDosDosProtectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_dos_dos_protection_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpAccessLimit = config.httpAccessLimit;
    this._httpConnLimit = config.httpConnLimit;
    this._httpReqLimit = config.httpReqLimit;
    this._id = config.id;
    this._mkey = config.mkey;
    this._tcpConnLimit = config.tcpConnLimit;
    this._tcpSlowDataLimit = config.tcpSlowDataLimit;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_access_limit - computed: true, optional: true, required: false
  private _httpAccessLimit?: string; 
  public get httpAccessLimit() {
    return this.getStringAttribute('http_access_limit');
  }
  public set httpAccessLimit(value: string) {
    this._httpAccessLimit = value;
  }
  public resetHttpAccessLimit() {
    this._httpAccessLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAccessLimitInput() {
    return this._httpAccessLimit;
  }

  // http_conn_limit - computed: true, optional: true, required: false
  private _httpConnLimit?: string; 
  public get httpConnLimit() {
    return this.getStringAttribute('http_conn_limit');
  }
  public set httpConnLimit(value: string) {
    this._httpConnLimit = value;
  }
  public resetHttpConnLimit() {
    this._httpConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnLimitInput() {
    return this._httpConnLimit;
  }

  // http_req_limit - computed: true, optional: true, required: false
  private _httpReqLimit?: string; 
  public get httpReqLimit() {
    return this.getStringAttribute('http_req_limit');
  }
  public set httpReqLimit(value: string) {
    this._httpReqLimit = value;
  }
  public resetHttpReqLimit() {
    this._httpReqLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReqLimitInput() {
    return this._httpReqLimit;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // tcp_conn_limit - computed: true, optional: true, required: false
  private _tcpConnLimit?: string; 
  public get tcpConnLimit() {
    return this.getStringAttribute('tcp_conn_limit');
  }
  public set tcpConnLimit(value: string) {
    this._tcpConnLimit = value;
  }
  public resetTcpConnLimit() {
    this._tcpConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnLimitInput() {
    return this._tcpConnLimit;
  }

  // tcp_slow_data_limit - computed: true, optional: true, required: false
  private _tcpSlowDataLimit?: string; 
  public get tcpSlowDataLimit() {
    return this.getStringAttribute('tcp_slow_data_limit');
  }
  public set tcpSlowDataLimit(value: string) {
    this._tcpSlowDataLimit = value;
  }
  public resetTcpSlowDataLimit() {
    this._tcpSlowDataLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSlowDataLimitInput() {
    return this._tcpSlowDataLimit;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_access_limit: cdktf.stringToTerraform(this._httpAccessLimit),
      http_conn_limit: cdktf.stringToTerraform(this._httpConnLimit),
      http_req_limit: cdktf.stringToTerraform(this._httpReqLimit),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      tcp_conn_limit: cdktf.stringToTerraform(this._tcpConnLimit),
      tcp_slow_data_limit: cdktf.stringToTerraform(this._tcpSlowDataLimit),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_access_limit: {
        value: cdktf.stringToHclTerraform(this._httpAccessLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_conn_limit: {
        value: cdktf.stringToHclTerraform(this._httpConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_req_limit: {
        value: cdktf.stringToHclTerraform(this._httpReqLimit),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_conn_limit: {
        value: cdktf.stringToHclTerraform(this._tcpConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_slow_data_limit: {
        value: cdktf.stringToHclTerraform(this._tcpSlowDataLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
