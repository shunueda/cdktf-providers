// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortRangeVirtualhostsVirtualhostLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#glid_action DdosDstZonePortRangeVirtualhostsVirtualhostLevel#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#id DdosDstZonePortRangeVirtualhostsVirtualhostLevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '0': Default policy level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#level_num DdosDstZonePortRangeVirtualhostsVirtualhostLevel#level_num}
  */
  readonly levelNum: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#port_range_end DdosDstZonePortRangeVirtualhostsVirtualhostLevel#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#port_range_start DdosDstZonePortRangeVirtualhostsVirtualhostLevel#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#protocol DdosDstZonePortRangeVirtualhostsVirtualhostLevel#protocol}
  */
  readonly protocol: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#src_default_glid DdosDstZonePortRangeVirtualhostsVirtualhostLevel#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#user_tag DdosDstZonePortRangeVirtualhostsVirtualhostLevel#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#uuid DdosDstZonePortRangeVirtualhostsVirtualhostLevel#uuid}
  */
  readonly uuid?: string;
  /**
  * Vhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#vhost DdosDstZonePortRangeVirtualhostsVirtualhostLevel#vhost}
  */
  readonly vhost: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#zone_name DdosDstZonePortRangeVirtualhostsVirtualhostLevel#zone_name}
  */
  readonly zoneName: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#zone_template DdosDstZonePortRangeVirtualhostsVirtualhostLevel#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplate;
}
export interface DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplate {
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#ssl_l4 DdosDstZonePortRangeVirtualhostsVirtualhostLevel#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#tcp DdosDstZonePortRangeVirtualhostsVirtualhostLevel#tcp}
  */
  readonly tcp?: string;
}

export function ddosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateToTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateOutputReference | DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
  }
}


export function ddosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateToHclTerraform(struct?: DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateOutputReference | DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplate): any {
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

export class DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplate | undefined {
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

  public set internalValue(value: DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplate | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_level}
*/
export class DdosDstZonePortRangeVirtualhostsVirtualhostLevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_level";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortRangeVirtualhostsVirtualhostLevel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortRangeVirtualhostsVirtualhostLevel to import
  * @param importFromId The id of the existing DdosDstZonePortRangeVirtualhostsVirtualhostLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortRangeVirtualhostsVirtualhostLevel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_level", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_virtualhosts_virtualhost_level thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_level} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortRangeVirtualhostsVirtualhostLevelConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortRangeVirtualhostsVirtualhostLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_range_virtualhosts_virtualhost_level',
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
    this._glidAction = config.glidAction;
    this._id = config.id;
    this._levelNum = config.levelNum;
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._protocol = config.protocol;
    this._srcDefaultGlid = config.srcDefaultGlid;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vhost = config.vhost;
    this._zoneName = config.zoneName;
    this._zoneTemplate.internalValue = config.zoneTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      glid_action: cdktf.stringToTerraform(this._glidAction),
      id: cdktf.stringToTerraform(this._id),
      level_num: cdktf.stringToTerraform(this._levelNum),
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_default_glid: cdktf.stringToTerraform(this._srcDefaultGlid),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vhost: cdktf.stringToTerraform(this._vhost),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      zone_template: ddosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateToTerraform(this._zoneTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      glid_action: {
        value: cdktf.stringToHclTerraform(this._glidAction),
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
      level_num: {
        value: cdktf.stringToHclTerraform(this._levelNum),
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
      src_default_glid: {
        value: cdktf.stringToHclTerraform(this._srcDefaultGlid),
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
      zone_template: {
        value: ddosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateToHclTerraform(this._zoneTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortRangeVirtualhostsVirtualhostLevelZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
