// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortRangeVirtualhostsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#id DdosDstZonePortRangeVirtualhostsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#port_range_end DdosDstZonePortRangeVirtualhostsA#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#port_range_start DdosDstZonePortRangeVirtualhostsA#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#protocol DdosDstZonePortRangeVirtualhostsA#protocol}
  */
  readonly protocol: string;
  /**
  * enables creation of source entries for all virtualhosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#source_tracking_all DdosDstZonePortRangeVirtualhostsA#source_tracking_all}
  */
  readonly sourceTrackingAll?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#uuid DdosDstZonePortRangeVirtualhostsA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'configuration': configure virtualhost based mitigation for ssl services;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#vhosts_config DdosDstZonePortRangeVirtualhostsA#vhosts_config}
  */
  readonly vhostsConfig: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#zone_name DdosDstZonePortRangeVirtualhostsA#zone_name}
  */
  readonly zoneName: string;
  /**
  * virtualhost_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#virtualhost_list DdosDstZonePortRangeVirtualhostsA#virtualhost_list}
  */
  readonly virtualhostList?: DdosDstZonePortRangeVirtualhostsVirtualhostListStructA[] | cdktf.IResolvable;
}
export interface DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgA {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#glid DdosDstZonePortRangeVirtualhostsA#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#glid_action DdosDstZonePortRangeVirtualhostsA#glid_action}
  */
  readonly glidAction?: string;
}

export function ddosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAToTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAOutputReference | DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
  }
}


export function ddosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAToHclTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAOutputReference | DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glid = undefined;
      this._glidAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
    }
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }
}
export interface DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateA {
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#ssl_l4 DdosDstZonePortRangeVirtualhostsA#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#tcp DdosDstZonePortRangeVirtualhostsA#tcp}
  */
  readonly tcp?: string;
}

export function ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAToTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference | DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
  }
}


export function ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAToHclTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference | DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslL4 = undefined;
      this._tcp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
    }
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }
}
export interface DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA {
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#glid_action DdosDstZonePortRangeVirtualhostsA#glid_action}
  */
  readonly glidAction?: string;
  /**
  * '0': Default policy level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#level_num DdosDstZonePortRangeVirtualhostsA#level_num}
  */
  readonly levelNum: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#src_default_glid DdosDstZonePortRangeVirtualhostsA#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#user_tag DdosDstZonePortRangeVirtualhostsA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#uuid DdosDstZonePortRangeVirtualhostsA#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#zone_template DdosDstZonePortRangeVirtualhostsA#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateA;
}

