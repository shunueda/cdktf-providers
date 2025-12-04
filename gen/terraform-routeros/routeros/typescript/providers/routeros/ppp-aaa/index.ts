// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PppAaaConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#___path___ PppAaa#___path___}
  */
  readonly path?: string;
  /**
  * An option that enables accounting for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#accounting PppAaa#accounting}
  */
  readonly accounting?: boolean | cdktf.IResolvable;
  /**
  * An option that enables IPv6 separate accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#enable_ipv6_accounting PppAaa#enable_ipv6_accounting}
  */
  readonly enableIpv6Accounting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#id PppAaa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval between scheduled RADIUS Interim-Update messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#interim_update PppAaa#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#use_circuit_id_in_nas_port_id PppAaa#use_circuit_id_in_nas_port_id}
  */
  readonly useCircuitIdInNasPortId?: boolean | cdktf.IResolvable;
  /**
  * An option whether to use RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#use_radius PppAaa#use_radius}
  */
  readonly useRadius?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa routeros_ppp_aaa}
*/
export class PppAaa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ppp_aaa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PppAaa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PppAaa to import
  * @param importFromId The id of the existing PppAaa that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PppAaa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ppp_aaa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ppp_aaa routeros_ppp_aaa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PppAaaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PppAaaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ppp_aaa',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accounting = config.accounting;
    this._enableIpv6Accounting = config.enableIpv6Accounting;
    this._id = config.id;
    this._interimUpdate = config.interimUpdate;
    this._useCircuitIdInNasPortId = config.useCircuitIdInNasPortId;
    this._useRadius = config.useRadius;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accounting - computed: false, optional: true, required: false
  private _accounting?: boolean | cdktf.IResolvable; 
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }
  public set accounting(value: boolean | cdktf.IResolvable) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
  }

  // enable_ipv6_accounting - computed: false, optional: true, required: false
  private _enableIpv6Accounting?: boolean | cdktf.IResolvable; 
  public get enableIpv6Accounting() {
    return this.getBooleanAttribute('enable_ipv6_accounting');
  }
  public set enableIpv6Accounting(value: boolean | cdktf.IResolvable) {
    this._enableIpv6Accounting = value;
  }
  public resetEnableIpv6Accounting() {
    this._enableIpv6Accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6AccountingInput() {
    return this._enableIpv6Accounting;
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

  // interim_update - computed: false, optional: true, required: false
  private _interimUpdate?: string; 
  public get interimUpdate() {
    return this.getStringAttribute('interim_update');
  }
  public set interimUpdate(value: string) {
    this._interimUpdate = value;
  }
  public resetInterimUpdate() {
    this._interimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateInput() {
    return this._interimUpdate;
  }

  // use_circuit_id_in_nas_port_id - computed: false, optional: true, required: false
  private _useCircuitIdInNasPortId?: boolean | cdktf.IResolvable; 
  public get useCircuitIdInNasPortId() {
    return this.getBooleanAttribute('use_circuit_id_in_nas_port_id');
  }
  public set useCircuitIdInNasPortId(value: boolean | cdktf.IResolvable) {
    this._useCircuitIdInNasPortId = value;
  }
  public resetUseCircuitIdInNasPortId() {
    this._useCircuitIdInNasPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCircuitIdInNasPortIdInput() {
    return this._useCircuitIdInNasPortId;
  }

  // use_radius - computed: false, optional: true, required: false
  private _useRadius?: boolean | cdktf.IResolvable; 
  public get useRadius() {
    return this.getBooleanAttribute('use_radius');
  }
  public set useRadius(value: boolean | cdktf.IResolvable) {
    this._useRadius = value;
  }
  public resetUseRadius() {
    this._useRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRadiusInput() {
    return this._useRadius;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accounting: cdktf.booleanToTerraform(this._accounting),
      enable_ipv6_accounting: cdktf.booleanToTerraform(this._enableIpv6Accounting),
      id: cdktf.stringToTerraform(this._id),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      use_circuit_id_in_nas_port_id: cdktf.booleanToTerraform(this._useCircuitIdInNasPortId),
      use_radius: cdktf.booleanToTerraform(this._useRadius),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting: {
        value: cdktf.booleanToHclTerraform(this._accounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv6_accounting: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6Accounting),
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
      interim_update: {
        value: cdktf.stringToHclTerraform(this._interimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_circuit_id_in_nas_port_id: {
        value: cdktf.booleanToHclTerraform(this._useCircuitIdInNasPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_radius: {
        value: cdktf.booleanToHclTerraform(this._useRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
