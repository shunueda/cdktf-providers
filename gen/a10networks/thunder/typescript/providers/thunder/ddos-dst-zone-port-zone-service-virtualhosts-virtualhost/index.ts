// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#deny DdosDstZonePortZoneServiceVirtualhostsVirtualhost#deny}
  */
  readonly deny?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#id DdosDstZonePortZoneServiceVirtualhostsVirtualhost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#port_num DdosDstZonePortZoneServiceVirtualhostsVirtualhost#port_num}
  */
  readonly portNum: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#protocol DdosDstZonePortZoneServiceVirtualhostsVirtualhost#protocol}
  */
  readonly protocol: string;
  /**
  * Class List to match servername (AC type Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#servername_list DdosDstZonePortZoneServiceVirtualhostsVirtualhost#servername_list}
  */
  readonly servernameList?: string;
  /**
  * Match any SNI extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#servername_match_any DdosDstZonePortZoneServiceVirtualhostsVirtualhost#servername_match_any}
  */
  readonly servernameMatchAny?: number;
  /**
  * Match when there is no SNI extension found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#servername_no_sni DdosDstZonePortZoneServiceVirtualhostsVirtualhost#servername_no_sni}
  */
  readonly servernameNoSni?: number;
  /**
  * 'follow': enable creation of source entries when source-tracking-all is enabled (default); 'enable': enable creation of source entries on this virtualhost; 'disable': disable creation of source entries on this virtualhost;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#source_tracking DdosDstZonePortZoneServiceVirtualhostsVirtualhost#source_tracking}
  */
  readonly sourceTracking?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#user_tag DdosDstZonePortZoneServiceVirtualhostsVirtualhost#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#uuid DdosDstZonePortZoneServiceVirtualhostsVirtualhost#uuid}
  */
  readonly uuid?: string;
  /**
  * name for virtualhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#vhost DdosDstZonePortZoneServiceVirtualhostsVirtualhost#vhost}
  */
  readonly vhost: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#zone_name DdosDstZonePortZoneServiceVirtualhostsVirtualhost#zone_name}
  */
  readonly zoneName: string;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#glid_cfg DdosDstZonePortZoneServiceVirtualhostsVirtualhost#glid_cfg}
  */
  readonly glidCfg?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfg;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#level_list DdosDstZonePortZoneServiceVirtualhostsVirtualhost#level_list}
  */
  readonly levelList?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct[] | cdktf.IResolvable;
  /**
  * servername block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#servername DdosDstZonePortZoneServiceVirtualhostsVirtualhost#servername}
  */
  readonly servername?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername[] | cdktf.IResolvable;
}
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfg {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#glid DdosDstZonePortZoneServiceVirtualhostsVirtualhost#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#glid_action DdosDstZonePortZoneServiceVirtualhostsVirtualhost#glid_action}
  */
  readonly glidAction?: string;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfg): any {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfg | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfg | undefined) {
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
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplate {
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#ssl_l4 DdosDstZonePortZoneServiceVirtualhostsVirtualhost#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#tcp DdosDstZonePortZoneServiceVirtualhostsVirtualhost#tcp}
  */
  readonly tcp?: string;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateOutputReference | DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplate): any {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplate | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplate | undefined) {
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
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct {
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#glid_action DdosDstZonePortZoneServiceVirtualhostsVirtualhost#glid_action}
  */
  readonly glidAction?: string;
  /**
  * '0': Default policy level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#level_num DdosDstZonePortZoneServiceVirtualhostsVirtualhost#level_num}
  */
  readonly levelNum: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#src_default_glid DdosDstZonePortZoneServiceVirtualhostsVirtualhost#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#user_tag DdosDstZonePortZoneServiceVirtualhostsVirtualhost#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#uuid DdosDstZonePortZoneServiceVirtualhostsVirtualhost#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#zone_template DdosDstZonePortZoneServiceVirtualhostsVirtualhost#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplate;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct | cdktf.IResolvable): any {
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
    zone_template: ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct | cdktf.IResolvable): any {
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
      value: ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct | cdktf.IResolvable | undefined) {
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
  private _zoneTemplate = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListZoneTemplate) {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructOutputReference {
    return new DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername {
  /**
  * SNI String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#host_match_string DdosDstZonePortZoneServiceVirtualhostsVirtualhost#host_match_string}
  */
  readonly hostMatchString?: string;
  /**
  * 'contains': match servername extension when contains this string; 'ends-with': match servername extension when ends with this string; 'equals': match servername extension when equals this string; 'starts-with': match servername extension when starts with this string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#match_type DdosDstZonePortZoneServiceVirtualhostsVirtualhost#match_type}
  */
  readonly matchType?: string;
}

export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostServernameToTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_match_string: cdktf.stringToTerraform(struct!.hostMatchString),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function ddosDstZonePortZoneServiceVirtualhostsVirtualhostServernameToHclTerraform(struct?: DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername | cdktf.IResolvable): any {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostServernameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername | cdktf.IResolvable | undefined) {
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

export class DdosDstZonePortZoneServiceVirtualhostsVirtualhostServernameList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceVirtualhostsVirtualhostServernameOutputReference {
    return new DdosDstZonePortZoneServiceVirtualhostsVirtualhostServernameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost thunder_ddos_dst_zone_port_zone_service_virtualhosts_virtualhost}
*/
export class DdosDstZonePortZoneServiceVirtualhostsVirtualhost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_virtualhosts_virtualhost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortZoneServiceVirtualhostsVirtualhost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortZoneServiceVirtualhostsVirtualhost to import
  * @param importFromId The id of the existing DdosDstZonePortZoneServiceVirtualhostsVirtualhost that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortZoneServiceVirtualhostsVirtualhost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_virtualhosts_virtualhost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_zone_service_virtualhosts_virtualhost thunder_ddos_dst_zone_port_zone_service_virtualhosts_virtualhost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortZoneServiceVirtualhostsVirtualhostConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortZoneServiceVirtualhostsVirtualhostConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_virtualhosts_virtualhost',
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
    this._deny = config.deny;
    this._id = config.id;
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._servernameList = config.servernameList;
    this._servernameMatchAny = config.servernameMatchAny;
    this._servernameNoSni = config.servernameNoSni;
    this._sourceTracking = config.sourceTracking;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vhost = config.vhost;
    this._zoneName = config.zoneName;
    this._glidCfg.internalValue = config.glidCfg;
    this._levelList.internalValue = config.levelList;
    this._servername.internalValue = config.servername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfg) {
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
  private _levelList = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStruct[] | cdktf.IResolvable) {
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
  private _servername = new DdosDstZonePortZoneServiceVirtualhostsVirtualhostServernameList(this, "servername", false);
  public get servername() {
    return this._servername;
  }
  public putServername(value: DdosDstZonePortZoneServiceVirtualhostsVirtualhostServername[] | cdktf.IResolvable) {
    this._servername.internalValue = value;
  }
  public resetServername() {
    this._servername.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deny: cdktf.numberToTerraform(this._deny),
      id: cdktf.stringToTerraform(this._id),
      port_num: cdktf.stringToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      servername_list: cdktf.stringToTerraform(this._servernameList),
      servername_match_any: cdktf.numberToTerraform(this._servernameMatchAny),
      servername_no_sni: cdktf.numberToTerraform(this._servernameNoSni),
      source_tracking: cdktf.stringToTerraform(this._sourceTracking),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vhost: cdktf.stringToTerraform(this._vhost),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      glid_cfg: ddosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgToTerraform(this._glidCfg.internalValue),
      level_list: cdktf.listMapper(ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructToTerraform, true)(this._levelList.internalValue),
      servername: cdktf.listMapper(ddosDstZonePortZoneServiceVirtualhostsVirtualhostServernameToTerraform, true)(this._servername.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deny: {
        value: cdktf.numberToHclTerraform(this._deny),
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
      servername_list: {
        value: cdktf.stringToHclTerraform(this._servernameList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servername_match_any: {
        value: cdktf.numberToHclTerraform(this._servernameMatchAny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servername_no_sni: {
        value: cdktf.numberToHclTerraform(this._servernameNoSni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_tracking: {
        value: cdktf.stringToHclTerraform(this._sourceTracking),
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
      vhost: {
        value: cdktf.stringToHclTerraform(this._vhost),
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
      glid_cfg: {
        value: ddosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgToHclTerraform(this._glidCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostGlidCfgList",
      },
      level_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructToHclTerraform, true)(this._levelList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostLevelListStructList",
      },
      servername: {
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceVirtualhostsVirtualhostServernameToHclTerraform, true)(this._servername.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceVirtualhostsVirtualhostServernameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
