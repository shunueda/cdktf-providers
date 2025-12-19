// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortZoneServiceVirtualhostsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#id DdosDstZonePortZoneServiceVirtualhostsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#port_num DdosDstZonePortZoneServiceVirtualhostsA#port_num}
  */
  readonly portNum: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#protocol DdosDstZonePortZoneServiceVirtualhostsA#protocol}
  */
  readonly protocol: string;
  /**
  * enable creation of source entries for all virtualhosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#source_tracking_all DdosDstZonePortZoneServiceVirtualhostsA#source_tracking_all}
  */
  readonly sourceTrackingAll?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#uuid DdosDstZonePortZoneServiceVirtualhostsA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'configuration': configure virtualhost based mitigation for ssl services;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#vhosts_config DdosDstZonePortZoneServiceVirtualhostsA#vhosts_config}
  */
  readonly vhostsConfig: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#zone_name DdosDstZonePortZoneServiceVirtualhostsA#zone_name}
  */
  readonly zoneName: string;
  /**
  * virtualhost_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#virtualhost_list DdosDstZonePortZoneServiceVirtualhostsA#virtualhost_list}
  */
  readonly virtualhostList?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA[] | cdktf.IResolvable;
}
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgA {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#glid DdosDstZonePortZoneServiceVirtualhostsA#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#glid_action DdosDstZonePortZoneServiceVirtualhostsA#glid_action}
  */
  readonly glidAction?: string;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgA): any {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgA | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgA | undefined) {
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
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateA {
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#ssl_l4 DdosDstZonePortZoneServiceVirtualhostsA#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#tcp DdosDstZonePortZoneServiceVirtualhostsA#tcp}
  */
  readonly tcp?: string;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateA): any {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateA | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateA | undefined) {
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
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA {
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#glid_action DdosDstZonePortZoneServiceVirtualhostsA#glid_action}
  */
  readonly glidAction?: string;
  /**
  * '0': Default policy level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#level_num DdosDstZonePortZoneServiceVirtualhostsA#level_num}
  */
  readonly levelNum: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#src_default_glid DdosDstZonePortZoneServiceVirtualhostsA#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#user_tag DdosDstZonePortZoneServiceVirtualhostsA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#uuid DdosDstZonePortZoneServiceVirtualhostsA#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#zone_template DdosDstZonePortZoneServiceVirtualhostsA#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateA;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable): any {
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
    zone_template: ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable): any {
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
      value: ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA | cdktf.IResolvable | undefined) {
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
  private _zoneTemplate = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateAOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListZoneTemplateA) {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAOutputReference {
    return new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA {
  /**
  * SNI String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#host_match_string DdosDstZonePortZoneServiceVirtualhostsA#host_match_string}
  */
  readonly hostMatchString?: string;
  /**
  * 'contains': match servername extension when contains this string; 'ends-with': match servername extension when ends with this string; 'equals': match servername extension when equals this string; 'starts-with': match servername extension when starts with this string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#match_type DdosDstZonePortZoneServiceVirtualhostsA#match_type}
  */
  readonly matchType?: string;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_match_string: cdktf.stringToTerraform(struct!.hostMatchString),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA | cdktf.IResolvable): any {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA | cdktf.IResolvable | undefined) {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAOutputReference {
    return new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#deny DdosDstZonePortZoneServiceVirtualhostsA#deny}
  */
  readonly deny?: number;
  /**
  * Class List to match servername (AC type Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#servername_list DdosDstZonePortZoneServiceVirtualhostsA#servername_list}
  */
  readonly servernameList?: string;
  /**
  * Match any SNI extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#servername_match_any DdosDstZonePortZoneServiceVirtualhostsA#servername_match_any}
  */
  readonly servernameMatchAny?: number;
  /**
  * Match when there is no SNI extension found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#servername_no_sni DdosDstZonePortZoneServiceVirtualhostsA#servername_no_sni}
  */
  readonly servernameNoSni?: number;
  /**
  * 'follow': enable creation of source entries when source-tracking-all is enabled (default); 'enable': enable creation of source entries on this virtualhost; 'disable': disable creation of source entries on this virtualhost;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#source_tracking DdosDstZonePortZoneServiceVirtualhostsA#source_tracking}
  */
  readonly sourceTracking?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#user_tag DdosDstZonePortZoneServiceVirtualhostsA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#uuid DdosDstZonePortZoneServiceVirtualhostsA#uuid}
  */
  readonly uuid?: string;
  /**
  * name for virtualhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#vhost DdosDstZonePortZoneServiceVirtualhostsA#vhost}
  */
  readonly vhost: string;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#glid_cfg DdosDstZonePortZoneServiceVirtualhostsA#glid_cfg}
  */
  readonly glidCfg?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgA;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#level_list DdosDstZonePortZoneServiceVirtualhostsA#level_list}
  */
  readonly levelList?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA[] | cdktf.IResolvable;
  /**
  * servername block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#servername DdosDstZonePortZoneServiceVirtualhostsA#servername}
  */
  readonly servername?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA[] | cdktf.IResolvable;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    servername_list: cdktf.stringToTerraform(struct!.servernameList),
    servername_match_any: cdktf.numberToTerraform(struct!.servernameMatchAny),
    servername_no_sni: cdktf.numberToTerraform(struct!.servernameNoSni),
    source_tracking: cdktf.stringToTerraform(struct!.sourceTracking),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vhost: cdktf.stringToTerraform(struct!.vhost),
    glid_cfg: ddosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAToTerraform(struct!.glidCfg),
    level_list: cdktf.listMapper(ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAToTerraform, true)(struct!.levelList),
    servername: cdktf.listMapper(ddosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAToTerraform, true)(struct!.servername),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA | cdktf.IResolvable): any {
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
    servername_no_sni: {
      value: cdktf.numberToHclTerraform(struct!.servernameNoSni),
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
      value: ddosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAToHclTerraform(struct!.glidCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAList",
    },
    level_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAToHclTerraform, true)(struct!.levelList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAList",
    },
    servername: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAToHclTerraform, true)(struct!.servername),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA | cdktf.IResolvable | undefined {
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
    if (this._servernameNoSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.servernameNoSni = this._servernameNoSni;
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._servernameList = undefined;
      this._servernameMatchAny = undefined;
      this._servernameNoSni = undefined;
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
      this._servernameNoSni = value.servernameNoSni;
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

  // servername_no_sni - computed: false, optional: true, required: false
  private _servernameNoSni?: number; 
  public get servernameNoSni() {
    return this.getNumberAttribute('servername_no_sni');
  }
  public set servernameNoSni(value: number) {
    this._servernameNoSni = value;
  }
  public resetServernameNoSni() {
    this._servernameNoSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameNoSniInput() {
    return this._servernameNoSni;
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
  private _glidCfg = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgAOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListGlidCfgA) {
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
  private _levelList = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructAList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListLevelListStructA[] | cdktf.IResolvable) {
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
  private _servername = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameAList(this, "servername", false);
  public get servername() {
    return this._servername;
  }
  public putServername(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListServernameA[] | cdktf.IResolvable) {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAOutputReference {
    return new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts thunder_ddos_dst_zone_port_zone_service_virtualhosts}
*/
export class DdosDstZonePortZoneServiceVirtualhostsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_virtualhosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortZoneServiceVirtualhostsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortZoneServiceVirtualhostsA to import
  * @param importFromId The id of the existing DdosDstZonePortZoneServiceVirtualhostsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortZoneServiceVirtualhostsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_virtualhosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts thunder_ddos_dst_zone_port_zone_service_virtualhosts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortZoneServiceVirtualhostsAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortZoneServiceVirtualhostsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_virtualhosts',
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
    this._portNum = config.portNum;
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
  private _virtualhostList = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAList(this, "virtualhost_list", false);
  public get virtualhostList() {
    return this._virtualhostList;
  }
  public putVirtualhostList(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructA[] | cdktf.IResolvable) {
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
      port_num: cdktf.stringToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      source_tracking_all: cdktf.numberToTerraform(this._sourceTrackingAll),
      uuid: cdktf.stringToTerraform(this._uuid),
      vhosts_config: cdktf.stringToTerraform(this._vhostsConfig),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      virtualhost_list: cdktf.listMapper(ddosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAToTerraform, true)(this._virtualhostList.internalValue),
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
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAToHclTerraform, true)(this._virtualhostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
