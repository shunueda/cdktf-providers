// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwNatInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Off-site disaster recovery 1: use off-site disaster recovery; 0: do not use off-site disaster recovery; if empty, the default is not to use off-site disaster recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#cross_a_zone CfwNatInstance#cross_a_zone}
  */
  readonly crossAZone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#id CfwNatInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mode 1: access mode; 0: new mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#mode CfwNatInstance#mode}
  */
  readonly mode: number;
  /**
  * Firewall instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#name CfwNatInstance#name}
  */
  readonly name: string;
  /**
  * A list of nat gateways connected to the access mode, at least one of NewModeItems and NatgwList is passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#nat_gw_list CfwNatInstance#nat_gw_list}
  */
  readonly natGwList?: string[];
  /**
  * Bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#width CfwNatInstance#width}
  */
  readonly width: number;
  /**
  * Zone list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#zone_set CfwNatInstance#zone_set}
  */
  readonly zoneSet: string[];
  /**
  * new_mode_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#new_mode_items CfwNatInstance#new_mode_items}
  */
  readonly newModeItems?: CfwNatInstanceNewModeItems;
}
export interface CfwNatInstanceNewModeItems {
  /**
  * List of egress elastic public network IPs bound in the new mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#eips CfwNatInstance#eips}
  */
  readonly eips: string[];
  /**
  * List of vpcs connected in new mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#vpc_list CfwNatInstance#vpc_list}
  */
  readonly vpcList: string[];
}

export function cfwNatInstanceNewModeItemsToTerraform(struct?: CfwNatInstanceNewModeItemsOutputReference | CfwNatInstanceNewModeItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eips),
    vpc_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcList),
  }
}


export function cfwNatInstanceNewModeItemsToHclTerraform(struct?: CfwNatInstanceNewModeItemsOutputReference | CfwNatInstanceNewModeItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwNatInstanceNewModeItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwNatInstanceNewModeItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eips !== undefined) {
      hasAnyValues = true;
      internalValueResult.eips = this._eips;
    }
    if (this._vpcList !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcList = this._vpcList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwNatInstanceNewModeItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eips = undefined;
      this._vpcList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eips = value.eips;
      this._vpcList = value.vpcList;
    }
  }

  // eips - computed: false, optional: false, required: true
  private _eips?: string[]; 
  public get eips() {
    return cdktf.Fn.tolist(this.getListAttribute('eips'));
  }
  public set eips(value: string[]) {
    this._eips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipsInput() {
    return this._eips;
  }

  // vpc_list - computed: false, optional: false, required: true
  private _vpcList?: string[]; 
  public get vpcList() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_list'));
  }
  public set vpcList(value: string[]) {
    this._vpcList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcListInput() {
    return this._vpcList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance tencentcloud_cfw_nat_instance}
*/
export class CfwNatInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_nat_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwNatInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwNatInstance to import
  * @param importFromId The id of the existing CfwNatInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwNatInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_nat_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cfw_nat_instance tencentcloud_cfw_nat_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwNatInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CfwNatInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_nat_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crossAZone = config.crossAZone;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._natGwList = config.natGwList;
    this._width = config.width;
    this._zoneSet = config.zoneSet;
    this._newModeItems.internalValue = config.newModeItems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cross_a_zone - computed: false, optional: true, required: false
  private _crossAZone?: number; 
  public get crossAZone() {
    return this.getNumberAttribute('cross_a_zone');
  }
  public set crossAZone(value: number) {
    this._crossAZone = value;
  }
  public resetCrossAZone() {
    this._crossAZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAZoneInput() {
    return this._crossAZone;
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

  // mode - computed: false, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // nat_gw_list - computed: false, optional: true, required: false
  private _natGwList?: string[]; 
  public get natGwList() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_gw_list'));
  }
  public set natGwList(value: string[]) {
    this._natGwList = value;
  }
  public resetNatGwList() {
    this._natGwList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGwListInput() {
    return this._natGwList;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // zone_set - computed: false, optional: false, required: true
  private _zoneSet?: string[]; 
  public get zoneSet() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_set'));
  }
  public set zoneSet(value: string[]) {
    this._zoneSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSetInput() {
    return this._zoneSet;
  }

  // new_mode_items - computed: false, optional: true, required: false
  private _newModeItems = new CfwNatInstanceNewModeItemsOutputReference(this, "new_mode_items");
  public get newModeItems() {
    return this._newModeItems;
  }
  public putNewModeItems(value: CfwNatInstanceNewModeItems) {
    this._newModeItems.internalValue = value;
  }
  public resetNewModeItems() {
    this._newModeItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newModeItemsInput() {
    return this._newModeItems.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_a_zone: cdktf.numberToTerraform(this._crossAZone),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.numberToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      nat_gw_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natGwList),
      width: cdktf.numberToTerraform(this._width),
      zone_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneSet),
      new_mode_items: cfwNatInstanceNewModeItemsToTerraform(this._newModeItems.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_a_zone: {
        value: cdktf.numberToHclTerraform(this._crossAZone),
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
      mode: {
        value: cdktf.numberToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gw_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natGwList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      new_mode_items: {
        value: cfwNatInstanceNewModeItemsToHclTerraform(this._newModeItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwNatInstanceNewModeItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
