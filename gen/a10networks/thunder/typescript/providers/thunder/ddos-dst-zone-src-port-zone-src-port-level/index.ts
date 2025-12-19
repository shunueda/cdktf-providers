// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneSrcPortZoneSrcPortLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#id DdosDstZoneSrcPortZoneSrcPortLevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '0': Default policy level; '1': Policy level 1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#level_num DdosDstZoneSrcPortZoneSrcPortLevel#level_num}
  */
  readonly levelNum: string;
  /**
  * PortNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#port_num DdosDstZoneSrcPortZoneSrcPortLevel#port_num}
  */
  readonly portNum: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#protocol DdosDstZoneSrcPortZoneSrcPortLevel#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#user_tag DdosDstZoneSrcPortZoneSrcPortLevel#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#uuid DdosDstZoneSrcPortZoneSrcPortLevel#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#zone_name DdosDstZoneSrcPortZoneSrcPortLevel#zone_name}
  */
  readonly zoneName: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#indicator_list DdosDstZoneSrcPortZoneSrcPortLevel#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct[] | cdktf.IResolvable;
}
export interface DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct {
  /**
  * 'pkt-rate': rate of incoming packets; 'bit-rate': rate of incoming bits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#type DdosDstZoneSrcPortZoneSrcPortLevel#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#user_tag DdosDstZoneSrcPortZoneSrcPortLevel#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#uuid DdosDstZoneSrcPortZoneSrcPortLevel#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#zone_threshold_large_num DdosDstZoneSrcPortZoneSrcPortLevel#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold of the entire zone for the src-port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#zone_threshold_num DdosDstZoneSrcPortZoneSrcPortLevel#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
}

export function ddosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructToTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
  }
}


export function ddosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructToHclTerraform(struct?: DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }
}

export class DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructOutputReference {
    return new DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level thunder_ddos_dst_zone_src_port_zone_src_port_level}
*/
export class DdosDstZoneSrcPortZoneSrcPortLevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_src_port_zone_src_port_level";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneSrcPortZoneSrcPortLevel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneSrcPortZoneSrcPortLevel to import
  * @param importFromId The id of the existing DdosDstZoneSrcPortZoneSrcPortLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneSrcPortZoneSrcPortLevel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_src_port_zone_src_port_level", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_zone_src_port_level thunder_ddos_dst_zone_src_port_zone_src_port_level} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneSrcPortZoneSrcPortLevelConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneSrcPortZoneSrcPortLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_src_port_zone_src_port_level',
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
    this._levelNum = config.levelNum;
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._indicatorList.internalValue = config.indicatorList;
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

  // level_num - computed: false, optional: false, required: true
  private _levelNum?: string; 
  public get levelNum() {
    return this.getStringAttribute('level_num');
  }
  public set levelNum(value: string) {
    this._levelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumInput() {
    return this._levelNum;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: string; 
  public get portNum() {
    return this.getStringAttribute('port_num');
  }
  public set portNum(value: string) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      level_num: cdktf.stringToTerraform(this._levelNum),
      port_num: cdktf.stringToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      indicator_list: cdktf.listMapper(ddosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructToTerraform, true)(this._indicatorList.internalValue),
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
      level_num: {
        value: cdktf.stringToHclTerraform(this._levelNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_num: {
        value: cdktf.stringToHclTerraform(this._portNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indicator_list: {
        value: cdktf.listMapperHcl(ddosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructToHclTerraform, true)(this._indicatorList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortZoneSrcPortLevelIndicatorListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
