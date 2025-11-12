// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam#authentication Ntpparam#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam#autokeylogsec Ntpparam#autokeylogsec}
  */
  readonly autokeylogsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam#id Ntpparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam#revokelogsec Ntpparam#revokelogsec}
  */
  readonly revokelogsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam#trustedkey Ntpparam#trustedkey}
  */
  readonly trustedkey?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam citrixadc_ntpparam}
*/
export class Ntpparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ntpparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ntpparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ntpparam to import
  * @param importFromId The id of the existing Ntpparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ntpparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ntpparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpparam citrixadc_ntpparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NtpparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ntpparam',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._autokeylogsec = config.autokeylogsec;
    this._id = config.id;
    this._revokelogsec = config.revokelogsec;
    this._trustedkey = config.trustedkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // autokeylogsec - computed: true, optional: true, required: false
  private _autokeylogsec?: number; 
  public get autokeylogsec() {
    return this.getNumberAttribute('autokeylogsec');
  }
  public set autokeylogsec(value: number) {
    this._autokeylogsec = value;
  }
  public resetAutokeylogsec() {
    this._autokeylogsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeylogsecInput() {
    return this._autokeylogsec;
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

  // revokelogsec - computed: true, optional: true, required: false
  private _revokelogsec?: number; 
  public get revokelogsec() {
    return this.getNumberAttribute('revokelogsec');
  }
  public set revokelogsec(value: number) {
    this._revokelogsec = value;
  }
  public resetRevokelogsec() {
    this._revokelogsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokelogsecInput() {
    return this._revokelogsec;
  }

  // trustedkey - computed: true, optional: true, required: false
  private _trustedkey?: number[]; 
  public get trustedkey() {
    return this.getNumberListAttribute('trustedkey');
  }
  public set trustedkey(value: number[]) {
    this._trustedkey = value;
  }
  public resetTrustedkey() {
    this._trustedkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedkeyInput() {
    return this._trustedkey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      autokeylogsec: cdktf.numberToTerraform(this._autokeylogsec),
      id: cdktf.stringToTerraform(this._id),
      revokelogsec: cdktf.numberToTerraform(this._revokelogsec),
      trustedkey: cdktf.listMapper(cdktf.numberToTerraform, false)(this._trustedkey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autokeylogsec: {
        value: cdktf.numberToHclTerraform(this._autokeylogsec),
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
      revokelogsec: {
        value: cdktf.numberToHclTerraform(this._revokelogsec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trustedkey: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._trustedkey),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
