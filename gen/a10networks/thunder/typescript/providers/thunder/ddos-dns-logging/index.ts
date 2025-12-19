// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDnsLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable DNS Logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#disable DdosDnsLogging#disable}
  */
  readonly disable?: number;
  /**
  * 'both': Log DNS over tcp and udp; 'tcp': Log DNS over tcp; 'udp': Log DNS over udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#dns_logging_protocol DdosDnsLogging#dns_logging_protocol}
  */
  readonly dnsLoggingProtocol?: string;
  /**
  * 'all': Log DNS header and question section; 'header': Log DNS header information; 'question': Log DNS question section;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#dns_logging_request_section DdosDnsLogging#dns_logging_request_section}
  */
  readonly dnsLoggingRequestSection?: string;
  /**
  * 'query': DNS Query Logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#dns_logging_type DdosDnsLogging#dns_logging_type}
  */
  readonly dnsLoggingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#id DdosDnsLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNS Logging Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#name DdosDnsLogging#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#user_tag DdosDnsLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#uuid DdosDnsLogging#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging thunder_ddos_dns_logging}
*/
export class DdosDnsLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDnsLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDnsLogging to import
  * @param importFromId The id of the existing DdosDnsLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDnsLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_logging thunder_ddos_dns_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDnsLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDnsLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_logging',
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
    this._disable = config.disable;
    this._dnsLoggingProtocol = config.dnsLoggingProtocol;
    this._dnsLoggingRequestSection = config.dnsLoggingRequestSection;
    this._dnsLoggingType = config.dnsLoggingType;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_logging_protocol - computed: false, optional: true, required: false
  private _dnsLoggingProtocol?: string; 
  public get dnsLoggingProtocol() {
    return this.getStringAttribute('dns_logging_protocol');
  }
  public set dnsLoggingProtocol(value: string) {
    this._dnsLoggingProtocol = value;
  }
  public resetDnsLoggingProtocol() {
    this._dnsLoggingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingProtocolInput() {
    return this._dnsLoggingProtocol;
  }

  // dns_logging_request_section - computed: false, optional: true, required: false
  private _dnsLoggingRequestSection?: string; 
  public get dnsLoggingRequestSection() {
    return this.getStringAttribute('dns_logging_request_section');
  }
  public set dnsLoggingRequestSection(value: string) {
    this._dnsLoggingRequestSection = value;
  }
  public resetDnsLoggingRequestSection() {
    this._dnsLoggingRequestSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingRequestSectionInput() {
    return this._dnsLoggingRequestSection;
  }

  // dns_logging_type - computed: false, optional: true, required: false
  private _dnsLoggingType?: string; 
  public get dnsLoggingType() {
    return this.getStringAttribute('dns_logging_type');
  }
  public set dnsLoggingType(value: string) {
    this._dnsLoggingType = value;
  }
  public resetDnsLoggingType() {
    this._dnsLoggingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLoggingTypeInput() {
    return this._dnsLoggingType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      dns_logging_protocol: cdktf.stringToTerraform(this._dnsLoggingProtocol),
      dns_logging_request_section: cdktf.stringToTerraform(this._dnsLoggingRequestSection),
      dns_logging_type: cdktf.stringToTerraform(this._dnsLoggingType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_logging_protocol: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_logging_request_section: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingRequestSection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_logging_type: {
        value: cdktf.stringToHclTerraform(this._dnsLoggingType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
