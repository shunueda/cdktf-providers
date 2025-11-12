// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpParamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param#authentication NtpParam#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * Automax Interval (as power of 2 in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param#automax_logsec NtpParam#automax_logsec}
  */
  readonly automaxLogsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param#id NtpParam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Revoke Interval (as power of 2 in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param#revoke_logsec NtpParam#revoke_logsec}
  */
  readonly revokeLogsec?: number;
  /**
  * List of Trusted Key Identifiers for Symmetric Key Cryptography. Minimum value =  1 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param#trusted_key_list NtpParam#trusted_key_list}
  */
  readonly trustedKeyList?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param netscalersdx_ntp_param}
*/
export class NtpParam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ntp_param";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NtpParam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NtpParam to import
  * @param importFromId The id of the existing NtpParam that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NtpParam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ntp_param", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_param netscalersdx_ntp_param} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpParamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NtpParamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ntp_param',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication = config.authentication;
    this._automaxLogsec = config.automaxLogsec;
    this._id = config.id;
    this._revokeLogsec = config.revokeLogsec;
    this._trustedKeyList = config.trustedKeyList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // automax_logsec - computed: true, optional: true, required: false
  private _automaxLogsec?: number; 
  public get automaxLogsec() {
    return this.getNumberAttribute('automax_logsec');
  }
  public set automaxLogsec(value: number) {
    this._automaxLogsec = value;
  }
  public resetAutomaxLogsec() {
    this._automaxLogsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaxLogsecInput() {
    return this._automaxLogsec;
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

  // revoke_logsec - computed: true, optional: true, required: false
  private _revokeLogsec?: number; 
  public get revokeLogsec() {
    return this.getNumberAttribute('revoke_logsec');
  }
  public set revokeLogsec(value: number) {
    this._revokeLogsec = value;
  }
  public resetRevokeLogsec() {
    this._revokeLogsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeLogsecInput() {
    return this._revokeLogsec;
  }

  // trusted_key_list - computed: true, optional: true, required: false
  private _trustedKeyList?: number[]; 
  public get trustedKeyList() {
    return this.getNumberListAttribute('trusted_key_list');
  }
  public set trustedKeyList(value: number[]) {
    this._trustedKeyList = value;
  }
  public resetTrustedKeyList() {
    this._trustedKeyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyListInput() {
    return this._trustedKeyList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.booleanToTerraform(this._authentication),
      automax_logsec: cdktf.numberToTerraform(this._automaxLogsec),
      id: cdktf.stringToTerraform(this._id),
      revoke_logsec: cdktf.numberToTerraform(this._revokeLogsec),
      trusted_key_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._trustedKeyList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automax_logsec: {
        value: cdktf.numberToHclTerraform(this._automaxLogsec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke_logsec: {
        value: cdktf.numberToHclTerraform(this._revokeLogsec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trusted_key_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._trustedKeyList),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
