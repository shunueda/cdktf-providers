// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsViewmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#fosid IpsViewmap#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#id IpsViewmap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#id_policy_id IpsViewmap#id_policy_id}
  */
  readonly idPolicyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#policy_id IpsViewmap#policy_id}
  */
  readonly policyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#vdom_id IpsViewmap#vdom_id}
  */
  readonly vdomId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#vdomparam IpsViewmap#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#which IpsViewmap#which}
  */
  readonly which?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap fortios_ips_viewmap}
*/
export class IpsViewmap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_ips_viewmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsViewmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsViewmap to import
  * @param importFromId The id of the existing IpsViewmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsViewmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_ips_viewmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_viewmap fortios_ips_viewmap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsViewmapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpsViewmapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_ips_viewmap',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fosid = config.fosid;
    this._id = config.id;
    this._idPolicyId = config.idPolicyId;
    this._policyId = config.policyId;
    this._vdomId = config.vdomId;
    this._vdomparam = config.vdomparam;
    this._which = config.which;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // id_policy_id - computed: false, optional: true, required: false
  private _idPolicyId?: number; 
  public get idPolicyId() {
    return this.getNumberAttribute('id_policy_id');
  }
  public set idPolicyId(value: number) {
    this._idPolicyId = value;
  }
  public resetIdPolicyId() {
    this._idPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idPolicyIdInput() {
    return this._idPolicyId;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // vdom_id - computed: false, optional: true, required: false
  private _vdomId?: number; 
  public get vdomId() {
    return this.getNumberAttribute('vdom_id');
  }
  public set vdomId(value: number) {
    this._vdomId = value;
  }
  public resetVdomId() {
    this._vdomId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomIdInput() {
    return this._vdomId;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // which - computed: true, optional: true, required: false
  private _which?: string; 
  public get which() {
    return this.getStringAttribute('which');
  }
  public set which(value: string) {
    this._which = value;
  }
  public resetWhich() {
    this._which = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whichInput() {
    return this._which;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      id_policy_id: cdktf.numberToTerraform(this._idPolicyId),
      policy_id: cdktf.numberToTerraform(this._policyId),
      vdom_id: cdktf.numberToTerraform(this._vdomId),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      which: cdktf.stringToTerraform(this._which),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      id_policy_id: {
        value: cdktf.numberToHclTerraform(this._idPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdom_id: {
        value: cdktf.numberToHclTerraform(this._vdomId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      which: {
        value: cdktf.stringToHclTerraform(this._which),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