export function ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAToTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    level_num: cdktf.stringToTerraform(struct!.levelNum),
    src_default_glid: cdktf.stringToTerraform(struct!.srcDefaultGlid),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAToHclTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_num: {
      value: cdktf.stringToHclTerraform(struct!.levelNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_default_glid: {
      value: cdktf.stringToHclTerraform(struct!.srcDefaultGlid),
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
    zone_template: {
      value: ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._levelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNum = this._levelNum;
    }
    if (this._srcDefaultGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDefaultGlid = this._srcDefaultGlid;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glidAction = undefined;
      this._levelNum = undefined;
      this._srcDefaultGlid = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glidAction = value.glidAction;
      this._levelNum = value.levelNum;
      this._srcDefaultGlid = value.srcDefaultGlid;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
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

  // src_default_glid - computed: false, optional: true, required: false
  private _srcDefaultGlid?: string; 
  public get srcDefaultGlid() {
    return this.getStringAttribute('src_default_glid');
  }
  public set srcDefaultGlid(value: string) {
    this._srcDefaultGlid = value;
  }
  public resetSrcDefaultGlid() {
    this._srcDefaultGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDefaultGlidInput() {
    return this._srcDefaultGlid;
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

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListZoneTemplateA) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAOutputReference {
    return new DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA {
  /**
  * SNI String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#host_match_string DdosDstZonePortRangeVirtualhostsA#host_match_string}
  */
  readonly hostMatchString?: string;
  /**
  * 'contains': match servername extension when contains this string; 'ends-with': match servername extension when ends with this string; 'equals': match servername extension when equals this string; 'starts-with': match servername extension when starts with this string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#match_type DdosDstZonePortRangeVirtualhostsA#match_type}
  */
  readonly matchType?: string;
}

export function ddosDstZonePortRangeVirtualhostsVirtualhostListServernameAToTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_match_string: cdktf.stringToTerraform(struct!.hostMatchString),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function ddosDstZonePortRangeVirtualhostsVirtualhostListServernameAToHclTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_match_string: {
      value: cdktf.stringToHclTerraform(struct!.hostMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListServernameAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMatchString = this._hostMatchString;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostMatchString = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostMatchString = value.hostMatchString;
      this._matchType = value.matchType;
    }
  }

  // host_match_string - computed: false, optional: true, required: false
  private _hostMatchString?: string; 
  public get hostMatchString() {
    return this.getStringAttribute('host_match_string');
  }
  public set hostMatchString(value: string) {
    this._hostMatchString = value;
  }
  public resetHostMatchString() {
    this._hostMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMatchStringInput() {
    return this._hostMatchString;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListServernameAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeVirtualhostsVirtualhostListServernameAOutputReference {
    return new DdosDstZonePortRangeVirtualhostsVirtualhostListServernameAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortRangeVirtualhostsVirtualhostListStructA {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#deny DdosDstZonePortRangeVirtualhostsA#deny}
  */
  readonly deny?: number;
  /**
  * Class List to match servername (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#servername_list DdosDstZonePortRangeVirtualhostsA#servername_list}
  */
  readonly servernameList?: string;
  /**
  * Match when there is no SNI or other servernames are not matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#servername_match_any DdosDstZonePortRangeVirtualhostsA#servername_match_any}
  */
  readonly servernameMatchAny?: number;
  /**
  * 'follow': enable creation of source entries when source-tracking-all is enabled (default); 'enable': enable creation of source entries on this virtualhost; 'disable': disable creation of source entries on this virtualhost;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#source_tracking DdosDstZonePortRangeVirtualhostsA#source_tracking}
  */
  readonly sourceTracking?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#user_tag DdosDstZonePortRangeVirtualhostsA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#uuid DdosDstZonePortRangeVirtualhostsA#uuid}
  */
  readonly uuid?: string;
  /**
  * name for virtualhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#vhost DdosDstZonePortRangeVirtualhostsA#vhost}
  */
  readonly vhost: string;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#glid_cfg DdosDstZonePortRangeVirtualhostsA#glid_cfg}
  */
  readonly glidCfg?: DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgA;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#level_list DdosDstZonePortRangeVirtualhostsA#level_list}
  */
  readonly levelList?: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA[] | cdktf.IResolvable;
  /**
  * servername block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#servername DdosDstZonePortRangeVirtualhostsA#servername}
  */
  readonly servername?: DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA[] | cdktf.IResolvable;
}

export function ddosDstZonePortRangeVirtualhostsVirtualhostListStructAToTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    servername_list: cdktf.stringToTerraform(struct!.servernameList),
    servername_match_any: cdktf.numberToTerraform(struct!.servernameMatchAny),
    source_tracking: cdktf.stringToTerraform(struct!.sourceTracking),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vhost: cdktf.stringToTerraform(struct!.vhost),
    glid_cfg: ddosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAToTerraform(struct!.glidCfg),
    level_list: cdktf.listMapper(ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAToTerraform, true)(struct!.levelList),
    servername: cdktf.listMapper(ddosDstZonePortRangeVirtualhostsVirtualhostListServernameAToTerraform, true)(struct!.servername),
  }
}


export function ddosDstZonePortRangeVirtualhostsVirtualhostListStructAToHclTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servername_list: {
      value: cdktf.stringToHclTerraform(struct!.servernameList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servername_match_any: {
      value: cdktf.numberToHclTerraform(struct!.servernameMatchAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_tracking: {
      value: cdktf.stringToHclTerraform(struct!.sourceTracking),
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
    vhost: {
      value: cdktf.stringToHclTerraform(struct!.vhost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_cfg: {
      value: ddosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAToHclTerraform(struct!.glidCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAList",
    },
    level_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAToHclTerraform, true)(struct!.levelList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAList",
    },
    servername: {
      value: cdktf.listMapperHcl(ddosDstZonePortRangeVirtualhostsVirtualhostListServernameAToHclTerraform, true)(struct!.servername),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeVirtualhostsVirtualhostListServernameAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortRangeVirtualhostsVirtualhostListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._servernameList !== undefined) {
      hasAnyValues = true;
      internalValueResult.servernameList = this._servernameList;
    }
    if (this._servernameMatchAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.servernameMatchAny = this._servernameMatchAny;
    }
    if (this._sourceTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTracking = this._sourceTracking;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vhost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhost = this._vhost;
    }
    if (this._glidCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidCfg = this._glidCfg?.internalValue;
    }
    if (this._levelList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelList = this._levelList?.internalValue;
    }
    if (this._servername?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servername = this._servername?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeVirtualhostsVirtualhostListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._servernameList = undefined;
      this._servernameMatchAny = undefined;
      this._sourceTracking = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._vhost = undefined;
      this._glidCfg.internalValue = undefined;
      this._levelList.internalValue = undefined;
      this._servername.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._servernameList = value.servernameList;
      this._servernameMatchAny = value.servernameMatchAny;
      this._sourceTracking = value.sourceTracking;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._vhost = value.vhost;
      this._glidCfg.internalValue = value.glidCfg;
      this._levelList.internalValue = value.levelList;
      this._servername.internalValue = value.servername;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // servername_list - computed: false, optional: true, required: false
  private _servernameList?: string; 
  public get servernameList() {
    return this.getStringAttribute('servername_list');
  }
  public set servernameList(value: string) {
    this._servernameList = value;
  }
  public resetServernameList() {
    this._servernameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameListInput() {
    return this._servernameList;
  }

  // servername_match_any - computed: false, optional: true, required: false
  private _servernameMatchAny?: number; 
  public get servernameMatchAny() {
    return this.getNumberAttribute('servername_match_any');
  }
  public set servernameMatchAny(value: number) {
    this._servernameMatchAny = value;
  }
  public resetServernameMatchAny() {
    this._servernameMatchAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameMatchAnyInput() {
    return this._servernameMatchAny;
  }

  // source_tracking - computed: false, optional: true, required: false
  private _sourceTracking?: string; 
  public get sourceTracking() {
    return this.getStringAttribute('source_tracking');
  }
  public set sourceTracking(value: string) {
    this._sourceTracking = value;
  }
  public resetSourceTracking() {
    this._sourceTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTrackingInput() {
    return this._sourceTracking;
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

  // vhost - computed: false, optional: false, required: true
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgAOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZonePortRangeVirtualhostsVirtualhostListGlidCfgA) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructAList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZonePortRangeVirtualhostsVirtualhostListLevelListStructA[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // servername - computed: false, optional: true, required: false
  private _servername = new DdosDstZonePortRangeVirtualhostsVirtualhostListServernameAList(this, "servername", false);
  public get servername() {
    return this._servername;
  }
  public putServername(value: DdosDstZonePortRangeVirtualhostsVirtualhostListServernameA[] | cdktf.IResolvable) {
    this._servername.internalValue = value;
  }
  public resetServername() {
    this._servername.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername.internalValue;
  }
}

export class DdosDstZonePortRangeVirtualhostsVirtualhostListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortRangeVirtualhostsVirtualhostListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortRangeVirtualhostsVirtualhostListStructAOutputReference {
    return new DdosDstZonePortRangeVirtualhostsVirtualhostListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts thunder_ddos_dst_zone_port_range_virtualhosts}
*/
export class DdosDstZonePortRangeVirtualhostsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_range_virtualhosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortRangeVirtualhostsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortRangeVirtualhostsA to import
  * @param importFromId The id of the existing DdosDstZonePortRangeVirtualhostsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortRangeVirtualhostsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_range_virtualhosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts thunder_ddos_dst_zone_port_range_virtualhosts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortRangeVirtualhostsAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortRangeVirtualhostsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_range_virtualhosts',
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
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._protocol = config.protocol;
    this._sourceTrackingAll = config.sourceTrackingAll;
    this._uuid = config.uuid;
    this._vhostsConfig = config.vhostsConfig;
    this._zoneName = config.zoneName;
    this._virtualhostList.internalValue = config.virtualhostList;
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

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: string; 
  public get portRangeStart() {
    return this.getStringAttribute('port_range_start');
  }
  public set portRangeStart(value: string) {
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

  // source_tracking_all - computed: false, optional: true, required: false
  private _sourceTrackingAll?: number; 
  public get sourceTrackingAll() {
    return this.getNumberAttribute('source_tracking_all');
  }
  public set sourceTrackingAll(value: number) {
    this._sourceTrackingAll = value;
  }
  public resetSourceTrackingAll() {
    this._sourceTrackingAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTrackingAllInput() {
    return this._sourceTrackingAll;
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

  // vhosts_config - computed: false, optional: false, required: true
  private _vhostsConfig?: string; 
  public get vhostsConfig() {
    return this.getStringAttribute('vhosts_config');
  }
  public set vhostsConfig(value: string) {
    this._vhostsConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostsConfigInput() {
    return this._vhostsConfig;
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

  // virtualhost_list - computed: false, optional: true, required: false
  private _virtualhostList = new DdosDstZonePortRangeVirtualhostsVirtualhostListStructAList(this, "virtualhost_list", false);
  public get virtualhostList() {
    return this._virtualhostList;
  }
  public putVirtualhostList(value: DdosDstZonePortRangeVirtualhostsVirtualhostListStructA[] | cdktf.IResolvable) {
    this._virtualhostList.internalValue = value;
  }
  public resetVirtualhostList() {
    this._virtualhostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualhostListInput() {
    return this._virtualhostList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      source_tracking_all: cdktf.numberToTerraform(this._sourceTrackingAll),
      uuid: cdktf.stringToTerraform(this._uuid),
      vhosts_config: cdktf.stringToTerraform(this._vhostsConfig),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      virtualhost_list: cdktf.listMapper(ddosDstZonePortRangeVirtualhostsVirtualhostListStructAToTerraform, true)(this._virtualhostList.internalValue),
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
      port_range_end: {
        value: cdktf.stringToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_start: {
        value: cdktf.stringToHclTerraform(this._portRangeStart),
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
      source_tracking_all: {
        value: cdktf.numberToHclTerraform(this._sourceTrackingAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhosts_config: {
        value: cdktf.stringToHclTerraform(this._vhostsConfig),
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
      virtualhost_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortRangeVirtualhostsVirtualhostListStructAToHclTerraform, true)(this._virtualhostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortRangeVirtualhostsVirtualhostListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
