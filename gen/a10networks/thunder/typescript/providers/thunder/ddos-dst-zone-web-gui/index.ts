// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneWebGuiAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate it after learning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#activated_after_learning DdosDstZoneWebGuiA#activated_after_learning}
  */
  readonly activatedAfterLearning?: number;
  /**
  * Configure create time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#create_time DdosDstZoneWebGuiA#create_time}
  */
  readonly createTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#id DdosDstZoneWebGuiA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure modify time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#modify_time DdosDstZoneWebGuiA#modify_time}
  */
  readonly modifyTime?: string;
  /**
  * '5': Low; '3': Medium; '1.5': High;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#sensitivity DdosDstZoneWebGuiA#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * 'newly': newly; 'learning': learning; 'learned': learned; 'activated': activated;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#status DdosDstZoneWebGuiA#status}
  */
  readonly status?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#uuid DdosDstZoneWebGuiA#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#zone_name DdosDstZoneWebGuiA#zone_name}
  */
  readonly zoneName: string;
  /**
  * learning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#learning DdosDstZoneWebGuiA#learning}
  */
  readonly learning?: DdosDstZoneWebGuiLearningA;
  /**
  * protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#protection DdosDstZoneWebGuiA#protection}
  */
  readonly protection?: DdosDstZoneWebGuiProtectionA;
}
export interface DdosDstZoneWebGuiLearningA {
  /**
  * '1minute': 1 minute; '6hour': 6 hours; '12hour': 12 hours; '24hour': 24 hours; '7day': 7 days;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#duration DdosDstZoneWebGuiA#duration}
  */
  readonly duration?: string;
  /**
  * Configure learning starting time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#starting_time DdosDstZoneWebGuiA#starting_time}
  */
  readonly startingTime?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#uuid DdosDstZoneWebGuiA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiLearningAToTerraform(struct?: DdosDstZoneWebGuiLearningAOutputReference | DdosDstZoneWebGuiLearningA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    starting_time: cdktf.stringToTerraform(struct!.startingTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiLearningAToHclTerraform(struct?: DdosDstZoneWebGuiLearningAOutputReference | DdosDstZoneWebGuiLearningA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_time: {
      value: cdktf.stringToHclTerraform(struct!.startingTime),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiLearningAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiLearningA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingTime = this._startingTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiLearningA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._startingTime = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._startingTime = value.startingTime;
      this._uuid = value.uuid;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // starting_time - computed: false, optional: true, required: false
  private _startingTime?: string; 
  public get startingTime() {
    return this.getStringAttribute('starting_time');
  }
  public set startingTime(value: string) {
    this._startingTime = value;
  }
  public resetStartingTime() {
    this._startingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingTimeInput() {
    return this._startingTime;
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
}
export interface DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#pbe DdosDstZoneWebGuiA#pbe}
  */
  readonly pbe?: string;
  /**
  * 'icmp-v4': ip-proto icmp-v4; 'icmp-v6': ip-proto icmp-v6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#protocol DdosDstZoneWebGuiA#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#user_tag DdosDstZoneWebGuiA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#uuid DdosDstZoneWebGuiA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructAToTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructAToHclTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
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
}

export class DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructAOutputReference {
    return new DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtectionIpProtoA {
  /**
  * proto_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#proto_name_list DdosDstZoneWebGuiA#proto_name_list}
  */
  readonly protoNameList?: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA[] | cdktf.IResolvable;
}

export function ddosDstZoneWebGuiProtectionIpProtoAToTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoAOutputReference | DdosDstZoneWebGuiProtectionIpProtoA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto_name_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructAToTerraform, true)(struct!.protoNameList),
  }
}


