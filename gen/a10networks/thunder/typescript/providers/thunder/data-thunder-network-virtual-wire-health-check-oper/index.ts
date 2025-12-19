// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVirtualWireHealthCheckOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper#id DataThunderNetworkVirtualWireHealthCheckOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VLAN ID, specify 1 for untagged traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper#vlan DataThunderNetworkVirtualWireHealthCheckOper#vlan}
  */
  readonly vlan: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper#oper DataThunderNetworkVirtualWireHealthCheckOper#oper}
  */
  readonly oper?: DataThunderNetworkVirtualWireHealthCheckOperOper;
}
export interface DataThunderNetworkVirtualWireHealthCheckOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper#entry_state DataThunderNetworkVirtualWireHealthCheckOper#entry_state}
  */
  readonly entryState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper#vlan_state DataThunderNetworkVirtualWireHealthCheckOper#vlan_state}
  */
  readonly vlanState?: string;
}

export function dataThunderNetworkVirtualWireHealthCheckOperOperToTerraform(struct?: DataThunderNetworkVirtualWireHealthCheckOperOperOutputReference | DataThunderNetworkVirtualWireHealthCheckOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_state: cdktf.stringToTerraform(struct!.entryState),
    vlan_state: cdktf.stringToTerraform(struct!.vlanState),
  }
}


export function dataThunderNetworkVirtualWireHealthCheckOperOperToHclTerraform(struct?: DataThunderNetworkVirtualWireHealthCheckOperOperOutputReference | DataThunderNetworkVirtualWireHealthCheckOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_state: {
      value: cdktf.stringToHclTerraform(struct!.entryState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_state: {
      value: cdktf.stringToHclTerraform(struct!.vlanState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireHealthCheckOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVirtualWireHealthCheckOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryState !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryState = this._entryState;
    }
    if (this._vlanState !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanState = this._vlanState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireHealthCheckOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryState = undefined;
      this._vlanState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryState = value.entryState;
      this._vlanState = value.vlanState;
    }
  }

  // entry_state - computed: false, optional: true, required: false
  private _entryState?: string; 
  public get entryState() {
    return this.getStringAttribute('entry_state');
  }
  public set entryState(value: string) {
    this._entryState = value;
  }
  public resetEntryState() {
    this._entryState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryStateInput() {
    return this._entryState;
  }

  // vlan_state - computed: false, optional: true, required: false
  private _vlanState?: string; 
  public get vlanState() {
    return this.getStringAttribute('vlan_state');
  }
  public set vlanState(value: string) {
    this._vlanState = value;
  }
  public resetVlanState() {
    this._vlanState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanStateInput() {
    return this._vlanState;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper thunder_network_virtual_wire_health_check_oper}
*/
export class DataThunderNetworkVirtualWireHealthCheckOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_health_check_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVirtualWireHealthCheckOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVirtualWireHealthCheckOper to import
  * @param importFromId The id of the existing DataThunderNetworkVirtualWireHealthCheckOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVirtualWireHealthCheckOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_health_check_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_health_check_oper thunder_network_virtual_wire_health_check_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVirtualWireHealthCheckOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVirtualWireHealthCheckOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_health_check_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._vlan = config.vlan;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderNetworkVirtualWireHealthCheckOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkVirtualWireHealthCheckOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vlan: cdktf.numberToTerraform(this._vlan),
      oper: dataThunderNetworkVirtualWireHealthCheckOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oper: {
        value: dataThunderNetworkVirtualWireHealthCheckOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVirtualWireHealthCheckOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
