// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PimSsmRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#device PimSsmRange#device}
  */
  readonly device?: string;
  /**
  * Group list 1.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#group_list_1 PimSsmRange#group_list_1}
  */
  readonly groupList1?: string;
  /**
  * Group list 2.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#group_list_2 PimSsmRange#group_list_2}
  */
  readonly groupList2?: string;
  /**
  * Group list 3.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#group_list_3 PimSsmRange#group_list_3}
  */
  readonly groupList3?: string;
  /**
  * Group list 4.
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#group_list_4 PimSsmRange#group_list_4}
  */
  readonly groupList4?: string;
  /**
  * Prefix list name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#prefix_list PimSsmRange#prefix_list}
  */
  readonly prefixList?: string;
  /**
  * Route map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#route_map PimSsmRange#route_map}
  */
  readonly routeMap?: string;
  /**
  * Exclude standard SSM range (232.0.0.0/8).
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#ssm_none PimSsmRange#ssm_none}
  */
  readonly ssmNone?: boolean | cdktf.IResolvable;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#vrf_name PimSsmRange#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range nxos_pim_ssm_range}
*/
export class PimSsmRange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_pim_ssm_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PimSsmRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PimSsmRange to import
  * @param importFromId The id of the existing PimSsmRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PimSsmRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_pim_ssm_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/pim_ssm_range nxos_pim_ssm_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PimSsmRangeConfig
  */
  public constructor(scope: Construct, id: string, config: PimSsmRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_pim_ssm_range',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._groupList1 = config.groupList1;
    this._groupList2 = config.groupList2;
    this._groupList3 = config.groupList3;
    this._groupList4 = config.groupList4;
    this._prefixList = config.prefixList;
    this._routeMap = config.routeMap;
    this._ssmNone = config.ssmNone;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // group_list_1 - computed: true, optional: true, required: false
  private _groupList1?: string; 
  public get groupList1() {
    return this.getStringAttribute('group_list_1');
  }
  public set groupList1(value: string) {
    this._groupList1 = value;
  }
  public resetGroupList1() {
    this._groupList1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupList1Input() {
    return this._groupList1;
  }

  // group_list_2 - computed: true, optional: true, required: false
  private _groupList2?: string; 
  public get groupList2() {
    return this.getStringAttribute('group_list_2');
  }
  public set groupList2(value: string) {
    this._groupList2 = value;
  }
  public resetGroupList2() {
    this._groupList2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupList2Input() {
    return this._groupList2;
  }

  // group_list_3 - computed: true, optional: true, required: false
  private _groupList3?: string; 
  public get groupList3() {
    return this.getStringAttribute('group_list_3');
  }
  public set groupList3(value: string) {
    this._groupList3 = value;
  }
  public resetGroupList3() {
    this._groupList3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupList3Input() {
    return this._groupList3;
  }

  // group_list_4 - computed: true, optional: true, required: false
  private _groupList4?: string; 
  public get groupList4() {
    return this.getStringAttribute('group_list_4');
  }
  public set groupList4(value: string) {
    this._groupList4 = value;
  }
  public resetGroupList4() {
    this._groupList4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupList4Input() {
    return this._groupList4;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // ssm_none - computed: true, optional: true, required: false
  private _ssmNone?: boolean | cdktf.IResolvable; 
  public get ssmNone() {
    return this.getBooleanAttribute('ssm_none');
  }
  public set ssmNone(value: boolean | cdktf.IResolvable) {
    this._ssmNone = value;
  }
  public resetSsmNone() {
    this._ssmNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmNoneInput() {
    return this._ssmNone;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      group_list_1: cdktf.stringToTerraform(this._groupList1),
      group_list_2: cdktf.stringToTerraform(this._groupList2),
      group_list_3: cdktf.stringToTerraform(this._groupList3),
      group_list_4: cdktf.stringToTerraform(this._groupList4),
      prefix_list: cdktf.stringToTerraform(this._prefixList),
      route_map: cdktf.stringToTerraform(this._routeMap),
      ssm_none: cdktf.booleanToTerraform(this._ssmNone),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_list_1: {
        value: cdktf.stringToHclTerraform(this._groupList1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_list_2: {
        value: cdktf.stringToHclTerraform(this._groupList2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_list_3: {
        value: cdktf.stringToHclTerraform(this._groupList3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_list_4: {
        value: cdktf.stringToHclTerraform(this._groupList4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list: {
        value: cdktf.stringToHclTerraform(this._prefixList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map: {
        value: cdktf.stringToHclTerraform(this._routeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssm_none: {
        value: cdktf.booleanToHclTerraform(this._ssmNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