export function ddosDstZoneWebGuiProtectionIpProtoAToHclTerraform(struct?: DdosDstZoneWebGuiProtectionIpProtoAOutputReference | DdosDstZoneWebGuiProtectionIpProtoA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto_name_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionIpProtoProtoNameListStructAToHclTerraform, true)(struct!.protoNameList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionIpProtoAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiProtectionIpProtoA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protoNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoNameList = this._protoNameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionIpProtoA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protoNameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protoNameList.internalValue = value.protoNameList;
    }
  }

  // proto_name_list - computed: false, optional: true, required: false
  private _protoNameList = new DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructAList(this, "proto_name_list", false);
  public get protoNameList() {
    return this._protoNameList;
  }
  public putProtoNameList(value: DdosDstZoneWebGuiProtectionIpProtoProtoNameListStructA[] | cdktf.IResolvable) {
    this._protoNameList.internalValue = value;
  }
  public resetProtoNameList() {
    this._protoNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoNameListInput() {
    return this._protoNameList.internalValue;
  }
}
export interface DdosDstZoneWebGuiProtectionPortZoneServiceListStructA {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#pbe DdosDstZoneWebGuiA#pbe}
  */
  readonly pbe?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#port_num DdosDstZoneWebGuiA#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#protocol DdosDstZoneWebGuiA#protocol}
  */
  readonly protocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#uuid DdosDstZoneWebGuiA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionPortZoneServiceListStructAToTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionPortZoneServiceListStructAToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionPortZoneServiceListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPortZoneServiceListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
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
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionPortZoneServiceListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionPortZoneServiceListStructAOutputReference {
    return new DdosDstZoneWebGuiProtectionPortZoneServiceListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#pbe DdosDstZoneWebGuiA#pbe}
  */
  readonly pbe?: string;
  /**
  * 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#port_other DdosDstZoneWebGuiA#port_other}
  */
  readonly portOther: string;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#protocol DdosDstZoneWebGuiA#protocol}
  */
  readonly protocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#uuid DdosDstZoneWebGuiA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAToTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    port_other: cdktf.stringToTerraform(struct!.portOther),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_other: {
      value: cdktf.stringToHclTerraform(struct!.portOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._portOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOther = this._portOther;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._portOther = undefined;
      this._protocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._portOther = value.portOther;
      this._protocol = value.protocol;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
  }

  // port_other - computed: false, optional: false, required: true
  private _portOther?: string; 
  public get portOther() {
    return this.getStringAttribute('port_other');
  }
  public set portOther(value: string) {
    this._portOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portOtherInput() {
    return this._portOther;
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
}

export class DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAOutputReference {
    return new DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtectionPortA {
  /**
  * zone_service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#zone_service_list DdosDstZoneWebGuiA#zone_service_list}
  */
  readonly zoneServiceList?: DdosDstZoneWebGuiProtectionPortZoneServiceListStructA[] | cdktf.IResolvable;
  /**
  * zone_service_other_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#zone_service_other_list DdosDstZoneWebGuiA#zone_service_other_list}
  */
  readonly zoneServiceOtherList?: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA[] | cdktf.IResolvable;
}

export function ddosDstZoneWebGuiProtectionPortAToTerraform(struct?: DdosDstZoneWebGuiProtectionPortAOutputReference | DdosDstZoneWebGuiProtectionPortA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_service_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionPortZoneServiceListStructAToTerraform, true)(struct!.zoneServiceList),
    zone_service_other_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAToTerraform, true)(struct!.zoneServiceOtherList),
  }
}


export function ddosDstZoneWebGuiProtectionPortAToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortAOutputReference | DdosDstZoneWebGuiProtectionPortA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zone_service_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionPortZoneServiceListStructAToHclTerraform, true)(struct!.zoneServiceList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortZoneServiceListStructAList",
    },
    zone_service_other_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAToHclTerraform, true)(struct!.zoneServiceOtherList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiProtectionPortA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneServiceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneServiceList = this._zoneServiceList?.internalValue;
    }
    if (this._zoneServiceOtherList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneServiceOtherList = this._zoneServiceOtherList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPortA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zoneServiceList.internalValue = undefined;
      this._zoneServiceOtherList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zoneServiceList.internalValue = value.zoneServiceList;
      this._zoneServiceOtherList.internalValue = value.zoneServiceOtherList;
    }
  }

  // zone_service_list - computed: false, optional: true, required: false
  private _zoneServiceList = new DdosDstZoneWebGuiProtectionPortZoneServiceListStructAList(this, "zone_service_list", false);
  public get zoneServiceList() {
    return this._zoneServiceList;
  }
  public putZoneServiceList(value: DdosDstZoneWebGuiProtectionPortZoneServiceListStructA[] | cdktf.IResolvable) {
    this._zoneServiceList.internalValue = value;
  }
  public resetZoneServiceList() {
    this._zoneServiceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneServiceListInput() {
    return this._zoneServiceList.internalValue;
  }

  // zone_service_other_list - computed: false, optional: true, required: false
  private _zoneServiceOtherList = new DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructAList(this, "zone_service_other_list", false);
  public get zoneServiceOtherList() {
    return this._zoneServiceOtherList;
  }
  public putZoneServiceOtherList(value: DdosDstZoneWebGuiProtectionPortZoneServiceOtherListStructA[] | cdktf.IResolvable) {
    this._zoneServiceOtherList.internalValue = value;
  }
  public resetZoneServiceOtherList() {
    this._zoneServiceOtherList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneServiceOtherListInput() {
    return this._zoneServiceOtherList.internalValue;
  }
}
export interface DdosDstZoneWebGuiProtectionPortRangeListStructA {
  /**
  * Peak Bandwidth Expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#pbe DdosDstZoneWebGuiA#pbe}
  */
  readonly pbe?: string;
  /**
  * Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#port_range_end DdosDstZoneWebGuiA#port_range_end}
  */
  readonly portRangeEnd: number;
  /**
  * Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#port_range_start DdosDstZoneWebGuiA#port_range_start}
  */
  readonly portRangeStart: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#protocol DdosDstZoneWebGuiA#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#user_tag DdosDstZoneWebGuiA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#uuid DdosDstZoneWebGuiA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneWebGuiProtectionPortRangeListStructAToTerraform(struct?: DdosDstZoneWebGuiProtectionPortRangeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbe: cdktf.stringToTerraform(struct!.pbe),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneWebGuiProtectionPortRangeListStructAToHclTerraform(struct?: DdosDstZoneWebGuiProtectionPortRangeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbe: {
      value: cdktf.stringToHclTerraform(struct!.pbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionPortRangeListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZoneWebGuiProtectionPortRangeListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbe = this._pbe;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionPortRangeListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pbe = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pbe = value.pbe;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // pbe - computed: false, optional: true, required: false
  private _pbe?: string; 
  public get pbe() {
    return this.getStringAttribute('pbe');
  }
  public set pbe(value: string) {
    this._pbe = value;
  }
  public resetPbe() {
    this._pbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbeInput() {
    return this._pbe;
  }

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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
}

export class DdosDstZoneWebGuiProtectionPortRangeListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneWebGuiProtectionPortRangeListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZoneWebGuiProtectionPortRangeListStructAOutputReference {
    return new DdosDstZoneWebGuiProtectionPortRangeListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneWebGuiProtectionA {
  /**
  * ip_proto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#ip_proto DdosDstZoneWebGuiA#ip_proto}
  */
  readonly ipProto?: DdosDstZoneWebGuiProtectionIpProtoA;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#port DdosDstZoneWebGuiA#port}
  */
  readonly port?: DdosDstZoneWebGuiProtectionPortA;
  /**
  * port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#port_range_list DdosDstZoneWebGuiA#port_range_list}
  */
  readonly portRangeList?: DdosDstZoneWebGuiProtectionPortRangeListStructA[] | cdktf.IResolvable;
}

export function ddosDstZoneWebGuiProtectionAToTerraform(struct?: DdosDstZoneWebGuiProtectionAOutputReference | DdosDstZoneWebGuiProtectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_proto: ddosDstZoneWebGuiProtectionIpProtoAToTerraform(struct!.ipProto),
    port: ddosDstZoneWebGuiProtectionPortAToTerraform(struct!.port),
    port_range_list: cdktf.listMapper(ddosDstZoneWebGuiProtectionPortRangeListStructAToTerraform, true)(struct!.portRangeList),
  }
}


export function ddosDstZoneWebGuiProtectionAToHclTerraform(struct?: DdosDstZoneWebGuiProtectionAOutputReference | DdosDstZoneWebGuiProtectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_proto: {
      value: ddosDstZoneWebGuiProtectionIpProtoAToHclTerraform(struct!.ipProto),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionIpProtoAList",
    },
    port: {
      value: ddosDstZoneWebGuiProtectionPortAToHclTerraform(struct!.port),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortAList",
    },
    port_range_list: {
      value: cdktf.listMapperHcl(ddosDstZoneWebGuiProtectionPortRangeListStructAToHclTerraform, true)(struct!.portRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneWebGuiProtectionPortRangeListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneWebGuiProtectionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneWebGuiProtectionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProto = this._ipProto?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._portRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeList = this._portRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneWebGuiProtectionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipProto.internalValue = undefined;
      this._port.internalValue = undefined;
      this._portRangeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipProto.internalValue = value.ipProto;
      this._port.internalValue = value.port;
      this._portRangeList.internalValue = value.portRangeList;
    }
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto = new DdosDstZoneWebGuiProtectionIpProtoAOutputReference(this, "ip_proto");
  public get ipProto() {
    return this._ipProto;
  }
  public putIpProto(value: DdosDstZoneWebGuiProtectionIpProtoA) {
    this._ipProto.internalValue = value;
  }
  public resetIpProto() {
    this._ipProto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DdosDstZoneWebGuiProtectionPortAOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DdosDstZoneWebGuiProtectionPortA) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // port_range_list - computed: false, optional: true, required: false
  private _portRangeList = new DdosDstZoneWebGuiProtectionPortRangeListStructAList(this, "port_range_list", false);
  public get portRangeList() {
    return this._portRangeList;
  }
  public putPortRangeList(value: DdosDstZoneWebGuiProtectionPortRangeListStructA[] | cdktf.IResolvable) {
    this._portRangeList.internalValue = value;
  }
  public resetPortRangeList() {
    this._portRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeListInput() {
    return this._portRangeList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui thunder_ddos_dst_zone_web_gui}
*/
export class DdosDstZoneWebGuiA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_web_gui";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneWebGuiA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneWebGuiA to import
  * @param importFromId The id of the existing DdosDstZoneWebGuiA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneWebGuiA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_web_gui", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_web_gui thunder_ddos_dst_zone_web_gui} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneWebGuiAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneWebGuiAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_web_gui',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activatedAfterLearning = config.activatedAfterLearning;
    this._createTime = config.createTime;
    this._id = config.id;
    this._modifyTime = config.modifyTime;
    this._sensitivity = config.sensitivity;
    this._status = config.status;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._learning.internalValue = config.learning;
    this._protection.internalValue = config.protection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_after_learning - computed: false, optional: true, required: false
  private _activatedAfterLearning?: number; 
  public get activatedAfterLearning() {
    return this.getNumberAttribute('activated_after_learning');
  }
  public set activatedAfterLearning(value: number) {
    this._activatedAfterLearning = value;
  }
  public resetActivatedAfterLearning() {
    this._activatedAfterLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedAfterLearningInput() {
    return this._activatedAfterLearning;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // modify_time - computed: false, optional: true, required: false
  private _modifyTime?: string; 
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }
  public set modifyTime(value: string) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // learning - computed: false, optional: true, required: false
  private _learning = new DdosDstZoneWebGuiLearningAOutputReference(this, "learning");
  public get learning() {
    return this._learning;
  }
  public putLearning(value: DdosDstZoneWebGuiLearningA) {
    this._learning.internalValue = value;
  }
  public resetLearning() {
    this._learning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningInput() {
    return this._learning.internalValue;
  }

  // protection - computed: false, optional: true, required: false
  private _protection = new DdosDstZoneWebGuiProtectionAOutputReference(this, "protection");
  public get protection() {
    return this._protection;
  }
  public putProtection(value: DdosDstZoneWebGuiProtectionA) {
    this._protection.internalValue = value;
  }
  public resetProtection() {
    this._protection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activated_after_learning: cdktf.numberToTerraform(this._activatedAfterLearning),
      create_time: cdktf.stringToTerraform(this._createTime),
      id: cdktf.stringToTerraform(this._id),
      modify_time: cdktf.stringToTerraform(this._modifyTime),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      learning: ddosDstZoneWebGuiLearningAToTerraform(this._learning.internalValue),
      protection: ddosDstZoneWebGuiProtectionAToTerraform(this._protection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activated_after_learning: {
        value: cdktf.numberToHclTerraform(this._activatedAfterLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
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
      modify_time: {
        value: cdktf.stringToHclTerraform(this._modifyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity: {
        value: cdktf.stringToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      learning: {
        value: ddosDstZoneWebGuiLearningAToHclTerraform(this._learning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneWebGuiLearningAList",
      },
      protection: {
        value: ddosDstZoneWebGuiProtectionAToHclTerraform(this._protection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneWebGuiProtectionAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
